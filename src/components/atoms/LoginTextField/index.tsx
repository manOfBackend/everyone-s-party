import React from 'react';
import { LoginInput } from './style';

interface MenuProps {
  name: string;
  id: string;
  value: string;
  placeholder: string;
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const LoginTextField = ({
  value, id, name, onchange, placeholder,
}: MenuProps) => (
  <div className="mt-2.5">
    <span className="mr-8">{name}</span>
    <LoginInput type="text" id={id} value={value} onChange={onchange} placeholder={placeholder} />
  </div>
);

export default LoginTextField;
