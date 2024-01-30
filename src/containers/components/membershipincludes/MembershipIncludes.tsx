'use client';
import { EmployeeDTO } from '@/common/dto';
import { eApiRoutes } from '@/common/enums';
import { SaveOutlined } from '@ant-design/icons';
import { Form, Row, Col, Input, Button } from 'antd';
import Link from 'next/link';
import { memo } from 'react';

interface MembershipIncludesProps {
  show?: boolean;
  isCreate?: boolean;
  data: EmployeeDTO | undefined;
  id?: number;
  type: 'Personal Trainer' | 'Front Desk' | 'Fitness Consultant' | 'Dietitian' | 'Exercise Physiologist';
}

const MembershipIncludes: React.FC<MembershipIncludesProps> = props => {
  return (
    <>
      {props.data ? (
        <Form>
          <Row gutter={16}>
            <Col className="gutter-row" span={24} lg={props.isCreate ? 8 : 6} md={12} sm={24}>
              <Form.Item>
                <label>
                  <b style={{ color: 'grey' }}>Id</b>
                </label>
                <Input disabled={true} value={props.data?.id} />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={24} lg={props.isCreate ? 8 : 6} md={12} sm={24}>
              <Form.Item>
                <label>
                  <b style={{ color: 'grey' }}>First Name</b>
                </label>
                <Input disabled={true} value={props.data?.first_name} />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={24} lg={props.isCreate ? 8 : 6} md={12} sm={24}>
              <Form.Item>
                <label>
                  <b style={{ color: 'grey' }}>Last Name</b>
                </label>
                <Input disabled={true} value={props.data?.last_name} />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={24} lg={props.isCreate ? 8 : 6} md={12} sm={24}>
              <Form.Item>
                <label>
                  <b style={{ color: 'grey' }}>Phone</b>
                </label>
                <Input disabled={true} value={props.data?.phone} />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={24} lg={props.isCreate ? 8 : 6} md={12} sm={24}>
              <Form.Item>
                <label>
                  <b style={{ color: 'grey' }}>Gender</b>
                </label>
                <Input disabled={true} value={props.data?.gender} />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={24} lg={props.isCreate ? 8 : 6} md={12} sm={24}>
              <Form.Item>
                <label>
                  <b style={{ color: 'grey' }}>Email</b>
                </label>
                <Input disabled={true} value={props.data?.email} />
              </Form.Item>
            </Col>
          </Row>
          {!props.show && (
            <Row>
              <Link href={`${eApiRoutes.EMPLOYEES}/edit/${props.id}`}>
                <Button type="default" icon={<SaveOutlined />} size={'large'}>
                  Edit
                </Button>
              </Link>
            </Row>
          )}
        </Form>
      ) : (
        <div>This membership does not include {props.type}</div>
      )}
    </>
  );
};
export default memo(MembershipIncludes);
