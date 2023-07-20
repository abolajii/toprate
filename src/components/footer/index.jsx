import React from "react";
import styled from "styled-components";

const Container = styled.div`
  .footer_title {
    font-size: 20px;
    font-weight: 600;
    line-height: 25px;
    text-align: left;
  }

  .footer_links {
    margin-top: 46px;
  }

  .link {
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    text-align: left;
    margin-bottom: 20px;
    text-decoration: underline;
  }

  .copy-right {
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
  }

  .p-80 {
    padding: 80px;
  }

  .mr-10 {
    margin-right: 10px;
  }
  .w-350 {
    width: 350px;
  }

  .mr-40 {
    margin-right: 40px;
  }
`;

const Footer = () => {
  return (
    <Container className="bg-primary">
      <div className="grid grid-4">
        <div className="grid-item">
          <div className="footer_title">Company and team</div>
          <div className="footer_links">
            <div className="link">Company and team</div>
            <div className="link">News and blog</div>
            <div className="link">Press</div>
            <div className="link">Careers</div>
            <div className="link">Affiliates and Partnerships</div>
          </div>
        </div>
        <div className="grid-item">
          <div className="footer_title">Help and support</div>
          <div className="footer_links">
            <div className="link">Help center</div>
            <div className="link">Mid-market rate</div>
            <div className="link">Service status</div>
          </div>
        </div>
        <div className="grid-item">
          <div className="footer_title">Learn more</div>
          <div className="footer_links">
            <div className="link">Send money abroad</div>
            <div className="link">Currency converter</div>
            <div className="link">Compare exchange rates</div>
            <div className="link">Compare exchange rates</div>
          </div>
        </div>
        <div className="grid-item">
          <div className="footer_title">Follow us</div>
          <div className="footer_links">
            <div className="flex">
              <div>Follow us</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex p-80">
        <div className="w-350 flex">
          <h4 className="logo mr-40">LOGO</h4>
          <div className="link">Legal</div>
        </div>
        <div className="w-350 flex">
          <div className="link mr-40">Privacy policy</div>
          <div className="link">Cookie policy</div>
        </div>
      </div>
      <div className="p-80 flex align-center justify-center">
        <p className="copyright">© 2000-2021, All Rights Reserved</p>
      </div>
    </Container>
  );
};

export default Footer;
