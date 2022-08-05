import styled from "styled-components";
import manageChart from "../../assets/Charts/manage-chart-bg.svg";
import binanceIcon from "../../assets/Icons/binance_logo.svg";
import ftxIcon from "../../assets/Icons/ftx_logo.svg";
import bybitIcon from "../../assets/Icons/bybit_logo.svg";
import ExchangeSection from "../exchangeSection/ExchangeSection";
import Advantages from "../advatanges/Advantages";
import Banner from "../banner/Banner";

const SectionContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90%;
  height: 100%;
  margin: 0 auto;
  margin-top: 60px;
  background: radial-gradient(
      31.56% 19.82% at 27.79% 19.43%,
      #42229f 0%,
      rgba(100, 89, 249, 0) 100%
    ),
    radial-gradient(
      58.47% 65.76% at 100% 42.8%,
      rgba(74, 74, 226, 0.6) 0%,
      rgba(95, 178, 255, 0.47) 100%
    ),
    radial-gradient(50.16% 21.47% at -4.45% 0%, #155a99 0%, #9243f7 100%);
  border-radius: 8px;
  padding: 150px 0 80px;
  position: relative;

  &::after {
    content: "";
    width: 100%;
    height: 680px;
    background: url(${manageChart}) no-repeat center;
    position: absolute;
    top: -6px;
    left: 0;
    z-index: -1;
  }
`;

const SectionInner = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 925px) {
    flex-wrap: wrap;
  }
`;

const Cards = styled.div`
  position: relative;
`;

const MainCard = styled.div`
  width: 510px;
  height: 400px;
  background: #fff;
  box-shadow: 0 22px 30px #27275f30;
  border-radius: 10px;
  padding: 62px 52px;

  h3 {
    font-size: 54px;
    line-height: 120%;
    color: #403e9f;

    span {
      font-weight: 700;
      color: #32c37d;
    }
  }
`;

const CardExchange = styled.div`
  width: 150px;
  height: 120px;
  position: absolute;
  top: -50px;
  right: -42px;
  background: #ffffff;
  box-shadow: 0 4px 19px #4a4ae238;
  border-radius: 8px;
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;

    &:not(:last-child) {
      margin-bottom: 10px;
    }

    img {
      margin-right: 20px;

      &.binance {
        margin-left: 2px;
      }
    }
  }
`;

const CardsTotalContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  position: absolute;
  bottom: -39px;
  left: 59px;

  h4 {
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    margin-bottom: 42px;
    color: #fff;
  }

  span {
    font-weight: 500;
    font-size: 38px;
    line-height: 120%;
    letter-spacing: -0.02em;
    color: #fff;
  }
`;

const TotalPortfolio = styled.div`
  background: radial-gradient(
      71.53% 68.23% at 100% 100%,
      rgba(74, 74, 226, 0.6) 0%,
      rgba(111, 186, 254, 0.47) 100%
    ),
    radial-gradient(50.16% 50.16% at -4.45% 0%, #132aa0 0%, #a661ff 100%);
    margin-right: 20px;
    min-width: 240px;
    height: 175px;
    padding: 30px 49px 30px 26px;
    color: #fff;
    border-radius: 8px;
    box-shadow: 0 22.36px 30.0124px #27275f30;
}
`;

const TotalProfit = styled.div`
  background: radial-gradient(
      86.86% 86.86% at 5.86% 4.38%,
      rgba(179, 255, 55, 0.42) 0%,
      rgba(54, 245, 177, 0.23) 100%
    ),
    #32c37d;
  min-width: 240px;
  height: 175px;
  padding: 30px 49px 30px 26px;
  color: #fff;
  border-radius: 8px;
  box-shadow: 0 22px 30px #27275f30;
`;

const TextSection = styled.div`
  width: 35%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 925px) {
    width: 50%;
    margin-top: 100px;
  }
`;

const TextSubtitle = styled.h3`
  font-weight: 400;
  color: #fff;
  font-size: 22px;
  line-height: 28px;
  margin-bottom: 25px;

  @media (max-width: 925px) {
    font-size: 20px;
  }
`;

const TextTitle = styled.h2`
  color: #fff;
  font-weight: 400;
  font-size: 54px;
  line-height: 110%;
  margin-bottom: 30px;

  span {
    font-weight: 700;
  }

  @media (max-width: 925px) {
    font-size: 42px;
  }
`;

const TextParagraph = styled.p`
font-size: 26px;
    line-height: 33px;
    color: #fff;

    @media (max-width: 925px) {
        font-size: 24px;
      }
}
`;

const StackedSection = () => {
  return (
    <SectionContainer>
      <SectionInner>
        <Cards>
          <MainCard>
            <h3>
              You’re{" "}
              <span>
                up
                <br /> 5.74%
              </span>{" "}
              today
            </h3>
            <CardExchange>
              <span>
                <img className="binance" src={binanceIcon} alt="Binance Icon" />{" "}
                Binance
              </span>
              <span>
                <img src={ftxIcon} alt="FTX Icon" /> FTX
              </span>
              <span>
                <img src={bybitIcon} alt="ByBit Icon" /> ByBit
              </span>
            </CardExchange>
            <CardsTotalContainer>
              <TotalPortfolio>
                <h4>Total portfolio</h4>
                <span>13,100$</span>
              </TotalPortfolio>
              <TotalProfit>
                <h4>Total profit</h4>
                <span>459.53$</span>
              </TotalProfit>
            </CardsTotalContainer>
          </MainCard>
        </Cards>
        <TextSection>
          <TextSubtitle>Stacked makes it easy to</TextSubtitle>
          <TextTitle>
            Manage all of your accounts <span>in one place.</span>
          </TextTitle>
          <TextParagraph>
            Securely connect to your exchange accounts and unlock the easiest
            way to manage your entire portfolio.
          </TextParagraph>
        </TextSection>
      </SectionInner>
      <ExchangeSection />
      <Advantages />
      <Banner />
    </SectionContainer>
  );
};

export default StackedSection;
