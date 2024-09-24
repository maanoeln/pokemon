import styled from 'styled-components';
import { Menu as MuiMenu, Divider as MuiDivider } from '@mui/material';

export const SubHeader = styled.h2`
  color: ${({ theme }) => theme.colors.cardTitle};
  padding: 8px;
`;

export const Item = styled.p`
  color: ${({ theme }) => theme.colors.cardInfo};
  font-size: 1.3rem;
`;

export const Menu = styled(MuiMenu)`
  & .MuiPaper-root {
    background-color: ${({ theme }) => theme.colors.headerBg};
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  & .MuiList-root {
    padding: 0;
  }

  & .MuiButtonBase-root:hover {
    background-color: rgba(162, 162, 162, 0.4);
  }
`;

export const Divider = styled(MuiDivider)`
  &.MuiDivider-root {
    border-color: ${({ theme }) => theme.colors.cardInfo};
    margin: 6px 0.8em 4px 0.8em;
  }
`;

export const Div = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;

  svg {
    fill: ${({ theme }) => theme.colors.cardInfo};
  }
`;
