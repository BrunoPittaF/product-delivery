import { Button } from '../../designSystem/Button';
import { InputNumber } from '../../designSystem/InputNumber';
import { useState } from 'react';

import { Trash } from 'phosphor-react';
import { Container, Price } from './styles';

interface SimpleCardProps {
  image: string;
  name: string;
  price: string;
}

export function SimpleCard({ image, name, price }: SimpleCardProps) {
  const [value, setValue] = useState(0);

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
