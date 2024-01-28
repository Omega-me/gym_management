'use client';
import { Button, Col, Collapse, CollapseProps, Divider, Row, Space } from 'antd';
import { memo } from 'react';
import { GymDTO } from '@/common/dto';
import { Input } from 'antd';
import s from './showgymdetails.module.scss';
import { TableContainer } from '..';

interface ShowGymDetailsProps {
  gym: GymDTO;
  isLoading: boolean;
}

const ShowGymDetails: React.FC<ShowGymDetailsProps> = props => {
  const items: CollapseProps['items'] = [
    {
      key: '1',
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
            // {
            //   title: 'Actions',
            //   width: 120,
            //   render(value, record, index) {
            //     return (
            //       <Flex gap="small" wrap="wrap">
            //         <Link href={`/gym/edit/${value.id}`}>
            //           <Button type="default" color="red" shape="default" icon={<EditOutlined />} size={'small'} />
            //         </Link>
            //         <Link href={`/gym/show/${value.id}`}>
            //           <Button type="default" shape="default" icon={<EyeOutlined />} size={'small'} />
            //         </Link>
            //         <Button danger type="default" shape="default" icon={<DeleteOutlined />} size={'small'} />
            //       </Flex>
            //     );
            //   },
            // },
          ]}
          isLoading={props.isLoading}
          data={props.gym?.manager}
        />
      ),
    },
    {
      key: '2',
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
            // {
            //   title: 'Actions',
            //   width: 120,
            //   render(value, record, index) {
            //     return (
            //       <Flex gap="small" wrap="wrap">
            //         <Link href={`/gym/edit/${value.id}`}>
            //           <Button type="default" color="red" shape="default" icon={<EditOutlined />} size={'small'} />
            //         </Link>
            //         <Link href={`/gym/show/${value.id}`}>
            //           <Button type="default" shape="default" icon={<EyeOutlined />} size={'small'} />
            //         </Link>
            //         <Button danger type="default" shape="default" icon={<DeleteOutlined />} size={'small'} />
            //       </Flex>
            //     );
            //   },
            // },
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
