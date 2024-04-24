import { fn } from '@storybook/test';
import Button from './Button.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'radio' }, options: ['sm', 'md', 'lg', 'none'] },
    color: { control: 'color' },
    width: { control: 'text' },
    height: { control: 'text' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
  parameters: {
    docs: {
      description: {
        component: 'Another description, overriding the comments'
      },
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    size: 'md',
    label: '重新整理',
  },
};
export const Outline = {
  args: {
    size: 'md',
    outline: true,
    label: '儲存紀錄',
  },
};
export const Small = {
  args: {
    size: 'sm',
    label: '修改',
  },
};
export const Medium = {
  args: {
    size: 'md',
    label: '重新整理',
  },
};
export const Large = {
  args: {
    size: 'lg',
    label: '下一步',
  },
};
export const LargeOutline = {
  args: {
    size: 'lg',
    label: '上一步',
    outline: true
  },
};
export const Disabled = {
  args: {
    size: 'lg',
    label: '提交審核',
    disabled: true
  },
};
export const CustomizeColor = {
  args: {
    size: 'md',
    color: '#474747',
    label: '查看全部',
  },
};
export const CustomizeWidth = {
  args: {
    label: '確認',
    width: '500px',
    height: '100px',
  },
};
export const CustomizeContent = {
  args: {
    size: 'md',
    label: '刪除資料',
  },
  parameters: {
    slots: {
      default: {
        template: `刪除資料<p>X</p>`,
      },
    },
  },
};


