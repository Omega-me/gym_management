'use client';
import { ClientDTO, CreateMembershipDTO, EmployeeDTO, GymDTO, ManagerDTO, MembershipDTO, UpdateMembershipDTO } from '@/common/dto';
import { eApiRoutes } from '@/common/enums';
import { MembershipDetails } from '@/containers/components';
import { useClientQuery, useGymQuery, useManagerQuery, useMembershipMutation, useMembershipQuery } from '@/hooks';
import { employee_position_type } from '@prisma/client';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

interface MembershipDetailsModuleProps {
  id?: string;
  show?: boolean;
}

const MembershipDetailsModule: React.FC<MembershipDetailsModuleProps> = props => {
  const [gymId, setIdGym] = useState<null | number>(null);
  const [managerId, setManagerId] = useState<null | number>(null);
  const queryClient = useQueryClient();
  const router = useRouter();

  const { data, isLoading } = useMembershipQuery<MembershipDTO>({
    queryConfig: {
      queryParam: props.id,
    },
  });

  const { handleSubmit: handleSubmit, control, setValue } = useForm<MembershipDTO>();

  useEffect(() => {
    if (data) {
      setValue('id', data?.id);
      setValue('id_client', data?.id_client);
      setValue('id_gym', data?.id_gym);
      setValue('id_manager', data?.id_manager);
      setValue('id_dietitian', data?.id_dietitian);
      setValue('id_exercise_physiologist', data?.id_exercise_physiologist);
      setValue('id_fitness_consultant', data?.id_fitness_consultant);
      setValue('id_personal_trainer', data?.id_personal_trainer);
    }
  }, [data, setValue]);

  const { mutate } = useMembershipMutation<CreateMembershipDTO>({
    queryConfig: {
      queryParam: props.id,
      onSuccessFn(data) {
        if (!props.id) {
          router.push(`${eApiRoutes.MEMBERSHIPS}/edit/${(data as MembershipDTO).id}`);
        }
      },
    },
  });

  const onSubmit = handleSubmit((data: CreateMembershipDTO) => {
    mutate(data);
  });

  const onAddNew = () => {
    router.push(`${eApiRoutes.MEMBERSHIPS}/create`);
  };

  const { data: manager, isLoading: managerLoading } = useMembershipQuery<ManagerDTO>({
    queryConfig: {
      queryUrl: `${data?.id_manager}/manager`,
      enabled: !!data?.id_manager,
    },
  });

  const { data: gyms } = useGymQuery<GymDTO[]>();
  const { data: gymManagers } = useGymQuery<ManagerDTO[]>({
    queryConfig: {
      queryUrl: `${gymId}/managers`,
      enabled: !!gymId,
    },
  });
  const { data: gymEmployees } = useGymQuery<EmployeeDTO[]>({
    queryConfig: {
      queryUrl: `${gymId}/managers/${managerId}/employees`,
      enabled: !!gymId && !!managerId,
    },
  });

  const { data: clients } = useClientQuery<ClientDTO[]>();

  return (
    <MembershipDetails
      id={props?.id}
      isCreate={!props?.id}
      show={props.show}
      data={data}
      isLoading={isLoading}
      manager={manager}
      gyms={gyms}
      gymManagers={gymManagers}
      clients={clients}
      managerLoading={managerLoading}
      control={control}
      gymEmployees={gymEmployees}
      setManagerId={setManagerId}
      setValue={setValue}
      setIdGym={setIdGym}
      onSubmit={onSubmit}
      onAddNew={onAddNew}
    />
  );
};

export default MembershipDetailsModule;
