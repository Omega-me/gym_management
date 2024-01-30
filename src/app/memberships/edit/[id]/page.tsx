import { IdPageProps, prefetchQuery } from './ClientIdPage.utils';
import { MembershipDetailsModule } from '@/containers/modules';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

const IdPage = async (props: IdPageProps) => {
  const queryClient = await prefetchQuery(props);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MembershipDetailsModule id={props.params.id} />
    </HydrationBoundary>
  );
};

export default IdPage;
