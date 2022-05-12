import React from 'react';
import RowDivider from '../RowDivider';
import { LoginInput, LoginSpan, LoginDiv } from './style';

interface MenuProps {
  name: string;
  id: string;
  value: string;
  placeholder: string;
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const LoginTextField = ({ value, id, name, onchange, placeholder }: MenuProps) => (
  <LoginDiv>
    <LoginSpan className="mr-8">{name}</LoginSpan>
    <LoginInput type="text" id={id} value={value} onChange={onchange} placeholder={placeholder} />
  </LoginDiv>
);

export default LoginTextField;
