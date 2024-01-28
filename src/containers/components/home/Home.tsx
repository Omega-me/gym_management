'use client';
import { TableContainer } from '..';
import { EditOutlined, EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import { Flex, Button } from 'antd';
import Link from 'next/link';

interface HomeProps {
  data: any;
  isLoading: boolean;
  onAddNew: () => void;
  onDeleteGym: (id: number) => void;
}

const Home: React.FC<HomeProps> = props => {
  return (
    <TableContainer
      columns={[
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
          render(value) {
            return (
              <Flex gap="small" wrap="wrap">
                <Link href={`/gym/edit/${value.id}`}>
                  <Button type="default" color="red" shape="default" icon={<EditOutlined />} size={'small'} />
                </Link>
                <Link href={`/gym/show/${value.id}`}>
                  <Button type="default" shape="default" icon={<EyeOutlined />} size={'small'} />
                </Link>
                <Button onClick={() => props.onDeleteGym(value.id)} danger type="default" shape="default" icon={<DeleteOutlined />} size={'small'} />
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
  );
};

export default Home;
