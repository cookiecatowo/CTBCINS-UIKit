<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button
        :variant="'outline'"
        :class="cn(
          'w-[280px] justify-between text-left font-normal',
          !date && 'text-black',
        )"
      >
        <span :class="{'text-textDisabled': !date}">
          {{ date ? format(date, "yyyy/MM/dd") : "Pick a date" }}
        </span>
        <CalendarIcon class="mr-2 h-4 w-4" />
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-auto p-0">
      <Calendar v-model="date" />
    </PopoverContent>
  </Popover>
</template>
<script setup>
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-vue-next'
import { ref, watch } from 'vue';
import { cn } from '../lib/utils'
import { Button } from '../components/ui/button'
import { Calendar } from '../components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../components/ui/popover'

const props = defineProps({
  modelValue: { type: Date }
})

const date = ref(props.modelValue)

const emits = defineEmits(["update:modelValue"]);
watch(() => props.modelValue, (value) => {
  date.value = value
}, {immediate: true})
watch(() => date, (value) => {
  emits('update:modelValue', value)
})
</script>