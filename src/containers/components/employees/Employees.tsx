'use client';
import { memo } from 'react';
import { TableContainer } from '..';
import { EditOutlined, EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import { Flex, Button, Divider } from 'antd';
import Link from 'next/link';
import { EmployeeDTO } from '@/common/dto';
import { eApiRoutes } from '@/common/enums';

interface EmployeesProps {
  data: EmployeeDTO[];
  isLoading: boolean;
  onDelete: (id: number) => void;
  onAddNew: () => void;
}

const Employees: React.FC<EmployeesProps> = props => {
  return (
    <>
      <Divider orientation="left">Employees</Divider>
      <TableContainer
        columns={[
          {
            title: 'Id',
            dataIndex: 'id',
          },
          {
            title: 'Username',
            render(value) {
              return (
                <p>
                  {value.first_name} {value.last_name}
                </p>
              );
            },
          },
          {
            title: 'Gender',
            dataIndex: 'gender',
          },
          {
            title: 'Position type',
            dataIndex: 'position_type',
          },
          {
            title: 'Email',
            dataIndex: 'email',
          },
          {
            title: 'Phone number',
            dataIndex: 'phone',
          },
          {
            title: 'Actions',
            width: 120,
            render(value) {
              return (
                <Flex gap="small" wrap="wrap">
                  <Link href={`${eApiRoutes.EMPLOYEES}/edit/${value.id}`}>
                    <Button type="default" color="red" shape="default" icon={<EditOutlined />} size={'small'} />
                  </Link>
                  <Link href={`${eApiRoutes.EMPLOYEES}/show/${value.id}`}>
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

export default memo(Employees);
