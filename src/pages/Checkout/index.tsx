import { PaymentCard } from '../../components/PaymentCard';
import { Input } from '../../designSystem/Input';
import { Bank, CreditCard, Money } from 'phosphor-react';
import { useEffect, useState } from 'react';
import SimpleCard from '../../designSystem/SimpleCard/SimpleCard';

import { Container, Order, Cart, ContainerPrice, LabelPrice, LabelCoin } from './styles';

import { Button } from '../../designSystem/Button';
import { IForm, useCart } from '../../context/CartContext';
import { formatPrice } from '../../utils/utils';
import { Link } from 'react-router-dom';

export function Checkout() {
  const { cart, removeProduct, order, changeOrder } = useCart();

  const totalItens = cart.reduce((sumTotal, product) => {
    sumTotal += product.price * product.amount;
    return sumTotal;
  }, 0);

  const totalCartValue = totalItens + 3.5;

  const [formState, setFormState] = useState<IForm>(order);

  function handleSubmitForm() {
    changeOrder(formState);
  }

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

          <form id="formPayment">
            <div className="row">
              <Input
                type="text"
                value={formState.cep}
                onChange={({ target }) =>
                  setFormState((oldState) => ({
                    ...oldState,
                    cep: target.value,
                  }))
                }
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
                value={formState.rua}
                onChange={({ target }) =>
                  setFormState((oldState) => ({
                    ...oldState,
                    rua: target.value,
                  }))
                }
                css={{
                  maxWidth: '560px',
                }}
              />
            </div>
            <div className="row">
              <Input
                type="text"
                placeholder="Número"
                value={formState.numero}
                onChange={({ target }) =>
                  setFormState((oldState) => ({
                    ...oldState,
                    numero: target.value,
                  }))
                }
                css={{
                  maxWidth: '200px',
                }}
              />
              <Input
                type="text"
                maxLength={30}
                placeholder="Complemento"
                value={formState.complemento}
                onChange={({ target }) =>
                  setFormState((oldState) => ({
                    ...oldState,
                    complemento: target.value,
                  }))
                }
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
                value={formState.bairro}
                onChange={({ target }) =>
                  setFormState((oldState) => ({
                    ...oldState,
                    bairro: target.value,
                  }))
                }
                css={{
                  maxWidth: '200px',
                }}
              />
              <Input
                type="text"
                placeholder="Cidade"
                value={formState.cidade}
                onChange={({ target }) =>
                  setFormState((oldState) => ({
                    ...oldState,
                    cidade: target.value,
                  }))
                }
                css={{
                  maxWidth: '276px',
                }}
              />
              <Input
                type="text"
                placeholder="UF"
                value={formState.uf}
                onChange={({ target }) =>
                  setFormState((oldState) => ({
                    ...oldState,
                    uf: target.value,
                  }))
                }
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
                setFormState((oldState) => ({
                  ...oldState,
                  payment: 'credit',
                }))
              }
              isActive={formState.payment === 'credit'}
            />
            <PaymentCard
              content="Cartão de débito"
              icon={<Bank size={20} color="#8047f8" weight="light" />}
              onClick={() =>
                setFormState((oldState) => ({
                  ...oldState,
                  payment: 'debit',
                }))
              }
              isActive={formState.payment === 'debit'}
            />
            <PaymentCard
              content="Dinheiro"
              icon={<Money size={20} color="#8047f8" weight="light" />}
              onClick={() =>
                setFormState((oldState) => ({
                  ...oldState,
                  payment: 'money',
                }))
              }
              isActive={formState.payment === 'money'}
            />
          </div>
        </div>
      </Order>
      <Cart>
        <h2>Cafés selecionados</h2>
        <div className="cart">
          {cart.map((coffe) => {
            return (
              <SimpleCard
                externalValue={coffe.amount}
                key={coffe.id}
                image={coffe.image}
                name={coffe.name}
                price={coffe.price}
                onClick={() => removeProduct(coffe.id)}
                id={coffe.id}
              ></SimpleCard>
            );
          })}

          <ContainerPrice>
            <LabelPrice variant="regular">
              Total de itens <LabelCoin>{formatPrice(totalItens)}</LabelCoin>
            </LabelPrice>
            <LabelPrice variant="regular">
              Entrega <LabelCoin>{formatPrice(3.5)}</LabelCoin>
            </LabelPrice>
            <LabelPrice variant="subtitle">
              Total <LabelCoin>{formatPrice(totalCartValue)}</LabelCoin>
            </LabelPrice>
          </ContainerPrice>

          <Link to={'/order'}>
            <Button onClick={handleSubmitForm} className="confirmButton" variant="yellow">
              Confirmar Pedido
            </Button>
          </Link>
        </div>
      </Cart>
    </Container>
  );
}
