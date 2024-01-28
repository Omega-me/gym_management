import { IPageProps } from '@/common/interfaces';
import { QueryClient } from '@tanstack/react-query';

export interface ClientsPageProps extends IPageProps {
  
}

export const prefetchQuery = async (props: ClientsPageProps): Promise<QueryClient> => {
  const queryClient = new QueryClient();
    
  return queryClient;
};