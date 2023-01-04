import { createContext, ReactNode, useContext, useState } from 'react';
import { v4 } from 'uuid';

interface IProduct {
  id: number;
  image: string;
  amount: number;
  price: string;
  name: string;
}

export interface IProductInList {
  id: number;
  image: string;
  typeList: string[];
  name: string;
  description: string;
  price: string;
}

interface ICartContext {
  cart: IProduct[];
  productList: IProductInList[];
  addProduct: (productid: number) => void;
}

interface ICartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as ICartContext);

export function CartContextProvider({ children }: ICartContextProviderProps) {
  const productList: any[] = [
    {
      id: v4(),
      image: 'src/assets/coffee-example.png',
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: '9,90',
      typeList: ['tradicional'],
    },
    {
      id: v4(),
      image: 'src/assets/coffee-example.png',
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: '9,90',
      typeList: ['tradicional'],
    },
    {
      id: v4(),
      image: 'src/assets/coffee-example.png',
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: '9,90',
      typeList: ['tradicional'],
    },
    {
      id: v4(),
      image: 'src/assets/coffee-example.png',
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: '9,90',
      typeList: ['tradicional', 'gelado'],
    },
    {
      id: v4(),
      image: 'src/assets/coffee-example.png',
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: '9,90',
      typeList: ['tradicional'],
    },
    {
      id: v4(),
      image: 'src/assets/coffee-example.png',
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: '9,90',
      typeList: ['tradicional'],
    },
  ];

  const [cart, setCart] = useState<IProduct[]>(() => {
    const storagedCart = localStorage.getItem('@coffee:cart');

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });

  console.log(cart);

  function addProduct(productId: number) {
    const newCart = [...cart];
    const productExists = newCart.find((product) => product.id === productId);

    const currentAmount = productExists ? productExists.amount : 0;

    if (productExists) {
      productExists.amount = currentAmount + 1;
    } else {
      const product = productList.find((product) => product.id === productId);

      const newProduct = {
        ...product,
        amount: 1,
      };
      newCart.push(newProduct);
    }

    setCart(newCart);
    localStorage.setItem('@coffee:cart', JSON.stringify(newCart));
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        productList,
        addProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): ICartContext {
  const context = useContext(CartContext);
  return context;
}
