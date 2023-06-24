import { Col, Menu } from "antd";
import React, { useState } from "react";

const items = [
  {
    label: "Home",
    key: "home",
  },
  {
    label: "Men",
    key: "men",
    children: [
      {
        label: "Clothing",
        key: "clothing",
      },
      {
        type: "Footwear",
        label: "footwear",
      },
    ],
  },
  {
    label: "Home2",
    key: "home2",
  },
  {
    label: "Home3",
    key: "home3",
  },
];

export default function Navigation() {
  const [current, setCurrent] = useState("home");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Col span={22} offset={1}>
      <Menu
        className="h-nav"
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
    </Col>
  );
}
