'use client';
import { GymDTO } from '@/common/dto';
import { memo } from 'react';
import { Button, Flex, Spin, Table, TableColumnsType } from 'antd';
import s from './home.module.scss';
import { DeleteOutlined, EditOutlined, EyeOutlined, PlusSquareOutlined } from '@ant-design/icons';
import Link from 'next/link';

interface HomeProps {
  gyms: GymDTO[];
  gymsLoading: boolean;
  onAddNew: () => void;
}

const columns: TableColumnsType<any> = [
  {
    title: 'Id',
    dataIndex: 'id',
  },
  {
    title: 'Gym Name',
    dataIndex: 'name',
  },
  {
    title: 'Gym Address',
    dataIndex: 'address',
  },
  {
    title: 'Gym Phone',
    dataIndex: 'phone',
  },
  {
    title: 'Actions',
    width: 120,
    render(value, record, index) {
      return (
        <Flex gap="small" wrap="wrap">
          <Link href={`/gym/edit/${value.id}`}>
            <Button type="default" color="red" shape="default" icon={<EditOutlined />} size={'small'} />
          </Link>
          <Link href={`/gym/show/${value.id}`}>
            <Button type="default" shape="default" icon={<EyeOutlined />} size={'small'} />
          </Link>
          <Button danger type="default" shape="default" icon={<DeleteOutlined />} size={'small'} />
        </Flex>
      );
    },
  },
];

const Home: React.FC<HomeProps> = props => {
  return (
    <div className={s.home}>
      <div className={s.addBtn}>
        <Button onClick={props.onAddNew} type="default" icon={<PlusSquareOutlined />} size={'large'}>
          Add new gym
        </Button>
      </div>
      {props.gymsLoading ? (
        <div className={s.loading}>
          <Spin />
        </div>
      ) : (
        <div className={s.gym_table}>
          <Table columns={columns} dataSource={props.gyms} pagination={{ pageSize: 10 }} />
        </div>
      )}
    </div>
  );
};
export default memo(Home);
