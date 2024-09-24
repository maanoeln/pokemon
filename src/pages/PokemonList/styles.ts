import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  padding: 1.6em 0;
  overflow: hidden;
`;

export const ListWrapper = styled.div`
  margin-right: 0.4em;
  padding: 0 1.6em 0 1.2em;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 16px;
  overflow-y: scroll;
  height: 100%;
`;
