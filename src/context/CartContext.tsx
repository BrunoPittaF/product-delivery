import { createContext, ReactNode, useState } from 'react';

interface ICartContext {
  products: [] | null;
}

interface ICartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as ICartContext);

export function CartContextProvider({ children }: ICartContextProviderProps) {
  const [products, setProducts] = useState(null);
  console.log(products);

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
