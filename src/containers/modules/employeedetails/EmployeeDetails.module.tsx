'use client';
import { EmployeeDetailDTO, GymDTO, ManagerDTO, UpdateEmployeeDTO } from '@/common/dto';
import { eApiRoutes } from '@/common/enums';
import { EmployeeDetails } from '@/containers/components';
import { useEmplyeeMutation, useEmplyeeQuery, useGymQuery, useManagerQuery } from '@/hooks';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

interface EmployeeDetailsModuleProps {
  id?: string;
  show?: boolean;
}

const EmployeeDetailsModule: React.FC<EmployeeDetailsModuleProps> = props => {
  const router = useRouter();
  const [idGym, setIdGym] = useState<number | null>(null);

  const { data, isLoading } = useEmplyeeQuery<EmployeeDetailDTO>({
    queryConfig: {
      queryParam: props.id,
      enabled: !!props.id,
    },
  });

  const { handleSubmit: handleSubmitUpdateGym, control, setValue } = useForm<EmployeeDetailDTO>();

  useEffect(() => {
    if (data) {
      setValue('id', data?.id);
      setValue('email', data?.email);
      setValue('first_name', data?.first_name);
      setValue('gender', data?.gender);
      setValue('last_name', data?.last_name);
      setValue('phone', data?.phone);
    }
  }, [data, setValue]);

  const { mutate } = useEmplyeeMutation<UpdateEmployeeDTO>({
    queryConfig: {
      queryParam: props.id,
      onSuccessFn(data) {
        if (!props.id) {
          router.push(`${eApiRoutes.EMPLOYEES}/edit/${(data as EmployeeDetailDTO).id}`);
        }
      },
    },
  });

  const onSubmit = handleSubmitUpdateGym((data: UpdateEmployeeDTO) => {
    mutate(data);
  });

  const { data: gyms } = useGymQuery<GymDTO[]>({
    queryConfig: {
      enabled: !props.id,
    },
  });

  const { data: managers } = useGymQuery<ManagerDTO[]>({
    queryConfig: {
      enabled: !!idGym,
      queryUrl: `/${idGym}/managers`,
    },
  });

  return (
    <EmployeeDetails
      gyms={gyms}
      managers={managers}
      data={data}
      isCreate={!props?.id}
      isLoading={isLoading}
      id={props.id}
      show={props.show}
      control={control}
      onSubmit={onSubmit}
      setValue={setValue}
      setIdGym={setIdGym}
    />
  );
};

export default EmployeeDetailsModule;
