import { HeaderContainer, Button, ButtonCard } from './styles';

import { MapPin, ShoppingCart } from 'phosphor-react';

import logo from '../../assets/coffee-logo.png'


export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="Copo com desenho de um foguete" />

      <div>
        <Button variant='purple'>
          <MapPin color='#8047F8'  weight='fill' size={22}/>
          Porto Alegre, RS
        </Button>

        <ButtonCard variant='yellow-basic'>
          <ShoppingCart color='#C47F17' weight='fill'  size={22}/>
        </ButtonCard>
      </div>
    </HeaderContainer>
  )
}