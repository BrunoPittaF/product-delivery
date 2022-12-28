import { IntroContainer, OptionsContainer, ListProducst } from './styles';

import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react';

import coffeeDelivery from '../../assets/coffee-bg.png';
import { useState } from 'react';
import { Card, CardProps } from '../../designSystem/Card';

export function Home() {
  const cardItem: CardProps[] = [
    {
      image: 'src/assets/coffee-example.png',
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: '9,90',
      typeList: ['tradicional'],
    },
    {
      image: 'src/assets/coffee-example.png',
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: '9,90',
      typeList: ['tradicional'],
    },
    {
      image: 'src/assets/coffee-example.png',
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: '9,90',
      typeList: ['tradicional'],
    },
    {
      image: 'src/assets/coffee-example.png',
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: '9,90',
      typeList: ['tradicional', 'gelado'],
    },
    {
      image: 'src/assets/coffee-example.png',
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: '9,90',
      typeList: ['tradicional'],
    },
    {
      image: 'src/assets/coffee-example.png',
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: '9,90',
      typeList: ['tradicional'],
    },
  ];
  const [items, setItems] = useState(cardItem);
  return (
    <>
      <IntroContainer>
        <div className="textInfo">
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

          <OptionsContainer>
            <div className="option">
              <ShoppingCart className="icon" weight="fill" color="#fff" size={22} />
              <p>Compra simples e segura</p>
            </div>
            <div className="option">
              <Package className="icon" weight="fill" color="#fff" size={22} />
              <p>Embalagem mantém o café intacto</p>
            </div>
            <div className="option">
              <Timer className="icon" weight="fill" color="#fff" size={22} />
              <p>Entrega rápida e rastreada</p>
            </div>
            <div className="option">
              <Coffee className="icon" weight="fill" color="#fff" size={22} />
              <p>O café chega fresquinho até você</p>
            </div>
          </OptionsContainer>
        </div>

        <img src={coffeeDelivery} alt="Copo e grãos de café" />
      </IntroContainer>
      <ListProducst>
        <h2>Nossos cafés</h2>
        <div className="card-list">
          {items.map((card) => {
            return <Card {...card} />;
          })}
        </div>
      </ListProducst>
    </>
  );
}
