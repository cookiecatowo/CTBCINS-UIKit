import DatePicker from "./DatePicker.vue";
import { fn } from '@storybook/test';

export default {
  title: 'Example/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'date' },
    range: { control: 'boolean' },
    minDate: { control: 'date' },
    maxDate: { control: 'date' },
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
export const MinDate = {
  args: { 
    modelValue: null,
    minDate: '2020/01/01'
  },
};
export const MaxDate = {
  args: { 
    modelValue: null,
    minDate: Date.now(),
    maxDate: '2024/12/31'
  },
};