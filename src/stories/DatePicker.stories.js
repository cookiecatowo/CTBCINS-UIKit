import DatePicker from "./DatePicker.vue";
import { fn } from '@storybook/test';

export default {
  title: 'Example/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'date' },
    range: { control: 'boolean' }
  },
  
};

export const Default = {
  args: { 
  },
};
export const DateNow = {
  args: { 
    modelValue: Date.now(),
  },
};
export const Range = {
  args: { 
    range: true,
  },
};
export const RangeDate = {
  args: { 
    modelValue: {
      start: new Date('2024/03/15'),
      end: new Date('2024/04/15')
    },
    range: true,
  },
};
export const Disabled = {
  args: { 
    disabled: true
  },
};