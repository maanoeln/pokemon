import styled from 'styled-components';

export const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

export const Link = styled.a`
  color: #e2e2e2;
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  svg {
    width: 2rem;
    height: 2rem;

    &:hover {
      fill: ${({ theme }) => theme.colors.secondaryButtonBg};
    }
  }
`;
