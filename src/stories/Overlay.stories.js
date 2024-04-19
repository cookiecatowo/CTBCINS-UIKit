import Overlay from './Overlay.vue'
import { fn } from '@storybook/test';

export default {
  title: 'Example/Overlay',
  component: Overlay,
  argTypes: {
    modelValue: { control: 'boolean' },
  },
  args: { onClick: fn() },
}

export const Default = {
  args: {
    modelValue: true
  }
}
export const Slot = {
  args: {
    modelValue: true
  },
  parameters: {
    slots: {
      default: {
        template: '<div class="text-white">123123</div>'
      }
    }
  }
}