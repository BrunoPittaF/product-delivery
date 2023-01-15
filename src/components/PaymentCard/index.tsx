import { ReactNode, useState } from 'react';
import { Container } from './styles';

interface PaymentCardProps {
  content: string;
  icon: ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

export function PaymentCard({ content, icon, onClick, isActive = false }: PaymentCardProps) {
  return (
    <Container onClick={() => !!onClick && onClick()} isActive={isActive}>
      {icon}
      <span>{content}</span>
    </Container>
  );
}
