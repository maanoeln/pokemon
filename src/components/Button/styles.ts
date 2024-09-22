import styled from 'styled-components';

interface Props {
  $primary: boolean;
  $padding?: boolean;
}

export const Button = styled.button<Props>`
  background-color: ${({ theme, $primary }) =>
    $primary ? theme.colors.primaryButtonBg : 'transparent'};
  color: ${({ theme, $primary }) =>
    $primary ? theme.colors.buttonText : theme.colors.cardTitle};
  border: none;
  outline: none;
  padding: 0.4rem;
  text-transform: uppercase;
  border-radius: 4px;
  flex: 1;
  text-align: center;
  padding: ${({ $padding }) => ($padding ? 'unset' : '0.8rem')};
  /* font-size: ${({ $padding }) => $padding && '1.2rem'}; */

  &:hover {
    background-color: ${({ theme, $primary }) =>
      $primary ? theme.colors.primaryButtonBgOpacity : theme.colors.cardTitle};
    color: ${({ theme, $primary }) => !$primary && theme.colors.buttonText};
    cursor: pointer;
  }
`;
