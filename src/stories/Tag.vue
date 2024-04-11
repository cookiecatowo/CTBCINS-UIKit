<template>
  <Label class="flex justify-center items-center h-[33px] min-w-[93px] w-fit rounded-full px-3" :style="color">
      <span class="text-sm text-white font-medium tracking-widest">{{ label }}</span>
  </Label>
</template>
<script setup>
import { Label } from '../components/ui/label';
import { computed } from 'vue';
const props = defineProps({
  label: {
    type: String
  },
  color: {
    type: String
  }
})
const color = computed(() => {
  switch ( props.color || 'primary'){
    case 'primary':
      return {
        backgroundColor: '#037E80',
      }
    case 'red':
      return {
        backgroundColor: '#F46F6F',
      }
    case 'yellow':
      return {
        backgroundColor: '#EFA45B',
      }
    default: 
      return {
        backgroundColor: props.color,
      }
  }
})
</script>