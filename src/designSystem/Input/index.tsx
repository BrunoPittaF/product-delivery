import { Container } from './styles';

interface InputProps {
  type: string;
  maxWidth: string;
  label?: boolean;
  name?: string;
  placeholder: string;
  maxLength?: number;
}

export function Input({ type, maxWidth, label = false, name, placeholder, maxLength }: InputProps) {
  return (
    <Container maxWidth={maxWidth}>
      <input maxLength={maxLength} type={type} name={name} placeholder={placeholder} />
      {label && <span>Opcional</span>}
    </Container>
  );
}
