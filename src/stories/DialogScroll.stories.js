import DialogScroll from './DialogScroll.vue';

export default {
  title: 'Example/DialogScroll',
  component: DialogScroll,
  argTypes: {
    
    force: { control: 'boolean'},
  },
};

export const Default = {
  args: {
    modelValue: true,
  },
  parameters: {
    slots: {
      default: {
        template: '<div v-for="n in 50">{{n}}</div>'
      }
    }
  }
};
export const Force = {
  args: {
    modelValue: true,
    force: true
  },
  parameters: {
    slots: {
      default: {
        template: '<div v-for="n in 50">{{n}}</div>'
      }
    }
  }
};
export const CustomSize = {
  args: {
    modelValue: true,
    padding: '200px 100px 50px 25px',
    margin: '200px 100px 50px 25px',
  },
  parameters: {
    slots: {
      default: {
        template: '<div v-for="n in 50" class="bg-border">{{n}}</div>'
      }
    }
  }
};