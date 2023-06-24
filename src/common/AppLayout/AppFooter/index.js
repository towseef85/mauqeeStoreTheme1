import React from 'react'
import { Button, Col, Input, Layout, Row, Space, Typography } from 'antd'

const {Footer} = Layout

export default function AppFooter() {
  return (
    <Footer
        style={{background:'#222'}}
    >
         <Row justify="space-between">
            <Col span={4}>
                <Typography.Title level={2} className='t-white'>MauqeeStore</Typography.Title>
            </Col>
            <Col span={7}>
                <Typography.Title level={3} className='t-white mb-0'>Subscribe to our Newsletter</Typography.Title>
                <Typography.Text className=' mb-0'> Get all the latest information, Sales and Offers.</Typography.Text>
            </Col>
            <Col span={7}>
            <Space.Compact
      style={{
        width: '100%',
      }}
    >
      <Input placeholder='Enter Email Address' className='s-input'/>
      <Button style={{height:45}} type="primary">Submit</Button>
    </Space.Compact>
            </Col>
        </Row>  

    <Row justify="space-between">

        <Col span={6}>

        </Col>
        <Col span={6}>
            
        </Col>
        <Col span={6}>
            
        </Col>
        <Col span={6}>
            
        </Col>
    </Row>
    </Footer>
  )
}
