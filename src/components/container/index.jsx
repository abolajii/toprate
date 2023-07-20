import { Footer, Navbar } from "../../components";

import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { UserContext } from "../../context/user.context";
import { images } from "../../constant/images";
import styled from "styled-components";

const Inner = styled.div`
  height: 950px;
  .user-text {
    width: 200px;
    font-size: 29px !important;
  }
  .hero-box {
    width: 600px;
    height: 600px;
    margin-top: 100px;
    margin-left: 100px;
  }

  .hero-container {
    margin-left: 50px;
    h1 {
      font-style: normal;
      font-size: 70px;
      font-weight: 600;
    }

    p {
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      margin-top: 20px;
      width: 600px;
    }
  }
`;

const OtherContainer = styled.div`
  .p-40 {
    padding: 40px;
  }
  .bold_title {
    width: 650px;
    font-weight: 600;
    font-size: 64px;
    line-height: 82px;
    margin-bottom: 34px;
  }
  .country-logo {
    background: #d8d8d8;
    border-radius: 2px;
    height: 16px;
    width: 30px;
    margin-right: 11px;
  }

  .grid-item {
    width: 111.87px;
    height: 20px;
    margin: 20px 0;
  }

  .sm {
    width: 690px;
  }

  .container_send-money {
    padding: 0 50px;
    padding-top: 150px;
    padding-bottom: 90px;
  }

  .container_send-money .title {
    font-size: 64px;
    font-weight: 600;
    line-height: 82px;
    width: 80%;
    margin: auto;
  }

  .container_send-money .subtitle {
    font-size: 18px;
    font-weight: 500;
    line-height: 26px;
    text-align: center;
    width: 60%;
    margin: auto;
    margin-top: 29px;
  }

  .container_send-money .app-download {
    margin-top: 20px;
  }

  .app-img {
    height: 861px;
    margin-top: 100px;
  }

  .p-80 {
    padding: 80px;
  }

  .faqs {
    padding: 15px;
  }

  .faqs:not(:last-child) {
    border-bottom: 0.1px solid #656363;
  }

  .faqs-margin {
    margin-top: 66px;
    background: #333333;
    border-radius: 6px;
    overflow: hidden;
    padding: 1px 0;
  }

  .container_faqs {
    padding: 70px;
  }

  .container_faqs .bold_title {
    width: 650px;
    font-weight: 600;
    font-size: 64px;
    line-height: 82px;
    margin-bottom: 34px;
  }

  .container_faqs .subtitle {
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #656363;
    width: 850px;
    margin-top: 66px;
  }

  .customer_care.img {
    height: 756px;
    margin: 40px 0;
    overflow: hidden;
    border-radius: 10px;
  }
`;

const WhyChooseUsContainer = styled.div`
  .title {
    font-size: 64px;
    font-weight: 600;
    line-height: 96px;
    padding-top: 100px;
    text-align: center;
  }

  .card {
    height: 436px;
    width: 476px;
  }

  .img {
    width: 86px;
  }

  .card_title {
    font-size: 48px;
    font-weight: 600;
    line-height: 72px;
    text-align: center;
    margin-top: 28px;
  }

  .card_sub-title {
    margin-top: 20px;
    text-align: center;
  }
`;

const HowMuchCostContainer = styled.div`
  .container_cost {
    padding: 60px;
  }

  .container_cost .bold_title {
    width: 650px;
    font-weight: 600;
    font-size: 64px;
    line-height: 82px;
    margin-bottom: 34px;
  }

  .container_cost .title {
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    color: #ffffff;
    margin-bottom: 21px;
  }

  .container_cost .sm {
    width: 690px;
  }

  .container_cost .subtitle {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 150%;
    color: #656363;
    margin-bottom: 30px;
  }

  .container_cost .card {
    height: 418px;
    width: 259px;
    border-radius: 10px;
    background-color: #e2ffa7;
    color: #656363;
    padding: 15px;
  }

  .container_cost .card:nth-child(2) {
    background-color: #9c0e4e;
    margin-left: 20px;
    color: #fff;
  }

  .container_cost .rate {
    font-size: 60px;
    font-weight: 500;
  }

  .container_cost .small-text {
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    text-align: center;
  }

  .rate-black {
    color: #000;
  }

  .fee {
    top: 20px;
  }

  .euro {
    font-size: 18px;
    font-weight: 500;
    color: #000;
  }

  .box {
    height: 70px;
  }
`;

