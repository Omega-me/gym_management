import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { HomePageProps, prefetchQuery } from './homePage.utils';
import { HomeModule } from '@/containers/modules';

export default async function Home(props: HomePageProps) {
  const queryClient = await prefetchQuery(props);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <HomeModule />
    </HydrationBoundary>
  );
}
