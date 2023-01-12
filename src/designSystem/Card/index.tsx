import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { InputNumber } from '../InputNumber';
import { ShoppingCart } from 'phosphor-react';
import { Container, ButtonCard, Footer } from './styles';
import { v4 } from 'uuid';

export interface CardProps {
  id: number;
  image: string;
  typeList: string[];
  name: string;
  description: string;
  price: string;
  onClick: (productId: number, productAmount: number) => void;
}

export function Card({ image, typeList, name, price, description, onClick, id }: CardProps) {
  const [value, setValue] = useState(0);

  return (
    <Container>
      <img src={image} alt={name} />

      <div className="types">
        {typeList.length > 0 && typeList.map((type) => <span key={v4()}>{type}</span>)}
      </div>

      <p className="name">{name}</p>
      <p className="description">{description}</p>
      <Footer>
        <p>
          R$ <span>{price}</span>
        </p>
        <div className="actionButtons">
          <InputNumber value={value} setValue={setValue} />
          <ButtonCard onClick={() => onClick(id, value)} variant="purple-dark">
            <ShoppingCart color="#fff" weight="fill" size={22} />
          </ButtonCard>
        </div>
      </Footer>
    </Container>
  );
}
