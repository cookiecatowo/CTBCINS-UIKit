import DateRangeInput from "./DateRangeInput.vue";
import { fn } from '@storybook/test';

export default {
  title: 'Example/DateRangeInput',
  component: DateRangeInput,
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
    title: '旅遊期間',
    placeholder: 'YYYYMMDD-YYYYMMDD',
    modelValue: { start: '2021/01/02', end: '2021/01/15' }
  },
};
export const SubTitle = {
  args: {
    title: '旅遊期間',
    subtitle: '(YYYYMMDD-YYYYMMDD)',
    placeholder: '請輸入旅遊期間',
  },
};
export const Range = {
  args: {
    title: '旅遊期間',
    placeholder: '請輸入旅遊期間',
    minDate: Date.now(),
    maxDate: '2024/12/31'
  },
};
export const Error = {
  args: {
    title: '旅遊期間',
    placeholder: 'YYYYMMDD-YYYYMMDD',
    errMsg: '旅遊期間為必填項目'
  },
};
export const Disabled = {
  args: {
    title: '旅遊期間',
    placeholder: 'YYYYMMDD-YYYYMMDD',
    disabled: true
  },
};
export const Tooltip = {
  args: {
    title: '旅遊期間',
    placeholder: 'YYYYMMDD-YYYYMMDD',
    tooltip: '請輸入旅遊期間'
  },
};