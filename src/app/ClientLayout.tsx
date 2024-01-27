'use client';
import React from 'react';
import { CalendarOutlined, HomeOutlined, MediumOutlined, SmileOutlined, TeamOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import s from './page.module.scss';
import { MenuItemType } from 'antd/es/menu/hooks/useItems';
import { useRouter } from 'next/navigation';
const { Header, Content, Footer, Sider } = Layout;

const ClientLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const router = useRouter();

  const items: MenuItemType[] = [
    {
      key: 'home',
      icon: <HomeOutlined />,
      label: 'Home',
      onClick: () => {
        router.push('/');
      },
    },
    {
      key: 'managers',
      icon: <MediumOutlined />,
      label: 'Managers',
      onClick: () => {
        console.log('clicked');
      },
    },
    {
      key: 'employees',
      icon: <TeamOutlined />,
      label: 'Employees',
      onClick: () => {
        console.log('clicked');
      },
    },
    {
      key: 'clients',
      icon: <SmileOutlined />,
      label: 'Clients',
      onClick: () => {
        console.log('clicked');
      },
    },
    {
      key: 'memberships',
      icon: <CalendarOutlined />,
      label: 'Memberships',
      onClick: () => {
        console.log('clicked');
      },
    },
  ];
  return (
    <Layout>
      <Sider className={s.sidebar} breakpoint="lg" collapsedWidth="0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={s.logo} src="/Gym.png" height={100} alt="" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['home']} items={items} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: 'white' }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: 'white',
              borderRadius: '10px',
            }}>
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>&copy; Gym Management {new Date().getFullYear()}</Footer>
      </Layout>
    </Layout>
  );
};

export default ClientLayout;
