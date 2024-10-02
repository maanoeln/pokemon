import { Button } from '@/components/Button/styles';

interface IProps {
  primary?: boolean;
  children: string;
  padding?: boolean;
  onClick?(): void;
  handleGoBack?(): void;
}

function ButtonComponent({
  children,
  handleGoBack,
  onClick,
  padding = false,
  primary = false,
  ...props
}: IProps) {
  return (
    <Button
      $primary={primary}
      $padding={padding}
      onClick={handleGoBack ? handleGoBack : onClick}
      {...props}
    >
      {children}
    </Button>
  );
}

export default ButtonComponent;
