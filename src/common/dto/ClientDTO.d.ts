import { MembershipDTO } from '.';
import { GymClientDetailDTO } from './GymClientDTO';

export interface ClientDTO {
  id: number;
  first_name: string;
  last_name: string;
  gender: string;
  phone: any;
}

export interface CreateClientDTO extends Omit<ClientDTO, 'id'> {}
export interface UpdateClientDTO extends Partial<ClientDTO> {}

export interface ClientDetailsDTO {
  id: number;
  first_name: string;
  last_name: string;
  gender: string;
  phone: string;
  membership: Omit<MembershipDTO, 'client'>[];
}

export interface ClientWithGymDTO extends Omit<GymClientDetailDTO, 'client'> {}
