'use client';
import { memo } from 'react';
import s from './memberships.module.scss';
  
interface MembershipsProps {}
  
const Memberships: React.FC<MembershipsProps> = props => {
  return <div className={s.memberships}>Memberships</div>;
};
  
export default memo(Memberships);