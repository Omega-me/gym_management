import { EmployeeDTO, ManagerDTO, MembershipDTO } from '.';
import { GymClientDetailDTO } from './GymClientDTO';

export interface GymDTO {
  id: number;
  name: string;
  address: string;
  phone: string;
  manager: ManagerDTO[];
  employee: EmployeeDTO[];
  membership: MembershipDTO[];
}

export interface CreateGymDTO extends Omit<GymDTO, 'id'> {}
export interface UpdateGymDTO extends Partial<GymDTO> {}

export interface GymWithClientDTO extends Omit<GymClientDetailDTO, 'gym'> {}
