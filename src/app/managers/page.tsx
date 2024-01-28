import { ManagersPageProps, prefetchQuery } from './ManagersPage.utils';
import { ManagersModule } from '@/containers/modules';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

const ManagersPage = async (props: ManagersPageProps) => {
  const queryClient = await prefetchQuery(props);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ManagersModule />
    </HydrationBoundary>
  );
};

export default ManagersPage;