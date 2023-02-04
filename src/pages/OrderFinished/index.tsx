import { useCart } from '../../context/CartContext';
import orderDelivery from '../../assets/a-caminho.png';

import { ColumnContainer, Container, Content, Label, OrderFinishedContainer, RowContainer } from './styles';

import mapIcon from '../../assets/icon-map-roxo.png';
import clockIcon from '../../assets/clock-icon.png';
import moneyIcon from '../../assets/money-icon.png';

export function OrderFinished() {
  const { order } = useCart();

  return (
    <Container>
      <OrderFinishedContainer>
        <h1>Uhu! Pedido confirmado</h1>
        <h2>Agora é só aguardar que logo o café chegará até você</h2>

        <div className="box">
          <RowContainer>
            <img src={mapIcon} alt="mapa" />
            <Label>
              Entrega em{' '}
              <span>
                {order.rua} <br /> {order.bairro} - {order.cidade},{order.uf}
              </span>
            </Label>
          </RowContainer>
          <RowContainer>
            <img src={clockIcon} alt="relógio" />
            <ColumnContainer>
              <Label>Previsao de entrega</Label>

              <Content>20 min - 30 min</Content>
            </ColumnContainer>
          </RowContainer>
          <RowContainer>
            <img src={moneyIcon} alt="dinheiro" />
            <ColumnContainer>
              <Label>Pagamento na entrega</Label>

              <Content>Cartão de crédito</Content>
            </ColumnContainer>
          </RowContainer>
        </div>
      </OrderFinishedContainer>
      <img src={orderDelivery} alt="Homem em uma moto" />
    </Container>
  );
}
