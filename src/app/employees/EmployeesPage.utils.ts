import { IPageProps } from '@/common/interfaces';
import { QueryClient } from '@tanstack/react-query';

export interface EmployeesPageProps extends IPageProps {
  
}

export const prefetchQuery = async (props: EmployeesPageProps): Promise<QueryClient> => {
  const queryClient = new QueryClient();
    
  return queryClient;
};