<template>
  <button type="button" :class="[classes]" 
    class="py-0 px-4 w-[233px] lg:w-[390px] h-[59px] lg:h-[98px] rounded-full border-2 border-border flex items-center justify-center gap-x-4 cursor-pointer disabled:bg-btnDisabled disabled:text-btnDisabledText disabled:cursor-default hover:brightness-[0.85] disabled:hover:brightness-100"
    @click="onClick" :style="style" :disabled="disabled">
    <img :src="img" class="h-full w-auto py-2 lg:py-4"/>
    <span class="text-base lg:text-28 tracking-wider">{{ label }} </span>
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
  'bg-primary text-white ': !props.outline,
  'bg-white text-black': props.outline,
}));

const style = computed(() => {
  return {
    backgroundColor: props.color,
    width: props.width,
    height: props.height
  }
});

const onClick = () => {
  emits('click');
};
</script>
