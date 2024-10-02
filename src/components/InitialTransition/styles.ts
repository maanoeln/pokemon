import { motion, HTMLMotionProps } from 'framer-motion';
import styled from 'styled-components';

interface IProps extends HTMLMotionProps<'div'> {
  $isLoading: boolean;
}

export const TransitionContainer = styled(motion.div)<IProps>`
  position: ${({ $isLoading }) => ($isLoading ? 'absolut' : 'unset')};
  width: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.wrapperBg};
`;
