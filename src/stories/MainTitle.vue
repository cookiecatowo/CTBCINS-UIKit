<template>
  <div>
    <span class="flex flex-col items-center text-[#A4A4A4] mb-1 text-xs lg:text-lg font-semobold" :style="engStyle">
      {{ eng }}
    </span>
    <div class="flex justify-center items-center">
      <Separator class="shrink max-w-[61px] lg:max-w-[164px]" v-if="divider"/>
      <span class="text-black shrink-0 px-6 text-24 font-semibold lg:text-32 lg:font-medium" :style="style">{{ title }}</span>
      <Separator class="shrink max-w-[61px] lg:max-w-[164px]" v-if="divider"/>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'MainTitle',
  }
</script>
<script setup>
import { computed } from 'vue';
import { Separator } from '../components/ui/separator'

const props = defineProps({
  title: {
    type: String
  },
  eng: {
    type: String
  },
  divider: {
    type: Boolean,
    default: false
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
</script>