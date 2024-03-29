<template>
  <button type="button" :class="[classes, size]" class="py-0 px-4 tracking-wider rounded-full flex items-center justify-center gap-x-2 cursor-pointer disabled:bg-btnDisabled disabled:border-none disabled:text-btnDisabledText disabled:cursor-default"
    @click="onClick" :style="style" :disabled="disabled">
      {{ label }}
      <slot name="icon"/>
  </button>
</template>
<script setup>
import { defineEmits, computed } from 'vue';
 
const props = defineProps ({
  label: {
    type: String,
    required: true
  },
  outline: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    validator: function (value) {
      return ['sm', 'md', 'lg'].indexOf(value) !== -1;
    },
  },
  color: {
    type: String,
  },
  width: {
    type: String,
  },
  height: {
    type: String,
  },
  disabled: {
    type: Boolean,
    default: false
  },
})
const emits = defineEmits(["click"]);

const classes = computed(() => ({
  'bg-primary text-white border-none hover:brightness-[0.85] disabled:hover:brightness-100': !props.outline,
  'border-[#037E80] text-[#037E80] bg-transparent hover:bg-black hover:bg-opacity-[0.15]': props.outline,
}));

const style = computed(() => {
  if(!props.outline) {
    return {
      backgroundColor: props.color,
      width: props.width,
      height: props.height
    }
  }else {
    return {
      borderColor: props.color,
      color: props.color,
      width: props.width,
      height: props.height
    }
  }
});

const size = computed(() => {
  switch (props.size){
    case 'sm':
      return 'text-base h-[38px] w-[85px] border'
    case 'md':
      return 'text-base h-[38px] w-[137px] border'
    case 'lg':
      return 'text-base lg:text-lg h-[38px] w-[137px] lg:h-[56px] lg:w-[212px] border lg:border-2'
    default:
    return 'text-base min-h-[38px] min-w-[85px] border'
  }
});
const onClick = () => {
  emits('click');
};
</script>
