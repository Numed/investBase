import styled from "styled-components";
import circle from "../../assets/Pre-builds/SBF Basket/circle.svg";
import circleRobin from "../../assets/Pre-builds/Robinhood 6/circle.svg";
import circleProtos from "../../assets/Pre-builds/Protos Trend/circle.svg";
import circleLargeCap from "../../assets/Pre-builds/LargeCap 10/circle.png";

export const MainSection = styled.div`
  padding-top: 60px;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #dee2f3 0%, #f5f1e9 100%);
`;

export const SectionTitle = styled.h2`
  font-size: 76px;
  line-height: 120%;
  text-align: center;
  font-weight: 400;
  letter-spacing: -0.02em;
  color: #4a4ae2;
  width: 100%;
  max-width: 805px;
  margin: 0 auto 130px;

  span {
    font-weight: 700;
  }

  @media (max-width: 925px) {
    font-size: 64px;
  }

  @media (max-width: 780px) {
    font-size: 54px;
  }

  @media (max-width: 580px) {
    font-size: 36px;
  }
`;

export const SectionInner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 780px) {
    flex-wrap: wrap;
  }
`;

export const CardSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;

  @media (max-width: 780px) {
    width: 70%;
  }
`;

export const Cards = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  justify-content: space-evenly;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px 0;

  @media (max-width: 925px) {
    gap: 50px;
  }

  @media (max-width: 580px) {
    grid-template-columns: repeat(1, 1fr);
    justify-content: center;
  }
`;

export const Card = styled.div`
  width: 80%;
  height: 350px;
  perspective: 1000px;
  color: #222;
  border-radius: 7px;
  filter: drop-shadow(2px 1px 7px rgba(0, 0, 0, 0.25));

  &:hover .cardInner {
    transform: rotateY(180deg);
    transition: transform 3s ease-in-out, -webkit-transform 1s ease-in-out;
  }

  @media (max-width: 925px) {
    width: 100%;
    height: 0;
    min-height: 400px;
  }

  @media (max-width: 780px) {
    min-height: 370px;
  }

  @media (max-width: 580px) {
    width: 75%;
    margin: 0 auto;
  }

  @media (max-width: 480px) {
    width: 90%;
  }
`;

export const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
`;

export const FrontCard = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  padding: 40px 25px 20px;
  border-radius: 7px;
  background: #fff;
`;

export const BackCard = styled.div`
  display: block;
  position: absolute;
  transform: rotateY(180deg);
  backface-visibility: hidden;
  width: 100%;
  height: 100%;
  background: ${(props) => {
    if (props.brown) {
      return "#d5a11d";
    } else if (props.lightBlue) {
      return "#73c7dc";
    } else if (props.green) {
      return "#21ce99";
    } else {
      return "#2a5ada";
    }
  }};
  text-align: center;
  color: #fff;
  border-radius: 7px;
  padding: 40px 25px 20px;
`;

export const Romb = styled.div`
  height: 44px;
  width: 44px;
  margin: 0 auto 20px;
  padding-top: 4px;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &::before {
    transform: ${(props) => (props.rotated ? "rotate(0deg)" : "rotate(45deg)")};
    content: "";
    height: 100%;
    width: 100%;
    border-radius: ${(props) => (props.round ? "50%" : "6px")};
    background-color: #fff6;
    box-shadow: 0 2px 40px #00000040;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
`;

export const BackCardTitle = styled.h4`
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 10px;
`;

export const BackCardParagraph = styled.p`
  font-size: 10px;
  line-height: 14px;
  margin-bottom: 10px;
`;

export const HistoryZone = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-weight: 500;
  font-size: 8px;
  line-height: 10px;
  color: #959cbd;
  position: absolute;
  top: 10px;
  right: 16px;

  span {
    margin-left: 10px;
  }
`;

export const CardTitle = styled.h3`
  font-size: 26px;
  line-height: 33px;
  font-weight: 400;
  text-align: center;
  color: #3c3463;
  margin-bottom: 30px;
`;

export const Period = styled.span`
  font-weight: 500;
  font-size: 10px;
  line-height: 13px;
  color: #959cbd;
`;

export const TotalPercent = styled.h4`
  font-size: 26px;
  line-height: 33px;
  font-weight: 400;
  color: #5eaf61;
  margin-bottom: 4px;
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img:not(:first-child) {
    margin-left: 5px;
  }

  @media (max-width: 925px) {
    flex-wrap: wrap;
    img {
      margin: 5px;
    }
  }
`;

export const Circle = styled.div`
  width: 100%;
  min-height: 135px;
  background: url(${circle}) no-repeat center;
`;

export const CircleRobin = styled.div`
  width: 100%;
  min-height: 135px;
  background: url(${circleRobin}) no-repeat center;
`;

export const CircleProtos = styled.div`
  width: 100%;
  min-height: 135px;
  background: url(${circleProtos}) no-repeat center;
`;

export const CircleLargeCap = styled.div`
  width: 100%;
  min-height: 135px;
  background: url(${circleLargeCap}) no-repeat center;
  background-size: contain;
`;

export const More = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: #f5f6fa;
  border-radius: 4px;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #959cbd;
  margin-left: 5px;
`;

export const TextSection = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 33%;

  @media (max-width: 780px) {
    width: 70%;
    margin-top: 60px;
  }
`;

export const TextTitle = styled.h3`
  font-size: 52px;
  line-height: 67px;
  color: #2f3158;
  font-weight: 400;
  margin-bottom: 23px;

  span {
    font-weight: 700;
    background: linear-gradient(to right, #837af9 0%, #4570d1 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 480px) {
    font-size: 38px;
  }
`;

export const TextParagraph = styled.p`
  font-size: 20px;
  line-height: 26px;
  color: #2f3158;
  margin-bottom: 50px;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const Button = styled.a`
  width: 260px;
  height: 50px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 6px;
  font-size: 16px;
  line-height: 20px;
  color: #fff;
  padding-top: 3px;
  position: relative;
  z-index: 0;
  overflow: hidden;
  transition: -webkit-box-shadow 0.3s;
  transition: box-shadow 0.3s;
  transition: box-shadow 0.3s, -webkit-box-shadow 0.3s;
  cursor: pointer;

  @media (max-width: 480px) {
    width: 90%;
  }

  &:hover {
    box-shadow: 0 0 16px #4e43ca59;
  }

  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 6px;
    background-color: #4a4ae2;
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
  }

  &::after {
    content: "";
    display: block;
    width: 0;
    height: 100%;
    border-radius: 6px;
    background-color: #6456ff;
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    transition: width 0.3s;
  }

  &:hover::after {
    width: 100%;
  }
`;
