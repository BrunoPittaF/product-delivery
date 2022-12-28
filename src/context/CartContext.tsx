import { useState } from '@storybook/addons';
import { createContext, ReactNode } from 'react';

interface ICartContext {
  products: [] | null;
}

interface ICartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as ICartContext);

export function CartContextProvider({ children }: ICartContextProviderProps) {
  const [products, setProducts] = useState(null);
  return (
    <CartContext.Provider
      value={{
        products,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
