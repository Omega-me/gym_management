import { GymIdPageProps, prefetchQuery } from './GymIdPage.utils';
import { GymDetailsModule } from '@/containers/modules';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

const GymIdPage = async (props: GymIdPageProps) => {
  const queryClient = await prefetchQuery(props);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <GymDetailsModule show={true} id={props.params.gymid} />
    </HydrationBoundary>
  );
};

export default GymIdPage;
