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
  }

  h5 {
    font-weight: 400;
    font-size: 22px;
    line-height: 28px;
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
