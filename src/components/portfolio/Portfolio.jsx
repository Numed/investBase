import { useState } from "react";
import usdt from "../../assets/CryptoIcons/usdt.svg";
import btc from "../../assets/CryptoIcons/btc.svg";
import eth from "../../assets/CryptoIcons/eth.svg";
import link from "../../assets/CryptoIcons/link.svg";
import uni from "../../assets/CryptoIcons/uni.svg";
import doge from "../../assets/CryptoIcons/doge.svg";
import { Chart, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import {
  LineChart,
  Input,
  Crypto,
  CryptoInner,
  Section,
  Circle,
  Ul,
  TextParagraph,
  TextSection,
  TextTitle,
} from "./style";

Chart.register(ArcElement);

const Portfolio = () => {
  const [USDTheter, setUsdt] = useState(20);
  const [Bitcoin, setBtc] = useState(8);
  const [Ethurium, setEth] = useState(35);
  const [Link, setLink] = useState(10);
  const [Dai, setDai] = useState(5);
  const [Doge, setDoge] = useState(22);

  const data = {
    datasets: [
      {
        data: [USDTheter, Bitcoin, Ethurium, Link, Dai, Doge],
        backgroundColor: [
          "#26a17b",
          "#f7931a",
          "#627eea",
          "#3d63c8",
          "#df7eac",
          "#bfbbbb",
        ],
        hoverOffset: 4,
        borderWidth: 0,
        cutout: "95%",
      },
    ],
  };

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
          <Doughnut data={data} className="doughnut" />
          <CryptoInner>
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
          </CryptoInner>
        </Circle>
      </Section>
      <LineChart />
    </>
  );
};

export default Portfolio;
