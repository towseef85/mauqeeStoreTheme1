import { Carousel, Col } from "antd";
import React from "react";
import slide1 from "../../../assets/images/slide1.jpg";
import slide2 from "../../../assets/images/slide2.jpg";

export default function HeroSlider() {
  return (
    <Carousel autoplay className="banner">
      <div
        className="banner-slider"
        style={{ background: "rgb(70, 178, 232)" }}
      >
        <img src={slide1} />
        <Col span={22} offset={1}>
          <div className="content">
            <div className="subtitle">
              <h3>Buy 2 Get</h3>
            </div>
          </div>
        </Col>
      </div>
      <div className="banner-slider">
        <img src={slide2} />
      </div>
    </Carousel>
  );
}
