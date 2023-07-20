import { Button, Input, Modal } from "../../components";

import React from "react";
import { UserContext } from "../../context/user.context";
import { loginWithPasswordRequest } from "../../api/noauth.request";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Terms = styled.p`
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  color: rgba(235, 235, 245, 0.6);
`;

const Container = styled.div`
  form {
    margin-top: 40px;
  }

  .forgot-password {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-decoration-line: underline;
    color: #9c0e4e;
  }

  .remember-me {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    color: #656363;
  }
`;

const CheckBox = styled.input`
  margin-right: 10px;
  accent-color: #9c0e4e;
`;

const Title = styled.h3`
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  color: #656363;
  width: 200px;

  &.active {
    color: #fff;
  }
`;

const Shared = () => {
  const path = window.location.href.split("/")[3];
  const { setUser } = React.useContext(UserContext);
  const navigate = useNavigate();
  const [modal, setModal] = React.useState(false);
  const [clicked, setClicked] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const loginWithPassword = (e) => {
    e.preventDefault();

    if (email && password) {
      setModal(true);

      const data = { email, password };
      makeLoginRequest(data);
    }

    if (!email || !password) {
      // setModal(false);
      setClicked(true);
    }
  };

  const getError = (val) => {
    if (val === "email") {
      return "Email is required";
    }

    if (val === "password") {
      return "Password is required";
    }
  };

  const makeLoginRequest = async (data) => {
    try {
      const response = await loginWithPasswordRequest(data);
      setModal(false);
      navigate("/", { replace: true });
      setUser(response.data.profile);
      setModal(false);
    } catch (error) {
      setModal(false);
    } finally {
      console.log("done");
      setModal(false);
    }
  };

  return (
    <Container>
      <div className="flex">
        <Title className={path === "signin" ? "active" : ""}>Login</Title>
        <Title className={path === "signup" ? "active" : ""}>Register</Title>
      </div>
      {path === "signin" && (
        <div>
          <form id="form">
            <div className="mb-30">
              <Input
                label="Email"
                placeholder="abolaji@toprate.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={clicked && !email && getError("email")}
              />
            </div>
            <div className="mb-30">
              <Input
                label="Password"
                icon
                right
                placeholder="•••••••••••"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={clicked && !password && getError("password")}
              />
            </div>

            <div className="flex align-center flex-space-between mb-30">
              <div className="flex">
                <div>
                  <CheckBox type="checkbox" />
                </div>
                <p className="remember-me">Remember me</p>
              </div>
              <div>
                <p className="forgot-password">Forgot Password?</p>
              </div>
            </div>
            <Button title="Log in" onClick={loginWithPassword} />
          </form>
        </div>
      )}

      {path === "signup" && (
        <div className="signup">
          <form>
            <div className="mb-30">
              <Input label="Country" icon placeholder="Australia" />
            </div>
            <div className="mb-30">
              <Input label="Email" placeholder="abolaji@toprate.com" />
            </div>
            <div className="mb-30">
              <Input label="Mobile" icon phone placeholder="xxx xxxx xxx" />
            </div>
            <div className="mb-30">
              <Input
                label="Referral Code (optional)"
                placeholder="e.g A45566"
              />
            </div>
            <div className="mb-30">
              <Input label="Password" icon right placeholder="•••••••••••" />
            </div>
            <div className="mb-30">
              <Terms className="text-center">
                By signing up I confirm that I have read, understood and accept
                the terms of use, and consent to the processing of my personal
                data (Including biometric data) as stated in the privacy policy
              </Terms>
            </div>
            <Button title="Continue" />
          </form>
        </div>
      )}

      {modal && <Modal />}
    </Container>
  );
};

export default Shared;
