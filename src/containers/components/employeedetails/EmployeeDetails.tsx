'use client';
import { Dispatch, SetStateAction, memo } from 'react';
import { Control, UseFormSetValue } from 'react-hook-form';
import { EmployeeDetailDTO, GymDTO, ManagerDTO } from '@/common/dto';
import { eApiRoutes } from '@/common/enums';
import { SaveOutlined } from '@ant-design/icons';
import { CollapseProps, Row, Col, Input, Button, Form, Divider, Space, Collapse } from 'antd';
import Link from 'next/link';
import { CustomInput, CustomSelect } from '..';
import { employee_gender, employee_position_type } from '@prisma/client';

interface EmployeeDetailsProps {
  id?: string;
  show?: boolean;
  data?: EmployeeDetailDTO;
  isLoading?: boolean;
  isCreate?: boolean;
  control: Control<EmployeeDetailDTO, any>;
  gyms?: GymDTO[];
  managers?: ManagerDTO[];
  onSubmit: (e?: React.BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>;
  setValue: UseFormSetValue<EmployeeDetailDTO>;
  setIdGym: Dispatch<SetStateAction<number | null>>;
}

const EmployeeDetails: React.FC<EmployeeDetailsProps> = props => {
  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: 'Manager informations',
      children: (
        <Form>
          <Row gutter={16}>
            <Col className="gutter-row" span={24} lg={props.isCreate ? 8 : 6} md={12} sm={24}>
              <Form.Item>
                <label>
                  <b style={{ color: 'grey' }}>Id</b>
                </label>
                <Input disabled={true} value={props.data?.id_manager} />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={24} lg={props.isCreate ? 8 : 6} md={12} sm={24}>
              <Form.Item>
                <label>
                  <b style={{ color: 'grey' }}>First Name</b>
                </label>
                <Input disabled={true} value={props.data?.manager?.first_name} />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={24} lg={props.isCreate ? 8 : 6} md={12} sm={24}>
              <Form.Item>
                <label>
                  <b style={{ color: 'grey' }}>Last Name</b>
                </label>
                <Input disabled={true} value={props.data?.manager?.last_name} />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={24} lg={props.isCreate ? 8 : 6} md={12} sm={24}>
              <Form.Item>
                <label>
                  <b style={{ color: 'grey' }}>Email</b>
                </label>
                <Input disabled={true} value={props.data?.manager?.email} />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={24} lg={props.isCreate ? 8 : 6} md={12} sm={24}>
              <Form.Item>
                <label>
                  <b style={{ color: 'grey' }}>Phone</b>
                </label>
                <Input disabled={true} value={props.data?.manager?.phone} />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={24} lg={props.isCreate ? 8 : 6} md={12} sm={24}>
              <Form.Item>
                <label>
                  <b style={{ color: 'grey' }}>Gender</b>
                </label>
                <Input disabled={true} value={props.data?.manager?.gender} />
              </Form.Item>
            </Col>
          </Row>
          {!props.show && (
            <Row>
              <Link href={`${eApiRoutes.MANAGERS}/edit/${props.data?.id_gym}`}>
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
  ];
  return (
    <div>
      <Divider orientation="left">Employee informations</Divider>
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
              <CustomInput disabled={true} label="Gender" name="gender" control={props.control} type="text" />
            )}
          </Col>
          <Col className="gutter-row" span={24} lg={props.isCreate ? 8 : 6} md={12} sm={24}>
            {props.isCreate ? (
              <Form.Item>
                <CustomSelect
                  label="Position Type"
                  control={props.control}
                  name="position_type"
                  options={[
                    {
                      label: 'Personal Trainer',
                      value: employee_position_type.Personal_Trainer,
                    },
                    {
                      label: 'Front Desk',
                      value: employee_position_type.Front_Desk,
                    },
                    {
                      label: 'Fitness Consultant',
                      value: employee_position_type.Fitness_Consultant,
                    },
                    {
                      label: 'Dietitian',
                      value: employee_position_type.Dietitian,
                    },
                    {
                      label: 'Exercise Physiologist',
                      value: employee_position_type.Exercise_Physiologist,
                    },
                  ]}
                />
              </Form.Item>
            ) : (
              <CustomInput disabled={true} label="Position Type" name="position_type" control={props.control} type="text" />
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
            <>
              <Col className="gutter-row" span={24} lg={props.isCreate ? 8 : 6} md={12} sm={24}>
                <Form.Item>
                  <CustomSelect
                    label="Gym"
                    control={props.control}
                    name="id_gym"
                    onChange={async newValue => {
                      props.setValue('id_gym', newValue.value);
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
              <Col className="gutter-row" span={24} lg={props.isCreate ? 8 : 6} md={12} sm={24}>
                <Form.Item>
                  <CustomSelect
                    label="Manager"
                    control={props.control}
                    name="id_manager"
                    options={props?.managers?.map(manager => {
                      return {
                        label: `${manager?.first_name} ${manager?.last_name}`,
                        value: manager?.id,
                      };
                    })}
                  />
                </Form.Item>
              </Col>
            </>
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
          <Divider orientation="left">Other Employee informations</Divider>
          <Space direction="vertical" size="large" style={{ display: 'flex' }}>
            <Collapse items={items} defaultActiveKey={['1']} />
          </Space>
        </>
      )}
    </div>
  );
};

export default memo(EmployeeDetails);
