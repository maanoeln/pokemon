import styled from 'styled-components';

export const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.headerText};
  height: 100%;
`;
