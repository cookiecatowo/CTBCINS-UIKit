import RadioCard from './RadioCard.vue';
import { fn } from '@storybook/test';

export default {
  title: 'Example/RadioCard',
  component: RadioCard,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'text'},
    list: { control: 'array' },
    disabled: { control: 'boolean' },
    direction: { control: { type:'radio' }, options:['left', 'top']},
    column: { control: 'boolean' },
    radioWidth: { control: 'text' },
  },
  args: { onClick: fn() },
};

export const Default = {
  args: {
    modelValue: '01',
    list: [{ value: '01', label: '國內外基本型', img: '/testImg/radio1.png', description:'身故/失能險、傷害醫療險' },
      { value: '02', label: '海外加值型', img: '/testImg/radio2.png', description:'身故/失能險、傷害醫療險、海外突發疾病' },
      { value: '03', label: '歐洲申根加值型', img: '/testImg/radio3.png', description:'身故/失能險、傷害醫療險、海外突發疾病' },]
  }
};
export const DirectionTop = {
  args: {
    modelValue: '01',
    list: [{ value: '01', label: 'Excel 上傳', img: '/testImg/radio4.png', description:'批次上傳適合多位被保險人進行投保，上傳文件僅限於此網站提供的 Excel 模板。' },
      { value: '02', label: '投保輸入', img: '/testImg/radio5.png', description:'除了個別輸入被保險人資訊外，也提供影像辨識功能，此功能可帶入多位被保險人資訊。' }],
    direction: 'top'
  }
};
export const Disabled = {
  args: {
    modelValue: '01',
    list: [{ value: '01', label: '國內外基本型', img: '/testImg/radio1.png', description:'身故/失能險、傷害醫療險' },
      { value: '02', label: '海外加值型', img: '/testImg/radio2.png', description:'身故/失能險、傷害醫療險、海外突發疾病' },
      { value: '03', label: '歐洲申根加值型', img: '/testImg/radio3.png', description:'身故/失能險、傷害醫療險、海外突發疾病' },],
      disabled: true
  }
};
export const Slot = {
  args: {
    modelValue: '01',
    list: [{ value: '01', label: 'Excel 上傳', img: '/testImg/radio4.png', description:'批次上傳適合多位被保險人進行投保，上傳文件僅限於此網站提供的 Excel 模板。' },
      { value: '02', label: '投保輸入', img: '/testImg/radio5.png', description:'除了個別輸入被保險人資訊外，也提供影像辨識功能，此功能可帶入多位被保險人資訊。' }],
    direction: 'top'
  },
  parameters:{
    slots:{
      s_01:{
        template: '<div><li>限要/被保險人本人信用卡進行付款</li><li>請於生效日前1~2個工作日前完成繳納</li></div>'
      },
      s_02:{
        template: '<div><li>法人機關團體、未持有信用卡之要/被保險人適用</li><li> 請於生效日前2~3個工作日前完成繳納</li></div>'
      }
    }
  }
};