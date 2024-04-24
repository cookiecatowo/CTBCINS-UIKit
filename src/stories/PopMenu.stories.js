import PopMenu from './PopMenu.vue';
import { fn } from '@storybook/test';

export default {
  title: 'Example/PopMenu',
  component: PopMenu,
  tags: ['autodocs'],
  argTypes: {
    list: { control: 'array' },
    hamburger: { control: 'boolean' },
  },
  args: { onClick: fn() },
};

export const Default = {
  args: {
    list: [{ value: '01', label: '修改' },
      { value: '02', label: '檢視' },
      { value: '03', label: '刪除資料', delete: true },]
  }
};
export const Hamburger = {
  args: {
    list: [{ value: '01', label: '修改' },
      { value: '02', label: '檢視' },
      { value: '03', label: '刪除資料', delete: true },],
      hamburger: true
  }
};
export const Hide = {
  args: {
    list: [{ value: '01', label: '修改', hide: true },
      { value: '02', label: '檢視' },
      { value: '03', label: '刪除資料', hide: true },]
  }
};
export const Slot = {
  args: {
    list: [{ value: '01' },
      { value: '02'},
      { value: '03', delete: true },]
  },
  parameters: {
    slots: {
      s_01: {
        template: '<span>修改</span><span>+</span>'
      },
      s_02: {
        template: '<span>檢視</span><span>*</span>'
      },
      s_03: {
        template: '<span>刪除</span><span>X</span>'
      },
    }
  }
};