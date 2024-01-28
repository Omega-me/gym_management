import { EmployeesPageProps, prefetchQuery } from './EmployeesPage.utils';
import { EmployeesModule } from '@/containers/modules';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

const EmployeesPage = async (props: EmployeesPageProps) => {
  const queryClient = await prefetchQuery(props);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <EmployeesModule />
    </HydrationBoundary>
  );
};

export default EmployeesPage;