import styled from "styled-components";
import history from "../../assets/Pre-builds/history-icon.svg";
import botChart from "../../assets/Bots/bot-chart.svg";
import psyho from "../../assets/Bots/Icons/psyho.png";
import samurai from "../../assets/Bots/Icons/samurai.svg";
import swCapital from "../../assets/Bots/Icons/sw-capital.svg";
import horse from "../../assets/Bots/Icons/horse.png";

import {
  Card,
  HistoryZone,
  Period,
  CardSection,
  Cards,
  TextParagraph,
  TextSection,
  TextTitle,
  Button,
  SectionInner,
  TotalPercent,
  CardTitle,
} from "../preBuild/styles";

const Section = styled.section`
    width: 100%:
    height: 100%;
    margin-top: 100px;
    padding-bottom: 40px;
`;

const CardContainer = styled(Card)`
  width: 250px;
  height: 320px;
  padding: 17px 23px;
  background-color: #fff;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
  transition: transform 0.5s ease-in-out;
  transition: transform 0.5s ease-in-out, -webkit-transform 0.5s ease-in-out;
  cursor: default;

  &.active {
    transform: scale(0.9);
  }
`;

const CardHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
`;

const Price = styled.span`
  font-weight: 500;
  font-size: 10px;
  line-height: 13px;
  color: #4a4ae2;
  margin-top: 2px;
`;

const History = styled(HistoryZone)`
  position: unset;
`;

const CardInner = styled.div`
  pointer-events: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  align-items: center;
`;

const Avatar = styled.div`
  display: block;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin-bottom: 8px;

  img {
    height: 100%;
    margin-bottom: 30px;
  }
`;

const BotSection = () => {
  const onActive = (e) => {
    e.classList.add("active");
    activeStyles();
  };

  const activeStyles = () => {
    const cards = document.querySelectorAll(".sc-lbOyJj");
    const activeCard = document.querySelector(".active");
    for (const card of cards) {
      if (!card.classList.contains("active")) {
        card.style.transform = "scale(0.8)";
      } else {
        activeCard.style.transform = "scale(0.9)";
      }
    }
  };

  const onDeactive = (e) => {
    const cards = document.querySelectorAll(".sc-lbOyJj");
    e.classList.remove("active");
    for (const card of cards) {
      if (!card.classList.contains("active")) {
        card.style.transform = "scale(1)";
      }
    }
  };

  return (
    <Section>
      <SectionInner>
        <TextSection>
          <TextTitle>
            Automate vetted <span>trading bots</span>
          </TextTitle>
          <TextParagraph>
            The Stacked Strategy Marketplace is a collection of live tested
            trading strategies from numerous authors. Get verified performance
            data of live trades from every bot.
          </TextParagraph>
          <TextParagraph>
            Stacked is the easiest way to run a trading strategy without any
            technical experience.
          </TextParagraph>
          <Button>See all Strategies</Button>
        </TextSection>
        <CardSection>
          <Cards>
            <CardContainer
              onMouseOver={(e) => onActive(e.target)}
              onMouseOut={(e) => onDeactive(e.target)}
            >
              <CardInner>
                <CardHeader>
                  <div className="price">
                    <Price>From $250/mo</Price>
                  </div>
                  <History>
                    <img src={history} alt="History Icon" />
                    <span>12 month</span>
                  </History>
                </CardHeader>
                <Avatar>
                  <img src={psyho} alt="Psyho bot" />
                </Avatar>
                <CardTitle>Psycho Bot</CardTitle>
                <img src={botChart} alt="Bot Char" />
                <Period>Period PnL</Period>
                <TotalPercent>1192.23%</TotalPercent>
              </CardInner>
            </CardContainer>
            <CardContainer
              onMouseOver={(e) => onActive(e.target)}
              onMouseOut={(e) => onDeactive(e.target)}
            >
              <CardInner>
                <CardHeader>
                  <div className="price">
                    <Price>From $299/mo</Price>
                  </div>
                  <History>
                    <img src={history} alt="History Icon" />
                    <span>8 month</span>
                  </History>
                </CardHeader>
                <Avatar>
                  <img src={samurai} alt="Samurai Scalp" />
                </Avatar>
                <CardTitle>Samurai Scalp</CardTitle>
                <img src={botChart} alt="Bot Char" />
                <Period>Period PnL</Period>
                <TotalPercent>198.52%</TotalPercent>
              </CardInner>
            </CardContainer>
            <CardContainer
              onMouseOver={(e) => onActive(e.target)}
              onMouseOut={(e) => onDeactive(e.target)}
            >
              <CardInner>
                <CardHeader>
                  <div className="price">
                    <Price>From $300/mo</Price>
                  </div>
                  <History>
                    <img src={history} alt="History Icon" />
                    <span>2 month</span>
                  </History>
                </CardHeader>
                <Avatar>
                  <img src={swCapital} alt="SW Capital Bot" />
                </Avatar>
                <CardTitle>SW Capital Bot</CardTitle>
                <img src={botChart} alt="Bot Char" />
                <Period>Period PnL</Period>
                <TotalPercent>547.53%</TotalPercent>
              </CardInner>
            </CardContainer>
            <CardContainer
              onMouseOver={(e) => onActive(e.target)}
              onMouseOut={(e) => onDeactive(e.target)}
            >
              <CardInner>
                <CardHeader>
                  <div className="price">
                    <Price>From $800/mo</Price>
                  </div>
                  <History>
                    <img src={history} alt="History Icon" />
                    <span>6 month</span>
                  </History>
                </CardHeader>
                <Avatar>
                  <img src={horse} alt="Trend king" />
                </Avatar>
                <CardTitle>Trend King</CardTitle>
                <img src={botChart} alt="Bot Char" />
                <Period>Period PnL</Period>
                <TotalPercent>1169.39%</TotalPercent>
              </CardInner>
            </CardContainer>
          </Cards>
        </CardSection>
      </SectionInner>
    </Section>
  );
};

export default BotSection;
