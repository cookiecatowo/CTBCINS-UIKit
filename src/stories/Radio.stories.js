import Radio from './Radio.vue';

export default {
  title: 'Example/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'text'},
    list: { control: 'array' },
    title: { control: 'text' },
    subtitle: { control: 'text' },
    errMsg: { control: 'text' },
    tooltip: { control: 'text' },
    tSize: { control: { type: 'radio' }, options: ['lg', 'md', 'sm', 'xs'] },
    column: { control: 'boolean' },
    radioWidth: { control: 'text' },
  },
};

export const Default = {
  args: {
    title: '是否為高風險職業?',
    modelValue: 'true',
    list: [{ value: 'true', label: '是' },
      { value: 'false', label: '否' }]
  }
};
export const SubTitle = {
  args: {
    title: '是否為高風險職業?',
    subtitle: '(非必填)',
    modelValue: 'false',
    list: [{ value: 'true', label: '是' },
      { value: 'false', label: '否' }]
  }
};
export const Column = {
  args: {
    title: '是否為高風險職業?',
    modelValue: 'false',
    list: [{ value: 'true', label: '是' },
      { value: 'false', label: '否' }],
    column: true
  }
};
export const CustomWidth = {
  args: {
    title: '性別',
    modelValue: '01',
    list: [{ value: '01', label: '男' },
      { value: '02', label: '女' },
      { value: '03', label: '不便透漏' },
    ],
    radioWidth: '150px'
  }
};
export const Error = {
  args: {
    title: '是否為高風險職業?',
    modelValue: 'true',
    list: [{ value: 'true', label: '是' },
      { value: 'false', label: '否' }],
    errMsg: '不符合投保條件!'
  }
};
export const Tooltip = {
  args: {
    title: '是否為高風險職業?',
    modelValue: '',
    list: [{ value: 'true', label: '是' },
      { value: 'false', label: '否' }],
    tooltip: '是否為高風險職業是否為高風險職業是否為高風險職業是否為高風險職業是否為高風險職業是否為高風險職業'
  }
};
export const Multi = {
  args: {
    title: '是否為高風險職業?',
    list: [
      { value: '01', label: '01' },
      { value: '02', label: '02' },
      { value: '03', label: '03' },
      { value: '04', label: '04' },
      { value: '05', label: '05' },
      { value: '06', label: '06' },
      { value: '07', label: '07' },
      { value: '08', label: '08' },
      { value: '09', label: '09' },
      { value: '10', label: '10' },
      { value: '11', label: '11' },
      { value: '12', label: '12' },
      { value: '13', label: '13' },
      { value: '14', label: '14' },
      { value: '15', label: '15' },
      { value: '16', label: '16' },
      { value: '17', label: '17' },
      { value: '18', label: '18' },
      { value: '19', label: '19' },
      { value: '20', label: '20' },
    ],
    radioWidth: '80px',
    tooltip: '請選擇'
  }
};
