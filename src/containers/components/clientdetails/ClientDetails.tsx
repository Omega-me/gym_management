'use client';
import { ClientDetailsDTO, ClientWithGymDTO, CreateGymClientDTO, GymDTO } from '@/common/dto';
import { EditOutlined, EyeOutlined, SaveOutlined } from '@ant-design/icons';
import { employee_gender } from '@prisma/client';
import { Button, Col, Collapse, CollapseProps, Divider, Flex, Form, Row, Space } from 'antd';
import { Dispatch, SetStateAction, memo } from 'react';
import { Control } from 'react-hook-form';
import { AddModal, CustomInput, CustomSelect, TableContainer } from '..';
import { eApiRoutes } from '@/common/enums';
import Link from 'next/link';
import { MutateOptions } from '@tanstack/react-query';

interface ClientDetailsProps {
  id?: string;
  show?: boolean;
  data?: ClientDetailsDTO;
  isLoading?: boolean;
  isCreate?: boolean;
  control: Control<ClientDetailsDTO, any>;
  gyms?: GymDTO[];
  registerGyms: ClientWithGymDTO[];
  loadingRegisteredGyms: boolean;
  onSubmit: (e?: React.BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>;
  onAddNew: () => void;
  setIdGym: Dispatch<SetStateAction<number | null>>;
  createGymClientRelation: (variables: CreateGymClientDTO, options?: MutateOptions<any, any, CreateGymClientDTO, any> | undefined) => void;
}

const ClientDetails: React.FC<ClientDetailsProps> = props => {
  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: 'Member of Gyms',
      children: (
        <TableContainer
          columns={[
            {
              title: 'Id',
              render(value) {
                return <p>{value?.gym?.id}</p>;
              },
            },
            {
              title: 'Gym name',
              render(value) {
                return <p>{value?.gym?.name}</p>;
              },
            },
            {
              title: 'Gym address',
              render(value) {
                return <p>{value?.gym?.address}</p>;
              },
            },
            {
              title: 'Gym phone',
              render(value) {
                return <p>{value?.gym?.phone}</p>;
              },
            },
            {
              title: 'Actions',
              render(value) {
                return (
                  <Flex gap="small" wrap="wrap">
                    <Link href={`${eApiRoutes.GYMS}/edit/${value?.gym?.id}`}>
                      <Button type="default" color="red" shape="default" icon={<EditOutlined />} size={'small'} />
                    </Link>
                    <Link href={`${eApiRoutes.GYMS}/show/${value?.gym?.id}`}>
                      <Button type="default" shape="default" icon={<EyeOutlined />} size={'small'} />
                    </Link>
                  </Flex>
                );
              },
            },
          ]}
          isLoading={props.loadingRegisteredGyms}
          data={props?.registerGyms}
        />
      ),
    },
    {
      key: '2',
      label: 'Memberships',
      children: (
        <TableContainer
          columns={[
            {
              title: 'Id',
              dataIndex: 'id',
            },
            {
              title: 'Gym name',
              render(value) {
                return <p>{value?.gym?.name}</p>;
              },
            },
            {
              title: 'Dietitian',
              render(value) {
                return (
                  <p>
                    {value?.employee_membership_id_dietitianToemployee?.first_name} {value?.employee_membership_id_dietitianToemployee?.last_name}
                  </p>
                );
              },
            },
            {
              title: 'Exercise Physiologist',
              render(value) {
                return (
                  <p>
                    {value?.employee_membership_id_exercise_physiologistToemployee?.first_name}{' '}
                    {value?.employee_membership_id_exercise_physiologistToemployee?.last_name}
                  </p>
                );
              },
            },
            {
              title: 'Fitness Consultant',
              render(value) {
                return (
                  <p>
                    {value?.employee_membership_id_fitness_consultantToemployee?.first_name}{' '}
                    {value?.employee_membership_id_fitness_consultantToemployee?.last_name}
                  </p>
                );
              },
            },
            {
              title: 'Personal Trainer',
              render(value) {
                return (
                  <p>
                    {value?.employee_membership_id_personal_trainerToemployee?.first_name} {value?.employee_membership_id_personal_trainerToemployee?.last_name}
                  </p>
                );
              },
            },
            {
              title: 'Actions',
              render(value) {
                return (
                  <Flex gap="small" wrap="wrap">
                    <Link href={`${eApiRoutes.MEMBERSHIPS}/edit/${value.id}`}>
                      <Button type="default" color="red" shape="default" icon={<EditOutlined />} size={'small'} />
                    </Link>
                    <Link href={`${eApiRoutes.MEMBERSHIPS}/show/${value.id}`}>
                      <Button type="default" shape="default" icon={<EyeOutlined />} size={'small'} />
                    </Link>
                  </Flex>
                );
              },
            },
          ]}
          isLoading={props.isLoading}
          data={props.data?.membership}
          showAddNew={true}
          onAddNew={() => props.onAddNew()}
        />
      ),
    },
  ];
  return (
    <div>
      <Divider orientation="left">Client informations</Divider>
      <Form>
        <Row gutter={16}>
          {!props.isCreate && (
            <Col className="gutter-row" span={24} lg={6} md={12} sm={24}>
              <Form.Item>
                <CustomInput label="Id" disabled={true} name="id" control={props.control} type="text" />
              </Form.Item>
            </Col>
          )}
          <Col className="gutter-row" span={24} lg={props.isCreate ? 8 : 6} md={12} sm={24}>
            <Form.Item>
              <CustomInput
                disabled={props.show}
                rules={{ required: 'First name is required' }}
                label="First Name"
                name="first_name"
                control={props.control}
                type="text"
              />
            </Form.Item>
          </Col>
          <Col className="gutter-row" span={24} lg={props.isCreate ? 8 : 6} md={12} sm={24}>
            <Form.Item>
              <CustomInput
                disabled={props.show}
                rules={{ required: 'Last name is required' }}
                label="Last Name"
                name="last_name"
                control={props.control}
                type="text"
              />
            </Form.Item>
          </Col>
          <Col className="gutter-row" span={24} lg={props.isCreate ? 8 : 6} md={12} sm={24}>
            <Form.Item>
              <CustomInput
                disabled={props.show}
                rules={{ required: 'Phone is required' }}
                label="Phone Number"
                name="phone"
                control={props.control}
                type="text"
              />
            </Form.Item>
          </Col>
          <Col className="gutter-row" span={24} lg={props.isCreate ? 8 : 6} md={12} sm={24}>
            {props.isCreate ? (
              <Form.Item>
                <CustomSelect
                  label="Gender"
                  control={props.control}
                  name="gender"
                  options={[
                    {
                      label: 'Male',
                      value: employee_gender.Male,
                    },
                    {
                      label: 'Female',
                      value: employee_gender.Female,
                    },
                  ]}
                />
              </Form.Item>
            ) : (
              <Form.Item>
                <CustomInput disabled={true} label="Gender" name="gender" control={props.control} type="text" />
              </Form.Item>
            )}
          </Col>
          {props.isCreate && (
            <Col className="gutter-row" span={24} lg={props.isCreate ? 8 : 6} md={12} sm={24}>
              <Form.Item>
                <CustomSelect
                  label="Gym"
                  control={props.control}
                  name="id_gym"
                  onChange={async newValue => {
                    props.setIdGym(newValue.value);
                  }}
                  options={props?.gyms?.map(gym => {
                    return {
                      label: gym?.name,
                      value: gym?.id,
                    };
                  })}
                />
              </Form.Item>
            </Col>
          )}
        </Row>
        {!props.show && (
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
                id={Number(props.id)}
                createGymClientRelation={props.createGymClientRelation}
                buttonLable="Add client to another gym"
                label="Make the client member of another gym too"
                options={props?.gyms?.map(gym => {
                  return {
                    label: gym?.name,
                    value: gym?.id,
                  };
                })}
              />
            </Col>
          </Row>
        )}
      </Form>
      {!props.isCreate && (
        <>
          <Divider orientation="left">Other Client informations</Divider>
          <Space direction="vertical" size="large" style={{ display: 'flex' }}>
            <Collapse items={items} defaultActiveKey={['1']} />
          </Space>
        </>
      )}
    </div>
  );
};

export default memo(ClientDetails);
