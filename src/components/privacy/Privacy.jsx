import styled from "styled-components";
import alameda from "../../assets/Footer/Backed/alameda.svg";
import coinfund from "../../assets/Footer/Backed/coinfund.svg";
import jumpcapital from "../../assets/Footer/Backed/jumpcapital.svg";
import motivate from "../../assets/Footer/Backed/motivate.svg";
import startingline from "../../assets/Footer/Backed/startingline.svg";

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding-top: 70px;
  padding-bottom: 40px;
  background-color: #242546;
`;

const SectionInner = styled.div`
  margin: 0 auto;
  max-width: 75%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const BackedIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 60px;

  span {
    display: inline-block;
    font-size: 12px;
    line-height: 15px;
    color: #ffffff4d;
  }

  img {
    width: 75px;

    &:nth-child(2) {
      width: 75px;
    }

    &:nth-child(3) {
      width: 131px;
    }

    &:nth-child(4),
    &:nth-child(5) {
      width: 98px;
    }

    &:nth-child(6) {
      width: 106px;
    }
  }
`;

const TextSection = styled.div`
  width: 100%;
  padding: 10px;

  a {
    color: #007bff;
    text-decoration: none;
    background-color: transparent;
  }
`;

const Paragraph = styled.p`
  font-size: 12px;
  line-height: 145%;
  color: #ffffff4d;
  margin-bottom: 10px;
`;

const Privacy = () => {
  return (
    <Section>
      <SectionInner>
        <BackedIcon>
          <span>Backed by: </span>
          <img src={coinfund} alt="coinfund" />
          <img src={alameda} alt="alameda" />
          <img src={jumpcapital} alt="jumpcapital" />
          <img src={motivate} alt="motivate" />
          <img src={startingline} alt="startingline" />
        </BackedIcon>
        <TextSection>
          <Paragraph>
            All investing involves risk, including the possible loss of all the
            money you invest, and past performance does not guarantee future
            performance. Historical returns expected returns, and probability
            projections are provided for informational and illustrative
            purposes, and may not reflect actual future performance.
          </Paragraph>
          <Paragraph>
            Investment management and advisory services will be provided by
            Stacked Finance LLC (“Stacked ”), an SEC-registered investment
            adviser. Stacked offers a software-based financial advice & trade
            execution platform.
          </Paragraph>
          <Paragraph>
            Stacked is not a broker-dealer, exchange, custodian, wallet
            provider, or counterparty. Investing in cryptocurrency is highly
            speculative and volatile. Stacked is only suitable for investors who
            fully understand the risk of loss and may experience large
            drawdowns. Investors should never invest more than they can afford
            to lose. Stacked allows you to securely connect and manage your
            assets in partnership with FTX US, Coinbase and other top exchanges.
            Crypto investment services are provided to Stacked customers by West
            Realm Shires Services, Inc., d/b/a FTX US. For more information,{" "}
            <a href="#">click here.</a>
          </Paragraph>
          <Paragraph>
            Images throughout Stacked websites, mobile app, advertisements, &
            social media accounts are designed to illustrate the user experience
            and features of Stacked products. These images do not reflect the
            actual performance of Stacked recommendations.
          </Paragraph>
          <Paragraph>
            By using this website, you understand the information being
            presented is provided for informational purposes only and agree to
            our Terms of Use and Privacy Policy. Stacked relies on information
            from various sources believed to be reliable, including clients and
            third parties, but cannot guarantee the accuracy and completeness of
            that information. Nothing in this communication should be construed
            as an offer, recommendation, or solicitation to buy or sell any
            security. Additionally, Stacked & its affiliates do not provide tax
            advice, and investors are encouraged to consult with their personal
            tax advisors.
          </Paragraph>
          <Paragraph>
            The Annual Percentage Yield (APY) for the stablecoin and digital
            asset lending may change at any time.
          </Paragraph>
          <Paragraph>
            Stacked DBA, Stacked Labs, and Stacked Financial are wholly owned
            subsidiaries of Stacked Finance, Inc.
          </Paragraph>
        </TextSection>
      </SectionInner>
    </Section>
  );
};

export default Privacy;
