<template>
  <button type="button" :class="[classes, size]" class="py-0 px-4 tracking-wider rounded-full inline items-center cursor-pointer disabled:bg-btnDisabled disabled:border-none disabled:text-btnDisabledText disabled:cursor-default"
    @click="onClick" :style="style" :disabled="disabled">{{ label }}</button>
</template>

<script>
import { reactive, computed } from 'vue';
 
export default {
  name: 'button',

  props: {
    label: {
      type: String,
      required: true
    },
    primary: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
    color: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false
    },
  },

  emits: ['click'],

  setup(props, { emit }) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        'bg-main text-white hover:brightness-[0.85]': props.primary,
        'border-[#037E80] text-[#037E80] border-2 bg-transparent hover:bg-black hover:bg-opacity-[0.15]': !props.primary,
      })),
      style: computed(() => {
        if(props.primary) {
          return {
            backgroundColor: props.color,
          }
        }else {
          return {
            borderColor: props.color,
            color: props.color
          }
        }
      }),
      size: computed(() => {
        switch (props.size || 'medium'){
          case 'small':
            return 'text-base min-h-[38px] min-w-[85px]'
          case 'medium':
            return 'text-base min-h-[38px] min-w-[137px]'
          case 'large':
            return 'text-lg min-h-[56px] min-w-[212px]'
        }
      }),
      onClick() {
        emit('click');
      },
    };
  },
};
</script>
