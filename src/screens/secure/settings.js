import React from "react";
import { Button, Container, Input, Select } from "../../components";
import styled from "styled-components";
import { images } from "../../constant/images";
import { GoChevronRight } from "react-icons/go";

const Inner = styled.div`
  padding: 40px;
  padding-top: 130px;
  transition: all linear 0.15s;
  h4 {
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 50px;
    color: #ffffff;
  }

  .box {
    margin-top: 40px;
  }
  .left {
    width: 350px;
  }

  .item {
    height: 80px;
    border-radius: 8px;
    padding: 15px;
    border: 1px solid #333;
    cursor: pointer;
  }

  .active {
    border: 1px solid #9c0e4e;
  }
  .name {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    margin-bottom: 5px;
  }

  .id {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #333333;
  }
  .img-container {
    height: 22px;
    width: 23px;
    margin-left: 10px;
  }

  .right {
    width: 50%;
    margin-left: 100px;
  }

  .btn {
    width: 300px;
    margin: 70px auto;
  }

  .min-h {
    height: 700px;
  }
`;

const renderOne = () => {
  const gender = [
    { id: 1, value: "Male", label: "Male" },
    { id: 2, value: "Female", label: "Female" },
  ];
  return (
    <div>
      <div className="mb-20">
        <Input label="First name" value="Abolaji" />
      </div>
      <div className="mb-20">
        <Input label="Last name" value="Dev AJ" />
      </div>
      <div className="mb-20">
        <Input label="Email" value="abolaji@toprate.com" />
      </div>
      <div className="mb-20">
        <Input label="Mobile number" icon phone value="09054472953" />
      </div>
      <div className="mb-20">
        <Select label="Gender" data={gender} />
      </div>
      <div className="mb-20">
        <Input label="City" value="Lekki" />
      </div>
      <div className="mb-20">
        <Input label="Zip/Postal code" />
      </div>
      <div className="mb-20">
        <Input label="State" />
      </div>
      <div className="mb-20">
        <Input label="Country of residence" icon />
      </div>
      <div className="btn">
        <Button title="Save" />
      </div>
    </div>
  );
};

const renderTwo = () => {
  return (
    <div className="min-h">
      <div className="mb-30">
        <Input
          label="Current password"
          icon
          right
          placeholder="•••••••••••"
          type="password"
        />
      </div>
      <div className="mb-30">
        <Input
          label="New password"
          icon
          right
          placeholder="•••••••••••"
          type="password"
        />
      </div>
      <div className="mb-30">
        <Input
          label="Confirm new password"
          icon
          right
          placeholder="•••••••••••"
          type="password"
        />
      </div>
      <div className="btn">
        <Button title="Save" />
      </div>
    </div>
  );
};

const renderThree = () => {
  return (
    <div className="min-h">
      <div className="mb-30">
        <Input label="Verify your KYC Account" placeholder="Issuer Name" />
      </div>
      <div className="btn">
        <Button title="Save" />
      </div>
    </div>
  );
};

const Settings = () => {
  const [active, setActive] = React.useState(1);
  const activeClassName = "flex align-center item active mb-20";
  const nonActiveClassName = "flex align-center item mb-20";
  return (
    <Container user>
      <Inner className="bg-black">
        <h4>Settings</h4>
        <div className="flex">
          <div className="left box">
            <div
              onClick={() => setActive(1)}
              className={active === 1 ? activeClassName : nonActiveClassName}
            >
              <div className="flex-1">
                <div className="flex align-center">
                  <p className="name">Dev AJ</p>
                  <div className="img-container">
                    <img src={images.verify} alt="verify" />
                  </div>
                </div>
                <div>
                  <p className="id">User ID: TRT566908819</p>
                </div>
              </div>
              <div>
                <GoChevronRight />
              </div>
            </div>
            <div
              onClick={() => setActive(2)}
              className={active === 2 ? activeClassName : nonActiveClassName}
            >
              <div className="flex-1">
                <div className="flex align-center">
                  <p className="name">Password</p>
                </div>
                <div>
                  <p className="id">Protect yourself from intruders</p>
                </div>
              </div>
              <div>
                <GoChevronRight />
              </div>
            </div>
            <div
              onClick={() => setActive(3)}
              className={active === 3 ? activeClassName : nonActiveClassName}
            >
              <div className="flex-1">
                <div className="flex align-center">
                  <p className="name">KYC Verification</p>
                </div>
              </div>
              <div>
                <GoChevronRight />
              </div>
            </div>
          </div>
          <div className="right box">
            <div>
              {active === 1 && renderOne()}
              {active === 2 && renderTwo()}
              {active === 3 && renderThree()}
            </div>
          </div>
        </div>
      </Inner>
    </Container>
  );
};

export default Settings;
