import { IntroContainer, OptionsContainer } from './styles';

import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react';

import coffeeDelivery from '../../assets/coffee-bg.png';
import { Card } from '../../designSystem/Card';

export function Home() {
  return (
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
  );
}
