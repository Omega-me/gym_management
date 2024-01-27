'use client';
import { memo } from 'react';
import s from './gymid.module.scss';

interface GymIdProps {}

const GymDetails: React.FC<GymIdProps> = props => {
  return <div className={s.gymdetails}>GymId</div>;
};

export default memo(GymDetails);
