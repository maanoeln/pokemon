import styled from 'styled-components';

export const Header = styled.div`
  background-color: ${({ theme }) => theme.colors.headerBg};
  height: 80px;
  border-bottom: rgba(255, 255, 255, 0.1) solid 1px;
  padding: 1.2rem;
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.headerText};
`;

export const HeaderItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 1rem;
`;

export const FavoriteButton = styled.button`
  background-color: ${({ theme }) => theme.colors.secondaryButtonBg};
  color: ${({ theme }) => theme.colors.buttonText};
  padding: 8px;
  border-radius: 4px;
  outline: none;
  border: none;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.getDisabled(0.5)};
    cursor: not-allowed;
  }
`;
