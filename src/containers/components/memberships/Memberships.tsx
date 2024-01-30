'use client';
import { memo } from 'react';
import s from './memberships.module.scss';
import { eApiRoutes } from '@/common/enums';
import { EditOutlined, EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import { Flex, Button, Divider } from 'antd';
import Link from 'next/link';
import { TableContainer } from '..';
import { MembershipDTO } from '@/common/dto';

interface MembershipsProps {
  data: MembershipDTO[];
  isLoading: boolean;
  onDelete: (id: number) => void;
  onAddNew: () => void;
}

const Memberships: React.FC<MembershipsProps> = props => {
  return (
    <>
      <Divider orientation="left">Memberships</Divider>
      <TableContainer
        columns={[
          {
            title: 'Id',
            dataIndex: 'id',
          },
          {
            title: 'Gym',
            dataIndex: 'gym',
            render(value) {
              return <p>{value?.name}</p>;
            },
          },
          {
            title: 'Client',
            dataIndex: 'client',
            render(value) {
              return (
                <p>
                  {value?.first_name} {value?.last_name}
                </p>
              );
            },
          },
          {
            title: 'Dietan',
            dataIndex: 'employee_membership_id_dietitianToemployee',
            render(value) {
              return (
                <p>
                  {value?.first_name} {value?.last_name}
                </p>
              );
            },
          },
          {
            title: 'Exercise physiologist',
            dataIndex: 'employee_membership_id_exercise_physiologistToemployee',
            render(value) {
              return (
                <p>
                  {value?.first_name} {value?.last_name}
                </p>
              );
            },
          },
          {
            title: 'Fitness consultant',
            dataIndex: 'employee_membership_id_fitness_consultantToemployee',
            render(value) {
              return (
                <p>
                  {value?.first_name} {value?.last_name}
                </p>
              );
            },
          },
          {
            title: 'Personal trainer',
            dataIndex: 'employee_membership_id_personal_trainerToemployee',
            render(value) {
              return (
                <p>
                  {value?.first_name} {value?.last_name}
                </p>
              );
            },
          },
          {
            title: 'Actions',
            width: 120,
            render(value) {
              return (
                <Flex gap="small" wrap="wrap">
                  <Link href={`${eApiRoutes.MEMBERSHIPS}/edit/${value.id}`}>
                    <Button type="default" color="red" shape="default" icon={<EditOutlined />} size={'small'} />
                  </Link>
                  <Link href={`${eApiRoutes.MEMBERSHIPS}/show/${value.id}`}>
                    <Button type="default" shape="default" icon={<EyeOutlined />} size={'small'} />
                  </Link>
                  <Button onClick={() => props.onDelete(value.id)} danger type="default" shape="default" icon={<DeleteOutlined />} size={'small'} />
                </Flex>
              );
            },
          },
        ]}
        onAddNew={props.onAddNew}
        isLoading={props.isLoading}
        data={props.data}
        showAddNew={true}
      />
    </>
  );
};

export default memo(Memberships);
