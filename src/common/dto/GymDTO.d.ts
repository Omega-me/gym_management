export interface GymDTO {
  id: number;
  name: string;
  address: string;
  phone: string;
  manager: any;
  employee: any;
  membership: any;
}

export interface CreateGymDTO extends Omit<GymDTO, 'id'> {}
export interface UpdateGymDTO extends Partial<GymDTO> {}
