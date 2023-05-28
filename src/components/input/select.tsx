import React, { FC, HTMLAttributes } from "react";
import styled from "styled-components";
import selectType from "../../types/select";

interface Props extends HTMLAttributes<HTMLSelectElement> {
  name: string;
  value: string;
  onChange: (event: any) => void;
  options: selectType;
}

const SelectField: FC<Props> = ({
  name,
  value,
  onChange,
  options,
  ...props
}) => (
  <SelectFieldStyled value={value} onChange={onChange} name={name} {...props}>
    <option value="">{props.placeholder}</option>
    {options.map((opt) => (
      <option value={opt.value} key={opt.value}>
        {opt.value}
      </option>
    ))}
  </SelectFieldStyled>
);

export default SelectField;

const SelectFieldStyled = styled.select`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  padding: 10px 1rem;
  min-width: 100px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  display: block;
  margin-bottom: 1.5rem;
`;
