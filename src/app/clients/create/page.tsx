import { ClientdetailsModule } from '@/containers/modules';
import { CreatePageProps, prefetchQuery } from './CreatePage.utils';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

const CreatePage = async (props: CreatePageProps) => {
  const queryClient = await prefetchQuery(props);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ClientdetailsModule />
    </HydrationBoundary>
  );
};

export default CreatePage;
