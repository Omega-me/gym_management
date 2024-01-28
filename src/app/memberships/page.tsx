import { MembershipsPageProps, prefetchQuery } from './MembershipsPage.utils';
import { MembershipsModule } from '@/containers/modules';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

const MembershipsPage = async (props: MembershipsPageProps) => {
  const queryClient = await prefetchQuery(props);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MembershipsModule />
    </HydrationBoundary>
  );
};

export default MembershipsPage;