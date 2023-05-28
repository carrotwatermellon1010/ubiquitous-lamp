import React, { FC, HTMLAttributes } from "react";
import styled from "styled-components";

interface Props extends HTMLAttributes<HTMLInputElement> {
  type?: "text" | "number" | "date" | "email" | "address" | "password";
  name: string;
  value: string;
  onChange: (event: any) => void;
}

const InputField: FC<Props> = ({
  type = "text",
  name,
  value,
  onChange,
  ...props
}) => (
  <InputFieldStyled
    value={value}
    onChange={onChange}
    type={type}
    name={name}
    {...props}
  />
);

export default InputField;

const InputFieldStyled = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  padding: 10px 1rem;
  min-width: 100px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.bg};
  display: block;
  margin-bottom: 1.5rem;
`;
