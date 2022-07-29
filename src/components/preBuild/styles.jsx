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
`;

export const SectionInner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const CardSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
`;

export const Cards = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  justify-content: space-evenly;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px 0;
`;

export const Card = styled.div`
  width: 80%;
  height: 100%;
  background: #fff;
  color: #222;
  filter: drop-shadow(2px 1px 7px rgba(0, 0, 0, 0.25));
  position: relative;
`;

export const FrontCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding: 40px 25px 20px;
  border-radius: 7px;
  backface-visibility: hidden;
  transform: rotateY(0);
  transition: -webkit-transform 1s ease-in-out;
  transition: transform 1s ease-in-out;
  transition: transform 1s ease-in-out, -webkit-transform 1s ease-in-out;
  transform-style: preserve-3d;
`;

export const BackCard = styled.div`
  display: none;
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
`;

export const TextParagraph = styled.p`
  font-size: 20px;
  line-height: 26px;
  color: #2f3158;
  margin-bottom: 50px;
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