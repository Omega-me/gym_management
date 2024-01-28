import { ClientsPageProps, prefetchQuery } from './ClientsPage.utils';
import { ClientsModule } from '@/containers/modules';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

const ClientsPage = async (props: ClientsPageProps) => {
  const queryClient = await prefetchQuery(props);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ClientsModule />
    </HydrationBoundary>
  );
};

export default ClientsPage;