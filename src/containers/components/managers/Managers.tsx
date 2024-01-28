'use client';
import { memo } from 'react';
import s from './managers.module.scss';
  
interface ManagersProps {}
  
const Managers: React.FC<ManagersProps> = props => {
  return <div className={s.managers}>Managers</div>;
};
  
export default memo(Managers);