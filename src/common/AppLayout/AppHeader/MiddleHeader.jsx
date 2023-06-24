import { Col, Row, Input, Button, Space, Badge } from "antd";
import React from "react";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import logo from "../../../assets/images/logo.png";

export default function MiddleHeader() {
  const onSearch = (value) => {
    console.log(value);
  };
  return (
    <Col span={22} offset={1} className="m-header">
      <Row justify="space-between">
        <Col span={6}>
          <img style={{ width: "70%", height: "68%" }} src={logo} alt="" />
        </Col>
        <Col span={14}>
          <Input.Search
            className="searchtext"
            placeholder="input search text"
            onSearch={onSearch}
            size="large"
          />
        </Col>
        <Col span={4}>
          <Space>
            <Button
              icon={<HeartOutlined />}
              type="text"
              size="large"
              className="h-icons"
            />
            <Badge count={2} color="#26c">
              <Button
                icon={<ShoppingCartOutlined />}
                type="text"
                size="large"
                className="h-icons"
              />
            </Badge>
          </Space>
        </Col>
      </Row>
    </Col>
  );
}
