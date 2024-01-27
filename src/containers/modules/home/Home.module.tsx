'use client';
import { GymDTO } from '@/common/dto';
import { Home } from '@/containers/components';
import { useGymsQuery } from '@/hooks/useGym';
import { useRouter } from 'next/navigation';

const HomeModule = () => {
  const router = useRouter();
  const { data: gyms, isLoading: gymsLoading } = useGymsQuery<Array<GymDTO>>();

  const onAddNew = () => {
    router.push('/gym/create');
  };

  return <Home onAddNew={onAddNew} gymsLoading={gymsLoading} gyms={gyms} />;
};

export default HomeModule;
