import styled from '@emotion/styled';

export const HeaderStyled = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    justify-content: center;
    background-color: ${({ theme }) => theme.color.white};
`;

export const HeaderWrapper = styled.div`
  padding: 0px 20px;
  width: 100%;
  max-width: 640px;
`;
export const BottomLine = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.color.gray100};
`;

export const TopMenu = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;

`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 55px;
  height: 32px;
  padding: 6px 8px;
  background-color: ${({ theme }) => theme.color.gray100};
  color: ${({ theme }) => theme.color.gray600};
  border-radius: 8px;
  font-size: 14px;
  line-height: 20px;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
`;

export default {
  HeaderStyled,
  BottomLine,
  TopMenu,
  ButtonContainer,
};
