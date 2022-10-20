import React from "react";
import Loader from '../Loader/Loader';

import { Typography, Row, Col, Card } from "antd";
import { _fetchAllNews } from "../utils/getApiRequest";

const { Text, Title } = Typography;

const News = () => {
  const demoImage =
    "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";
  const { data: cryptoNews, isLoading } = _fetchAllNews("bitcoin");
  console.log(cryptoNews)
  if(!cryptoNews?.articles) return <Loader />

  return (
    <Row gutter={[24, 24]}>
      {cryptoNews?.articles.map((news: any) => (
        <Col xs={24} sm={12} lg={8} key={news.id}>
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
                {news.description > 10
                  ? `${news.description.substring(0, 20)} ...`
                  : news.description}
              </p>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
