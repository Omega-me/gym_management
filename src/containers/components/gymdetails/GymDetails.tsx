'use client';
import { BaseSyntheticEvent, memo } from 'react';
import { CollapseProps, Divider, Row, Col, Space, Collapse, Button, Flex, Form } from 'antd';
import { AddModal, CustomInput, TableContainer } from '..';
import { ClientDTO, CreateGymClientDTO, GymClientDTO, GymDTO } from '@/common/dto';
import { EditOutlined, EyeOutlined, SaveOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { Control } from 'react-hook-form';
import { eApiRoutes } from '@/common/enums';
import { UseMutateFunction } from '@tanstack/react-query';

interface GymIdProps {
  gym: GymDTO;
  isLoading: boolean;
  isCreate: boolean;
  onAddNew: (type: 'Employee' | 'Manager') => void;
  control: Control<GymDTO, any>;
  onSubmit: (e?: BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>;
  clients: ClientDTO[];
  createGymClientRelation: UseMutateFunction<any, any, CreateGymClientDTO, any>;
  gymClients: GymClientDTO[];
  gymCLientsLoading: boolean;
}

const GymDetails: React.FC<GymIdProps> = props => {
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
          showAddNew={true}
          onAddNew={() => props.onAddNew('Manager')}
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
          showAddNew={true}
          onAddNew={() => props.onAddNew('Employee')}
        />
      ),
    },
  ];
  return (
    <div>
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
        </Row>
        <Row gutter={16}>
          <Col>
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
          </Col>
          <Col>
            <AddModal
              id={Number(props.gym?.id)}
              isGym={true}
              createGymClientRelation={props.createGymClientRelation}
              buttonLable="Add client to the gym"
              label="Add a client to the gym"
              options={props?.clients?.map(client => {
                return {
                  label: `${client?.first_name} ${client?.last_name}`,
                  value: client?.id,
                };
              })}
            />
          </Col>
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