const Container = ({ children, title, help, titleTwo, subtitle }) => {
  const path = window.location.href.split("/")[3];

  const not_required = ["signin", "signup", "otp", "help", "invite-friend"];

  const { user } = React.useContext(UserContext);
  console.log(user);

  const renderOthers = !not_required.includes(path);

  const RenderHeroCompo = () => {
    return (
      <Inner className="bg-primary flex">
        <div className="flex-1 flex flex-ai-center">
          <div className="hero-container">
            <h1 className="text-black">
              {title ? title : user ? "Send Money to" : "Send Money"}
            </h1>
            <h1 className="text-black">
              {titleTwo ? titleTwo : user ? "Nigeria" : "anywhere"}
            </h1>
            <p className={user ? "user-text" : "text-black"}>
              {subtitle
                ? subtitle
                : user
                ? "Send money directly to a bank or via mobile money to your friends and family  in Nigeria"
                : "Pay bill, send money to family and friends  for less - abroad."}
            </p>
          </div>
        </div>
        <div className="flex-1 flex relative">
          <div className="hero-box z-100 text-white">
            <div>{children}</div>
          </div>

          <img src={images.design} alt="design" className="design" />
          <div className="ball absolute" />
          <div className="ball absolute ball-2" />
          <div className="ball absolute ball-2 ball-3" />
          <div className="ball absolute ball-4" />
          <div className="ball absolute ball-2 ball-5" />
          <div className="ball absolute ball-2 ball-6" />
        </div>
      </Inner>
    );
  };

  const RenderWhyChooseUs = () => {
    return (
      <WhyChooseUsContainer className="bg-primary">
        <h1 className="title"> Why Choose Us? </h1>

        <div className="flex">
          <div className="card flex flex-column flex-center">
            <div className="img">
              <img src={images.lowcost} alt="lowcost" />
            </div>
            <p className="card_title">We’re low-cost</p>
            <p className="card_sub-title">
              We offer better exchange rates and lower fees than most
              conventional banks and money transfer services.
            </p>
          </div>
          <div className="card flex flex-column flex-center">
            <div className="img">
              <img src={images.fast} alt="fast" />
            </div>
            <p className="card_title">We’re fast</p>
            <p className="card_sub-title">
              95% of our transfers are ready in minutes.
            </p>
          </div>
          <div className="card flex flex-column flex-center">
            <div className="img">
              <img src={images.secure} alt="secure" />
            </div>
            <p className="card_title">We’re safe</p>
            <p className="card_sub-title">
              We use industry-leading technology to protect your money.
            </p>
          </div>
        </div>
      </WhyChooseUsContainer>
    );
  };

  const RenderHowMuchCost = () => {
    return (
      <HowMuchCostContainer className="bg-black">
        <div className="container_cost flex">
          <div className="flex-1">
            <p className="bold_title">
              How much does it cost to transfer EUR to NGN?
            </p>
            <div className="flex flex-column">
              <p className="title">Pay small, flat fee and percentage</p>
              <p className="subtitle">
                To send money in EUR to the NGN, you pay a nominal flat charge
                of 1.77 EUR plus 0.43 percent of the amount exchanged (the
                entire cost is always displayed upfront).
              </p>
            </div>
            <div className="flex flex-column">
              <p className="title">No hidden fees</p>
              <p className="subtitle">
                Different fees apply to different types of transfers, which are
                usually small.
              </p>
            </div>
            <div className="flex flex-column">
              <p className="title">
                Fees may vary depending on your transfer type
              </p>
              <p className="subtitle">
                There are no large fees, disguised or otherwise. So it's less
                expensive than you're used to.
              </p>
            </div>
          </div>
          <div className="flex-1 flex flex-center ">
            <div className="card flex flex-center relative">
              <p className="fee absolute text-center">Fixed fee</p>
              <div className="flex box align-end justify-center">
                <p className="rate rate-black">1.77</p>
                <p className="euro">EUR</p>
              </div>
            </div>
            <div className="card flex col align-center justify-center relative">
              <p className="fee absolute text-center">Variable fee</p>
              <p className="rate">0.433</p>
              <p className="small-text">Up to 123,405 EUR/month</p>
            </div>
          </div>
        </div>
      </HowMuchCostContainer>
    );
  };

  const RenderSendMoney = () => {
    const formedArray = Array(130)
      .fill("")
      .map((_, index) => {
        return { img: "img-" + index };
      });
    return (
      <div className="bg-black p-40">
        <div className="flex">
          <p className="bold_title sm">
            Send money to over 130 countries worldwide
          </p>
        </div>
        <div className="grid grid-9">
          {formedArray.map((each, index) => {
            return (
              <div className="grid-item flex align-center">
                <div className="country-logo" />
                <p>{index + 1}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const RenderHowItWorks = () => {
    return (
      <div className="bg-primary">
        <div>
          <h1 className="title">How it works</h1>
        </div>
      </div>
    );
  };

  const RenderSecureWay = () => {
    return (
      <div className="bg-primary container_send-money flex flex-column align-center">
        <p className="title text-center">
          A fast and secure way to send money on the go
        </p>
        <p className="subtitle">
          Download our app for free to send money online in minutes to over 130
          other countries. Track your payments and view your transfer history
          from anywhere.
        </p>
        <div className="app-download">
          <img src={images.download} alt="download" />
        </div>
        <div className="app-img">
          <img src={images.app} alt="download" />
        </div>
      </div>
    );
  };

  const RenderFAQs = () => {
    return (
      <div className="container_faqs bg-black">
        <p className="bold_title">Frequently asked questions</p>
        <p className="subtitle">
          Our customer services team is available 24/7 in 6 different languages
          to help you with anything you need.
        </p>
        <div className="customer_care img">
          <img src={images.customer} alt="customer" />
        </div>
        <div className="faqs-margin">
          <div className="faqs flex flex-space-between align-center">
            <div>
              <p>How Safe is Top Rate Transfers</p>
            </div>
            <div>
              <RiArrowDropDownLine />
            </div>
          </div>
          <div className="faqs flex flex-space-between align-center">
            <div>
              <p>How Safe is Top Rate Transfers</p>
            </div>
            <div>
              <RiArrowDropDownLine />
            </div>
          </div>
          <div className="faqs flex flex-space-between align-center">
            <div>
              <p>How Safe is Top Rate Transfers</p>
            </div>
            <div>
              <RiArrowDropDownLine />
            </div>
          </div>
        </div>
        <div className="flex flex-center">
          <button className="faq-btn">Visit our FAQs</button>
        </div>
      </div>
    );
  };

  if (help) {
    return (
      <div className="relative">
        <Navbar help />
        {children}
        <Footer />
      </div>
    );
  }

  return (
    <div className="relative">
      <Navbar />
      <RenderHeroCompo>{children}</RenderHeroCompo>
      {renderOthers && (
        <OtherContainer>
          <RenderWhyChooseUs />
          <RenderHowMuchCost />
          <RenderSecureWay />
          <RenderSendMoney />
          <RenderHowItWorks />
          <RenderFAQs />
        </OtherContainer>
      )}
      <Footer />
    </div>
  );
};

export default Container;
