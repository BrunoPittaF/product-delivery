import { InputNumber } from '../InputNumber';
import { ShoppingCart } from 'phosphor-react';
import { useState } from 'react';
import { ButtonCard } from './styles';

interface CardProps {
  image: string;
  typeList: string[];
  name: string;
  description: string;
  price: string;
}

export function Card({ image, typeList, name, price, description }: CardProps) {
  const [quantity, setQuantity] = useState<number>(0);
  return (
    <>
      <img src={image} alt={name} />
      {typeList.forEach((type) => {
        <span>{type}</span>;
      })}
      <p>{name}</p>
      <p>{description}</p>
      <footer>
        <p>
          R$ <span>{price}</span>
        </p>
        <InputNumber value={quantity} onChange={setQuantity} />
        <ButtonCard variant="purple-dark">
          <ShoppingCart color="#fff" weight="fill" size={22} />
        </ButtonCard>
      </footer>
    </>
  );
}
