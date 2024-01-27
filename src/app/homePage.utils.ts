import { IPageProps } from '@/common/interfaces';
import { prefetchGyms } from '@/hooks/useGym';
import { QueryClient } from '@tanstack/react-query';

export interface HomePageProps extends IPageProps {}

export const prefetchQuery = async (props: HomePageProps): Promise<QueryClient> => {
  const queryClient = new QueryClient();

  return queryClient;
};
