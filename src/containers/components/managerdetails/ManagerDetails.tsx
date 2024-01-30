'use client';
import { GymDTO, ManagerDetailDTO } from '@/common/dto';
import { EditOutlined, EyeOutlined, SaveOutlined } from '@ant-design/icons';
import { Divider, Form, Row, Col, Button, Space, Collapse, CollapseProps, Flex, Input } from 'antd';
import { CustomInput, CustomSelect, TableContainer } from '..';
import { Control } from 'react-hook-form';
import Link from 'next/link';
import { eApiRoutes } from '@/common/enums';
import { manager_gender } from '@prisma/client';

interface ManagerDetailsProps {
  id?: string;
  show?: boolean;
  data?: ManagerDetailDTO;
  isLoading?: boolean;
  isCreate?: boolean;
  control: Control<ManagerDetailDTO, any>;
  gyms?: GymDTO[];
  onSubmit: (e?: React.BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>;
  onAddNew: () => void;
}

const ManagerDetails: React.FC<ManagerDetailsProps> = props => {
  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: 'Gym informations',
      children: (
        <Form>
          <Row gutter={16}>
            <Col className="gutter-row" span={24} lg={props.isCreate ? 8 : 6} md={12} sm={24}>
              <Form.Item>
                <label>
                  <b style={{ color: 'grey' }}>Id</b>
                </label>
                <Input disabled={true} value={props.data?.id_gym} />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={24} lg={props.isCreate ? 8 : 6} md={12} sm={24}>
              <Form.Item>
                <label>
                  <b style={{ color: 'grey' }}>Name</b>
                </label>
                <Input disabled={true} value={props.data?.gym?.name} />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={24} lg={props.isCreate ? 8 : 6} md={12} sm={24}>
              <Form.Item>
                <label>
                  <b style={{ color: 'grey' }}>Address</b>
                </label>
                <Input disabled={true} value={props.data?.gym?.address} />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={24} lg={props.isCreate ? 8 : 6} md={12} sm={24}>
              <Form.Item>
                <label>
                  <b style={{ color: 'grey' }}>Phone</b>
                </label>
                <Input disabled={true} value={props.data?.gym?.phone} />
              </Form.Item>
            </Col>
          </Row>
          {!props.show && (
            <Row>
              <Link href={`${eApiRoutes.GYMS}/edit/${props.data?.id_gym}`}>
                <Button type="default" icon={<SaveOutlined />} size={'large'}>
                  Edit
                </Button>
              </Link>
            </Row>
          )}
        </Form>
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
          data={props.data?.employee}
          showAddNew={true}
          onAddNew={props.onAddNew}
        />
      ),
    },
  ];

  return (
    <div>
      <Divider orientation="left">Manager informations</Divider>
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
            {props.isCreate ? (
              <Form.Item>
                <CustomSelect
                  label="Gender"
                  control={props.control}
                  name="gender"
                  options={[
                    {
                      label: 'Male',
                      value: manager_gender.Male,
                    },
                    {
                      label: 'Female',
                      value: manager_gender.Female,
                    },
                  ]}
                />
              </Form.Item>
            ) : (
              <CustomInput disabled={true} label="Gender" name="gender" control={props.control} type="text" />
            )}
          </Col>
          <Col className="gutter-row" span={24} lg={props.isCreate ? 8 : 6} md={12} sm={24}>
            <Form.Item>
              <CustomInput disabled={props.show} rules={{ required: 'Email is required' }} label="Email" name="email" control={props.control} type="text" />
            </Form.Item>
          </Col>
          <Col className="gutter-row" span={24} lg={props.isCreate ? 8 : 6} md={12} sm={24}>
            <Form.Item>
              <CustomInput
                disabled={props.show}
                rules={{ required: 'Phone number is required' }}
                label="Phone Number"
                name="phone"
                control={props.control}
                type="text"
              />
            </Form.Item>
          </Col>
          {props.isCreate && (
            <Col className="gutter-row" span={24} lg={props.isCreate ? 8 : 6} md={12} sm={24}>
              <Form.Item>
                <CustomSelect
                  label="Gym"
                  control={props.control}
                  name="id_gym"
                  options={props.gyms?.map(gym => {
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
          <Row>
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
          </Row>
        )}
      </Form>
      {!props.isCreate && (
        <>
          <Divider orientation="left">Other Manager informations</Divider>
          <Space direction="vertical" size="large" style={{ display: 'flex' }}>
            <Collapse items={items} defaultActiveKey={['1']} />
          </Space>
        </>
      )}
    </div>
  );
};

export default ManagerDetails;
