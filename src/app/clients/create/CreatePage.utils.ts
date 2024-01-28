import { IPageProps } from '@/common/interfaces';
import { QueryClient } from '@tanstack/react-query';

export interface CreatePageProps extends IPageProps {}

export const prefetchQuery = async (props: CreatePageProps): Promise<QueryClient> => {
  const queryClient = new QueryClient();

  return queryClient;
};
