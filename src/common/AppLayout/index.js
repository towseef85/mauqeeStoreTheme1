import { Layout } from 'antd';
import React from 'react'
import { Outlet } from 'react-router-dom'
import AppHeader from './AppHeader';
import './style.css'
import AppFooter from './AppFooter';
const { Content } = Layout;

export default function AppLayout() {
  return (
    <Layout style={{background:'#fff'}}>
      <AppHeader/>
      <Content>

      <Outlet/>
      </Content>
      <AppFooter/>
    </Layout>
   
  )
}
