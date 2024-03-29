import Title from './Title.vue';

export default {
  title: 'Example/Title',
  component: Title,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    eng: { control: 'text' },
    divider: { control: 'boolean'},
    fontsize: { control: 'text' },
    weight: { control: 'text' },
    engFontsize: { control: 'text' },
    engWeight: { control: 'text' }
  }
}

export const Default = {
  args: {
    title: '投保方案',
  }
};
export const Divider = {
  args: {
    title: '投保方案',
    divider: true,
  }
};
export const English = {
  args: {
    title: '要保人資料輸入',
    eng: 'STEP 01',
    divider: true,
  }
};
export const CustomSize = {
  args: {
    title: '投保方案',
    eng: 'STEP 01',
    fontsize: '36px',
    weight: '900',
    engFontsize: '24px',
    engWeight: '700'
  }
};