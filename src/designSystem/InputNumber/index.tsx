import { Minus, Plus } from 'phosphor-react';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { InputContainer } from './styles';

interface InputNumberProps {
  value: number;
  onChange: Dispatch<SetStateAction<number>>;
  disabled?: boolean;
}

export function InputNumber({ disabled = false, onChange, value }: InputNumberProps) {
  const [internalValue, setInternalValue] = useState(value);

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  return (
    <InputContainer disabled={disabled}>
      <Minus
        size={14}
        weight="fill"
        color="#8047F8"
        onClick={() => !disabled && onChange((oldState) => oldState - 1)}
      />
      <input type="number" value={internalValue} onChange={(e) => onChange(Number(e.target.value))} />
      <Plus
        size={14}
        weight="fill"
        color="#8047F8"
        onClick={() => !disabled && onChange((oldState) => oldState + 1)}
      />
    </InputContainer>
  );
}
