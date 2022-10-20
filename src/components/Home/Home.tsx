import React from "react";
import { Typography } from "antd";
import { Link } from "react-router-dom";
import News from "../News/News";

const { Title } = Typography;

const Home = () => {
  return (
    <>
      <div className="home-heading-container">
      <Title level={2} className="heading">
        Latest Bitcoin News
      </Title>
      <News />
      </div>
    </>
  );
};

export default Home;
