import Overlay from './Overlay.vue'
import { fn } from '@storybook/test';

export default {
  title: 'Example/Overlay',
  component: Overlay,
  argTypes: {
    modelValue: { control: 'boolean' },
    zIndex: { control: 'text' },
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
export const ZIndex = {
  args: {
    modelValue: true,
    zIndex: '100',
  },

}