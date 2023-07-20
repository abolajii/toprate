import React from "react";
import styled from "styled-components";

const SelectContainer = styled.div`
  .input {
    height: 100%;
    width: 100%;
    font-size: 26px;
    background: transparent;
    color: white;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;
    color: #656363;
    margin-bottom: 8px;
  }

  select {
    width: 100%;
    height: 50px;
    background-color: black;
    color: white;
    font-size: 20px;
    border: none;
    border-bottom: 1px solid #333;
    outline: none;
  }
`;

const Select = ({ label, data }) => {
  return (
    <SelectContainer>
      <p>{label}</p>
      <select name="cars" id="cars">
        {!data && (
          <>
            <option value="volvo">NGN</option>
            <option value="saab">USD</option>
            <option value="mercedes">EUR</option>
          </>
        )}
        {data &&
          data.map(({ name, value, id }, index) => {
            return (
              <option value={value} key={index}>
                {value}
              </option>
            );
          })}
      </select>
    </SelectContainer>
  );
};

export default Select;
