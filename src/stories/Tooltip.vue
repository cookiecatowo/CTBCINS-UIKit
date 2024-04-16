<template>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger as-child>
      <div class="flex items-center w-fit gap-x-1">
       <QuestionMarkCircleIcon class="w-[24px] h-[24px] text-tooltip" />
        <span v-if="!!label" class="text-sm">{{ label }}</span>
      </div>
       
      </TooltipTrigger>
      <TooltipContent :class="size" class="m-2">
      <div v-html="content"></div>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
<script>
  export default {
    name: 'Tooltip',
  }
</script>
<script setup>
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '../components/ui/tooltip'
import { QuestionMarkCircleIcon } from "@heroicons/vue/24/solid";
import { defineProps, computed } from 'vue'
const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  content: {
    type: String,
    default: ''
  },
  size: {
    type: String,
  }
})
const size = computed(() => {
  switch (props.size || 'md'){
    case 'lg':
      return 'max-w-lg'
    case 'md':
      return 'max-w-md'
    case 'sm':
      return 'max-w-sm'
    case 'xs': 
      return 'max-w-xs'
  }
})
</script>
