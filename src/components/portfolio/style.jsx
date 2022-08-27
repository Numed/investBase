import styled from "styled-components";
import agree from "../../assets/List/agree.svg";
import firstLineChart from "../../assets/Charts/bg-line-chart1.svg";
import secondLineChart from "../../assets/Charts/bg-line-chart2.svg";
import thirdLineChart from "../../assets/Charts/bg-line-chart3.svg";

export const Section = styled.section`
  padding-top: 100px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

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

  @media (max-width: 925px) {
    padding: 100px 25px 0;
  }

  @media (max-width: 580px) {
    padding: 50px 25px 0;
    flex-wrap: wrap;
  }
`;

export const TextSection = styled.div`
  width: 33.3%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  @media (max-width: 850px) {
    width: 50%;
  }

  @media (max-width: 580px) {
    width: 90%;
    margin-bottom: 40px;
  }
`;

export const TextTitle = styled.h2`
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

  @media (max-width: 850px) {
    font-size: 42px;
  }

  @media (max-width: 580px) {
    font-size: 36px;
    text-align: center;
  }
`;

export const TextParagraph = styled.p`
  font-size: 26px;
  line-height: 33px;
  color: #2f3158;
  margin-bottom: 59px;

  @media (max-width: 850px) {
    font-size: 23px;
  }

  @media (max-width: 580px) {
    font-size: 22px;
    margin-bottom: 30px;
  }
`;

export const Ul = styled.ul`
  list-style: url(${agree});

  li {
    color: #4a4ae2;
    font-size: 22px;
    line-height: 28px;

    &:not(:last-child) {
      margin-bottom: 25px;
    }
    @media (max-width: 580px) {
      font-size: 18px;
    }
  }

  @media (max-width: 850px) {
    margin-left: 20px;
  }
`;

export const Circle = styled.div`
position: relative;
width: 570px;
height: 570px;
display: flex;
justify-content: center
align-items: center;
flex-direction: column;
filter: drop-shadow(10px 32.36px 30.0124px rgba(39, 39, 95, 0.4));

.doughnut {
  width: 100%;
  height: 100%;
}

@media (max-width: 850px) {
  width: 505px;
  height: 420px;
}

@media(max-width: 525px){
    display: none;
}
`

export const CryptoInner = styled.div`
  width: 60%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Crypto = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;

  img {
    transition: transform 0.2s, -webkit-transform 0.2s;
    display: block;
    width: 25px;
    margin-right: 9px;

    @media (max-width: 925px) {
      width: 20px;
    }
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

export const Input = styled.input`
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

  &::-moz-range-thumb {
    content: "";
    height: 20px;
    width: 15px;
    border-radius: 4px;
    appearance: none;
    background: #ced2e5;
    cursor: pointer;
    z-index: -3;
  }

  &:hover,
  &::-webkit-slider-thumb:hover {
    background: #4a4ae2;
    filter: drop-shadow(0px 0px 20px #4a4ae2);
  }

  &::-moz-range-thumb:hover,
  &::-moz-range-track:hover {
    background: #4a4ae2;
    filter: drop-shadow(0px 0px 20px #4a4ae2);
  }
`;

export const LineChart = styled.div`
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
`;
