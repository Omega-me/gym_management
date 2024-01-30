'use client';
import { MembershipDTO } from '@/common/dto';
import { eHttpMethod, eApiRoutes } from '@/common/enums';
import { Memberships } from '@/containers/components';
import { useMembershipMutation, useMembershipQuery } from '@/hooks/useMembership';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const MembershipsModule = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const [id, setId] = useState<null | number>(null);
  const { data: memberships, isLoading: membershipLoading } = useMembershipQuery<MembershipDTO[]>();

  const { mutate: remove } = useMembershipMutation({
    httpConfig: {
      methode: eHttpMethod.DELETE,
    },
    queryConfig: {
      queryParam: id?.toString(),
      onSettled() {
        queryClient.invalidateQueries({
          queryKey: [eApiRoutes.MEMBERSHIPS],
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
    router.push(`${eApiRoutes.MEMBERSHIPS}/create`);
  };
  return <Memberships data={memberships} isLoading={membershipLoading} onAddNew={onAddNew} onDelete={onDelete} />;
};

export default MembershipsModule;
