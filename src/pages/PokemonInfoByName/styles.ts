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

export const PokemonSpecs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border: 1px solid black;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.cardBg};
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

export const PokemonSpecTitle = styled.h4`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.cardInfo};
`;

export const PokemonSpecInfo = styled.h2`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.cardTitle};
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: end;
  gap: 16px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: end;
  gap: 2rem;
`;

export const TypesWrapper = styled.div`
  display: flex;
  gap: 1.6em;
`;
