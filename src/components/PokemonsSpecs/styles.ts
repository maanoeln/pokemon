import styled from 'styled-components';

export const PokemonSpecs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border: 1px solid black;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.cardBg};
`;

export const PokemonSpecTitle = styled.h4`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.cardInfo};
`;

export const PokemonSpecWrapper = styled.div`
  display: flex;
  gap: 1.6em;
`;
