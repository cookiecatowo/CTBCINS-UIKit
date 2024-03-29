import { fn } from '@storybook/test';
import Tab from './Tab.vue';

export default {
  title: 'Example/Tab',
  component: Tab,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'text'},
    list: { control: 'array' },
    width: { control: 'text'},
    height: { control: 'text'},
    content: {control: 'boolean'}
  },
  args: { onClick: fn() },
};
export const Default = {
  args: {
    modelValue: '01',
    list: [{ value: '01', label: '基本資料異動' },
      { value: '02', label: '保額或人數異動' }]
  }
};
export const Picture = {
  args: {
    modelValue: '02',
    list: [{ value: '01', label: '基本資料異動', img: '/testImg/tab1.png' },
      { value: '02', label: '保額或人數異動', img: '/testImg/tab2.png' }]
  }
};
export const Content = {
  args: {
    modelValue: '02',
    list: [{ value: '01', label: '基本資料異動' },
      { value: '02', label: '保額或人數異動' }],
    content: true
  },
  parameters: {
    slots: {
      s_01: {
        template: `<h1> 基本資料異動 </h1>`,
      },
      s_02: {
        template: `<h1> 保額或人數異動 </h1>`,
      },
    },
  },
};
export const CustomSize = {
  args: {
    modelValue: '01',
    list: [{ value: '01', label: '基本資料異動' },
      { value: '02', label: '保額或人數異動' }],
    width: '200px',
    height: '100px'
  }
};
export const Multi = {
  args: {
    modelValue: '01',
    list: [{ value: '01', label: '基本資料異動' },
      { value: '02', label: '保額或人數異動' },
      { value: '03', label: '保期異動' },
    
    ],
  }
};