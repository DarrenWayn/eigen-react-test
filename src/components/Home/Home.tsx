import React from "react";
import { Typography, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import News from "../News/News";

const { Title } = Typography;

const Home = () => {
  return (
    <>
      <Title level={2} className="heading">
        Latest Crypto News
      </Title>
      <div className="home-heading-container">
        <Title level={2} className="show-more">
          <Link to="/news">Show More</Link>
        </Title>
      </div>
      <News />
    </>
  );
};

export default Home;
