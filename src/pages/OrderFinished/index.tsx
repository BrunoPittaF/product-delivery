import { useCart } from '../../context/CartContext';
import orderDelivery from '../../assets/a-caminho.png';

import { ColumnContainer, Container, Content, Label, OrderFinishedContainer, RowContainer } from './styles';

export function OrderFinished() {
  const { cart, order } = useCart();

  return (
    <Container>
      <OrderFinishedContainer>
        <h1>Uhu! Pedido confirmado</h1>
        <h2>Agora é só aguardar que logo o café chegará até você</h2>

        <div className="box">
          <RowContainer>
            <Label>
              Entrega em <span>teste</span>
            </Label>
          </RowContainer>
          <RowContainer>
            <ColumnContainer>
              <Label>Previsao de entrega</Label>

              <Content>20 min - 30 min</Content>
            </ColumnContainer>
          </RowContainer>
          <RowContainer>
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
