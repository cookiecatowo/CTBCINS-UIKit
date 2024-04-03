import SubTitle from './SubTitle.vue';

export default {
  title: 'Example/SubTitle',
  component: SubTitle,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    eng: { control: 'text' },
    engPosition: { control: { type: 'radio'}, options: ['right', 'bottom', 'top'] },
    fontsize: { control: 'text' },
    weight: { control: 'text' },
    engFontsize: { control: 'text' },
    engWeight: { control: 'text' },
  }
}

export const Default = {
  args: {
    title: '投保方案',
  }
};
export const English = {
  args: {
    title: '要保人資料輸入',
    eng: 'STEP 01',
  }
};
export const Top = {
  args: {
    title: '要保人資料輸入',
    eng: 'STEP 01',
    engPosition: 'top',
  }
};
export const Bottom = {
  args: {
    title: '要保人資料輸入',
    eng: 'STEP 01',
    engPosition: 'bottom',
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