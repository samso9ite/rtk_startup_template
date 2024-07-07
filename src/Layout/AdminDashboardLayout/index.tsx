import React, { ReactNode, useState } from 'react';

import { Button, Layout, Menu, theme } from 'antd';
import Sidebar from '../../Components/Admin/SideNav';
// import Topbar from '../../Components/Dashboard/Topbar';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
  } from '@ant-design/icons';


const { Header, Sider, Content } = Layout;

type Props = {
    children: ReactNode;
};

const AdminDashboardLayout: React.FC<Props> = ({children}) => {
    console.log("This ran");
    
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
    <Sidebar collapsed={collapsed} />
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer, margin:"1.5%" }}>
          {/* <Topbar /> */}
        </Header>
        <Content
          style={{
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminDashboardLayout;