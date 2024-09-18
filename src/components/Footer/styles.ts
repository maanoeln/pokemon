import styled from 'styled-components';

export const Footer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.headerBg};
  border-top: rgba(255, 255, 255, 0.1) solid 1px;
  justify-content: center;
  padding: 16px;
`;

export const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.colors.cardInfo};
  font-size: 1.2rem;
`;
