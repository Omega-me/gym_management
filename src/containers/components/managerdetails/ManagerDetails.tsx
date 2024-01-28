'use client';
import { memo } from 'react';
import s from './managerdetails.module.scss';

interface ManagerDetailsProps {}

const ManagerDetails: React.FC<ManagerDetailsProps> = props => {
  return <div className={s.managerdetails}>ManagerDetails</div>;
};

export default memo(ManagerDetails);
