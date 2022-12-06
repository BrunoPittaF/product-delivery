import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card } from './index';

export default {
  title: 'Card',
  component: Card,
} as ComponentMeta<typeof Card>;

export const CardComponent: ComponentStory<typeof Card> = () => {
  const mockData = {
    name: 'Expresso Tradicional',
    image: 'src/assets/coffee-example.png',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: '9,90',
    typeList: ['Tradicional', 'com leite'],
  };

  return <Card {...mockData} />;
};
