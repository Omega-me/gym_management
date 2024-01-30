import { EmployeeDTO, GymDTO } from '.';

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

export interface ManagerDetailDTO {
  id: number;
  first_name: string;
  last_name: string;
  gender: string;
  email: string;
  phone: string;
  id_gym: number;
  gym: GymDTO;
  employee: EmployeeDTO[];
}
