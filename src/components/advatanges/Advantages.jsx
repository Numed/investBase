import styled from "styled-components";
import firstAdvantage from "../../assets/Features/advantage1.svg";
import secondAdvantage from "../../assets/Features/advantage2.svg";

const Section = styled.section`
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const AdvantagesContainer = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 780px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const Advantage = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;

  img {
    margin: 0 25px 0 0;
  }

  @media (max-width: 780px) {
    &:not(:first-child) {
      margin-top: 65px;
    }
  }
`;

const TextSection = styled.div`
  color: #fff;
  max-width: 300px;

  h3 {
    font-size: 22px;
    line-height: 28px;
    font-weight: 400;
    margin-bottom: 30px;
  }

  p {
    font-size: 16px;
    line-height: 21px;
  }
`;

const Advantages = () => {
  return (
    <Section>
      <AdvantagesContainer>
        <Advantage>
          <img src={firstAdvantage} alt="Non-Custodial" />
          <TextSection>
            <h3>Non-Custodial</h3>
            <p>
              Keep your crypto on your favorite exchange. Stacked never touches
              your assets and you have access to your stack at all times.
            </p>
          </TextSection>
        </Advantage>
        <Advantage>
          <img src={secondAdvantage} alt="Safe & Secure" />
          <TextSection>
            <h3>Safe & Secure</h3>
            <p>
              Stacked uses encrypted API to send instructions to your exchange
              account to execute trades. Stacked allows you to manage all of
              your crypto on one secure platform.
            </p>
          </TextSection>
        </Advantage>
      </AdvantagesContainer>
    </Section>
  );
};

export default Advantages;
