import Tag from './Tag.vue';

export default {
  title: 'Example/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    color: { control: 'text' },
  }
}

export const Primary = {
  args: {
    label: '活動'
  }
}
export const Red = {
  args: {
    label: '系統',
    color: 'red'
  }
}
export const Yellow = {
  args: {
    label: '重要通知',
    color: 'yellow'
  }
}
export const CustomColor = {
  args: {
    label: '其他',
    color: '#A4A4A4'
  }
}
export const Long = {
  args: {
    label: '重要通知重要通知重要通知重要通知',
  }
}