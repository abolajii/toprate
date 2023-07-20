import React from "react";
import { Button, Container, Input, Select } from "../../components";
import styled from "styled-components";
import { images } from "../../constant/images";

const Underline = styled.div`
  background: #333333;
  height: 1px;
  margin-top: 15px;
`;

const Inner = styled.div`
  padding: 40px;
  padding-top: 130px;

  .tab {
    color: white;
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    color: #656363;
    margin-right: 40px;
  }

  .active {
    color: #fff;
  }

  .box-2 {
    height: 617px;
    width: 387px;
    border: 1px solid #333333;
    border-radius: 10px;
    margin-left: 90px;

    h5 {
      font-weight: 500;
      font-size: 16px;
      line-height: 150%;
      color: #656363;
    }

    .img-container {
      width: 39px;
      height: 24px;
    }

    h4 {
      font-weight: 500;
      font-size: 20px;
      line-height: 150%;
      color: #ffffff;
    }

    .text {
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #656363;
    }

    .sm {
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      color: #ffffff;
    }
  }

  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    color: #656363;
  }

  .gap-15 {
    gap: 30px;
  }

  .btn-container {
    width: 278px;
    height: 60px;
  }
`;

const renderOne = () => {
  return (
    <div>
      <div className="mt-30">
        <Input label="First name" placeholder="First name (as on ID card)" />
      </div>
      <div className="mt-30">
        <Input label="Last name" placeholder="Last name (as on ID card)" />
      </div>
      <div className="mt-30">
        <Input label="Address" placeholder="Recipients’ Address" />
      </div>
      <div className="mt-30">
        <Input
          label="Email (optional)"
          placeholder="Recipients’ email address"
        />
      </div>
      <div className="mt-30">
        <Select label="Bank name" />
      </div>
      <div className="mt-30">
        <Input
          label="Account number"
          placeholder="Recipients’ account number"
        />
      </div>
    </div>
  );
};

const renderTwo = () => {
  return (
    <div>
      <div className="mt-30">
        <Select label="Recipient" />
      </div>
      <div className="mt-30">
        <Input label="First name" placeholder="John" />
      </div>
      <div className="mt-30">
        <Input label="Last name" placeholder="Doe" />
      </div>
      <div className="mt-30">
        <Input label="Address" placeholder="7, Kanu Opeyemi Crescent, Lekki" />
      </div>
      <div className="mt-30">
        <Input
          label="Email (optional)"
          placeholder="johnfitzgeraldjoe@example.com"
        />
      </div>
      <div className="mt-30">
        <Select label="Bank name" />
      </div>
      <div className="mt-30">
        <Input label="Account number" placeholder="0199188181" />
      </div>
    </div>
  );
};

const MyRecipients = () => {
  const [active, setActive] = React.useState(1);

  return (
    <Container user>
      <Inner className="bg-black">
        <div className="mb-30 flex">
          <div className="flex-1">
            <div className="flex">
              <button
                onClick={() => setActive(1)}
                className={active === 1 ? "tab active" : "tab"}
              >
                Add a new recipient
              </button>
              <button
                onClick={() => setActive(2)}
                className={active === 2 ? "tab active" : "tab"}
              >
                Existing recipients
              </button>
            </div>
            {active === 1 && renderOne()}
            {active === 2 && renderTwo()}
            <div className="mt-30">
              <p>
                We can only transfer payments to USD bank accounts in Nigeria.
                If the recipient does not have a USD bank account, the bank may
                automatically create one for them.
              </p>
            </div>
            <div className="mt-30">
              <p>
                By clicking ‘Continue’, you consent to pay the amount to a USD
                bank account created by the bank for the recipient. This USD
                bank account is associated with the original NGN bank account
                selected for the transfer.
              </p>
            </div>

            <div className="flex flex-space-between mt-30">
              <div className="btn-container">
                <Button secondary title="Back" />
              </div>
              <div className="btn-container">
                <Button />
              </div>
            </div>
          </div>
          <div className="flex-1 p-20">
            <div className="box-2 p-20">
              <h5>Recipient gets</h5>
              <div className="flex flex-space-between align-center mt-10">
                <h4>Bank deposit</h4>
                <div className="img-container flex flex-center">
                  <img src={images.recipient} alt="recipient" />
                </div>
              </div>
              <Underline />
              <div className="flex flex-space-between align-center mt-10 mb-20">
                <p className="text">You send</p>
                <h4 className="sm">200 EUR</h4>
              </div>
              <div className="flex flex-space-between align-center mt-10 mb-20">
                <p className="text">They get</p>
                <h4 className="sm">141,502 NGN</h4>
              </div>
              <div className="flex flex-space-between align-center mt-10 mb-20">
                <p className="text">Exchange rate</p>
                <h4 className="sm">1 EUR = 7005.51 NGN</h4>
              </div>
              <div className="flex flex-space-between align-center mt-10 mb-20">
                <p className="text">Estimated fee</p>
                <h4 className="sm">0.78 EUR</h4>
              </div>
              <Underline />
              <div className="flex flex-space-between align-center mt-10 mb-20">
                <p className="sm">Total to pay</p>
                <h4 className="sm">200.78 EUR</h4>
              </div>
              <div className="flex flex-space-between align-center mt-10 mb-20">
                <p className="text">They receive</p>
                <h4 className="sm">141,502 NGN</h4>
              </div>
              <Underline />
              <div className="flex flex-space-between align-center mt-30 m2-30">
                <p className="sm">Got a promo code?</p>
                <h4 className="sm">1</h4>
              </div>
              <div className="mt-10">
                <Input placeholder="Enter code" />
              </div>

              <div className="mt-30">
                <Button secondary title="Apply" />
              </div>
            </div>
          </div>
        </div>
      </Inner>
    </Container>
  );
};

export default MyRecipients;
