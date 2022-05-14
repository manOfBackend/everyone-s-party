import React from 'react';
import RowDivider from '../RowDivider';
import { SubmitBtn } from './style';

interface MenuProps {
  title: string;
  color: string;
  textColor: string;
  handleSubmit: (e?: React.FormEvent<HTMLFormElement>) => void;
}
const SubmitButton = ({
  title,
  color,
  textColor,
  handleSubmit,
}: MenuProps) => (
  <SubmitBtn
    style={{ backgroundColor: `${color}`, color: `${textColor}` }}
    type="submit"
    onSubmit={() => handleSubmit()}
  >
    {title}
  </SubmitBtn>
);

export default SubmitButton;
