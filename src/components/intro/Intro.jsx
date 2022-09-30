import styled from "styled-components";
import card1 from "../../assets/Cards/header-cards1.png";
import card2 from "../../assets/Cards/header-cards2.png";
import card3 from "../../assets/Cards/header-cards3.png";
import card4 from "../../assets/Cards/header-cards4.png";
import lineChart from "../../assets/Charts/line-chart.svg";

const Section = styled.section`
  width: 100%;
  height: 100%;
  margin-top: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 25px;

  @media (max-width: 850px) {
    flex-wrap: wrap;
  }
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 33.3%;

  @media (max-width: 850px) {
    max-width: 100%;
    text-align: center;
    align-items: center;
    margin-bottom: 40px;
  }
`;

const TextSectionTitle = styled.h2`
  font-size: 54px;
  line-height: 120%;
  letter-spacing: -0.02em;
  color: #3c3463;
  font-weight: 400;
  margin-bottom: 15px;

  span {
    display: inline-block;
    font-weight: 700;
    background: #837af9;
    background: linear-gradient(to right, #837af9 0%, #4570d1 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 925px) {
    font-size: 42px;
  }

  @media (max-width: 850px) {
    font-size: 36px;
  }
`;

const TextSectionSubtitle = styled.p`
  color: #3c3463;
  font-size: 22px;
  line-height: 28px;
  margin-bottom: 36px;

  @media (max-width: 925px) {
    font-size: 20px;
  }
`;

const GetStarted = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  width: 185px;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #fff;
  border-radius: 6px;
  margin: 0 0 40px 0;
  padding-top: 5px;
  background: #4a4ae2;
  text-decoration: none;
  transition: -webkit-box-shadow 0.3s;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 16px #4e43ca59;
  }
`;

const ImgSection = styled.div`
  width: 660px;
  height: 560px;
  padding-left: 100px;

  @media (max-width: 680px) {
    padding-left: 50px;
  }

  @media (max-width: 550px) {
    padding-left: 0px;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

const Cards = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
`;

const Card = styled.div`
  width: 185px;
  height: 260px;
  position: absolute;

  &:first-child {
    height: 395px;
    top: 41%;
    left: 55.5%;
    background: url(${card1}) no-repeat;
    background-size: cover;
    animation: fly;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;

    @media (max-width: 925px) {
      height: 65%;
    }
  }

  &:nth-child(2) {
    top: 54%;
    left: -1%;
    background: url(${card2}) no-repeat;
    background-size: cover;
    animation: fly2;
    animation-duration: 3s;
    animation-delay: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  &:nth-child(3) {
    top: 1%;
    left: 3%;
    background: url(${card3}) no-repeat;
    background-size: cover;
    animation: fly3;
    animation-duration: 4s;
    animation-delay: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  &:last-child {
    top: -13%;
    left: 44.5%;
    background: url(${card4}) no-repeat;
    background-size: cover;

    animation: fly4;
    animation-duration: 4s;
    animation-delay: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }
`;

const Circle = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 50%;
  background: #155a99;
  background: radial-gradient(
      58.47% 150.8% at 100% 98.16%,
      rgba(74, 74, 226, 0.6) 0%,
      rgba(95, 178, 255, 0.47) 100%
    ),
    radial-gradient(50.16% 49.23% at -4.45% 0%, #155a99 0%, #9243f7 100%);
  position: relative;
  top: -100%;
  z-index: -1;

  &::after {
    content: "";
    display: block;
    height: 100%;
    width: 578px;
    position: absolute;
    top: 0;
    left: -28px;
    background-image: url(${lineChart});
    background-repeat: no-repeat;
    background-position: 64px 174px;
    pointer-events: none;

    @media (max-width: 580px) {
      width: 100%;
      left: 0px;
    }
  }
`;

const CircleWave = styled.div`
  border: 1px solid #4a4ae2;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: -1;
  animation: wave;
  animation-duration: 20s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @media (max-width: 850px) {
    animation: wave2;
  }

  &:nth-child(2) {
    animation-delay: 5s;
  }

  &:nth-child(3) {
    animation-delay: 10s;
  }

  &:nth-child(4) {
    animation-delay: 15s;
  }
`;

const Intro = () => {
  return (
    <Section>
      <TextSection>
        <TextSectionTitle>
          Smart <br />
          crypto investing <span>for everyone</span>
        </TextSectionTitle>
        <TextSectionSubtitle>
          Manage your assets & instantly invest in pre-built portfolios and
          strategies from leading hedge funds and traders.
        </TextSectionSubtitle>
        <GetStarted>Get Started For Free</GetStarted>
      </TextSection>
      <ImgSection>
        <Cards>
          <Card />
          <Card />
          <Card />
          <Card />
        </Cards>
        <Circle>
          <CircleWave />
          <CircleWave />
          <CircleWave />
          <CircleWave />
        </Circle>
      </ImgSection>
    </Section>
  );
};

export default Intro;
