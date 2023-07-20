import { Button, Container, Input, Select } from "../../components";

import React from "react";
import { images } from "../../constant/images";
import styled from "styled-components";

const Tab = styled.div`
  width: 200px;
  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
  color: #656363;
  margin-top: 40px;

  &.active {
    color: #fff;
  }
`;

const BoxTwoContainer = styled.div`
  .exchange-container {
    width: 570px;
    height: 400px;
    .flex-item {
      width: 220px;
      margin-top: 30px;
    }
  }

  .swap {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #333333;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.15s ease;
  }

  .img-container {
    height: 21px;
    width: 23px;
  }

  .mt-50 {
    margin-top: 50px;
  }

  .rate {
    margin-top: 40px;
  }

  .rate-text {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #656363;
  }

  .rate-img {
    height: 20px;
    width: 20px;
    margin-left: 19px;
  }

  .rate-value {
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #656363;
  }

  .mt-10 {
    margin-top: 10px;
  }

  .mt-60 {
    margin-top: 60px;
  }

  .mt-100 {
    margin-top: 100px;
  }

  .btn-width {
    width: 235px;
  }
`;

const RenderBoxTwo = () => {
  const [switchTab, setSwitchTab] = React.useState(false);

  const data = [
    {
      id: 1,
      name: "Bank Transfer",
      value: "Bank Transfer",
    },
    {
      id: 2,
      name: "Wallet",
      value: "Wallet",
    },
  ];

  return (
    <BoxTwoContainer>
      <div className="flex">
        <Tab className="active">International</Tab>
        <Tab>Local</Tab>
      </div>
      <div className="exchange-container">
        <div
          className={
            switchTab
              ? "flex flex-column relative reverse"
              : "flex flex-column relative"
          }
        >
          <div className="flex flex-space-between">
            <div className="flex-item">
              <Input label="You send" />
            </div>
            <div className="flex-item">
              <Select label="I'd like to send" />
            </div>
          </div>
          <button
            onClick={() => setSwitchTab(!switchTab)}
            className="swap flex flex-center absolute"
          >
            <div className="img-container">
              <img src={images.swap} alt="swap" className="img-container" />
            </div>
          </button>
          <div className="flex flex-space-between">
            <div className="flex-item">
              <Input label="They'll get" />
            </div>
            <div className="flex-item">
              <Select label="And receive in" />
            </div>
          </div>
        </div>
        <div className="mt-50">
          <Select label="Delivery method" data={data} />
        </div>
        <div className="rate">
          <div className="flex flex-space-between mt-60">
            <div className="flex">
              <p className="rate-text">Rate</p>
              <div className="rate-img">
                <img src={images.question} alt="question" />
              </div>
            </div>
            <div className="rate-value">1 EUR = 705.51 NGN</div>
          </div>
          <div className="flex flex-space-between mt-10">
            <div className="flex">
              <p className="rate-text">Estimated fees</p>
              <div className="rate-img">
                <img src={images.question} alt="question" />
              </div>
            </div>
            <div className="rate-value">0.78 EUR</div>
          </div>
        </div>
        <div className="mt-100">
          <div className="btn-width mt-60">
            <Button />
          </div>
        </div>
      </div>
    </BoxTwoContainer>
  );
};

const Home = () => {
  return (
    <div>
      <Container>
        <RenderBoxTwo />
      </Container>
    </div>
  );
};
export default Home;
