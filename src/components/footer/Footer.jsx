import styled from "styled-components";
import ios from "../../assets/Footer/app-store.svg";
import android from "../../assets/Footer/google-play.svg";

const FooterContainer = styled.footer`
  padding-top: 110px;
  padding-bottom: 40px;
  background-color: #2f3158;
  height: 100%;
  width: 100%;
`;

const FooterInner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const FooterNav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 450px) {
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  @media (max-width: 450px) {
    width: 82%;
  }
`;

const Logo = styled.a`
  font-size: 32px;
  line-height: 38px;
  letter-spacing: 1.2px;
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #007bff;
  }
`;

const Copyright = styled.span`
  display: block;
  font-size: 12px;
  line-height: 15px;
  color: #ffffff80;
  width: 70%;

  @media (max-width: 450px) {
    margin-bottom: 15px;
  }
`;

const Social = styled.div`
  ul {
    list-style: none;

    @media (max-width: 450px) {
      margin-left: 9px;
    }
  }

  li {
    margin-bottom: 15px;
  }

  a {
    color: #fff;
    opacity: 0.6;
    text-decoration: none;
    cursor: pointer;
    font-size: 12px;
    line-height: 15px;

    &:hover {
      opacity: 1;
      transition: opacity 0.25s linear;
    }
  }
`;

const Faqs = styled.div`
  ul {
    list-style: none;
  }

  li {
    margin-bottom: 15px;
  }

  a {
    color: #fff;
    opacity: 0.6;
    text-decoration: none;
    cursor: pointer;
    font-size: 12px;
    line-height: 15px;

    &:hover {
      opacity: 1;
      transition: opacity 0.25s linear;
    }
  }
`;

const Privacy = styled.div`
  ul {
    list-style: none;
  }

  li {
    margin-bottom: 15px;
  }

  a {
    color: #fff;
    opacity: 0.6;
    text-decoration: none;
    cursor: pointer;
    font-size: 12px;
    line-height: 15px;

    &:hover {
      opacity: 1;
      transition: opacity 0.25s linear;
    }
  }
`;

const App = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-left: 200px;

  span {
    display: block;
    font-size: 12px;
    line-height: 15px;
    color: #ffffff80;

    @media (max-width: 450px) {
      display: none;
    }
  }

  @media (max-width: 780px) {
    margin-left: 60px;
  }

  @media (max-width: 450px) {
    margin: 0;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

const AppChose = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 80px;

  @media (max-width: 450px) {
    margin-left: 40px;
  }

  img {
    opacity: 0.6;

    &:hover {
      opacity: 1;
      transition: opacity 0.25s linear;
    }
  }

  span {
    margin-top: 5px;
    width: 60%;
    display: inline-block;
    font-weight: 500;
    font-size: 10px;
    line-height: 13px;
    text-align: center;
    color: #8484ff;
    background-color: #8484ff1a;
    opacity: 0.6;
    border-radius: 2px;
    padding: 2px 5px 0;

    &:hover {
      opacity: 1;
      transition: opacity 0.25s linear;
    }
  }

  &:nth-child(2) {
    padding-right: 50px;
    border-right: 1px solid rgba(255, 255, 255, 0.6);

    @media (max-width: 450px) {
      border: none;
      margin-top: 20px;
      padding: 0;
    }
  }

  &:nth-child(3) {
    margin-left: 40px;

    @media (max-width: 450px) {
      margin-top: 20px;
      margin-left: 50px;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterInner>
        <FooterNav>
          <LogoContainer>
            <Logo href="#">Invest</Logo>
            <Copyright>
              Copyright ?? 2022 Stacked Financial, Inc All rights reserved.
            </Copyright>
          </LogoContainer>
          <Social>
            <ul>
              <li>
                <a href="#">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
              </li>
              <li>
                <a href="#">Medium</a>
              </li>
            </ul>
          </Social>
          <Faqs>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </Faqs>
          <Privacy>
            <ul>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Risk Disclosures</a>
              </li>
            </ul>
          </Privacy>
        </FooterNav>
        <App>
          <span>Made with ???? in Chicago</span>
          <AppChose>
            <img src={ios} alt="App Store for IOS" />
            <span>Coming soon</span>
          </AppChose>
          <AppChose>
            <img src={android} alt="Google Play for Android" />
            <span>Coming soon</span>
          </AppChose>
        </App>
      </FooterInner>
    </FooterContainer>
  );
};

export default Footer;
