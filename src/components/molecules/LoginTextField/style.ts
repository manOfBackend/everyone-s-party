import styled from '@emotion/styled';
// import { TextField } from '@material-ui/core';

interface LoginTextFieldstyledProps {
  height: string;
  width?: string;
  focusColor?: string;
}

export const LoginInput = styled.input<LoginTextFieldstyledProps>`
  border-top: 0px;
  border-right: 0px;
  border-left: 0px;
  border-image: initial;
  outline: 0px;
  margin: 0px;
  padding: 0px;
  caret-color: #b0b6be;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  border-radius: 0px;
  border-bottom: 2px solid #b0b6be;
  font-family: SpoqaHanSansNeo;
  font-size: 16px;
  font-weight: normal;
  line-height: 28px;
  text-align: left;
  color: #b0b6be;
  &:focus {
    border-bottom: ${({ focusColor }) => `2px solid ${focusColor} !important`};
  }
`;

export default {};
