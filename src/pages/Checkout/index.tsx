import { PaymentCard } from '../../components/PaymentCard';
import { Input } from '../../designSystem/Input';
import { Bank, CreditCard, Money } from 'phosphor-react';
import { useState } from 'react';
import SimpleCard from '../../designSystem/SimpleCard/SimpleCard';

import { Container, Order, Cart, ContainerPrice, LabelPrice, LabelCoin } from './styles';

import imageCoffe from '../../assets/coffee-example.png';
import { Button } from '../../designSystem/Button';

export function Checkout() {
  const [teste, setTeste] = useState({
    testando: '',
  });
  const [inputValue, setInputValue] = useState('');

  return (
    <Container>
      <Order>
        <h1>Complete seu pedido</h1>
        <div className="delivery">
          <header>
            <div className="icon-map">
              <img src="../src/assets/icon-map.png" alt="localizacao no mapa" />
            </div>
            <div className="text-container">
              <p className="title">Endereço de Entrega</p>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </header>

          <form>
            <div className="row">
              <Input
                type="text"
                value={inputValue}
                onChange={({ target }) => setInputValue(target.value)}
                placeholder="CEP"
                css={{
                  maxWidth: '200px',
                }}
              />
            </div>
            <div className="row">
              <Input
                type="text"
                placeholder="Rua"
                value={inputValue}
                onChange={({ target }) => setInputValue(target.value)}
                css={{
                  maxWidth: '560px',
                }}
              />
            </div>
            <div className="row">
              <Input
                type="text"
                placeholder="Número"
                value={inputValue}
                onChange={({ target }) => setInputValue(target.value)}
                css={{
                  maxWidth: '200px',
                }}
              />
              <Input
                type="text"
                maxLength={30}
                placeholder="Complemento"
                value={inputValue}
                onChange={({ target }) => setInputValue(target.value)}
                label={true}
                css={{
                  maxWidth: '348px',
                }}
              />
            </div>
            <div className="row">
              <Input
                type="text"
                placeholder="Bairro"
                value={inputValue}
                onChange={({ target }) => setInputValue(target.value)}
                css={{
                  maxWidth: '200px',
                }}
              />
              <Input
                type="text"
                placeholder="Cidade"
                value={inputValue}
                onChange={({ target }) => setInputValue(target.value)}
                css={{
                  maxWidth: '276px',
                }}
              />
              <Input
                type="text"
                placeholder="UF"
                value={inputValue}
                onChange={({ target }) => setInputValue(target.value)}
                css={{
                  maxWidth: '60px',
                }}
              />
            </div>
          </form>
        </div>
        <div className="payment">
          <header>
            <header>
              <div className="icon-map">
                <img src="../src/assets/dolar.png" alt="dolar" />
              </div>
              <div className="text-container">
                <p className="title">Pagamento</p>
                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
              </div>
            </header>
          </header>

          <div className="payment-forms">
            <PaymentCard
              content="Cartão de crédito"
              icon={<CreditCard size={20} color="#8047f8" weight="light" />}
              onClick={() =>
                setTeste({
                  testando: 'credit',
                })
              }
              isActive={teste.testando === 'credit' ? true : false}
            />
            <PaymentCard
              content="Cartão de débito"
              icon={<Bank size={20} color="#8047f8" weight="light" />}
              onClick={() =>
                setTeste({
                  testando: 'debit',
                })
              }
              isActive={teste.testando === 'debit' ? true : false}
            />
            <PaymentCard
              content="Dinheiro"
              icon={<Money size={20} color="#8047f8" weight="light" />}
              onClick={() =>
                setTeste({
                  testando: 'money',
                })
              }
              isActive={teste.testando === 'money' ? true : false}
            />
          </div>
        </div>
      </Order>
      <Cart>
        <h2>Cafés selecionados</h2>
        <div className="cart">
          <SimpleCard image={imageCoffe} name="Expresso Tradicional" price="89,90"></SimpleCard>
          <SimpleCard image={imageCoffe} name="Expresso Tradicional" price="89,90"></SimpleCard>

          <ContainerPrice>
            <LabelPrice variant="regular">
              Total de itens <LabelCoin>29,70</LabelCoin>
            </LabelPrice>
            <LabelPrice variant="regular">
              Entrega <LabelCoin>3,50</LabelCoin>
            </LabelPrice>
            <LabelPrice variant="subtitle">
              Total <LabelCoin>33,20</LabelCoin>
            </LabelPrice>
          </ContainerPrice>

          <Button className="confirmButton" variant="yellow">
            Confirmar Pedido
          </Button>
        </div>
      </Cart>
    </Container>
  );
}
