import { Minus, Plus } from 'phosphor-react';
import { Dispatch, SetStateAction } from 'react';
import { InputContainer } from './styles';

interface InputNumberProps {
  value: number;
  onChange: Dispatch<SetStateAction<number>>;
  disabled?: boolean;
}

export function InputNumber({ disabled = false, onChange, value }: InputNumberProps) {
  return (
    <InputContainer disabled={disabled}>
      <Minus
        size={14}
        weight="fill"
        color="#8047F8"
        onClick={() => !disabled && onChange((oldState) => oldState - 1)}
      />
      <input type="number" value={value} />
      <Plus
        size={14}
        weight="fill"
        color="#8047F8"
        onClick={() => !disabled && onChange((oldState) => oldState + 1)}
      />
    </InputContainer>
  );
}
