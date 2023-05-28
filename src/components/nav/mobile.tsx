import React, { FC } from "react";
import styled from "styled-components";
// import { useRouter } from "next/router";
import { AiOutlineClose } from "react-icons/ai";

import Button from "../../components/button";
import { NavLink, useNavigate } from "react-router-dom";

interface Props {
  onClose: (state: boolean) => void;
  isOpen: boolean;
}

const MobileNav: FC<Props> = ({ onClose, isOpen }) => {
  const router = useNavigate();
  return (
    <MobileNavStyled className={isOpen ? "open" : ""}>
      <div className="grp">
        <NavLink to="/">
          <h3 className="logo">RectifyBridge</h3>
        </NavLink>
        <AiOutlineClose onClick={() => onClose(false)} />
      </div>
      <a href="#features">
        <p>Features</p>
      </a>
      <a href="#faq">
        <p>Faqs</p>
      </a>
      <a href="#contact">
        <p>Contact</p>
      </a>
      <Button title="Resolve" onClick={() => router("/")} />
    </MobileNavStyled>
  );
};

export default MobileNav;

const MobileNavStyled = styled.nav`
  padding: 10% 7% 0;
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.colors.white};
  top: 0;
  right: -100vw;
  transition: all 0.3s ease-in-out;
  z-index: 30000;

  &.open {
    right: 0;
  }

  .logo {
    color: ${({ theme }) => theme.colors.primary};
    font-style: italic;
    font-weight: ${({ theme }) => theme.fonts.weights.w300};
  }

  .grp {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 4rem;

    a {
      margin: 0;
    }

    svg {
      color: ${({ theme }) => theme.colors.black};
      font-size: ${({ theme }) => theme.fonts.sizes.xl};
    }
  }
  a {
    margin-bottom: 2.5rem;
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.fonts.sizes.lg};
    display: block;
  }

  .active {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: ${({ theme }) => theme.fonts.weights.w600};
  }
`;
