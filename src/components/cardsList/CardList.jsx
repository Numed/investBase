import ftt from "../../assets/Pre-builds/SBF Basket/ftt.svg";
import solana from "../../assets/Pre-builds/SBF Basket/solana.svg";
import srm from "../../assets/Pre-builds/SBF Basket/srm.svg";
import sushi from "../../assets/Pre-builds/SBF Basket/sushi.svg";
import history from "../../assets/Pre-builds/history-icon.svg";
import bhc from "../../assets/Pre-builds/Robinhood 6/bhc.svg";
import bnb from "../../assets/Pre-builds/Robinhood 6/bnb.svg";
import btc from "../../assets/Pre-builds/Robinhood 6/btc.svg";
import doge from "../../assets/Pre-builds/Robinhood 6/doge.svg";
import ltc from "../../assets/Pre-builds/Robinhood 6/ltc.svg";
import usdt from "../../assets/Pre-builds/Robinhood 6/usdt.svg";
import link from "../../assets/Pre-builds/Protos Trend/link.svg";
import xrp from "../../assets/Pre-builds/LargeCap 10/xrp.svg";
import eth from "../../assets/Pre-builds/LargeCap 10/eth.svg";

import {
  CardTitle,
  Card,
  HistoryZone,
  Circle,
  Period,
  FrontCard,
  BackCard,
  Icons,
  CircleRobin,
  TotalPercent,
  CircleProtos,
  Romb,
  BackCardParagraph,
  BackCardTitle,
  CircleLargeCap,
  More,
} from "../preBuild/styles";

const CardList = () => {
  return (
    <>
      <Card>
        <FrontCard>
          <HistoryZone>
            <img src={history} alt="History Icon" />
            <span>Monthly</span>
          </HistoryZone>
          <CardTitle>Protos Trend</CardTitle>
          <CircleProtos />
          <Period>Period PnL</Period>
          <TotalPercent>+650.09%</TotalPercent>
          <Icons>
            <img src={btc} alt="Bitcoin" />
            <img src={usdt} alt="USD Tether" />
            <img src={bhc} alt="BHC" />
            <img src={bnb} alt="Binance Coin" />
            <img src={ltc} alt="Litecoin" />
            <img src={link} alt="Chainlink" />
            <More>+3</More>
          </Icons>
        </FrontCard>
        <BackCard brown>
          <Romb>PT</Romb>
          <BackCardTitle>The Protos Trend</BackCardTitle>
          <BackCardParagraph>
            The Protos Trend Index is based on a trend-following strategy. This
            Stack is updated every week by Protos Management to stay on top of
            all the newest trends and remain active in the market or reduce risk
            when necessary.
          </BackCardParagraph>
        </BackCard>
      </Card>
      <Card>
        <FrontCard>
          <HistoryZone>
            <img src={history} alt="History Icon" />
            <span>Monthly</span>
          </HistoryZone>
          <CardTitle>SBF Basket</CardTitle>
          <Circle />
          <Period>Period PnL</Period>
          <TotalPercent>+1,289.62%</TotalPercent>
          <Icons>
            <img src={ftt} alt="FTT" />
            <img src={solana} alt="Solana" />
            <img src={srm} alt="SRM" />
            <img src={sushi} alt="Sushi" />
          </Icons>
        </FrontCard>
        <BackCard lightBlue>
          <Romb round>SBF</Romb>
          <BackCardTitle>SBF Basket</BackCardTitle>
          <BackCardParagraph>
            The SBF Basket is modeled after an idea by @IDrawCharts on Twitter
            for a Sam Bankman-Fried index. These four tokens have been
            publically supported by Sam but this basket is not otherwise
            endorsed or supported by Sam Bankman-Fried or FTX and should not be
            considered investment advice.
          </BackCardParagraph>
        </BackCard>
      </Card>
      <Card>
        <FrontCard>
          <HistoryZone>
            <img src={history} alt="History Icon" />
            <span>Monthly</span>
          </HistoryZone>
          <CardTitle>Robinhood 6</CardTitle>
          <CircleRobin />
          <Period>Period PnL</Period>
          <TotalPercent>+743.34%</TotalPercent>
          <Icons>
            <img src={bhc} alt="BHC" />
            <img src={bnb} alt="Binance Coin" />
            <img src={btc} alt="Bitcoin" />
            <img src={doge} alt="Doge Coin" />
            <img src={ltc} alt="Litecoin" />
            <img src={usdt} alt="USD Tether" />
          </Icons>
        </FrontCard>
        <BackCard green>
          <Romb rotated>RH</Romb>
          <BackCardTitle>Robinhood 6</BackCardTitle>
          <BackCardParagraph>
            Robinhood 6 tracks the total return of the 6 cryptoassets offered on
            the popular Robinhood app, that are also listed on Binance, weighted
            my market capitalization. Robinhood is one of the world’s most
            popular retail investment platforms.
          </BackCardParagraph>
        </BackCard>
      </Card>
      <Card>
        <FrontCard>
          <HistoryZone>
            <img src={history} alt="History Icon" />
            <span>Monthly</span>
          </HistoryZone>
          <CardTitle>Large Cap 10</CardTitle>
          <CircleLargeCap />
          <Period>Period PnL</Period>
          <TotalPercent>+1.42%</TotalPercent>
          <Icons>
            <img src={btc} alt="Bitcoin" />
            <img src={eth} alt="Ethrium" />
            <img src={xrp} alt="Ripple" />
            <img src={ltc} alt="Litecoin" />
            <img src={bhc} alt="BHC" />
            <img src={link} alt="Chainlink" />
            <More>+3</More>
          </Icons>
        </FrontCard>
        <BackCard blue>
          <Romb>LC</Romb>
          <BackCardTitle>Large Cap 10</BackCardTitle>
          <BackCardParagraph>
            Large Cap 10 tracks the total return of 10 of the largest
            cryptoassets, as measured and weighted by free-float and 5-year
            inflation-adjusted market capitalization.
          </BackCardParagraph>
        </BackCard>
      </Card>
    </>
  );
};

export default CardList;
