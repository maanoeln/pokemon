import styled from 'styled-components';

export const ListWrapper = styled.div`
  padding: 16px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 16px;
  overflow: hidden;
  overflow-y: scroll;
`;
