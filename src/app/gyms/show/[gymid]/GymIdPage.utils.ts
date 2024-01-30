import { IPageProps } from '@/common/interfaces';
import { QueryClient } from '@tanstack/react-query';

export interface GymIdPageProps extends IPageProps {
  params: { gymid: string };
}

export const prefetchQuery = async (props: GymIdPageProps): Promise<QueryClient> => {
  const queryClient = new QueryClient();
    
  return queryClient;
};