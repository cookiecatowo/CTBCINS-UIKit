<template>
  <div class="hidden sm:block">
    <Popover v-if="!disabled" v-model="open">
      <PopoverTrigger as-child>
          <CalendarIcon class="mr-2 h-4 w-4 text-[#7A7A7A] cursor-pointer"/>
      </PopoverTrigger>
      <PopoverContent class="w-auto m-2 hidden sm:block" >
        <Calendar
          v-if="range"
          v-model.range="date"
          :columns="2"
          :min-date="minDate"
          :max-date="maxDate" 
        />
        <Calendar v-else v-model="date" 
          :min-date="minDate"
          :max-date="maxDate" 
        />
      </PopoverContent>
    </Popover>
    <CalendarIcon class="mr-2 h-4 w-4 text-border" v-else/>
  </div>
  <div class="block sm:hidden">
    <CalendarIcon class="mr-2 h-4 w-4 text-[#7A7A7A] cursor-pointer" v-if="!disabled" @click="open = true"/>
    <CalendarIcon class="mr-2 h-4 w-4 text-border" v-else/>
    <Drawer v-model="open" hidden="sm:hidden" maxHeight="95vh">
      <Calendar
          v-if="range"
          v-model.range="date"
          :columns="12" 
          :min-date="minDate"
          :max-date="maxDate"
        />
        <Calendar v-else 
          v-model="date"
          :min-date="minDate"
          :max-date="maxDate" 
        />
    </Drawer>

  </div>
</template>
<script>
  export default {
    name: 'DatePicker',
  }
</script>
<script setup>
import { Calendar as CalendarIcon } from 'lucide-vue-next'
import { ref, watch } from 'vue';
import { Calendar } from '../components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../components/ui/popover'
import Drawer from './Drawer.vue';
import { useWindowSize } from '@vueuse/core'

const props = defineProps({
  modelValue: { 
    type: [ Date, Object, String ],
  },
  range: { 
    type: Boolean,
    default: false 
  },
  disabled: { 
    type: Boolean,
    default: false 
  },
  minDate: {
    type: [ Date, Object, String ],
  },
  maxDate: {
    type: [ Date, Object, String ],
  },
})

const date = ref(props.modelValue)
const open =ref(false)
const emits = defineEmits(["update:modelValue"]);
watch(() => props.modelValue, (value) => {
  date.value = value
}, {immediate: true})
watch(() => date.value, (value) => {
  if(value){
    emits('update:modelValue', value )
  }
})

const { width } = useWindowSize()
watch( width, (newWidth) => {
  if (newWidth >= 640) {
    open.value = false
  } 
})
</script>