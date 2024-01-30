'use client';
import { ClientDTO, CreateGymClientDTO, GymClientDTO, GymDTO, UpdateGymDTO } from '@/common/dto';
import { eApiRoutes } from '@/common/enums';
import { GymDetails, ShowGymDetails } from '@/containers/components';
import { useClientQuery, useGymClientMutation } from '@/hooks';
import { useGymMutation, useGymQuery } from '@/hooks/useGym';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

interface GymDetailsModuleProps {
  id?: string;
  show?: boolean;
}
const GymDetailsModule: React.FC<GymDetailsModuleProps> = props => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { handleSubmit: handleSubmitUpdateGym, control, setValue } = useForm<GymDTO>();

  const { data: gymData, isLoading: gymLoading } = useGymQuery<GymDTO>({
    queryConfig: {
      queryParam: props.id,
      enabled: !!props.id,
    },
  });

  useEffect(() => {
    if (gymData) {
      setValue('id', gymData?.id);
      setValue('address', gymData?.address);
      setValue('name', gymData?.name);
      setValue('phone', gymData?.phone);
    }
  }, [gymData, setValue]);

  const { mutate } = useGymMutation<UpdateGymDTO>({
    queryConfig: {
      queryParam: props.id,
      onSuccessFn(data) {
        if (!props.id) {
          router.push(`${eApiRoutes.GYMS}/edit/${(data as GymDTO).id}`);
        }
      },
    },
  });

  const onSubmitUpdate = handleSubmitUpdateGym((data: UpdateGymDTO) => {
    mutate(data);
  });

  const onAddNew = (type: 'Employee' | 'Manager') => {
    switch (type) {
      case 'Employee':
        router.push(`${eApiRoutes.EMPLOYEES}/create`);
        break;
      case 'Manager':
        router.push(`${eApiRoutes.MANAGERS}/create`);
        break;
      default:
        return;
    }
  };

  const { data: clients } = useClientQuery<ClientDTO[]>();

  const { mutate: createGymClientRelation } = useGymClientMutation<CreateGymClientDTO>({
    queryConfig: {
      onSuccessFn() {
        queryClient.invalidateQueries({
          queryKey: [eApiRoutes.GYMS],
        });
      },
    },
  });

  const { data: gymClients, isLoading: gymCLientsLoading } = useGymQuery<GymClientDTO[]>({
    queryConfig: {
      queryUrl: `${props?.id}/clients`,
    },
  });

  return (
    <>
      {props.show ? (
        <ShowGymDetails gymCLientsLoading={gymCLientsLoading} gymClients={gymClients} gym={gymData} isLoading={gymLoading} />
      ) : (
        <GymDetails
          clients={clients}
          isCreate={!props?.id}
          onSubmit={onSubmitUpdate}
          onAddNew={onAddNew}
          gym={gymData}
          isLoading={gymLoading}
          control={control}
          createGymClientRelation={createGymClientRelation}
          gymCLientsLoading={gymCLientsLoading}
          gymClients={gymClients}
        />
      )}
    </>
  );
};

export default GymDetailsModule;
