'use client';
import { ManagerDTO } from '@/common/dto';
import { eApiRoutes, eHttpMethod } from '@/common/enums';
import { Managers } from '@/containers/components';
import { useManagerMutation, useManagerQuery } from '@/hooks/useManager';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const ManagersModule = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const [id, setId] = useState<null | number>(null);
  const { data: managers, isLoading: managerLoading } = useManagerQuery<ManagerDTO[]>();

  const { mutate: remove } = useManagerMutation({
    httpConfig: {
      methode: eHttpMethod.DELETE,
    },
    queryConfig: {
      queryParam: id?.toString(),
      onSettled() {
        queryClient.invalidateQueries({
          queryKey: [eApiRoutes.MANAGERS],
        });
      },
    },
  });

  const onDelete = (id: number) => {
    setId(id);
    if (id) {
      remove({});
    }
  };

  const onAddNew = () => {
    router.push(`${eApiRoutes.MANAGERS}/create`);
  };

  return <Managers onAddNew={onAddNew} onDelete={onDelete} data={managers} isLoading={managerLoading} />;
};

export default ManagersModule;
