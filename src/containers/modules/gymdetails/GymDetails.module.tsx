'use client';
import { GymDetails, ShowGymDetails } from '@/containers/components';

interface GymDetailsModuleProps {
  id?: string;
  show?: boolean;
}
const GymDetailsModule: React.FC<GymDetailsModuleProps> = props => {
  return <>{props.show ? <ShowGymDetails /> : <GymDetails />}</>;
};

export default GymDetailsModule;
