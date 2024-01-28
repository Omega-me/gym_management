import { IdPageProps, prefetchQuery } from './ClientIdPage.utils';
import { EmployeeDetailsModule } from '@/containers/modules';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

const IdPage = async (props: IdPageProps) => {
  const queryClient = await prefetchQuery(props);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <EmployeeDetailsModule />
    </HydrationBoundary>
  );
};

export default IdPage;
