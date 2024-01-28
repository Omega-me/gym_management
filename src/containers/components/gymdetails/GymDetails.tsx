'use client';
import { BaseSyntheticEvent, memo } from 'react';
import s from './gymdetails.module.scss';
import { CollapseProps, Divider, Row, Col, Space, Collapse, Button, Flex, Form } from 'antd';
import { CustomInput, TableContainer } from '..';
import { GymDTO } from '@/common/dto';
import { EditOutlined, EyeOutlined, DeleteOutlined, SaveOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { Control } from 'react-hook-form';

interface GymIdProps {
  gym: GymDTO;
  isLoading: boolean;
  isCreate: boolean;
  onAddNew: (type: 'Employee' | 'Manager') => void;
  control: Control<GymDTO, any>;
  onSubmit: (e?: BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>;
}

const GymDetails: React.FC<GymIdProps> = props => {
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
          ]}
          isLoading={props.isLoading}
          data={props.gym?.manager}
          showAddNew={true}
          onAddNew={props.onAddNew}
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
          ]}
          isLoading={props.isLoading}
          data={props.gym?.employee}
          showAddNew={true}
          onAddNew={props.onAddNew}
        />
      ),
    },
  ];
  return (
    <div className={s.gymdetails}>
      <Divider orientation="left">Gym informations</Divider>
      <Form>
        <Row gutter={16}>
          {!props.isCreate && (
            <Col className="gutter-row" span={24} lg={6} md={12} sm={24}>
              <Form.Item>
                <CustomInput label="Gym id" disabled={true} name="id" control={props.control} type="text" />
              </Form.Item>
            </Col>
          )}
          <Col className="gutter-row" span={24} lg={props.isCreate ? 8 : 6} md={12} sm={24}>
            <Form.Item>
              <CustomInput rules={{ required: 'Gym name is required' }} label="Gym Name" name="name" control={props.control} type="text" />
            </Form.Item>
          </Col>
          <Col className="gutter-row" span={24} lg={props.isCreate ? 8 : 6} md={12} sm={24}>
            <Form.Item>
              <CustomInput rules={{ required: 'Gym address is required' }} label="Gym Address" name="address" control={props.control} type="text" />
            </Form.Item>
          </Col>
          <Col className="gutter-row" span={24} lg={props.isCreate ? 8 : 6} md={12} sm={24}>
            <Form.Item>
              <CustomInput rules={{ required: 'Gym phone is required' }} label="Gym Phone" name="phone" control={props.control} type="text" />
            </Form.Item>
          </Col>
          <div className={s.addBtn}>
            <Button
              onClick={() => {
                props.onSubmit();
              }}
              htmlType="submit"
              type="default"
              icon={<SaveOutlined />}
              size={'large'}>
              Save
            </Button>
          </div>
        </Row>
      </Form>
      {!props.isCreate && (
        <>
          <Divider orientation="left">Other Gym informations</Divider>
          <Space direction="vertical" size="large" style={{ display: 'flex' }}>
            <Collapse items={items} defaultActiveKey={['1']} />
          </Space>
        </>
      )}
    </div>
  );
};

export default memo(GymDetails);
