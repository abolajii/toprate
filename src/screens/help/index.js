import React from "react";
import { Container } from "../../components";
import { AiOutlineSearch } from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";

import styled from "styled-components";
import { Link } from "react-router-dom";
const Inner = styled.div`
  height: 1000px;
  padding: 90px 40px;

  .title {
    font-size: 32px;
    font-weight: 500;
    line-height: 39px;
    margin-top: 30px;
    margin-bottom: 50px;
  }
`;

const Search = styled.div`
  height: 39px;
  width: 300px;
  border-bottom: 1px solid #333;
  padding: 6px 0;

  input {
    width: 100%;
    height: 100%;
    background: none;
    color: white;
    font-size: 20px;
    font-weight: 500;
    line-height: 39px;
  }

  .icon {
    margin-left: 15px;
  }
`;
const Title = styled.h3`
  font-size: 40px;
  font-weight: 600;
  line-height: 50px;
`;

const Width = styled.div`
  width: 900px;
  margin: auto;
  border-bottom: 1px solid #333;
  padding: 5px 0;
  margin-bottom: 30px;

  h2 {
    font-size: 32px;
    font-weight: 400;
    line-height: 38px;
    text-decoration: underline;
    margin-bottom: 24px;
  }

  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: rgba(255, 255, 255, 0.8);
  }
`;

const Help = () => {
  return (
    <div>
      <Container help>
        <Inner className="bg-black">
          <div className="flex flex-space-between">
            <div>
              <Title>Help Hub</Title>
            </div>
            <div>
              <Search className="flex align-center">
                <input placeholder="Search" />
                <div className="icon">
                  <AiOutlineSearch size={20} color="rgba(255, 255, 255, 0.7)" />
                </div>
              </Search>
            </div>
          </div>
          <p className="text-center title">Frequently Asked Questions (FAQ)</p>
          <div>
            <Width className="flex align-center flex-space-between">
              <div>
                <Link to="/help/single">
                  <h2>Common problems</h2>
                </Link>
                <p>
                  Here you'll find guidance on the top ways to solve common
                  problems our customers experience.
                </p>
              </div>
              <div>
                <FiChevronRight />
              </div>
            </Width>
            <Width className="flex align-center flex-space-between">
              <div>
                <h2>Where’s my money?</h2>
                <p>
                  Here you'll find guidance on the top ways to solve common
                  problems our customers experience.
                </p>
              </div>
              <div>
                <FiChevronRight />
              </div>
            </Width>
            <Width className="flex align-center flex-space-between">
              <div>
                <h2>Where’s my money?</h2>
                <p>
                  Here you'll find guidance on the top ways to solve common
                  problems our customers experience.
                </p>
              </div>
              <div>
                <FiChevronRight />
              </div>
            </Width>
            <Width className="flex align-center flex-space-between">
              <div>
                <h2>Where’s my money?</h2>
                <p>
                  Here you'll find guidance on the top ways to solve common
                  problems our customers experience.
                </p>
              </div>
              <div>
                <FiChevronRight />
              </div>
            </Width>
            <Width className="flex align-center flex-space-between">
              <div>
                <h2>Where’s my money?</h2>
                <p>
                  Here you'll find guidance on the top ways to solve common
                  problems our customers experience.
                </p>
              </div>
              <div>
                <FiChevronRight />
              </div>
            </Width>
          </div>
        </Inner>
      </Container>
    </div>
  );
};

export default Help;
