import { Button } from '../../designSystem/Button';
import { InputNumber } from '../../designSystem/InputNumber';
import { useState } from 'react';

import { Trash } from 'phosphor-react';
import { Container, Price } from './styles';
import { formatPrice } from '../../utils/utils';

interface SimpleCardProps {
  image: string;
  name: string;
  price: number;
  externalValue: number;
  onClick: any;
}

export function SimpleCard({ image, name, price, externalValue, onClick }: SimpleCardProps) {
  const [value, setValue] = useState(externalValue);

  return (
    <Container>
      <img src={image} alt={name} />

      <div className="items-column">
        <p>{name}</p>
        <div className="container-buttons">
          <InputNumber value={value} setValue={setValue} />
          <Button onClick={onClick} variant="grey">
            <Trash color="#8047F8" weight="fill" size={22} />
            <span>Remover</span>
          </Button>
        </div>
      </div>

      <Price>{formatPrice(price)}</Price>
    </Container>
  );
}

export default SimpleCard;
