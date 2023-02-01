import { Button } from '../../designSystem/Button';
import { InputNumber } from '../../designSystem/InputNumber';
import { useState } from 'react';

import { Trash } from 'phosphor-react';
import { Container, Price } from './styles';

interface SimpleCardProps {
  image: string;
  name: string;
  price: string;
  externalValue: number;
}

export function SimpleCard({ image, name, price, externalValue }: SimpleCardProps) {
  const [value, setValue] = useState(externalValue);

  return (
    <Container>
      <img src={image} alt={name} />

      <div className="items-column">
        <p>{name}</p>
        <div className="container-buttons">
          <InputNumber value={value} setValue={setValue} />
          <Button variant="grey">
            <Trash color="#8047F8" weight="fill" size={22} />
            <span>Remover</span>
          </Button>
        </div>
      </div>

      <Price>
        R$
        <span>{price}</span>
      </Price>
    </Container>
  );
}

export default SimpleCard;
