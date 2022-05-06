import styled from '@emotion/styled';

interface ButtonCTAStyledProps {
  height: string;
  width: string;
  textSize: string;
}
export const ButtonCTAStyled = styled.div<ButtonCTAStyledProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${({ height }) => height};
    border-radius: 8px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.primary500};
    color: ${({ theme }) => theme.color.white};
    font-weight: bold;
    font-size: ${({ textSize }) => textSize};
    line-height: ${({ textSize }) => `${Math.floor(Number(textSize) * 1.5)}px`};
    width: ${({ width }) => width};

`;

export default {
  ButtonCTAStyled,
};
