import { useContext } from "react";

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
import Context from "../context/Context";

Chart.register(ArcElement);

const Portfolio = () => {
  const { dataCrypto, USDTheter, Bitcoin, Ethurium, Link, Dai, Doge } =
    useContext(Context);

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
            {dataCrypto.map(({ img, name, tiker, value, action }, i) => {
              return (
                <Crypto key={i}>
                  <img src={img} alt={name} />
                  <label htmlFor={tiker}>{tiker}</label>
                  <Input
                    type="range"
                    id={tiker}
                    min="0"
                    max="100"
                    value={value}
                    onChange={(e) => action(parseInt(e.target.value))}
                    step="1"
                  />
                  <span>{value} %</span>
                </Crypto>
              );
            })}
          </CryptoInner>
        </Circle>
      </Section>
      <LineChart />
    </>
  );
};

export default Portfolio;
