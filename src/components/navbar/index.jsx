import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../../context/user.context";

const Container = styled.div`
  a,
  button {
    color: inherit;
    font-size: 16px;
    font-weight: 600;
  }
  .mr-58 {
    margin-right: 58px;
  }

  .mr-50 {
    margin-right: 50px;
  }

  .ml-50 {
    margin-left: 50px;
  }

  .active {
    color: #9c0e4e;
  }
`;

const Navbar = ({ help }) => {
  const { user, setUser } = React.useContext(UserContext);
  const navigate = useNavigate();

  const leftNav = [
    {
      name: "LOGO",
      link: "/",
    },
    {
      name: "Invite friends",
      link: "/invite-friend",
    },
    {
      name: "Download App",
      link: "/download-app",
    },

    {
      name: "Help",
      link: "/help",
    },
  ];

  const rightNav =
    user === null
      ? [
          {
            name: "Login",
            link: "/signin",
          },
          {
            name: "Sign Up",
            link: "/signup",
          },
        ]
      : [
          {
            name: "My Recipients",
            link: "/my-recipients",
          },
          {
            name: "My Transactions",
            link: "/my-transactions",
          },
          {
            name: "Settings",
            link: "/settings",
          },
          {
            name: "Logout",
            link: "/logout",
          },
        ];

  return (
    <Container className="flex flex-space-between navbar z-100">
      <div className={help ? "flex flex-1 text-white" : "flex flex-1"}>
        {leftNav.map((item, index) => {
          if (index === 0) {
            return (
              <div className="mr-58" key={index}>
                <Link to={item.link}>{item.name}</Link>
              </div>
            );
          }
          return (
            <div className="mr-50" key={index}>
              <Link
                to={item.link}
                className={
                  window.location.href.includes(item.link) ? "active" : ""
                }
              >
                {item.name}
              </Link>
            </div>
          );
        })}
      </div>
      <div className="flex flex-1 text-white justify-end">
        {rightNav.map((item, index) => {
          if (item.name === "Logout") {
            return (
              <div className="ml-50" key={index}>
                <button
                  onClick={() => {
                    setUser(null);
                    navigate("/signin");
                  }}
                >
                  {item.name}
                </button>
              </div>
            );
          }
          return (
            <div className="ml-50" key={index}>
              <Link
                className={
                  window.location.href.includes(item.link) ? "active" : ""
                }
                to={item.link}
              >
                {item.name}
              </Link>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Navbar;
