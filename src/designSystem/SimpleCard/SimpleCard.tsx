import { Button } from '../../designSystem/Button';
import { InputNumber } from '../../designSystem/InputNumber';
import { Dispatch, SetStateAction } from 'react';

import { Trash } from 'phosphor-react';
import { Container } from './styles';

interface SimpleCardProps {
  image: string;
  name: string;
  price: string;
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
}

export function SimpleCard({ image, name, value, setValue, price }: SimpleCardProps) {
  return (
    <Container>
      <img src={image} alt={name} />

      <div className="items-column">
        <p>{name}</p>
        <div className="container-buttons">
          <InputNumber value={value} setValue={setValue} />
          <Button>
            <Trash color="#8047F8" weight="fill" size={22} />
            <span>Remover</span>
          </Button>
        </div>
        <p className="price">
          R$
          <span>{price}</span>
        </p>
      </div>
    </Container>
  );
}

export default SimpleCard;
