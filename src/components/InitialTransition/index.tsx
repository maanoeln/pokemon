import { useEffect } from 'react';
import { TransitionContainer } from '@/components/InitialTransition/styles';
import LoaderComponent from '@/components/Loader';

const blackBox = {
  initial: {
    height: '100%',
    bottom: 0,
  },
  animate: {
    height: 0,
    transition: {
      when: 'afterChildren',
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

interface IProps {
  isLoading: boolean;
}

function InitialTransition({ isLoading }: IProps) {
  // Scroll user to top to avoid showing the footer
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    typeof window !== 'undefined' && window.scrollTo(0, 0);
  }, []);

  const animation =
    'absolute z-50 flex items-center justify-center w-full bg-white';

  return (
    <TransitionContainer
      $isLoading={isLoading}
      className={animation}
      initial="initial"
      animate="animate"
      variants={blackBox}
      onAnimationComplete={() =>
        document.body
          .getElementsByClassName(animation)[0]
          .classList.remove('absolute')
      }
    >
      <LoaderComponent isLoading={isLoading} />
    </TransitionContainer>
  );
}

export default InitialTransition;
