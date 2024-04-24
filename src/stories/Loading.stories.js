import Loading from './Loading.vue'
import { fn } from '@storybook/test';

export default {
  title: 'Example/Loading',
  component: Loading,
  argTypes: {
    modelValue: { control: 'boolean' },
    img: { control: 'text' },
  },
  args: { onClick: fn() },
}

export const Default = {
  args: {
    modelValue: true
  },
}
export const CoustomImg = {
  args: {
    modelValue: true,
    img: '/testImg/icon.png'
  }
}