import { createContext, ReactNode, useContext, useState } from 'react';

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
  addProduct: (productid: number, productAmount: number) => void;
}

interface ICartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as ICartContext);

export function CartContextProvider({ children }: ICartContextProviderProps) {
  const productList: any[] = [
    {
      id: 0,
      image: 'src/assets/coffee-example.png',
      name: 'Expresso Tradicional',
      description: 'O tradicional café preto',
      price: '9,90',
      typeList: ['tradicional'],
    },
    {
      id: 1,
      image: 'src/assets/coffee-example.png',
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: '9,90',
      typeList: ['tradicional'],
    },
    {
      id: 2,
      image: 'src/assets/coffee-example.png',
      name: 'Expresso Americano',
      description: 'Expresso diluído, com leite',
      price: '9,90',
      typeList: ['tradicional'],
    },
    {
      id: 3,
      image: 'src/assets/coffee-example.png',
      name: 'Expresso Americano',
      description: 'Café numero 6',
      price: '9,90',
      typeList: ['tradicional', 'gelado'],
    },
    {
      id: 4,
      image: 'src/assets/coffee-example.png',
      name: 'Expresso Americano',
      description: 'Nao sei qual colocar aqui',
      price: '9,90',
      typeList: ['tradicional'],
    },
    {
      id: 5,
      image: 'src/assets/coffee-example.png',
      name: 'Expresso Americano',
      description: 'Bla bla bla bla bla',
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

  function addProduct(productId: number, productAmount: number) {
    const newCart = [...cart];
    const productExists = newCart.find((product) => product.id === productId);

    const currentAmount = productExists ? productExists.amount : 0;

    if (productExists) {
      productExists.amount = currentAmount + productAmount;
    } else {
      const product = productList.find((product) => product.id === productId);

      const newProduct = {
        ...product,
        amount: productAmount,
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
