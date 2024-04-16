<template>
  <div>
    <div class="flex gap-2 flex-wrap w-fit" :class="position">
      <span class="text-black shrink-0 text-22 lg:text-24 leading-none  lg:leading-none" :style="style">
        {{ title }}
      </span>
      <span class="text-[#A4A4A4] text-sm lg:text-base leading-none lg:leading-none" :style="engStyle">
        {{ eng }}
      </span>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'SubTitle',
  }
</script>
<script setup>
import { computed } from 'vue';

const props = defineProps({
  title: {
    type: String
  },
  eng: {
    type: String
  },
  fontsize: {
    type: String
  },
  weight: {
    type: String
  },
  engFontsize: {
    type: String
  },
  engWeight: {
    type: String
  },
  engPosition: {
    type: String,
    default: 'right',
  }
})

const style = computed(() => {
  return {
    fontWeight: props.weight,
    fontSize: props.fontsize
  }
});
const engStyle = computed(() => {
  return {
    fontWeight: props.engWeight,
    fontSize: props.engFontsize
  }
});

const position = computed(() => {
  switch (props.engPosition){
    case 'top':
      return 'flex-col-reverse'
    case 'bottom':
      return 'flex-col'
    default:
      return 'items-end'
  }
})
</script>