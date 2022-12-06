import { ButtonContainer,ButtonProps } from './styles';




export function Button({children, variant= 'purple' }: ButtonProps) {
  return (
    <ButtonContainer variant={variant}  >
      {children}
    </ButtonContainer>
  )
}