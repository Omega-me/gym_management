import { IPageProps } from '@/common/interfaces';
import { QueryClient } from '@tanstack/react-query';

export interface MembershipsPageProps extends IPageProps {
  
}

export const prefetchQuery = async (props: MembershipsPageProps): Promise<QueryClient> => {
  const queryClient = new QueryClient();
    
  return queryClient;
};