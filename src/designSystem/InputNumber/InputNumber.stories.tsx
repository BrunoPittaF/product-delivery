import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import { InputNumber } from './index';

export default {
  title: 'InputNumber',
  component: InputNumber,
} as ComponentMeta<typeof InputNumber>;

export const InputNumberComponent: ComponentStory<typeof InputNumber> = () => {
  const [value, setValue] = useState<number>(0);

  return <InputNumber value={value} onChange={setValue} />;
};

export const Disabled: ComponentStory<typeof InputNumber> = () => {
  const [value, setValue] = useState<number>(0);

  return <InputNumber value={value} onChange={setValue} disabled />;
};
