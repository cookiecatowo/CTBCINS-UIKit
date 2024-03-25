import Select from './Select.vue';

export default {
  title: 'Example/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'text' },
    list: { control: 'array' },
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
    title: '交通工具',
    list: [
      { label: '汽車', value: '01' },
      { label: '火車', value: '02' },
      { label: '飛機', value: '03' },
      { label: '輪船', value: '04' }],
    placeholder: '請選擇交通工具',
  }
};
export const SubTitle = {
  args: {
    title: '旅遊目的',
    subtitle: '(選填)',
    list: [
      { label: '觀光', value: '01' },
      { label: '出差', value: '02' },
      { label: '留學', value: '03' }],
    placeholder: '請選擇旅遊目的',
  }
};
export const Disabled = {
  args: {
    title: '交通工具',
    list: [
      { label: '汽車', value: '01' },
      { label: '火車', value: '02' },
      { label: '飛機', value: '03' },
      { label: '輪船', value: '04' }],
    placeholder: '請選擇交通工具',
    disabled: true
  }
};
export const Error = {
  args: {
    title: '交通工具',
    list: [
      { label: '汽車', value: '01' },
      { label: '火車', value: '02' },
      { label: '飛機', value: '03' },
      { label: '輪船', value: '04' }],
    placeholder: '請選擇交通工具',
    errMsg: '交通工具為必填選項'
  }
};
export const Tooltip = {
  args: {
    title: '交通工具',
    list: [
      { label: '汽車', value: '01' },
      { label: '火車', value: '02' },
      { label: '飛機', value: '03' },
      { label: '輪船', value: '04' }],
    placeholder: '請選擇交通工具',
    tooltip: '交通工具',
    tSize: 'xs'
  }
};
export const LongList = {
  args: {
    title: '交通工具',
    list: [
      { label: '汽車', value: '01' },
      { label: '火車', value: '02' },
      { label: '飛機', value: '03' },
      { label: '輪船', value: '04' },
      { label: '汽車', value: '05' },
      { label: '火車', value: '06' },
      { label: '飛機', value: '07' },
      { label: '輪船', value: '08' },
      { label: '汽車', value: '09' },
      { label: '火車', value: '10' },
      { label: '飛機', value: '11' },
      { label: '輪船', value: '12' },
      { label: '汽車', value: '13' },
      { label: '火車', value: '14' },
      { label: '飛機', value: '15' },
      { label: '輪船', value: '16' },
      { label: '汽車', value: '17' },
      { label: '火車', value: '18' },
      { label: '飛機', value: '19' },
      { label: '輪船', value: '20' }],
    placeholder: '請選擇交通工具',
  }
};
