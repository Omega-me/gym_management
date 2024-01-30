import { ClientDTO, GymDTO } from '.';

export interface GymClientDTO {
  id: number;
  id_gym: number;
  id_client: number;
}

export interface CreateGymClientDTO extends Omit<GymClientDTO, 'id'> {}
export interface UpdateGymClientDTO extends Partial<GymClientDTO> {}

export interface GymClientDetailDTO {
  id: number;
  id_gym: number;
  id_client: number;
  client: ClientDTO;
  gym: GymDTO;
}
