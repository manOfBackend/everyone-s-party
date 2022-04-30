import styled from '@emotion/styled';

interface ColumnDividerProps {
  width: string;
}
const ColumnDivider = styled.div<ColumnDividerProps>`
    height: 100%;
    width: ${({ width }) => width};
`;

export default ColumnDivider;
