import React from "react";
import { Card } from "antd";
import { Row, Col, Typography } from "antd";
import foto from "../../assets/images/photo.jpg";
import StyledWrapper from "./styled";

const Home = () => {
  const { Meta } = Card;
  const { Title, Text } = Typography;
  return (
    <>
      <StyledWrapper>
        <Row justify="center">
          <Col span={15}>
            <Title>Welcome to Trainee Magazine home page!</Title>
          </Col>
        </Row>

        <Row justify="center">
          <Col span={6}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={foto} />}
            >
              <Meta
                title="Andrii Parayko"
                description="GitHub: AndreyParayko"
              />
            </Card>
          </Col>
          <Col span={6}>
            <Text>
              Here you can manage our magazines from fake api. This page is
              running on React. My name is Andrii Parayko, I am trainee
              Front-End developer at Agiliway.
            </Text>
          </Col>
        </Row>
      </StyledWrapper>
    </>
  );
};
export default Home;
