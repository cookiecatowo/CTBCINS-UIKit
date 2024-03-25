import Input from './Input.vue';
import { fn } from '@storybook/test';

export default {
  title: 'Example/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'text' },
    title: { control: 'text' },
    subtitle: { control: 'text' },
    placeholder: { control: 'text' },
    errMsg: { control: 'text' },
    tooltip: { control: 'text' },
    tSize: { control: { type: 'radio' }, options: ['lg', 'md', 'sm', 'xs'] },
  },
  args: { focus: fn(), blur: fn() },
};
export const Default = {
  args: {
    title: '身分證號/統編',
    placeholder: '請輸入身分證號/統編',
  },
};
export const SubTitle = {
  args: {
    title: '市內電話',
    subtitle: '(市話、手機與信箱擇一填寫即可)',
    placeholder: '請輸入市內電話',
  },
};
export const Password = {
  args: {
    title: '密碼',
    placeholder: '請輸入密碼',
    password: true
  },
};
export const Disabled = {
  args: {
    title: '身分證號/統編',
    placeholder: '請輸入身分證號/統編',
    disabled: true,
  },
};
export const Error = {
  args: {
    title: '身分證號/統編',
    placeholder: '請輸入身分證號/統編',
    errMsg: '請輸入正確的身分證號/統編'
  },
};
export const Tooltip = {
  args: {
    title: '身分證號/統編',
    placeholder: '請輸入身分證號/統編',
    tooltip: '身分證號/統編',
    tSize: 'xs'
  },
};