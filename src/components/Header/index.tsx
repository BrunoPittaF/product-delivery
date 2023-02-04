import { HeaderContainer, Button, ButtonCard } from './styles';

import { MapPin, ShoppingCart } from 'phosphor-react';

import logo from '../../assets/coffee-logo.png';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { useState } from 'react';

interface ILocalization {
  state_code: string;
  city_district: string;
}

export function Header() {
  const { cart } = useCart();
  const [localization, setLocalization] = useState<ILocalization | null>(null);

  const successCallback = (position: GeolocationPosition) => {
    fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${position.coords.latitude}+${position.coords.longitude}&key=157d29e38a454c3bab3fbae566530362`
    )
      .then((response) => response.json())
      .then((data) =>
        setLocalization({
          city_district: data.results[0].components.city_district,
          state_code: data.results[0].components.state_code,
        })
      );
  };

  const errorCallback = (error: any) => {
    console.log(error);
  };

  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logo} alt="Copo com desenho de um foguete" />
      </Link>

      <div>
        <Button variant="purple">
          <MapPin color="#8047F8" weight="fill" size={22} />
          {localization !== null
            ? localization.city_district + ',' + localization.state_code
            : 'Necessario ativar localização'}
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
