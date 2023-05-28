import React, { FC, HTMLAttributes } from "react";
import styled, { keyframes } from "styled-components";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  title: string;
  outlined?: boolean;
  type?: "button" | "submit" | "reset";
  isLoading?: boolean;
}

const Button: FC<Props> = ({
  title,
  outlined,
  isLoading,
  type = "button",
  ...props
}) => (
  <ButtonStyled
    disabled={isLoading}
    type={type}
    className={outlined ? "outlined" : ""}
    {...props}
  >
    {isLoading ? <div className="loader" /> : title}
  </ButtonStyled>
);

export default Button;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const ButtonStyled = styled.button`
  width: auto;
  height: 45px;
  border-radius: 8px;
  padding: 10px 1rem;
  min-width: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primary};
  letter-spacing: 1px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  transition: all 0.4s ease-in-out;
  color: ${({ theme }) => theme.colors.bg};
  font-weight: 600;

  .loader {
    border: 2px solid ${({ theme }) => theme.colors.white};
    border-top: 2px solid ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    width: 18px;
    height: 18px;
    animation: ${spin} 0.6s linear infinite;
  }

  &:hover {
    background: none;
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:disabled {
    cursor: not-allowed;
  }

  &.outlined {
    background: none;
    color: ${({ theme }) => theme.colors.white};
    border-color: ${({ theme }) => theme.colors.white};

    &:hover {
      background: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.bg};
      border-color: ${({ theme }) => theme.colors.white};
    }
  }
`;
