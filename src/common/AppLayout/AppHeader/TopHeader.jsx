import {
  Button,
  Col,
  Divider,
  Dropdown,
  Row,
  Space,
  Tag,
  Typography,
} from "antd";
import {
  ContactsOutlined,
  DownOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React from "react";

export default function TopHeader() {
  const items = [
    {
      key: "1",
      label: "Eng",
    },
    {
      key: "2",
      label: "Arb",
    },
  ];
  return (
    <div
      style={{
        borderBottom: "1px solid #ddd",
        lineHeight: "1.6",
        padding: "3px 0px",
      }}
    >
      <Col span={22} offset={1}>
        <Row>
          <Col span={12}>
            <p style={{ padding: "4px 0px", margin: 0 }}>
              Welcome to Riode store message or remove it!
            </p>
          </Col>
          <Col span={12}>
            <Space style={{ float: "right" }}>
              <Dropdown
                menu={{ items, selectable: true, defaultSelectedKeys: ["1"] }}
              >
                <Space
                  direction="horizontal"
                  style={{ width: "100%", justifyContent: "end" }}
                >
                  Lang
                  <DownOutlined />
                </Space>
              </Dropdown>
              <Divider type="vertical" />
              <Button type="text" icon={<ContactsOutlined />}>
                Need Help
              </Button>
              <Button type="text" icon={<UserOutlined />}>
                Sign In/ Register
              </Button>
            </Space>
          </Col>
        </Row>
      </Col>
    </div>
  );
}
