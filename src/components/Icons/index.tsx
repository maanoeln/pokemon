import icons from '@/components/Icons/iconsObject';
import { IconDiv } from '@/components/Icons/styles';

interface IProps {
  name: string;
  viewBox?: string;
  height?: string;
  width?: string;
  onClick?(): void;
  color?: string;
}

function Icons({
  name,
  viewBox = '0 0 16 16',
  width = '',
  height = '',
  onClick,
  color,
}: IProps) {
  return (
    <IconDiv onClick={onClick} data-testid={name}>
      <svg
        style={{ display: `flex`, flex: 1 }}
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
        width={width || 0}
        height={height || 0}
        fill={color}
      >
        <path d={icons[name]} />
      </svg>
    </IconDiv>
  );
}

export default Icons;
