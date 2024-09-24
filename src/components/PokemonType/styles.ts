import styled from 'styled-components';

interface IProps {
  $type: string;
}

export const TypeCard = styled.div<IProps>`
  position: relative;
  display: inline-block;
  background-color: ${({ theme, $type }) =>
    theme.colors.getTypeBgColor($type) + 'FF'};
  border-radius: 0.8em;
  height: 100px;
  width: 100px;
  overflow: hidden;
  z-index: 1;
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

export const Image = styled.img`
  width: 100px;
  z-index: 1;
  opacity: 0.2;
  filter: invert(2);
  transform: rotate(45deg);
`;
