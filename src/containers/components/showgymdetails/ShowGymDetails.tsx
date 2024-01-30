'use client';
import { Button, Col, Collapse, CollapseProps, Divider, Flex, Row, Space } from 'antd';
import { memo } from 'react';
import { GymClientDTO, GymDTO } from '@/common/dto';
import { Input } from 'antd';
import s from './showgymdetails.module.scss';
import { TableContainer } from '..';
import { eApiRoutes } from '@/common/enums';
import { EditOutlined, EyeOutlined } from '@ant-design/icons';
import Link from 'next/link';

interface ShowGymDetailsProps {
  gym: GymDTO;
  isLoading: boolean;
  gymClients: GymClientDTO[];
  gymCLientsLoading: boolean;
}

const ShowGymDetails: React.FC<ShowGymDetailsProps> = props => {
  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: 'Clients',
      children: (
        <TableContainer
          columns={[
            {
              title: 'Id',
              render(value) {
                return <p>{value?.client?.id}</p>;
              },
            },
            {
              title: 'Username',
              render(value) {
                return (
                  <p>
                    {value?.client?.first_name} {value?.client?.last_name}
                  </p>
                );
              },
            },
            {
              title: 'Gender',
              render(value) {
                return <p>{value?.client?.gender}</p>;
              },
            },
            {
              title: 'Phone number',
              render(value) {
                return <p>{value?.client?.phone}</p>;
              },
            },
            {
              title: 'Actions',
              render(value) {
                return (
                  <Flex gap="small" wrap="wrap">
                    <Link href={`${eApiRoutes.CLIENTS}/edit/${value?.client?.id}`}>
                      <Button type="default" color="red" shape="default" icon={<EditOutlined />} size={'small'} />
                    </Link>
                    <Link href={`${eApiRoutes.CLIENTS}/show/${value?.client?.id}`}>
                      <Button type="default" shape="default" icon={<EyeOutlined />} size={'small'} />
                    </Link>
                  </Flex>
                );
              },
            },
          ]}
          isLoading={props.gymCLientsLoading}
          data={props.gymClients}
        />
      ),
    },
    {
      key: '2',
      label: 'Managers',
      children: (
        <TableContainer
          columns={[
            {
              title: 'Id',
              dataIndex: 'id',
            },
            {
              title: 'First Name',
              dataIndex: 'first_name',
            },
            {
              title: 'Last Name',
              dataIndex: 'last_name',
            },
            {
              title: 'Gender',
              dataIndex: 'gender',
            },
            {
              title: 'Email',
              dataIndex: 'email',
            },
            {
              title: 'Phone Number',
              dataIndex: 'phone',
            },
            {
              title: 'Actions',
              width: 120,
              render(value) {
                return (
                  <Flex gap="small" wrap="wrap">
                    <Link href={`${eApiRoutes.MANAGERS}/edit/${value.id}`}>
                      <Button type="default" color="red" shape="default" icon={<EditOutlined />} size={'small'} />
                    </Link>
                    <Link href={`${eApiRoutes.MANAGERS}/show/${value.id}`}>
                      <Button type="default" shape="default" icon={<EyeOutlined />} size={'small'} />
                    </Link>
                  </Flex>
                );
              },
            },
          ]}
          isLoading={props.isLoading}
          data={props.gym?.manager}
        />
      ),
    },
    {
      key: '3',
      label: 'Employees',
      children: (
        <TableContainer
          columns={[
            {
              title: 'Id',
              dataIndex: 'id',
            },
            {
              title: 'First Name',
              dataIndex: 'first_name',
            },
            {
              title: 'Last Name',
              dataIndex: 'last_name',
            },
            {
              title: 'Gender',
              dataIndex: 'gender',
            },
            {
              title: 'Position Type',
              dataIndex: 'position_type',
            },
            {
              title: 'Email',
              dataIndex: 'email',
            },
            {
              title: 'Phone Number',
              dataIndex: 'phone',
            },
            {
              title: 'Actions',
              render(value) {
                return (
                  <Flex gap="small" wrap="wrap">
                    <Link href={`${eApiRoutes.EMPLOYEES}/edit/${value.id}`}>
                      <Button type="default" color="red" shape="default" icon={<EditOutlined />} size={'small'} />
                    </Link>
                    <Link href={`${eApiRoutes.EMPLOYEES}/show/${value.id}`}>
                      <Button type="default" shape="default" icon={<EyeOutlined />} size={'small'} />
                    </Link>
                  </Flex>
                );
              },
            },
          ]}
          isLoading={props.isLoading}
          data={props.gym?.employee}
        />
      ),
    },
  ];
  return (
    <div className={s.showgymdetails}>
      <Divider orientation="left">Gym informations</Divider>
      <Row gutter={16}>
        <Col className="gutter-row" span={24} lg={6} md={12} sm={24}>
          <Input value={props.gym?.id.toString()} disabled />
        </Col>
        <Col className="gutter-row" span={24} lg={6} md={12} sm={24}>
          <Input value={props.gym?.name} disabled />
        </Col>
        <Col className="gutter-row" span={24} lg={6} md={12} sm={24}>
          <Input value={props.gym?.address} disabled />
        </Col>
        <Col className="gutter-row" span={24} lg={6} md={12} sm={24}>
          <Input value={props.gym?.phone} disabled />
        </Col>
      </Row>
      <Divider orientation="left">Other Gym informations</Divider>
      <Space direction="vertical" size="large" style={{ display: 'flex' }}>
        <Collapse items={items} defaultActiveKey={['1']} />
      </Space>
    </div>
  );
};
export default memo(ShowGymDetails);
