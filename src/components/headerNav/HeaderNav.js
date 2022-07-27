import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  height: 100%;
  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoTitle = styled.a`
  font-size: 32px;
  line-heigh: 38px;
  letter-spacing: 1.2px;
  color: #3c3463;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #007bff;
    transition: color 0.25s linear;
  }
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;

  li {
    a {
      font-size: 14px;
      line-height: 18px;
      color: #2f3158;
      opacity: 0.5;
      text-decoration: none;

      &:hover {
        opacity: 1;
        transition: opacity 0.2s linear;
      }
    }
    &:not(:first-child) {
      margin-left: 60px;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    font-weight: 600;
    padding: 4px 8px;
    border-radius: 6px;

    &:first-child {
      color: #2f3158;
    }

    &:last-child {
      margin-left: 20px;
      color: #4a4ae2;
    }

    &:hover {
      background-color: #4a4ae2;
      color: #fff;
      transition: all 0.2s linear;
    }
  }
`;

const HeaderNav = () => {
  return (
    <Header>
      <div className="header-logo">
        <LogoTitle>Invest</LogoTitle>
      </div>
      <nav>
        <Ul>
          <li>
            <a href="#">Portfolio Manager</a>
          </li>
          <li>
            <a href="#">Investing</a>
          </li>
          <li>
            <a href="#">Marketplace</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
        </Ul>
      </nav>
      <ButtonContainer className="sign">
        <a href="#">LogIn</a>
        <a href="#">Get started</a>
      </ButtonContainer>
    </Header>
  );
};

export default HeaderNav;
