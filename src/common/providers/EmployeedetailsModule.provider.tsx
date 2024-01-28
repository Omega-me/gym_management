'use client';
import { createContext, useContext } from 'react';

interface EmployeedetailsModuleInjectedProps {}
interface EmployeedetailsModuleProviderProps {
  children: React.ReactNode;
  value: EmployeedetailsModuleInjectedProps;
}

const EmployeedetailsModuleContext = createContext<EmployeedetailsModuleInjectedProps>({});

export const useEmployeedetailsModuleContext = () => {
  const ctx = useContext<EmployeedetailsModuleInjectedProps>(EmployeedetailsModuleContext);
  return ctx;
};

export const EmployeedetailsModuleProvider: React.FC<EmployeedetailsModuleProviderProps> = props => {
  return <EmployeedetailsModuleContext.Provider value={props.value}>{props.children}</EmployeedetailsModuleContext.Provider>;
};