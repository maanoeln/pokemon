import styled from 'styled-components';

interface IProps {
  $type: string;
}

export const TypeCard = styled.div<IProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, $type }) =>
    theme.colors.getTypeBgColor($type) + 'FF'};
  border-radius: 0.8em;
  height: 100px;
  width: 100px;
  overflow: hidden;
  z-index: 1;

  svg {
    opacity: 0.2;
  }

  &:hover {
    cursor: pointer;
    svg {
      opacity: 0.5;
    }
  }
`;

export const Text = styled.h4<IProps>`
  font-size: 1.6em;
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({ theme, $type }) => theme.colors.getTypeTitleColor($type)};
`;
