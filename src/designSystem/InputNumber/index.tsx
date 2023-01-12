import { Minus, Plus } from 'phosphor-react';
import { Dispatch, SetStateAction } from 'react';
import { InputContainer } from './styles';

interface InputNumberProps {
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
  disabled?: boolean;
}

export function InputNumber({ disabled = false, setValue, value }: InputNumberProps) {
  return (
    <InputContainer disabled={disabled}>
      <Minus
        size={14}
        weight="fill"
        color="#8047F8"
        onClick={() => !disabled && setValue((oldState) => (oldState >= 1 ? oldState - 1 : (oldState = 0)))}
      />
      <input type="number" value={value} onChange={(e) => setValue(Number(e.target.value))} />
      <Plus
        size={14}
        weight="fill"
        color="#8047F8"
        onClick={() => !disabled && setValue((oldState) => oldState + 1)}
      />
    </InputContainer>
  );
}
