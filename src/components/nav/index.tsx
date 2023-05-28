import React, { FC } from "react";
import styled from "styled-components";
// import { useRouter } from "next/router";
// import { HiOutlineBars3BottomRight } from "react-icons/hi2";

import Button from "../../components/button";
import { NavLink, useNavigate } from "react-router-dom";
// import Link from "next/link";
// import MobileNav from "./mobile";

interface Props {
  padding?: boolean;
}

const NavBar: FC<Props> = ({ padding }) => {
  const router = useNavigate();
  // const [mobileNav, setMobileNav] = useState(false);
  return (
    <>
      <NavbarStyled className={padding ? "padding" : ""}>
        <NavLink to="/">
          <h3 className="logo">Bridge_</h3>
        </NavLink>
        <div className="nav-links">
          <a href="#features">
            <p>Features</p>
          </a>
          <a href="#faq">
            <p>Faqs</p>
          </a>
          <a href="#contact">
            <p>Contact</p>
          </a>
        </div>
        <Button title="Resolve" onClick={() => router("/wallets")} />
        {/* <HiOutlineBars3BottomRight
          className="mobile-toggle"
          onClick={() => setMobileNav(true)}
        /> */}
      </NavbarStyled>
      {/* <MobileNav isOpen={mobileNav} onClose={setMobileNav} /> */}
    </>
  );
};

export default NavBar;

const NavbarStyled = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  background: transparent;

  &.padding {
    padding: 3% 5% 0;
  }

  .logo {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: ${({ theme }) => theme.fonts.weights.w500};
    * {
      font-style: ${({ theme }) => theme.fonts.FontFace.primary};
    }
  }

  .nav-links {
    display: flex;
    align-items: center;

    a {
      margin-right: 2.2rem;
    }

    .active {
      color: ${({ theme }) => theme.colors.primary};
      font-weight: ${({ theme }) => theme.fonts.weights.w600};
    }
  }

  /* .mobile-toggle {
    display: none;
  } */

  @media screen and (max-width: 789px) {
    .nav-links {
      display: none;
    }

    .mobile-toggle {
      display: block;
      font-size: 2rem;
    }
  }
`;
