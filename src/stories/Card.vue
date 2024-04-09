<template>
  <Card class="w-full h-full border border-[#D9D9D9] rounded-card px-4 py-8 lg:px-12 lg:py-14 bg-white" :style="style">
    <slot/>
  </Card>
</template>
<script setup>
import { Card } from '../components/ui/card'
import { computed } from 'vue';

const props = defineProps({
  padding: {
    type: String
  },
  margin: {
    type: String
  },
  color: {
    type: String
  }
})

const style = computed(() => {
  return {
    padding: props.padding,
    margin: props.margin,
    backgroundColor: props.color,
  }
});
</script>
