import icons from '@/components/Icons/iconsObject';
import { IconDiv } from '@/components/Icons/styles';

interface IProps {
  name: string;
  viewBox?: string;
  height?: string;
  width?: string;
  onClick?(): void;
  color?: string;
  fillRule?: 'evenodd';
  clipRule?: string;
  isType?: boolean;
}

function Icons({
  name,
  viewBox = '0 0 512 512',
  width = '50px',
  height = '50px',
  onClick,
  color,
  fillRule,
  clipRule = '',
  isType = false,
}: IProps) {
  const isHeart = !!(name === 'EmptyHeart' || name === 'FilledHeart');

  return (
    <IconDiv
      $isHeart={isHeart}
      onClick={onClick}
      data-testid={isType ? `type-${name}` : `${name}`}
    >
      <svg
        style={{ display: `flex`, flex: 1 }}
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill={color}
        fillRule={fillRule}
        clipRule={clipRule}
      >
        <path d={icons[name]} />
      </svg>
    </IconDiv>
  );
}

export default Icons;
