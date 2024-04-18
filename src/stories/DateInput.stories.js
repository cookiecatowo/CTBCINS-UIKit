import DateInput from "./DateInput.vue";
import { fn } from '@storybook/test';

export default {
  title: 'Example/DateInput',
  component: DateInput,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'date' },
    title: { control: 'text' },
    subtitle: { control: 'text' },
    placeholder: { control: 'text' },
    errMsg: { control: 'text' },
    tooltip: { control: 'text' },
    tSize: { control: { type: 'radio' }, options: ['lg', 'md', 'sm', 'xs'] },
  },
  
};

export const Default = {
  args: {
    title: '出生年月日',
    placeholder: '請輸入出生年月日',
    modelValue: '2021/01/02'
  },
};
export const SubTitle = {
  args: {
    title: '出生年月日',
    subtitle: '(YYYYMMDD)',
    placeholder: '請輸入出生年月日',
  },
};
export const Range = {
  args: {
    title: '起程時間',
    placeholder: '請輸入起程時間',
    minDate: Date.now(),
    maxDate: '2024/12/31'
  },
};
export const Error = {
  args: {
    title: '出生年月日',
    placeholder: '請輸入出生年月日',
    errMsg: '出生年月日為必填項目'
  },
};
export const Disabled = {
  args: {
    title: '出生年月日',
    placeholder: '請輸入出生年月日',
    disabled: true
  },
};
export const Tooltip = {
  args: {
    title: '出生年月日',
    placeholder: '請輸入出生年月日',
    tooltip: '請輸入出生年月日'
  },
};