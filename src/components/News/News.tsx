import React, { useState } from "react";
import { Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";

import { _fetchAllNews } from "../utils/getApiRequest";

const { Text, Title } = Typography;

const News = () => {
  const demoImage =
    "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";
  const { data: cryptoNews } = _fetchAllNews("bitcoin");

  // if(!cryptoNews) return 'Loading...'

  return (
    <Row gutter={[24, 24]}>
      {cryptoNews?.articles.map((news: any) => (
        <Col xs={24} sm={12} lg={8}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news.title}
                </Title>
                <img
                  style={{ maxWidth: "200px", maxHeight: "100px" }}
                  src={news?.urlToImage || demoImage}
                  alt="news"
                />
              </div>
              <p>
                {news.description > 100
                  ? `${news.description.substring(0, 100)} ...`
                  : news.description}
              </p>
              <div className="provider-container">
                {/* <Avatar
                  src={
                    news.provider[0]?.image?.thumbnail?.contentUrl || demoImage
                  }
                  alt="news"
                /> */}
                {/* <Text className="provider-name">{news.provider[0]?.name}</Text> */}
                {/* <Text>
                  {moment(news.datePublished).startOf("ss").fromNow()}
                </Text> */}
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
