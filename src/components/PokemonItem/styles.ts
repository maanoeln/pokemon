import styled from 'styled-components';

export const PokemonCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border: 1px solid black;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.cardBg};

  &:hover {
    transform: scale(1.05);
    transition: transform ease-in-out 300ms;
    cursor: pointer;
  }
`;

export const PokemonId = styled.span`
  color: ${({ theme }) => theme.colors.cardInfo};
  font-size: 1.4rem;
  position: relative;
  z-index: 2;
`;

export const PokemonName = styled.h3`
  text-align: center;
  color: ${({ theme }) => theme.colors.cardTitle};
  font-size: 1.25rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.8rem;
`;

interface Props {
  primary: boolean;
}

export const Button = styled.div<Props>`
  background-color: ${({ theme, primary }) => primary && theme.colors.primaryButtonBg};
  color: ${({ theme, primary }) => (primary ? theme.colors.buttonText : theme.colors.cardTitle)};
  border: none;
  outline: none;
  padding: 0.4rem;
  text-transform: uppercase;
  border-radius: 4px;
  flex: 1;
  text-align: center;

  &:hover {
    background-color: ${({ theme, primary }) => !primary && theme.colors.cardTitle};
    color: ${({ theme, primary }) => !primary && theme.colors.buttonText};
  }
`;
