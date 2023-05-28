import React, { FC, HTMLAttributes } from "react";
import styled from "styled-components";

interface Props extends HTMLAttributes<HTMLTextAreaElement> {
  name?: string;
  value: string;
  onChange: (event: any) => void;
}

const TextAreaComp: FC<Props> = ({ name, value, onChange, ...props }) => (
  <TextAreaStyled name={name} value={value} onChange={onChange} {...props} />
);

export default TextAreaComp;

const TextAreaStyled = styled.textarea`
  width: 100%;
  height: 150px !important;
  border-radius: 8px;
  padding: 1rem;
  min-width: 100px;
  background: ${({ theme }) => theme.colors.white} !important;
  border: 1px solid ${({ theme }) => theme.colors.primary} !important ;
  color: ${({ theme }) => theme.colors.bg};
  display: block;
  margin-bottom: 1.5rem;
`;
