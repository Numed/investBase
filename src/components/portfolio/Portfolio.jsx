import styled from "styled-components";
import { useState } from "react";
import agree from "../../assets/List/agree.svg";
import usdt from "../../assets/CryptoIcons/usdt.svg";
import btc from "../../assets/CryptoIcons/btc.svg";
import eth from "../../assets/CryptoIcons/eth.svg";
import link from "../../assets/CryptoIcons/link.svg";
import uni from "../../assets/CryptoIcons/uni.svg";
import doge from "../../assets/CryptoIcons/doge.svg";
import firstLineChart from "../../assets/Charts/bg-line-chart1.svg";
import secondLineChart from "../../assets/Charts/bg-line-chart2.svg";
import thirdLineChart from "../../assets/Charts/bg-line-chart3.svg";

const Section = styled.section`
  padding-top: 100px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const TextSection = styled.div`
  width: 33.3%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const TextTitle = styled.h2`
  font-size: 52px;
  line-height: 67px;
  color: #2f3158;
  font-weight: 400;
  margin-bottom: 23px;

  span {
    font-weight: 700;
    background: linear-gradient(to right, #837af9 0%, #4570d1 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const TextParagraph = styled.p`
  font-size: 26px;
  line-height: 33px;
  color: #2f3158;
  margin-bottom: 59px;
`;

const Ul = styled.ul`
  list-style: url(${agree});

  li {
    color: #4a4ae2;
    font-size: 22px;
    line-height: 28px;

    &:not(:last-child) {
      margin-bottom: 25px;
    }
  }
`;

const Circle = styled.div`
  width: 570px;
  height: 570px;
  border-radius: 50%;
  border: 20px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  filter: drop-shadow(10px 32.36px 30.0124px rgba(39, 39, 95, 0.4));
`;

const Crypto = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;

  img {
    transition: transform 0.2s, -webkit-transform 0.2s;
    display: block;
    width: 100%;
    margin-right: 9px;
  }

  label {
    width: 40px;
    min-width: 40px;
    color: #2f3158;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    margin-right: 9px;
    text-transform: uppercase;
    margin-top: 2px;
  }

  span {
    width: 35px;
    min-width: 35px;
    margin-left: 12px;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #2f3158;
  }

  &:hover > img {
    transform: scale(1.2);
    filter: drop-shadow(3px 5.36px 4.01px rgba(39, 39, 95, 0.19));
  }

  &:hover > label,
  &:hover > span {
    font-weight: 600;
    color: #4a4ae2;
  }
`;

const Input = styled.input`
  appearance: none;
  --webkit-appearance: none;
  width: 170px;
  min-width: 170px;
  height: 1px;
  background-color: #ced2e5;
  outline: none;
  transition: 0.3s;

  &::-webkit-slider-thumb {
    content: "";
    height: 20px;
    width: 15px;
    border-radius: 4px;
    appearance: none;
    background: #ced2e5;
    cursor: pointer;
  }

  &:hover,
  &::-webkit-slider-thumb:hover {
    background: #4a4ae2;
    filter: drop-shadow(0px 0px 20px #4a4ae2);
  }
`;

const LineChart = styled.div`
  display: block;
  width: 100%;
  height: 320px;
  position: absolute;
  bottom: 0;
  left: 0;
  background: url(${firstLineChart}), url(${secondLineChart}),
    url(${thirdLineChart});
  background-repeat: no-repeat;
  background-position: center, center bottom, center;
  pointer-events: none;
  position: relative;

  &::after {
    content: none;
    display: block;
    width: 100%;
    height: 324px;
    background: linear-gradient(180deg, #ffffff 0%, #dfe3f4 100%);
    border-radius: 8px 8px 0 0;
    z-index: -1;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

const Portfolio = () => {
  const [USDTheter, setUsdt] = useState(20);
  const [Bitcoin, setBtc] = useState(8);
  const [Ethurium, setEth] = useState(35);
  const [Link, setLink] = useState(10);
  const [Dai, setDai] = useState(5);
  const [Doge, setDoge] = useState(22);

  return (
    <>
      <Section>
        <TextSection>
          <TextTitle>
            Update your portfolio <span>in seconds.</span>
          </TextTitle>
          <TextParagraph>
            Instantly move your investment exposure in or out of stablecoins or
            allocate a portion of your portfolio to any asset with a beautiful
            interface designed for simplicity.
          </TextParagraph>
          <Ul>
            <li>Enable automatic rebalancing</li>
            <li>Backtest any portfolio instantly</li>
          </Ul>
        </TextSection>
        <Circle>
          <Crypto>
            <img src={usdt} alt="USD Tether" />
            <label htmlFor="usdt">USDT</label>
            <Input
              type="range"
              id="usdt"
              min="0"
              max="100"
              value={USDTheter}
              onChange={(e) => setUsdt(e.target.value)}
              step="1"
            />
            <span>{USDTheter} %</span>
          </Crypto>
          <Crypto>
            <img src={btc} alt="Bitcoin" />
            <label htmlFor="btc">BTC</label>
            <Input
              type="range"
              id="btc"
              min="0"
              max="100"
              value={Bitcoin}
              onChange={(e) => setBtc(e.target.value)}
              step="1"
            />
            <span>{Bitcoin} %</span>
          </Crypto>
          <Crypto>
            <img src={eth} alt="Ethurium" />
            <label htmlFor="eth">ETH</label>
            <Input
              type="range"
              id="eth"
              min="0"
              max="100"
              value={Ethurium}
              onChange={(e) => setEth(e.target.value)}
              step="1"
            />
            <span>{Ethurium} %</span>
          </Crypto>
          <Crypto>
            <img src={link} alt="Link" />
            <label htmlFor="link">LINK</label>
            <Input
              type="range"
              id="link"
              min="0"
              max="100"
              value={Link}
              onChange={(e) => setLink(e.target.value)}
              step="1"
            />
            <span>{Link} %</span>
          </Crypto>
          <Crypto>
            <img src={uni} alt="DAI" />
            <label htmlFor="dai">DAI</label>
            <Input
              type="range"
              id="dai"
              min="0"
              max="100"
              value={Dai}
              onChange={(e) => setDai(e.target.value)}
              step="1"
            />
            <span>{Dai} %</span>
          </Crypto>
          <Crypto>
            <img src={doge} alt="Doge Coin" />
            <label htmlFor="doge">DOGE</label>
            <Input
              type="range"
              id="doge"
              min="0"
              max="100"
              value={Doge}
              onChange={(e) => setDoge(e.target.value)}
              step="1"
            />
            <span>{Doge} %</span>
          </Crypto>
        </Circle>
      </Section>
      <LineChart />
    </>
  );
};

export default Portfolio;
