import { Container, Select } from "../../components";

import React from "react";
import styled from "styled-components";

const Underline = styled.div`
  background: #333333;
  height: 1px;
  margin-top: 15px;
`;

const Inner = styled.div`
  padding: 40px;
  padding-top: 130px;

  h4 {
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 150%;
    color: #2cbd84;
  }

  h3 {
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 50px;
    color: #ffffff;
  }

  .box-2 {
    height: 469px;
    width: 367px;
    border: 1px solid #333333;
    border-radius: 10px;
    margin-top: 40px;
    margin-right: 30px;
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

  .failed {
    color: #ed2f46;
  }
`;

const MyTransactions = () => {
  const data = [
    { id: 1, label: "January 1, 2022", value: "January 1, 2022" },
    { id: 2, label: "January 2, 2022", value: "January 2, 2022" },
    { id: 3, label: "January 3 2022", value: "January 3, 2022" },
    { id: 4, label: "January 4, 2022", value: "January 4, 2022" },
  ];

  const dataTwo = [
    { id: 1, label: "February 1, 2022", value: "February 1, 2022" },
    { id: 2, label: "February 2, 2022", value: "February 2, 2022" },
  ];
  return (
    <Container user>
      <Inner className="bg-black">
        <div className="mb-30 flex">
          <div className="flex-1">
            <h3>My Transactions</h3>
            <div>
              <div className="flex flex-column">
                <div>
                  <Select data={data} />
                </div>
                <div>
                  <div className="flex-1 flex">
                    <div className="box-2 p-20">
                      <p className="text mb-10">Transaction (#8988666666)</p>
                      <div className="flex flex-space-between align-center mt-10">
                        <h4 className="failed">Failed</h4>
                      </div>
                      <Underline />
                      <div className="flex flex-space-between align-center mt-10 mb-20">
                        <p className="text">You sent</p>
                        <h4 className="sm">3,040.12 EUR</h4>
                      </div>
                      <div className="flex flex-space-between align-center mt-10 mb-20">
                        <p className="text">Receiver got</p>
                        <h4 className="sm">141,502 NGN</h4>
                      </div>
                      <div className="flex flex-space-between align-center mt-10 mb-20">
                        <p className="text">Transaction fee</p>
                        <h4 className="sm">30 EUR</h4>
                      </div>
                      <div className="flex flex-space-between align-center mt-10 mb-20">
                        <p className="text">Exchange rate</p>
                        <h4 className="sm">1 EUR = 7005.51 NGN</h4>
                      </div>
                      <div className="flex flex-space-between align-center mt-10 mb-20">
                        <p className="text">Amount charged</p>
                        <h4 className="sm">0.78 EUR</h4>
                      </div>
                      <Underline />
                      <div className="flex flex-space-between align-center mt-30 mb-20">
                        <p className="text">Recipient</p>
                        <h4 className="sm">Abolaji Dev.</h4>
                      </div>
                      <div className="flex flex-space-between align-center mt-10 mb-20">
                        <p className="text">Location</p>
                        <h4 className="sm">Lagos, Nigeria</h4>
                      </div>
                      <div className="flex flex-space-between align-center mt-10 mb-20">
                        <p className="text">Bank</p>
                        <h4 className="sm">Access Bank PLC (0109991009)</h4>
                      </div>
                    </div>

                    <div className="box-2 p-20">
                      <p className="text mb-10">Transaction (#8988666666)</p>
                      <div className="flex flex-space-between align-center mt-10">
                        <h4>Completed</h4>
                      </div>
                      <Underline />
                      <div className="flex flex-space-between align-center mt-10 mb-20">
                        <p className="text">You sent</p>
                        <h4 className="sm">3,040.12 EUR</h4>
                      </div>
                      <div className="flex flex-space-between align-center mt-10 mb-20">
                        <p className="text">Receiver got</p>
                        <h4 className="sm">141,502 NGN</h4>
                      </div>
                      <div className="flex flex-space-between align-center mt-10 mb-20">
                        <p className="text">Transaction fee</p>
                        <h4 className="sm">30 EUR</h4>
                      </div>
                      <div className="flex flex-space-between align-center mt-10 mb-20">
                        <p className="text">Exchange rate</p>
                        <h4 className="sm">1 EUR = 7005.51 NGN</h4>
                      </div>
                      <div className="flex flex-space-between align-center mt-10 mb-20">
                        <p className="text">Amount charged</p>
                        <h4 className="sm">0.78 EUR</h4>
                      </div>
                      <Underline />
                      <div className="flex flex-space-between align-center mt-30 mb-20">
                        <p className="text">Recipient</p>
                        <h4 className="sm">Abolaji Dev.</h4>
                      </div>
                      <div className="flex flex-space-between align-center mt-10 mb-20">
                        <p className="text">Location</p>
                        <h4 className="sm">Lagos, Nigeria</h4>
                      </div>
                      <div className="flex flex-space-between align-center mt-10 mb-20">
                        <p className="text">Bank</p>
                        <h4 className="sm">Access Bank PLC (0109991009)</h4>
                      </div>
                    </div>

                    <div className="box-2 p-20">
                      <p className="text mb-10">Transaction (#8988666666)</p>
                      <div className="flex flex-space-between align-center mt-10">
                        <h4 className="failed">Failed</h4>
                      </div>
                      <Underline />
                      <div className="flex flex-space-between align-center mt-10 mb-20">
                        <p className="text">You sent</p>
                        <h4 className="sm">3,040.12 EUR</h4>
                      </div>
                      <div className="flex flex-space-between align-center mt-10 mb-20">
                        <p className="text">Receiver got</p>
                        <h4 className="sm">141,502 NGN</h4>
                      </div>
                      <div className="flex flex-space-between align-center mt-10 mb-20">
                        <p className="text">Transaction fee</p>
                        <h4 className="sm">30 EUR</h4>
                      </div>
                      <div className="flex flex-space-between align-center mt-10 mb-20">
                        <p className="text">Exchange rate</p>
                        <h4 className="sm">1 EUR = 7005.51 NGN</h4>
                      </div>
                      <div className="flex flex-space-between align-center mt-10 mb-20">
                        <p className="text">Amount charged</p>
                        <h4 className="sm">0.78 EUR</h4>
                      </div>
                      <Underline />
                      <div className="flex flex-space-between align-center mt-30 mb-20">
                        <p className="text">Recipient</p>
                        <h4 className="sm">Abolaji Dev.</h4>
                      </div>
                      <div className="flex flex-space-between align-center mt-10 mb-20">
                        <p className="text">Location</p>
                        <h4 className="sm">Lagos, Nigeria</h4>
                      </div>
                      <div className="flex flex-space-between align-center mt-10 mb-20">
                        <p className="text">Bank</p>
                        <h4 className="sm">Access Bank PLC (0109991009)</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-column">
                <div>
                  <Select data={dataTwo} />
                </div>
                <div>
                  <div className="flex-1 flex">
                    <div className="box-2 p-20">
                      <p className="text mb-10">Transaction (#8988666666)</p>
                      <div className="flex flex-space-between align-center mt-10">
                        <h4>Completed</h4>
                      </div>
                      <Underline />
                      <div className="flex flex-space-between align-center mt-10 mb-20">
                        <p className="text">You sent</p>
                        <h4 className="sm">3,040.12 EUR</h4>
                      </div>
                      <div className="flex flex-space-between align-center mt-10 mb-20">
                        <p className="text">Receiver got</p>
                        <h4 className="sm">141,502 NGN</h4>
                      </div>
                      <div className="flex flex-space-between align-center mt-10 mb-20">
                        <p className="text">Transaction fee</p>
                        <h4 className="sm">30 EUR</h4>
                      </div>
                      <div className="flex flex-space-between align-center mt-10 mb-20">
                        <p className="text">Exchange rate</p>
                        <h4 className="sm">1 EUR = 7005.51 NGN</h4>
                      </div>
                      <div className="flex flex-space-between align-center mt-10 mb-20">
                        <p className="text">Amount charged</p>
                        <h4 className="sm">0.78 EUR</h4>
                      </div>
                      <Underline />
                      <div className="flex flex-space-between align-center mt-30 mb-20">
                        <p className="text">Recipient</p>
                        <h4 className="sm">Abolaji Dev.</h4>
                      </div>
                      <div className="flex flex-space-between align-center mt-10 mb-20">
                        <p className="text">Amount charged</p>
                        <h4 className="sm">0.78 EUR</h4>
                      </div>
                      <div className="flex flex-space-between align-center mt-10 mb-20">
                        <p className="text">Amount charged</p>
                        <h4 className="sm">0.78 EUR</h4>
                      </div>
                    </div>
                    <div className="box-2 p-20">
                      <p className="text mb-10">Transaction (#8988666666)</p>
                      <div className="flex flex-space-between align-center mt-10">
                        <h4 className="failed">Failed</h4>
                      </div>
                      <Underline />
                      <div className="flex flex-space-between align-center mt-10 mb-20">
                        <p className="text">You sent</p>
                        <h4 className="sm">3,040.12 EUR</h4>
                      </div>
                      <div className="flex flex-space-between align-center mt-10 mb-20">
                        <p className="text">Receiver got</p>
                        <h4 className="sm">141,502 NGN</h4>
                      </div>
                      <div className="flex flex-space-between align-center mt-10 mb-20">
                        <p className="text">Transaction fee</p>
                        <h4 className="sm">30 EUR</h4>
                      </div>
                      <div className="flex flex-space-between align-center mt-10 mb-20">
                        <p className="text">Exchange rate</p>
                        <h4 className="sm">1 EUR = 7005.51 NGN</h4>
                      </div>
                      <div className="flex flex-space-between align-center mt-10 mb-20">
                        <p className="text">Amount charged</p>
                        <h4 className="sm">0.78 EUR</h4>
                      </div>
                      <Underline />
                      <div className="flex flex-space-between align-center mt-30 mb-20">
                        <p className="text">Recipient</p>
                        <h4 className="sm">Abolaji Dev.</h4>
                      </div>
                      <div className="flex flex-space-between align-center mt-10 mb-20">
                        <p className="text">Amount charged</p>
                        <h4 className="sm">0.78 EUR</h4>
                      </div>
                      <div className="flex flex-space-between align-center mt-10 mb-20">
                        <p className="text">Amount charged</p>
                        <h4 className="sm">0.78 EUR</h4>
                      </div>
                    </div>
                    <div className="box-2 p-20">
                      <p className="text mb-10">Transaction (#8988666666)</p>
                      <div className="flex flex-space-between align-center mt-10">
                        <h4 className="failed">Failed</h4>
                      </div>
                      <Underline />
                      <div className="flex flex-space-between align-center mt-10 mb-20">
                        <p className="text">You sent</p>
                        <h4 className="sm">3,040.12 EUR</h4>
                      </div>
                      <div className="flex flex-space-between align-center mt-10 mb-20">
                        <p className="text">Receiver got</p>
                        <h4 className="sm">141,502 NGN</h4>
                      </div>
                      <div className="flex flex-space-between align-center mt-10 mb-20">
                        <p className="text">Transaction fee</p>
                        <h4 className="sm">30 EUR</h4>
                      </div>
                      <div className="flex flex-space-between align-center mt-10 mb-20">
                        <p className="text">Exchange rate</p>
                        <h4 className="sm">1 EUR = 7005.51 NGN</h4>
                      </div>
                      <div className="flex flex-space-between align-center mt-10 mb-20">
                        <p className="text">Amount charged</p>
                        <h4 className="sm">0.78 EUR</h4>
                      </div>
                      <Underline />
                      <div className="flex flex-space-between align-center mt-30 mb-20">
                        <p className="text">Recipient</p>
                        <h4 className="sm">Abolaji Dev.</h4>
                      </div>
                      <div className="flex flex-space-between align-center mt-10 mb-20">
                        <p className="text">Amount charged</p>
                        <h4 className="sm">0.78 EUR</h4>
                      </div>
                      <div className="flex flex-space-between align-center mt-10 mb-20">
                        <p className="text">Amount charged</p>
                        <h4 className="sm">0.78 EUR</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Inner>
    </Container>
  );
};

export default MyTransactions;
