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
  }
`;

const NavLinks = styled.div`
  display: flex;
  justy-content: space-between;
  align-items: center;

  .navbar-link {
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
    @media (max-width: 850px) {
        display: none;
      }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 40px;

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

  @media (max-width: 850px) {
    display: none;
  }
`;

const HamburgerMenu = styled.div`
  display: none;

  .fas {
    transform: scale(1.2);
    z-index: -1;
    color: #3c3463;
  }

  @media (max-width: 850px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    cursor: pointer;

    &.active {
      cursor: default;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      height: 100%;
      width: 100%;
      z-index: 10;
      background: #fff;

      & .fas {
        cursor: pointer;
        position: fixed;
        top: 30px;
        right: 50px;
        z-index: 10;
      }

      & + .navbar-links {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        z-index: 10;

        & .navbar-link {
          display: block;

          &:not(:first-child) {
            margin-left: 0;
            margin-top: 20px;
          }
        }

        & .sign {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-left: 0;
          justify-content: center;

          a {
            margin-top: 15px;
            &:last-child {
              margin-left: 0;
            }
          }
        }
      }
    }
  }
`;

const HeaderNav = () => {
  const toggleActive = (e) => {
    const menu = e;
    const menuIcon = document.querySelector(".hamburger-menu .fas");

    if (menu.classList.contains("fas")) {
      menu.classList.replace("fa-times", "fa-bars");
      menu.parentElement.classList.remove("active");
    } else {
      menu.classList.add("active");
      menuIcon.classList.replace("fa-bars", "fa-times");
    }
  };

  return (
    <Header>
      <div className="header-logo">
        <LogoTitle>Invest</LogoTitle>
      </div>
      <nav>
        <Ul className="navbar">
          <HamburgerMenu
            className="hamburger-menu"
            onClick={(e) => toggleActive(e.target)}
          >
            <i className="fas fa-bars"></i>
          </HamburgerMenu>
          <NavLinks className="navbar-links">
            <li className="navbar-link">
              <a href="#">Portfolio Manager</a>
            </li>
            <li className="navbar-link">
              <a href="#">Investing</a>
            </li>
            <li className="navbar-link">
              <a href="#">Marketplace</a>
            </li>
            <li className="navbar-link">
              <a href="#">Pricing</a>
            </li>
            <ButtonContainer className="sign">
              <a href="#">LogIn</a>
              <a href="#">Get started</a>
            </ButtonContainer>
          </NavLinks>
        </Ul>
      </nav>
    </Header>
  );
};

export default HeaderNav;
