import styled from 'styled-components';
import { Pagination as MuiPagination } from '@mui/material';

export const PaginationWrapper = styled.div`
  grid-column: -1 / 1;
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.headerText};
`;

export const Pagination = styled(MuiPagination)`
  .MuiButtonBase-root,
  .MuiPaginationItem-root {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.headerText};

    svg {
      width: 1.5rem;
      height: 1.5rem;
    }

    &:hover {
      background-color: rgba(195, 143, 255, 0.6);
    }

    &.Mui-selected {
      background-color: rgba(195, 143, 255, 0.6);

      &:hover {
        background-color: #c38fff;
      }
    }
  }
`;
