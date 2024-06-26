import { fn } from '@storybook/test';
import Button3D from './Button3D.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Example/Button3D',
  component: Button3D,
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color' },
    width: { control: 'text' },
    height: { control: 'text' },
    size: { control: {type: 'radio'}, options:['sm', 'lg'] }
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    label: '選擇 Excel 上傳',
    img: '/testImg/3dBtn1.png'
  },
};
export const Outline = {
  args: {
    outline: true,
    label: '影像辨識',
    img: '/testImg/3dBtn2.png'
  },
};

export const Disabled = {
  args: {
    label: '影像辨識',
    disabled: true,
    img: '/testImg/3dBtn2.png',
  },
};
export const Small = {
  args: {
    label: '選擇常用要保人',
    outline: true,
    size: 'sm',
    shadow: '#4964CE24',
    img: '/testImg/3dBtn1.png'
  },
};
export const CustomizeColor = {
  args: {
    color: '#474747',
    label: '查看全部',
    img: '/testImg/3dBtn1.png'
  },
};
export const CustomizeWidth = {
  args: {
    label: '確認',
    width: '200px',
    height: '70px',
    img: '/testImg/3dBtn1.png'
  },
};


