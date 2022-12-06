import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './index';

export default {
  title: 'Button',
  component: Button
} as ComponentMeta<typeof Button>


const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>{args.children}</Button>

export const Purple = Template.bind({});
Purple.args = {
  variant: 'purple',
  children: 'Botão'
};

export const Yellow = Template.bind({});
Yellow.args = {
  variant: 'yellow',
  children: 'Botão'
};

export const Grey = Template.bind({});
Grey.args = {
  variant: 'grey',
  children: 'Botão'
};

export const YellowBasic = Template.bind({});
YellowBasic.args = {
  variant: 'yellow-basic',
  children: 'Botão'
};