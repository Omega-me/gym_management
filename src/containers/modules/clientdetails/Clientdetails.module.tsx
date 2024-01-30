'use client';
import { ClientDetailsDTO, ClientWithGymDTO, GymDTO } from '@/common/dto';
import { CreateGymClientDTO, GymClientDetailDTO } from '@/common/dto/GymClientDTO';
import { eApiRoutes } from '@/common/enums';
import { ClientDetails } from '@/containers/components';
import { useClientMutation, useClientQuery, useGymClientMutation, useGymQuery } from '@/hooks';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

interface ClientDetailsModuleProps {
  id?: string;
  show?: boolean;
}

const ClientDetailsModule: React.FC<ClientDetailsModuleProps> = props => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const [idGym, setIdGym] = useState<null | number>(null);

  const { data, isLoading } = useClientQuery<ClientDetailsDTO>({
    queryConfig: {
      queryParam: props.id,
    },
  });

  const { data: registerGyms, isLoading: loadingRegisteredGyms } = useClientQuery<ClientWithGymDTO[]>({
    queryConfig: {
      queryUrl: `${props.id}/gyms`,
      enabled: !!props.id,
    },
  });

  const { handleSubmit: handleSubmitUpdateGym, control, setValue } = useForm<ClientDetailsDTO>();

  useEffect(() => {
    if (data) {
      setValue('id', data?.id);
      setValue('first_name', data?.first_name);
      setValue('gender', data?.gender);
      setValue('last_name', data?.last_name);
      setValue('phone', data?.phone);
    }
  }, [data, setValue]);

  const { mutate: createGymClientRelation } = useGymClientMutation<CreateGymClientDTO>({
    queryConfig: {
      onSuccessFn(data) {
        router.push(`${eApiRoutes.CLIENTS}/edit/${(data as GymClientDetailDTO).id_client}`);
        queryClient.invalidateQueries({
          queryKey: [eApiRoutes.CLIENTS],
        });
      },
    },
  });

  const { mutate } = useClientMutation<any>({
    queryConfig: {
      queryParam: props.id,
      onSuccessFn(data) {
        if (!props.id) {
          if (idGym) {
            createGymClientRelation({
              id_client: data.id,
              id_gym: idGym,
            });
          }
        }
      },
    },
  });

  const onSubmit = handleSubmitUpdateGym((data: ClientDetailsDTO) => {
    mutate(data);
  });

  const onAddNew = () => {
    router.push(`${eApiRoutes.MEMBERSHIPS}/create`);
  };

  const { data: gyms } = useGymQuery<GymDTO[]>();

  return (
    <ClientDetails
      data={data}
      isCreate={!props?.id}
      isLoading={isLoading}
      id={props.id}
      show={props.show}
      control={control}
      onSubmit={onSubmit}
      onAddNew={onAddNew}
      gyms={gyms}
      registerGyms={registerGyms}
      loadingRegisteredGyms={loadingRegisteredGyms}
      setIdGym={setIdGym}
      createGymClientRelation={createGymClientRelation}
    />
  );
};

export default ClientDetailsModule;
