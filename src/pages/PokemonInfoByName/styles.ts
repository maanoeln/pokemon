import styled from 'styled-components';

export const PokemonInfoWrapper = styled.div`
  height: 100%;
  display: flex;
  gap: 2rem;
  padding: 2rem;
`;

export const SpecsWrapper = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SpecsSubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const PokemonCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border: 1px solid black;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.cardBg};
  align-items: center;
`;

export const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const PokemonIdName = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.cardInfo};
  margin: auto;
`;

export const PokemonSpecInfo = styled.h2`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.cardTitle};
`;
