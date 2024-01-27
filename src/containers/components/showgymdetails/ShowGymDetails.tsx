'use client';
import { memo } from 'react';
import s from './showgymdetails.module.scss';

interface ShowGymDetailsProps {}

const ShowGymDetails: React.FC<ShowGymDetailsProps> = props => {
  return <div className={s.showgymdetails}>ShowGymDetails</div>;
};
export default memo(ShowGymDetails);
