import {
  MainSection,
  SectionInner,
  SectionTitle,
  CardSection,
  Cards,
  TextParagraph,
  TextSection,
  TextTitle,
  Button,
} from "./styles";

import CardList from "../cardsList/CardList";
import BotSection from "../botSection/BotSection";

const PreBuild = () => {
  return (
    <MainSection>
      <SectionTitle>
        Take the guesswork out of <span>crypto investing</span>
      </SectionTitle>
      <SectionInner>
        <CardSection>
          <Cards>
            <CardList />
          </Cards>
        </CardSection>
        <TextSection>
          <TextTitle>
            Invest <br /> in curated <br /> <span>portfolios</span>
          </TextTitle>
          <TextParagraph>
            Pre-built Stacks are designed to give you instant access to
            pre-built portfolios modeled after some of the most popular crypto
            indexes, hedge funds, and other investor portfolios.
          </TextParagraph>
          <TextParagraph>
            Not sure how to invest? Follow the experts.
          </TextParagraph>
          <Button>See all stacks</Button>
        </TextSection>
      </SectionInner>
      <BotSection />
    </MainSection>
  );
};

export default PreBuild;
