import TableBtn from "./TableBtn.vue";
import { fn } from '@storybook/test';

export default {
  title: 'Example/TableBtn',
  component: TableBtn,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    color: { control: 'text' },
  },
  args: { onClick: fn() },
};

export const Default = {
  args: {
    label: '新增被保險人'
  }
};
export const Slot = {
  parameters: {
    slots: {
      default: {
        template: 'Slot Content.'
      },
    }
  }
};
export const CustomColor = {
  args: {
    label: '新增被保險人',
    color: '#F26868'
  }
};