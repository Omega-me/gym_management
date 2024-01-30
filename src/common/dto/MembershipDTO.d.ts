import { ClientDTO, EmployeeDTO, GymDTO } from '.';

export interface MembershipDTO {
  id: number;
  id_gym: number;
  id_client: number;
  id_manager: number;
  id_personal_trainer: number;
  id_fitness_consultant: number;
  id_dietitian: number;
  id_exercise_physiologist: number;
  client: ClientDTO;
  gym: GymDTO;
  employee_membership_id_dietitianToemployee?: EmployeeDTO;
  employee_membership_id_exercise_physiologistToemployee?: EmployeeDTO;
  employee_membership_id_fitness_consultantToemployee?: EmployeeDTO;
  employee_membership_id_personal_trainerToemployee?: EmployeeDTO;
}

export interface CreateMembershipDTO extends Omit<MembershipDTO, 'id'> {}
export interface UpdateMembershipDTO extends Partial<MembershipDTO> {}
