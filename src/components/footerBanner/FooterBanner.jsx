import styled from "styled-components";
import banner from "../../assets/footer-banner.png";

const Section = styled.section`
  position: relative;
  z-index: 3;
  top: 60px;
  padding-top: 50px;
  margin: 0 auto;
  width: 90%;
  height: 100%;
  background: radial-gradient(
      17.88% 40.47% at 74.54% 50%,
      #5429cd 0%,
      rgba(131, 122, 250, 0) 100%
    ),
    radial-gradient(
      58.47% 150.8% at 100% 98.16%,
      rgba(74, 74, 226, 0.6) 0%,
      rgba(111, 186, 254, 0.47) 100%
    ),
    radial-gradient(50.82% 104% at -0.82% 82.86%, #132aa0 0%, #a661ff 100%);
  -webkit-box-shadow: 0px 40px 30px rgb(24 24 55 / 35%);
  box-shadow: 0 40px 30px #18183759;
  border-radius: 12px;

  @media (max-width: 925px) {
    width: 95%;
  }

  @media (max-width: 780px) {
    width: 100%;
  }
`;

const SectionInner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  aling-items: center;
`;

const TextSection = styled.div`
  margin-left: 100px;
  width: 33.3%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 780px) {
    width: 50%;
    margin-left: 50px;
  }

  @media (max-width: 480px) {
    margin-left: 10px;
  }
`;

const TextTitle = styled.h2`
  font-weight: 500;
  font-size: 54px;
  line-height: 69px;
  color: #fff;
  margin-bottom: 44px;

  @media (max-width: 780px) {
    font-size: 38px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const Button = styled.a`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #fff;
  padding: 17px 36px 14px;
  border-radius: 4px;
  margin-right: 24px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: pointer;

  @media (max-width: 450px) {
    padding: 6px 30px;
    margin-bottom: 20px;
  }

  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    background-color: #65ccbf;
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
    background-color: #5bd7c7;
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-transition: width 0.3s;
    -o-transition: width 0.3s;
    transition: width 0.3s;
  }

  &:hover::after {
    width: 100%;
  }
`;

const ImgSection = styled.div`
  width: 50%;
  min-height: 570px;
  background: url(${banner}) no-repeat 30px center;
  background-size: contain;

  @media (max-width: 925px) {
    width: 55%;
  }

  @media (max-width: 780px) {
    width: 70%;
  }

  @media (max-width: 480px) {
    width: 100%;
    min-height: 100%;
  }
`;

const FooterBanner = () => {
  return (
    <Section>
      <SectionInner>
        <TextSection>
          <TextTitle>Crypto investing made easy.</TextTitle>
          <Button>Connect your exchange</Button>
        </TextSection>
        <ImgSection />
      </SectionInner>
    </Section>
  );
};

export default FooterBanner;
