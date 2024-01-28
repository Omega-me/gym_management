'use client';
import { GymDTO } from '@/common/dto';
import { eApiRoutes, eHttpMethod } from '@/common/enums';
import { Home } from '@/containers/components';
import { useGymMutation, useGymQuery } from '@/hooks/useGym';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const HomeModule = () => {
  const queryClient = useQueryClient();
  const [id, setId] = useState<number | null>(null);
  const router = useRouter();
  const { data: gyms, isLoading: gymsLoading } = useGymQuery<Array<GymDTO>>();

  const { mutate: deleteGym } = useGymMutation({
    httpConfig: {
      methode: eHttpMethod.DELETE,
    },
    queryConfig: {
      queryParam: id?.toString(),
      onSettled() {
        console.log('settled');
        queryClient.invalidateQueries({
          queryKey: [eApiRoutes.GYMS],
        });
      },
    },
  });

  const onDeleteGym = (id: number) => {
    setId(id);
    if (id) {
      deleteGym({});
    }
  };

  const onAddNew = () => {
    router.push('/gym/create');
  };

  return <Home onDeleteGym={onDeleteGym} data={gyms} isLoading={gymsLoading} onAddNew={onAddNew} />;
};

export default HomeModule;
