<template>
  <div :class="cn('grid gap-2', $attrs.class ?? '')">
    <Popover>
      <PopoverTrigger as-child>
        <Button
          id="date"
          :variant="'outline'"
          :class="cn(
            'w-[300px] justify-between text-left font-normal',
            !date && 'text-black',
          )"
        >
          <span :class="{'text-textDisabled': !date.start}">
            {{ date.start ? (
              date.end ? `${format(date.start, 'yyyy/MM/dd')} - ${format(date.end, 'yyyy/MM/dd')}`
              : format(date.start, 'yyyy/MM/dd')
            ) : '請選擇日期' }}
          </span>
          <CalendarIcon class="mr-2 h-4 w-4 text-[#7A7A7A]" />
        </Button>
      </PopoverTrigger>
      <PopoverContent class="w-auto p-0" align="start">
        <Calendar
          v-model.range="date"
          :columns="2"
        />
      </PopoverContent>
    </Popover>
  </div>
</template>
<script setup>
import { addDays, format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-vue-next';

import { ref, watch } from 'vue';
import { cn } from '../lib/utils';
import { Button } from '../components/ui/button';
import { Calendar } from '../components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../components/ui/popover'

// const props = defineProps({
//   modelValue: { type: Object },
// })

// const date = ref({
//   start: null,
//   end: null,
// })

// watch(() => modelValue, (value) => {
//   if(value.start && value.end) {
//     date.value = value
//   }else{
//     date.value = {
//       start: null,
//       end: null,
//     }
//   }
// }, { immediate: true })
// watch(() => date, (value) => {
//   emit('update:modelValue', value)
// })

const date = ref({
})
</script>
