import styled from "styled-components";

const Section = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 160px;
`;

const SectionInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;

  span {
    font-weight: 700;
  }
`;

const BannerTitle = styled.h2`
  font-size: 76px;
  line-height: 120%;
  text-align: center;
  letter-spacing: -0.02em;
  font-weight: 400;
  margin-bottom: 18px;

  @media (max-width: 925px) {
    font-size: 64px;
  }

  @media (max-width: 780px) {
    font-size: 46px;
  }

  @media (max-width: 580px) {
    font-size: 28px;
  }
`;

const BannerSubtitle = styled.h3`
  font-size: 26px;
  line-height: 33px;
  text-align: center;
  font-weight: 400;
  max-width: 584px;
  margin: 0 auto;
`;

const Statiscics = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 100px;
  width: 80%;

  @media (max-width: 780px) {
    width: 100%;
  }

  @media (max-width: 580px) {
    padding-top: 50px;
  }

  @media (max-width: 480px) {
    flex-wrap: wrap;
  }
`;

const BannerItem = styled.div`
  width: 240px;
  min-width: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h4 {
    font-weight: 700;
    font-size: 54px;
    line-height: 120%;
    letter-spacing: -0.02em;
    margin-bottom: 32px;

    @media (max-width: 925px) {
      font-size: 42px;
    }

    @media (max-width: 580px) {
      font-size: 28px;
    }
    @media (max-width: 480px) {
      margin-bottom: 14px;
    }
  }

  h5 {
    font-weight: 400;
    font-size: 22px;
    line-height: 28px;

    @media (max-width: 580px) {
      font-size: 24px;
      text-align: center;
    }
  }

  @media (max-width: 780px) {
    min-width: 33.3%;
    width: 0;
    height: 100%;
  }

  @media (max-width: 580px) {
    min-width: 0;
  }

  @media (max-width: 480px) {
    min-width: 60%;
    &:not(:first-child) {
      margin-top: 40px;
    }
  }
`;

const Banner = () => {
  return (
    <Section>
      <SectionInner>
        <BannerTitle>
          Because trading<span> is hard</span>
        </BannerTitle>
        <BannerSubtitle>
          Thousands of people trust Stacked to put their{" "}
          <span>portfolio on auto-pilot</span>
        </BannerSubtitle>
        <Statiscics>
          <BannerItem>
            <h4>100m+</h4>
            <h5>Connected assets</h5>
          </BannerItem>
          <BannerItem>
            <h4>$10bn+</h4>
            <h5>Assets Traded</h5>
          </BannerItem>
          <BannerItem>
            <h4>1,000,000+</h4>
            <h5>Trades Automated</h5>
          </BannerItem>
        </Statiscics>
      </SectionInner>
    </Section>
  );
};

export default Banner;
