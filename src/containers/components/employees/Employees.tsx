'use client';
import { memo } from 'react';
import s from './employees.module.scss';
  
interface EmployeesProps {}
  
const Employees: React.FC<EmployeesProps> = props => {
  return <div className={s.employees}>Employees</div>;
};
  
export default memo(Employees);