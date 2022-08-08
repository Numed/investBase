import styled from "styled-components";
import block from "../../assets/Icons/block.svg";
import coindesk from "../../assets/Icons/coindesk.svg";
import yahoo from "../../assets/Icons/yahoo.svg";
import cointelegraph from "../../assets/Icons/cointelegraph.svg";
import forbes from "../../assets/Icons/forbes.svg";

const PartnersContainer = styled.div`
  padding: 90px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;

  span {
    margin-top: 3px;
    font-size: 14px;
    line-height: 18px;
    color: #2f3158;
  }

  @media (max-width: 560px) {
    padding: 90px 30px;
    display: grid;
    align-items: center;
    justify-content: center;
    gap: 20px;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 380px) {
    padding: 90px 15px;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Partners = () => {
  return (
    <PartnersContainer>
      <span>As seen if</span>
      <img src={forbes} alt="forbes" />
      <img src={coindesk} alt="coindesk" />
      <img src={yahoo} alt="yahoo" />
      <img src={block} alt="block" />
      <img src={cointelegraph} alt="cointelegraph" />
    </PartnersContainer>
  );
};

export default Partners;
