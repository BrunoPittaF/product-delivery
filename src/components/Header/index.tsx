import { HeaderContainer, Button, ButtonCard } from './styles';

import { MapPin, ShoppingCart } from 'phosphor-react';

import logo from '../../assets/coffee-logo.png';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export function Header() {
  const { cart } = useCart();
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logo} alt="Copo com desenho de um foguete" />
      </Link>

      <div>
        <Button variant="purple">
          <MapPin color="#8047F8" weight="fill" size={22} />
          Porto Alegre, RS
        </Button>

        <Link to={'/checkout'}>
          <ButtonCard variant="yellow-basic">
            <ShoppingCart color="#C47F17" weight="fill" size={22} />
            {cart.length > 0 && <span>{cart.length}</span>}
          </ButtonCard>
        </Link>
      </div>
    </HeaderContainer>
  );
}
