<template>
  <button type="button" :class="[classes, size]" 
    class="py-0 px-4 rounded-full border-border flex items-center justify-center cursor-pointer disabled:bg-btnDisabled disabled:text-btnDisabledText disabled:cursor-default hover:brightness-[0.85] disabled:hover:brightness-100"
    @click="onClick" :style="style" :disabled="disabled">
    <img :src="img" class="h-full w-auto" :class="props.size == 'sm' ? 'py-2' : 'py-2 lg:py-4'"/>
    <span>{{ label }} </span>
  </button>
</template>
<script setup>
import { defineEmits, computed } from 'vue';
 
const props = defineProps ({
  label: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  outline: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
  },
  size: {
    type: String,
  },
  width: {
    type: String,
  },
  height: {
    type: String,
  },
  shadow: {
    type: String,
  },
  disabled: {
    type: Boolean,
    default: false
  },
})
const emits = defineEmits(["click"]);

const classes = computed(() => ({
  'bg-primary text-white ': !props.outline,
  'bg-white text-black': props.outline,
}));

const size = computed(() => {
  switch (props.size){
    case 'sm':
      return 'h-[44px] text-base border gap-x-2'
    case 'lg':
      return 'w-[233px] lg:w-[390px] h-[59px] lg:h-[98px] text-base lg:text-28 border-2  gap-x-4 tracking-wider'
    default:
    return 'w-[233px] lg:w-[390px] h-[59px] lg:h-[98px] text-base lg:text-28 border-2  gap-x-4'
  }
});

const style = computed(() => {
  return {
    backgroundColor: props.color,
    width: props.width,
    height: props.height,
    boxShadow: '6px 4px 14.6px 0px ' + props.shadow,

  }
});

const onClick = () => {
  emits('click');
};
</script>
