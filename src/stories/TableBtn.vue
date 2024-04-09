<template>
  <Card class="w-full h-full border border-primary text-primary text-lg lg:text-xl border-dashed rounded-xl p-6 flex justify-center items-center" :style="style" >
  <slot>
  <div class="flex items-center gap-x-2">
    <PlusIcon class="h-5 lg:h-6"/>
    {{label}}
  </div>

  </slot>
  </Card>
</template>
<script setup>
import { Card } from '../components/ui/card'
import { computed } from 'vue';
import { PlusIcon } from "@heroicons/vue/24/solid";

const props = defineProps({
  label: {
    type: String
  },
  color: {
    type: String
  },
})

const style = computed(() => {
  return {
    color: props.color,
    borderColor: props.color,
  }
});

</script>