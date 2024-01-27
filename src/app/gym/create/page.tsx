import { CreatePageProps, prefetchQuery } from './CreatePage.utils';
import { GymDetailsModule } from '@/containers/modules';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

const CreatePage = async (props: CreatePageProps) => {
  const queryClient = await prefetchQuery(props);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <GymDetailsModule />
    </HydrationBoundary>
  );
};

export default CreatePage;
