import { ButtonContainer, ButtonProps } from './styles';

export function Button({ children, variant = 'purple', ...props }: ButtonProps) {
  return (
    <ButtonContainer variant={variant} {...props}>
      {children}
    </ButtonContainer>
  );
}
