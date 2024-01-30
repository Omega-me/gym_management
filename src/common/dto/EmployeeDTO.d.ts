import { GymDTO, ManagerDTO } from '.';

export interface EmployeeDTO {
  id: number;
  first_name: string;
  last_name: string;
  gender: string;
  position_type;
  email: any;
  phone: any;
}

export interface CreateEmployeeDTO extends Omit<EmployeeDTO, 'id'> {}
export interface UpdateEmployeeDTO extends Partial<EmployeeDTO> {}

export interface EmployeeDetailDTO {
  id: number;
  first_name: string;
  last_name: string;
  gender: string;
  position_type: string;
  email: string;
  phone: string;
  id_gym: number;
  id_manager: number;
  gym: GymDTO;
  manager: ManagerDTO;
}
