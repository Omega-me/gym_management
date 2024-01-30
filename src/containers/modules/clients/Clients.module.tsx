'use client';
import { ClientDTO } from '@/common/dto';
import { eApiRoutes, eHttpMethod } from '@/common/enums';
import { Clients } from '@/containers/components';
import { useClientMutation, useClientQuery } from '@/hooks/useClient';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const ClientsModule = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const [id, setId] = useState<null | number>(null);
  const { data: clients, isLoading: clientLoading } = useClientQuery<ClientDTO[]>();

  const { mutate: remove } = useClientMutation({
    httpConfig: {
      methode: eHttpMethod.DELETE,
    },
    queryConfig: {
      queryParam: id?.toString(),
      onSettled() {
        queryClient.invalidateQueries({
          queryKey: [eApiRoutes.CLIENTS],
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
    router.push(`${eApiRoutes.CLIENTS}/create`);
  };
  return <Clients data={clients} isLoading={clientLoading} onAddNew={onAddNew} onDelete={onDelete} />;
};

export default ClientsModule;
