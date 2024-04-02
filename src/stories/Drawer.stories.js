import Drawer from './Drawer.vue';

export default {
  title: 'Example/Drawer',
  component: Drawer,
  argTypes: {

  },
};

export const Default = {
  args: {
    modelValue: true,
  },
  parameters: {
    slots: {
      default: {
        template: '<div v-for="n in 4" class="h-[50px] border-b flex items-center">{{"list " + n}}</div>'
      }
    }
  }
};
export const Scroll = {
  args: {
    modelValue: true,
  },
  parameters: {
    slots: {
      default: {
        template: '<div v-for="n in 30" class="h-[50px] border-b flex items-center">{{"list " + n}}</div>'
      }
    }
  }
};