import { ReactNode, useState } from 'react';
import { Container } from './styles';

interface PaymentCardProps {
  content: string;
  icon: ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

export function PaymentCard({ content, icon, onClick }: PaymentCardProps) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const clickContainer = () => {
    onClick && onClick();
    setIsActive((oldState) => !oldState);
  };
  return (
    <Container onClick={() => !!onClick && clickContainer()} isActive={isActive}>
      {icon}
      <span>{content}</span>
    </Container>
  );
}
