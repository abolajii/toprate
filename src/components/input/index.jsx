import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

import React from "react";
import { images } from "../../constant/images";
import styled from "styled-components";

const Container = styled.div`
  // margin-bottom: 30px;
  label {
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;
    color: #656363;
    margin-bottom: 8px;
  }

  .error-text {
    color: red;
    font-size: 12px;
    margin-top: 5px;
  }
`;

const InputContainer = styled.div`
  height: 50px;
  border-bottom: 1px solid #333333;

  input {
    height: 100%;
    width: 100%;
    font-size: 20px;
    background: transparent;
    color: white;
  }

  .input-icon {
    background: blue;
  }

  .icon-text {
    font-size: 20px;
    font-weight: 500;
    line-height: 39px;
    margin-right: 10px;
  }

  &.error {
    border-bottom: 1px solid red;
  }
`;

const Icon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;

  .eye {
    cursor: pointer;
  }
  ${({ right }) =>
    right
      ? `
margin-right: 10px;
`
      : "margin-left: 10px;"};
`;

const Input = ({
  right,
  label,
  icon,
  phone,
  placeholder,
  type,
  value,
  error,
  onChange,
}) => {
  const [show, setShow] = React.useState(false);

  if (icon) {
    if (right) {
      return (
        <div>
          <Container className="flex flex-column">
            <label>{label}</label>
            <InputContainer
              className={
                error ? "flex align-center error" : "flex align-center"
              }
            >
              <input
                onChange={onChange}
                type={show ? "text" : type}
                value={value}
                placeholder={placeholder}
              />
              <div>
                <Icon
                  className="flex align-center justify-center"
                  onClick={() => {
                    setShow(!show);
                  }}
                >
                  {show ? (
                    <BsEyeSlashFill color="#656363" className="eye" />
                  ) : (
                    <BsEyeFill color="#656363" className="eye" />
                  )}
                </Icon>
              </div>
            </InputContainer>
            <p className="error-text">{error}</p>
          </Container>
        </div>
      );
    } else {
      return (
        <div>
          <Container className="flex flex-column">
            <label>{label}</label>
            <InputContainer
              className={
                error ? "flex align-center error" : "flex align-center"
              }
            >
              <div>
                {phone ? (
                  <div className="icon-text">+234</div>
                ) : (
                  <Icon right>
                    <img src={images.aus} alt="aus" />
                  </Icon>
                )}
              </div>
              <input
                onChange={onChange}
                type={type}
                value={value}
                placeholder={placeholder}
              />
            </InputContainer>
            <p className="error-text">{error}</p>
          </Container>
        </div>
      );
    }
  }
  return (
    <div>
      <Container>
        <label>{label}</label>
        <InputContainer
          className={error ? "flex align-center error" : "flex align-center"}
        >
          <input
            onChange={onChange}
            type={type}
            value={value}
            placeholder={placeholder}
          />
        </InputContainer>
        <p className="error-text">{error}</p>
      </Container>
    </div>
  );
};

export default Input;
