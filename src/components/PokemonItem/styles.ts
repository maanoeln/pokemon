import styled from 'styled-components';

export const PokemonCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border: 1px solid black;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.cardBg};

  img {
    height: 100px;
  }

  &:hover {
    transform: scale(1.05);
    transition: transform ease-in-out 300ms;
  }
`;

export const PokemonId = styled.span`
  color: ${({ theme }) => theme.colors.cardInfo};
  font-size: 1.4rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PokemonName = styled.h3`
  text-align: center;
  color: ${({ theme }) => theme.colors.cardTitle};
  font-size: 1.25rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
