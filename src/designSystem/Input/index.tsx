import { ChangeEventHandler, InputHTMLAttributes, useEffect, useState } from 'react';
import { CSSProperties } from 'styled-components';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: boolean;
  css?: CSSProperties;
}

export function Input({ type, label = false, onChange, value, css, ...props }: InputProps) {
  return (
    <Container css={css}>
      <input {...props} type={type} value={value} onChange={onChange} />
      {label && <span>Opcional</span>}
    </Container>
  );
}
