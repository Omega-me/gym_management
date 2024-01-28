import { IPageProps } from '@/common/interfaces';
import { QueryClient } from '@tanstack/react-query';

export interface IdPageProps extends IPageProps {
  params: { id: string };
}

export const prefetchQuery = async (props: IdPageProps): Promise<QueryClient> => {
  const queryClient = new QueryClient();

  return queryClient;
};
