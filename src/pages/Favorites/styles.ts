import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  padding: 1.6em 0;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  padding: 0 1.6em 1.2em;
  gap: 0.4em;
`;

export const ListWrapper = styled.div`
  padding: 0 1.6em;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 253px);
  gap: 16px;
  height: 100%;
`;

export const NoDataContainer = styled.div`
  grid-column: -1 / 1;
  grid-row: -1 / 1;
  justify-self: center;
  align-self: center;
`;

interface IText {
  $primary?: boolean;
}

export const Text = styled.p<IText>`
  color: ${({ theme, $primary }) =>
    $primary ? theme.colors.cardTitle : theme.colors.cardInfo};
  font-size: ${({ $primary }) => ($primary ? '3.2em' : '1.6em')};
`;
