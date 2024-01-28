'use client';
import { memo } from 'react';
import s from './clientdetails.module.scss';

interface ClientDetailsProps {}

const ClientDetails: React.FC<ClientDetailsProps> = props => {
  return <div className={s.clientdetails}>Clientdetails</div>;
};

export default memo(ClientDetails);
