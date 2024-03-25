import DatePicker from "./DatePicker.vue";
import { fn } from '@storybook/test';

export default {
  title: 'Example/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'date' },
  },
  
};

export const Default = {
  args: { },
};