'use client';
import { GymDTO, ManagerDetailDTO, UpdateManagerDTO } from '@/common/dto';
import { eApiRoutes } from '@/common/enums';
import { ManagerDetails } from '@/containers/components';
import { useGymQuery } from '@/hooks/useGym';
import { useManagerMutation, useManagerQuery } from '@/hooks/useManager';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

interface ManagerDetailsModuleProps {
  id?: string;
  show?: boolean;
}

const ManagerDetailsModule: React.FC<ManagerDetailsModuleProps> = props => {
  const router = useRouter();

  const { data, isLoading } = useManagerQuery<ManagerDetailDTO>({
    queryConfig: {
      queryParam: props.id,
      enabled: !!props.id,
    },
  });

  const { data: gyms } = useGymQuery<GymDTO[]>({
    queryConfig: {
      enabled: !props.id,
    },
  });

  const { handleSubmit: handleSubmitUpdateGym, control, setValue } = useForm<ManagerDetailDTO>();

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

  const { mutate } = useManagerMutation<UpdateManagerDTO>({
    queryConfig: {
      queryParam: props.id,
      onSuccessFn(data) {
        if (!props.id) {
          router.push(`${eApiRoutes.MANAGERS}/edit/${(data as ManagerDetailDTO).id}`);
        }
      },
    },
  });

  const onSubmit = handleSubmitUpdateGym((data: UpdateManagerDTO) => {
    mutate(data);
  });

  const onAddNew = () => {
    router.push(`${eApiRoutes.EMPLOYEES}/create`);
  };

  return (
    <ManagerDetails
      data={data}
      isCreate={!props?.id}
      isLoading={isLoading}
      id={props.id}
      show={props.show}
      control={control}
      gyms={gyms}
      onSubmit={onSubmit}
      onAddNew={onAddNew}
    />
  );
};

export default ManagerDetailsModule;
