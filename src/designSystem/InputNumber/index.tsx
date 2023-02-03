import { Minus, Plus } from 'phosphor-react';
import { Dispatch, SetStateAction } from 'react';
import { InputContainer } from './styles';

interface updateAmountProductProps {
  productId: number;
  amount: number;
}
interface InputNumberProps {
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
  disabled?: boolean;
  onClick?: ({ amount, productId }: updateAmountProductProps) => void;
  id?: number;
}

export function InputNumber({ disabled = false, setValue, value, onClick, id }: InputNumberProps) {
  function onPlus() {
    setValue((oldState) => oldState + 1);
    !!onClick && !!id && onClick({ amount: value, productId: id });
  }

  function onMinus() {
    setValue((oldState) => (oldState >= 1 ? oldState - 1 : (oldState = 1)));
    !!onClick && !!id && onClick({ amount: value, productId: id });
  }
  return (
    <InputContainer disabled={disabled}>
      <Minus size={14} weight="fill" color="#8047F8" onClick={() => !disabled && onMinus()} />
      <input type="number" value={value} onChange={(e) => setValue(Number(e.target.value))} />
      <Plus size={14} weight="fill" color="#8047F8" onClick={() => !disabled && onPlus()} />
    </InputContainer>
  );
}
