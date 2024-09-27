import styled from 'styled-components';

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1.6em;

  .MuiButtonBase-root {
    font-size: 1.3rem;

    &.Mui-disabled {
      color: #ffffff60;
      background-color: #1976d260;
    }
  }
`;
