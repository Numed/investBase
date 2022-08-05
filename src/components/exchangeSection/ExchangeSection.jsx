import styled from "styled-components";
import aax from "../../assets/CardsExchange/aax.svg";
import binanceFutures from "../../assets/CardsExchange/binance_futures.svg";
import binance from "../../assets/CardsExchange/binance.svg";
import bitfinex from "../../assets/CardsExchange/bitfinex.svg";
import bitmex from "../../assets/CardsExchange/bitmex.svg";
import bybit from "../../assets/CardsExchange/bybit.png";
import coinbase from "../../assets/CardsExchange/coinbase.svg";
import deribit from "../../assets/CardsExchange/deribit.svg";
import ftx from "../../assets/CardsExchange/ftx.svg";
import kucoin from "../../assets/CardsExchange/kucoin.svg";
import phemex from "../../assets/CardsExchange/phemex.svg";
import voyager from "../../assets/CardsExchange/voyager.svg";

const SectionExchange = styled.section`
  width: 100%;
  display: flex;
  margin-top: 80px;
  justify-content: space-around;
  align-items: center;
  height: 100vh;

  @media (max-width: 925px) {
    height: 100%;
    padding-botton: 40px;
  }
`;

const TextSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35%;

  @media (max-width: 925px) {
    width: 70%;
  }
`;

const TextTitle = styled.h2`
  font-size: 74px;
  line-height: 110%;
  margin-bottom: 44px;
  color: #fff;

  @media (max-width: 925px) {
    font-size: 63px;
    text-align: center;
  }

  @media (max-width: 780px) {
    font-size: 48px;
  }
`;

const CardSection = styled.div`
  width: 45%;
  height: 47%;
  position: relative;

  @media (max-width: 925px) {
    display: none;
  }
`;

const Cards = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FirstGroup = styled.div`
  display: flex;
  align-items: center;

  .bybit {
    top: 29%;
    left: 0;

    img {
      height: 100%;
    }
  }

  .coinbase {
    top: 65%;
    left: 8%;

    img {
      width: 80%;
    }
  }

  .kucoin {
    top: 0;
    left: 13%;
  }

  @media (max-width: 1050px) {
    .bybit {
      left: -4%;
    }

    .coinbase {
      left: 3%;
    }

    .kucoin {
      left: 8%;
    }
  }
`;

const SecondGroup = styled.div`
  display: flex;
  align-items: center;

  .phemex {
    top: -14%;
    left: 42%;
  }

  .ftx {
    top: 20%;
    left: 36%;
  }

  .binance {
    top: 55%;
    left: 43%;
  }

  .binance-futures {
    top: 92%;
    left: 33%;
  }

  @media (max-width: 1050px) {
    .binance {
      top: 45%;
      left: 36%;
    }

    .phemex {
      top: -17%;
      left: 30%;
    }

    .binance-futures {
      top: 81%;
      left: 20%;
    }
  }
`;

const ThirdGroup = styled.div`
  display: flex;
  align-items: center;

  .bitfinex {
    top: -18%;
    right: 3%;
  }

  .deribit {
    top: 6%;
    right: 0%;
    background: #fffc;
    display: flex;
    flex-direction: column;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 15px;
      width: 55px;
      padding-top: 2px;
      background: #5eaf61;
      border-radius: 12px;
      color: #fff;
      font-weight: 500;
      font-size: 7px;
      line-height: 9px;
      position: absolute;
      bottom: -6px;
      right: -8px;
    }
  }

  .aax {
    top: 29%;
    right: 4%;
  }

  .voyager {
    background: #fffc;
    top: 58%;
    right: 0;
    display: flex;
    flex-direction: column;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 15px;
      width: 55px;
      padding-top: 2px;
      background: #5eaf61;
      border-radius: 12px;
      color: #fff;
      font-weight: 500;
      font-size: 7px;
      line-height: 9px;
      position: absolute;
      bottom: -6px;
      right: -8px;
    }
  }

  .bitmex {
    top: 91%;
    right: 6%;
  }

  @media (max-width: 1200px) {
    .bitmex {
      right: calc(20px);
    }

    .aax {
      right: calc(10px);
    }

    .voyager {
      right: calc(-20px);
    }

    .bitfinex {
      right: 0;
    }
  }

  @media (max-width: 1050px) {
    .bitmex {
      right: calc(20px);
    }

    .aax {
      right: calc(-40px);
    }

    .voyager {
      right: calc(-20px);
    }

    .bitfinex {
      right: 0;
    }
  }
`;

const Card = styled.div`
  height: 70px;
  width: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 22.36px 30.0124px #27275f30;
  border-radius: 8px;
  background-color: #fff;
  position: absolute;
  transition: transform 0.3s;
  transition: transform 0.3s, -webkit-transform 0.3s;

  &:hover {
    transform: scale(1.1);
    @media (max-width: 1200px) {
      transform: scale(1.05);
    }
  }

  &.small {
    height: 50px;
    width: 130px;
  }

  @media (max-width: 1300px) {
    height: 50px;
    width: 130px;
  }
`;

const ExchangeSection = () => {
  return (
    <SectionExchange>
      <TextSection>
        <TextTitle>Stacked currently works with</TextTitle>
      </TextSection>
      <CardSection>
        <Cards>
          <FirstGroup>
            <Card className="bybit">
              <img src={bybit} alt="ByBit" />
            </Card>
            <Card className="kucoin small">
              <img src={kucoin} alt="Kucoin" />
            </Card>
            <Card className="coinbase">
              <img src={coinbase} alt="Coinbase" />
            </Card>
          </FirstGroup>

          <SecondGroup>
            <Card className="phemex">
              <img src={phemex} alt="Phemex" />
            </Card>
            <Card className="ftx">
              <img src={ftx} alt="FTX" />
            </Card>
            <Card className="binance">
              <img src={binance} alt="Binance" />
            </Card>
            <Card className="binance-futures small">
              <img src={binanceFutures} alt="Binance Futures" />
            </Card>
          </SecondGroup>

          <ThirdGroup>
            <Card className="bitfinex small">
              <img src={bitfinex} alt="bitfinex" />
            </Card>
            <Card className="deribit small">
              <img src={deribit} alt="Deribit" />
              <span>coming soon</span>
            </Card>
            <Card className="aax small">
              <img src={aax} alt="AAX" />
            </Card>
            <Card className="voyager small">
              <img src={voyager} alt="VOYAGER" />
              <span>coming soon</span>
            </Card>
            <Card className="bitmex small">
              <img src={bitmex} alt="Bitmex" />
            </Card>
          </ThirdGroup>
        </Cards>
      </CardSection>
    </SectionExchange>
  );
};

export default ExchangeSection;
