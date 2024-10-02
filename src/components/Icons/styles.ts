import styled from 'styled-components';

interface IProps {
  $isHeart: boolean;
}

export const IconDiv = styled.div<IProps>`
  display: flex;
  cursor: pointer;

  svg {
    &:hover {
      fill: ${({ $isHeart }) => ($isHeart ? 'red' : '')};
    }
  }
`;
