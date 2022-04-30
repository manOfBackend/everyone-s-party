import styled from '@emotion/styled';
import { css } from '@emotion/css';

export const MenuContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
`;

export const MenuText = styled.div<{ isSelected: boolean }>`
    font-size: 14px;
    line-height: 20px;
    margin: 0px;
    padding: 0px 4px;
    ${({ isSelected }) => isSelected && css`font-weight: bold`};
    color: ${({ theme }) => theme.color.gray800};
    cursor: pointer;
`;

export const MenuSelectedLine = styled.div`
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.color.gray800};
`;

export default {};
