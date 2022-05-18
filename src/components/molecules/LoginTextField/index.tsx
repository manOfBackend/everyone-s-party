import React from 'react';
import { LoginInput } from './style';

interface MenuProps {
  name: string;
  height?: string;
  width?: string;
  focusColor?: string;
  id: string;
  value: string;
  placeholder: string;
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const LoginTextField = ({
  value, id, name, onchange, placeholder, height = '44px', width = '100%', focusColor = '#53E3AC',
}: MenuProps) => (
  <div className="mt-2.5">
    <span className="mr-8">{name}</span>
    <LoginInput height={height} width={width} focusColor={focusColor} type="text" id={id} value={value} onChange={onchange} placeholder={placeholder} />
  </div>
);

export default LoginTextField;
