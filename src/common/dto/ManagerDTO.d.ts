export interface ManagerDTO {
  id: number;
  first_name: string;
  last_name: string;
  gender: string;
  email: any;
  phone: any;
}

export interface CreateManagerDTO extends Omit<ManagerDTO, 'id'> {}
export interface UpdateManagerDTO extends Partial<ManagerDTO> {}
