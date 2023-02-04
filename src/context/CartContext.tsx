import { createContext, ReactNode, useContext, useState } from 'react';
import { toast } from 'react-toastify';

interface IProduct {
  id: number;
  image: string;
  amount: number;
  price: number;
  name: string;
}

export interface IForm {
  cep: string;
  rua: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
  payment: 'credit' | 'debit' | 'money';
  totalValue: number;
}

export interface IProductInList {
  id: number;
  image: string;
  typeList: string[];
  name: string;
  description: string;
  price: number;
}

interface updateAmountProductProps {
  productId: number;
  amount: number;
}

interface ICartContext {
  cart: IProduct[];
  productList: IProductInList[];
  addProduct: (productId: number, productAmount: number) => void;
  removeProduct: (productId: number) => void;
  updateAmountProduct: ({ amount, productId }: updateAmountProductProps) => void;
  order: IForm;
  changeOrder: (newOrder: IForm) => void;
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
      price: 9.9,
      typeList: ['tradicional'],
    },
    {
      id: 1,
      image: 'src/assets/coffee-example.png',
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: 9.9,
      typeList: ['tradicional'],
    },
    {
      id: 2,
      image: 'src/assets/coffee-example.png',
      name: 'Expresso Americano',
      description: 'Expresso diluído, com leite',
      price: 9.9,
      typeList: ['tradicional'],
    },
    {
      id: 3,
      image: 'src/assets/coffee-example.png',
      name: 'Expresso Americano',
      description: 'Café numero 6',
      price: 9.9,
      typeList: ['tradicional', 'gelado'],
    },
    {
      id: 4,
      image: 'src/assets/coffee-example.png',
      name: 'Expresso Americano',
      description: 'Nao sei qual colocar aqui',
      price: 9.9,
      typeList: ['tradicional'],
    },
    {
      id: 5,
      image: 'src/assets/coffee-example.png',
      name: 'Expresso Americano',
      description: 'Bla bla bla bla bla',
      price: 9.9,
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
  const [order, setOrder] = useState<IForm>({
    cep: '',
    bairro: '',
    cidade: '',
    complemento: '',
    numero: '',
    rua: '',
    uf: '',
    payment: 'credit',
    totalValue: 0,
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
    toast.success('Produto adicionado no carrinho');
  }

  function removeProduct(productId: number) {
    try {
      const newCart = [...cart];
      const productIndex = newCart.findIndex((product) => product.id === productId);

      if (productIndex >= 0) {
        newCart.splice(productIndex, 1);
        setCart(newCart);
        localStorage.setItem('@coffee:cart', JSON.stringify(newCart));
      } else {
        throw Error();
      }
    } catch (error) {
      console.error('Não foi possivel remover o produto');
    }
  }

  function updateAmountProduct({ productId, amount }: updateAmountProductProps) {
    try {
      const newCart = [...cart];
      const productExist = newCart.find((product) => product.id === productId);

      if (!productExist) return;

      productExist.amount = amount;
      setCart(newCart);
      localStorage.setItem('@coffee:cart', JSON.stringify(newCart));
    } catch (error) {
      console.error('Erro na alteração de quantidade do produto');
    }
  }

  function changeOrder(newOrder: IForm) {
    setOrder(newOrder);
  }
  return (
    <CartContext.Provider
      value={{
        cart,
        productList,
        addProduct,
        removeProduct,
        updateAmountProduct,
        changeOrder,
        order,
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
