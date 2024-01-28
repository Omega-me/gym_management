'use client';
import { memo } from 'react';
import s from './clients.module.scss';
  
interface ClientsProps {}
  
const Clients: React.FC<ClientsProps> = props => {
  return <div className={s.clients}>Clients</div>;
};
  
export default memo(Clients);