import Pagination from './Pagination.vue';

export default {
  title: 'Example/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {

  },
};

export const Default = {
  args: {
    modelValue: 6,
    totalPages: 10,
  },
};
export const Short = {
  args: {
    modelValue: 1,
    totalPages: 3,
  }
};