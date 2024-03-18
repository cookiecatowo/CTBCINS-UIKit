import { fn } from '@storybook/test';
import Button from './Button.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'select' }, options: ['small', 'medium', 'large'] },
    color: { control: 'color' },
    disabled: { control: { type: 'select' }, options: [true, false] },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: '重新整理',
  },
};

export const Secondary = {
  args: {
    label: '儲存紀錄',
  },
};

export const CustomizeColor = {
  args: {
    primary: true,
    color: '#474747',
    label: '查看全部　>',
  },
};

export const Small = {
  args: {
    primary: true,
    size: 'small',
    label: '修改',
  },
};

export const Large = {
  args: {
    primary: true,
    size: 'large',
    label: '下一步',
  },
};

export const Disabled = {
  args: {
    size: 'large',
    label: '提交審核',
    disabled: true
  },
};
