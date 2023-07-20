import React from "react";
import { Container } from "../../components";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BoxTwoContainer = styled.div`
  h3 {
    font-size: 24px;
    font-weight: 600;
    line-height: 30px;
    margin-bottom: 70px;
  }

  a {
    color: #9c0e4e;
    font-size: 18px;
    text-decoration: underline;
  }

  .item {
    margin-bottom: 50px;
  }

  .ball {
    height: 60px;
    width: 60px;
    border-radius: 50%;
    background-color: #333333;
    margin-bottom: 45px;

    p {
      font-size: 24px;
      font-weight: 600;
      line-height: 30px;
    }
  }
  h4 {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: center;
    width: 60%;
  }
`;
const RenderBoxTwo = () => {
  return (
    <BoxTwoContainer>
      <h3 className="text-center bold title">How do i refer a friend</h3>
      <div className="flex flex-column">
        <div className="item flex-1 flex flex-column flex-center text-center">
          <div className="ball flex flex-center">
            <p>1</p>
          </div>
          <h4>Sign up and send your first money transfer</h4>
        </div>
        <div className="item flex-1 flex flex-column flex-center text-center">
          <div className="ball flex flex-center">
            <p>2</p>
          </div>
          <h4>
            Visit the “refer a friend” page, and share your referral code with
            your friends
          </h4>
        </div>
        <div className="item flex-1 flex flex-column flex-center text-center">
          <div className="ball flex flex-center">
            <p>3</p>
          </div>
          <h4>
            After they have signed up and successfully sent 50 USD using your
            code, we’ll email you both a voucher for 20 USD!
          </h4>
        </div>

        <div className="item flex-1 flex flex-column flex-center text-center">
          <h4>
            T&C Apply. Visit <Link to="#">terms and conditions</Link> for
            details
          </h4>
        </div>
      </div>
    </BoxTwoContainer>
  );
};

const InviteFriend = () => {
  return (
    <Container
      title="20 USD for you"
      titleTwo="and your friends"
      subtitle="For every friend you invite who sends at least 150 USD you get 50 USD each."
    >
      <RenderBoxTwo />
    </Container>
  );
};

export default InviteFriend;
