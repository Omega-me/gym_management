'use client';
import { memo } from 'react';
import s from './employeedetails.module.scss';
  
interface EmployeeDetailsProps {}
  
const EmployeeDetails: React.FC<EmployeeDetailsProps> = props => {
  return <div className={s.employeedetails}>EmployeeDetails</div>;
};
  
export default memo(EmployeeDetails);