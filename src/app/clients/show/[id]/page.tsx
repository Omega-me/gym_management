import { ClientdetailsModule } from '@/containers/modules';
import { IdPageProps, prefetchQuery } from './ClientIdPage.utils';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

const IdPage = async (props: IdPageProps) => {
  const queryClient = await prefetchQuery(props);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ClientdetailsModule show={true} id={props.params.id} />
    </HydrationBoundary>
  );
};

export default IdPage;
