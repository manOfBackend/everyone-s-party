import styled from '@emotion/styled';

interface ButtonCTAStyledProps {
  height: string;
  width?: string;
  textSize: string;
  btnColor?: string;
  textColor?: string;
}
export const ButtonCTAStyled = styled.button<ButtonCTAStyledProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${({ height }) => height};
    border-radius: 8px;
    cursor: pointer;
    background-color: ${({ btnColor, theme }) => (btnColor || theme.color.primary500)};
    color: ${({ textColor, theme }) => (textColor || theme.color.white)};
    font-weight: bold;
    font-size: ${({ textSize }) => textSize};
    line-height: ${({ textSize }) => `${Math.floor(Number(textSize) * 1.5)}px`};
    width: ${({ width }) => (width || '100%')};
    &:hover{
      filter: brightness(95%);
    }
`;

export default {
  ButtonCTAStyled,
};
