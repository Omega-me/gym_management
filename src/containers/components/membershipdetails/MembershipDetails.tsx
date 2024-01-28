'use client';
import { memo } from 'react';
import s from './membershipdetails.module.scss';
  
interface MembershipDetailsProps {}
  
const MembershipDetails: React.FC<MembershipDetailsProps> = props => {
  return <div className={s.membershipdetails}>MembershipDetails</div>;
};
  
export default memo(MembershipDetails);