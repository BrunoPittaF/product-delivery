import { Container } from './styles';

interface InputProps {
  type: string;
  maxWidth: string | number;
  label?: string;
  name?: string;
}

export function Input({ type, maxWidth, label, name }: InputProps) {
  return (
    <Container maxWidth={maxWidth}>
      <input type={type} name={name} />
      {label && label}
    </Container>
  );
}
