import styled from '@emotion/styled';

interface RowDividerProps {
  height: string;
}
const RowDivider = styled.div<RowDividerProps>`
    width: 100%;
    height: ${({ height }) => height};
`;

export default RowDivider;
