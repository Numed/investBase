import styled from "styled-components";
import btc from "../../assets/Calculation/btc.svg";
import m from "../../assets/Calculation/m.svg";
import eth from "../../assets/Calculation/eth.svg";
import uniswap from "../../assets/Calculation/uniswap.svg";
import link from "../../assets/Calculation/link.svg";
import usdt from "../../assets/Calculation/usdt.svg";

const Section = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;

  @media (max-width: 850px) {
    height: 80vh;
  }

  @media (max-width: 380px) {
    height: 40vh;
    padding: 60px;
  }
`;

const SectionInner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Title = styled.h2`
  width: 100%;
  max-width: 835px;
  margin: 40px auto 76px;
  font-weight: 700;
  font-size: 54px;
  line-height: 120%;
  text-align: center;
  letter-spacing: -0.02em;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#837af9),
    to(#4570d1)
  );
  background: -o-linear-gradient(left, #837af9 0%, #4570d1 100%);
  background: linear-gradient(to right, #837af9 0%, #4570d1 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 580px) {
    font-size: 38px;
  }
`;

const Icons = styled.div`
  width: 800px;
  margin: 0 auto 50px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 380px) {
    display: none;
  }

  span {
    position: absolute;

    &:nth-child(1) {
      left: 5%;
    }

    &:nth-child(2) {
      left: 21%;
    }

    &:nth-child(3) {
      left: 35%;
    }

    &:nth-child(4) {
      right: 38%;
    }

    &:nth-child(5) {
      right: 21%;
    }

    &:nth-child(6) {
      right: 4%;

      @media (max-width: 780px) {
        right: 9%;
      }
    }
  }
`;

const CalculateSection = () => {
  return (
    <Section>
      <SectionInner>
        <Icons>
          <span>
            <img src={link} alt="Chainlink" />
          </span>
          <span>
            <img src={uniswap} alt="Uniswap" />
          </span>
          <span>
            <img src={eth} alt="ETH" />
          </span>
          <span>
            <img src={btc} alt="Bitcoin" />
          </span>
          <span>
            <img src={usdt} alt="USD Tether" />
          </span>
          <span>
            <img src={m} alt="M" />
          </span>
        </Icons>
        <Title>You no longer need a calculator to manage your crypto.</Title>
      </SectionInner>
    </Section>
  );
};

export default CalculateSection;
