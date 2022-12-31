import { Dispatch, SetStateAction } from 'react';
import { InputNumber } from '../InputNumber';
import { ShoppingCart } from 'phosphor-react';
import { Container, ButtonCard, Footer } from './styles';

export interface CardProps {
  image: string;
  typeList: string[];
  name: string;
  description: string;
  price: string;
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
}

export function Card({ image, typeList, name, price, description, value, setValue }: CardProps) {
  return (
    <Container>
      <img src={image} alt={name} />

      <div className="types">
        {typeList.length > 0 && typeList.map((type, index) => <span key={index}>{type}</span>)}
      </div>

      <p className="name">{name}</p>
      <p className="description">{description}</p>
      <Footer>
        <p>
          R$ <span>{price}</span>
        </p>
        <div className="actionButtons">
          <InputNumber value={value} onChange={setValue} />
          <ButtonCard variant="purple-dark">
            <ShoppingCart color="#fff" weight="fill" size={22} />
          </ButtonCard>
        </div>
      </Footer>
    </Container>
  );
}
