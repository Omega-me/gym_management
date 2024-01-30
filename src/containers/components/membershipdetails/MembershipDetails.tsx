'use client';
import { ClientDTO, EmployeeDTO, GymDTO, ManagerDTO, MembershipDTO } from '@/common/dto';
import { eApiRoutes } from '@/common/enums';
import { SaveOutlined } from '@ant-design/icons';
import { Button, Col, Collapse, CollapseProps, Divider, Form, Input, Row, Space } from 'antd';
import Link from 'next/link';
import { Control, UseFormSetValue } from 'react-hook-form';
import { CustomInput, CustomSelect, MembershipIncludes } from '..';
import { employee_position_type } from '@prisma/client';

interface MembershipDetailsProps {
  id?: string;
  show?: boolean;
  data?: MembershipDTO;
  isLoading?: boolean;
  manager: ManagerDTO;
  managerLoading: boolean;
  isCreate?: boolean;
  control: Control<MembershipDTO, any>;
  gyms: GymDTO[];
  gymManagers: ManagerDTO[];
  gymEmployees: EmployeeDTO[];
  clients: ClientDTO[];
  setManagerId: React.Dispatch<React.SetStateAction<number | null>>;
  setValue: UseFormSetValue<MembershipDTO>;
  setIdGym: React.Dispatch<React.SetStateAction<number | null>>;
  onAddNew: () => void;
  onSubmit: (e?: React.BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>;
}

const MembershipDetails: React.FC<MembershipDetailsProps> = props => {
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
                <Input disabled={true} value={props.data?.gym?.id} />
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
          <Row gutter={16}>
            <Col span={24}>
              {props.managerLoading ? (
                <div>Loading</div>
              ) : (
                <Form.Item>
                  <Space direction="vertical" size="large" style={{ display: 'flex' }}>
                    <Collapse
                      items={[
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
                                    <Input disabled={true} value={props?.manager?.id} />
                                  </Form.Item>
                                </Col>
                                <Col className="gutter-row" span={24} lg={props.isCreate ? 8 : 6} md={12} sm={24}>
                                  <Form.Item>
                                    <label>
                                      <b style={{ color: 'grey' }}>First Name</b>
                                    </label>
                                    <Input disabled={true} value={props?.manager?.first_name} />
                                  </Form.Item>
                                </Col>
                                <Col className="gutter-row" span={24} lg={props.isCreate ? 8 : 6} md={12} sm={24}>
                                  <Form.Item>
                                    <label>
                                      <b style={{ color: 'grey' }}>Last Name</b>
                                    </label>
                                    <Input disabled={true} value={props?.manager?.last_name} />
                                  </Form.Item>
                                </Col>
                                <Col className="gutter-row" span={24} lg={props.isCreate ? 8 : 6} md={12} sm={24}>
                                  <Form.Item>
                                    <label>
                                      <b style={{ color: 'grey' }}>Email</b>
                                    </label>
                                    <Input disabled={true} value={props?.manager?.email} />
                                  </Form.Item>
                                </Col>
                                <Col className="gutter-row" span={24} lg={props.isCreate ? 8 : 6} md={12} sm={24}>
                                  <Form.Item>
                                    <label>
                                      <b style={{ color: 'grey' }}>Phone</b>
                                    </label>
                                    <Input disabled={true} value={props?.manager?.phone} />
                                  </Form.Item>
                                </Col>
                                <Col className="gutter-row" span={24} lg={props.isCreate ? 8 : 6} md={12} sm={24}>
                                  <Form.Item>
                                    <label>
                                      <b style={{ color: 'grey' }}>Gender</b>
                                    </label>
                                    <Input disabled={true} value={props?.manager?.gender} />
                                  </Form.Item>
                                </Col>
                              </Row>
                              {!props.show && (
                                <Row>
                                  <Link href={`${eApiRoutes.MANAGERS}/edit/${props.data?.id_manager}`}>
                                    <Button type="default" icon={<SaveOutlined />} size={'large'}>
                                      Edit
                                    </Button>
                                  </Link>
                                </Row>
                              )}
                            </Form>
                          ),
                        },
                      ]}
                      defaultActiveKey={['1']}
                    />
                  </Space>
                </Form.Item>
              )}
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
      label: 'Client informations',
      children: (
        <Form>
          <Row gutter={16}>
            <Col className="gutter-row" span={24} lg={props.isCreate ? 8 : 6} md={12} sm={24}>
              <Form.Item>
                <label>
                  <b style={{ color: 'grey' }}>Id</b>
                </label>
                <Input disabled={true} value={props.data?.client?.id} />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={24} lg={props.isCreate ? 8 : 6} md={12} sm={24}>
              <Form.Item>
                <label>
                  <b style={{ color: 'grey' }}>First Name</b>
                </label>
                <Input disabled={true} value={props.data?.client?.first_name} />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={24} lg={props.isCreate ? 8 : 6} md={12} sm={24}>
              <Form.Item>
                <label>
                  <b style={{ color: 'grey' }}>Last Name</b>
                </label>
                <Input disabled={true} value={props.data?.client?.last_name} />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={24} lg={props.isCreate ? 8 : 6} md={12} sm={24}>
              <Form.Item>
                <label>
                  <b style={{ color: 'grey' }}>Phone</b>
                </label>
                <Input disabled={true} value={props.data?.client?.phone} />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={24} lg={props.isCreate ? 8 : 6} md={12} sm={24}>
              <Form.Item>
                <label>
                  <b style={{ color: 'grey' }}>Gender</b>
                </label>
                <Input disabled={true} value={props.data?.client?.gender} />
              </Form.Item>
            </Col>
          </Row>
          {!props.show && (
            <Row>
              <Link href={`${eApiRoutes.CLIENTS}/edit/${props.data?.id_client}`}>
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
      key: '3',
      label: `Dietitian informations`,
      children: (
        <MembershipIncludes
          data={props?.data?.employee_membership_id_dietitianToemployee}
          id={props?.data?.id_dietitian}
          type="Dietitian"
          isCreate={props.isCreate}
          show={props.show}
        />
      ),
    },
    {
      key: '4',
      label: `Exercise physiologist informations`,
      children: (
        <MembershipIncludes
          data={props?.data?.employee_membership_id_exercise_physiologistToemployee}
          id={props?.data?.id_exercise_physiologist}
          type="Exercise Physiologist"
          isCreate={props.isCreate}
          show={props.show}
        />
      ),
    },
    {
      key: '5',
      label: `Fitness consultant informations`,
      children: (
        <MembershipIncludes
          data={props?.data?.employee_membership_id_fitness_consultantToemployee}
          id={props?.data?.id_fitness_consultant}
          type="Fitness Consultant"
          isCreate={props.isCreate}
          show={props.show}
        />
      ),
    },
    {
      key: '6',
      label: `Personal trainer informations`,
      children: (
        <MembershipIncludes
          data={props?.data?.employee_membership_id_personal_trainerToemployee}
          id={props?.data?.id_personal_trainer}
          type="Personal Trainer"
          isCreate={props.isCreate}
          show={props.show}
        />
      ),
    },
  ];
  return (
    <div>
      <Divider orientation="left">Membership informations</Divider>
      <Form>
        <Row gutter={16}>
          {!props.isCreate && (
            <>
              <Col className="gutter-row" span={24} lg={6} md={12} sm={24}>
                <Form.Item>
                  <CustomInput label="Id" disabled={true} name="id" control={props.control} type="text" />
                </Form.Item>
              </Col>
              <Col className="gutter-row" span={24} lg={6} md={12} sm={24}>
                <Form.Item>
                  <CustomInput label="Gym Id" disabled={true} name="id_gym" control={props.control} type="text" />
                </Form.Item>
              </Col>
              <Col className="gutter-row" span={24} lg={6} md={12} sm={24}>
                <Form.Item>
                  <CustomInput label="Client Id" disabled={true} name="id_client" control={props.control} type="text" />
                </Form.Item>
              </Col>
              <Col className="gutter-row" span={24} lg={6} md={12} sm={24}>
                <Form.Item>
                  <CustomInput label="Manager Id" disabled={true} name="id_manager" control={props.control} type="text" />
                </Form.Item>
              </Col>
            </>
          )}
          {props.isCreate && (
            <>
              <Col className="gutter-row" span={24} lg={props.isCreate ? 8 : 6} md={12} sm={24}>
                <Form.Item>
                  <CustomSelect
                    label="Gym"
                    control={props.control}
                    name="id_gym"
                    onChange={newValue => {
                      props.setIdGym(newValue.value);
                      props.setValue('id_gym', newValue.value);
                      props.setManagerId(null);
                      props.setValue('id_manager', null as any);
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
                    onChange={newValue => {
                      props.setManagerId(newValue.value);
                      props.setValue('id_manager', newValue.value);
                    }}
                    options={props?.gymManagers?.map(manager => {
                      return {
                        label: `${manager?.first_name} ${manager?.last_name}`,
                        value: manager?.id,
                      };
                    })}
                  />
                </Form.Item>
              </Col>
              <Col className="gutter-row" span={24} lg={props.isCreate ? 8 : 6} md={12} sm={24}>
                <Form.Item>
                  <CustomSelect
                    label="Client"
                    control={props.control}
                    name="id_client"
                    options={props?.clients?.map(client => {
                      return {
                        label: `${client?.first_name} ${client?.last_name}`,
                        value: client?.id,
                      };
                    })}
                  />
                </Form.Item>
              </Col>
              <Col className="gutter-row" span={24} lg={props.isCreate ? 8 : 6} md={12} sm={24}>
                <Form.Item>
                  <CustomSelect
                    label="Dietitian"
                    control={props.control}
                    name="id_dietitian"
                    options={props?.gymEmployees
                      ?.filter(empl => empl.position_type === employee_position_type.Dietitian)
                      .map(empl => {
                        return {
                          label: `${empl?.first_name} ${empl?.last_name}`,
                          value: empl?.id,
                        };
                      })}
                  />
                </Form.Item>
              </Col>
              <Col className="gutter-row" span={24} lg={props.isCreate ? 8 : 6} md={12} sm={24}>
                <Form.Item>
                  <CustomSelect
                    label="Fitness Consultant"
                    control={props.control}
                    name="id_fitness_consultant"
                    options={props?.gymEmployees
                      ?.filter(empl => empl.position_type === employee_position_type.Fitness_Consultant)
                      .map(empl => {
                        return {
                          label: `${empl?.first_name} ${empl?.last_name}`,
                          value: empl?.id,
                        };
                      })}
                  />
                </Form.Item>
              </Col>
              <Col className="gutter-row" span={24} lg={props.isCreate ? 8 : 6} md={12} sm={24}>
                <Form.Item>
                  <CustomSelect
                    label="Exercise Physiologist"
                    control={props.control}
                    name="id_exercise_physiologist"
                    options={props?.gymEmployees
                      ?.filter(empl => empl.position_type === employee_position_type.Exercise_Physiologist)
                      .map(empl => {
                        return {
                          label: `${empl?.first_name} ${empl?.last_name}`,
                          value: empl?.id,
                        };
                      })}
                  />
                </Form.Item>
              </Col>
              <Col className="gutter-row" span={24} lg={props.isCreate ? 8 : 6} md={12} sm={24}>
                <Form.Item>
                  <CustomSelect
                    label="Personal Trainer"
                    control={props.control}
                    name="id_personal_trainer"
                    options={props?.gymEmployees
                      ?.filter(empl => empl.position_type === employee_position_type.Personal_Trainer)
                      .map(empl => {
                        return {
                          label: `${empl?.first_name} ${empl?.last_name}`,
                          value: empl?.id,
                        };
                      })}
                  />
                </Form.Item>
              </Col>
            </>
          )}
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
        </Row>
      </Form>
      {!props.isCreate && (
        <>
          <Divider orientation="left">Other Membership informations</Divider>
          <Space direction="vertical" size="large" style={{ display: 'flex' }}>
            <Collapse items={items} defaultActiveKey={['1']} />
          </Space>
        </>
      )}
    </div>
  );
};

export default MembershipDetails;
