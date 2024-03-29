<template>
  <button type="button" :class="[classes]" 
    class="py-0 px-4  rounded-full border-2 border-border flex items-center justify-center gap-x-4 cursor-pointer disabled:bg-btnDisabled disabled:text-btnDisabledText disabled:cursor-default hover:brightness-[0.85] disabled:hover:brightness-100"
    @click="onClick" :style="style" :disabled="disabled">
    <slot name="img"/>
    <span class="text-28 tracking-wider">{{ label }} </span>
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
    width: props.width || '390px',
    height: props.height || '98px'
  }
});

const onClick = () => {
  emits('click');
};
</script>
