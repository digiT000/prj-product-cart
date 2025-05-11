import { ButtonPrimary } from './button.style.ts';

interface ButtonProps {
  type: 'primary' | 'secondary';
  margin?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

function Button({ children, onClick, type, margin }: ButtonProps) {
  return (
    <ButtonPrimary margin={margin} type={type} onClick={onClick}>
      {children}
    </ButtonPrimary>
  );
}

export default Button;
