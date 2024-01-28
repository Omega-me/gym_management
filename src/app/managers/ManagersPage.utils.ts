import { IPageProps } from '@/common/interfaces';
import { QueryClient } from '@tanstack/react-query';

export interface ManagersPageProps extends IPageProps {
  
}

export const prefetchQuery = async (props: ManagersPageProps): Promise<QueryClient> => {
  const queryClient = new QueryClient();
    
  return queryClient;
};