<template>
  <Popover v-if="!disabled">
    <PopoverTrigger as-child>
        <CalendarIcon class="mr-2 h-4 w-4 text-[#7A7A7A] cursor-pointer"/>
    </PopoverTrigger>
    <PopoverContent class="w-auto m-2" >
      <Calendar
        v-if="range"
        v-model.range="date"
        :columns="2"
      />
      <Calendar v-else v-model="date" />
    </PopoverContent>
  </Popover>
  <CalendarIcon class="mr-2 h-4 w-4 text-border" v-else/>
</template>
<script setup>
import { Calendar as CalendarIcon } from 'lucide-vue-next'
import { ref, watch } from 'vue';
import { Calendar } from '../components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../components/ui/popover'

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
  }
})

const date = ref(props.modelValue)

const emits = defineEmits(["update:modelValue"]);
watch(() => props.modelValue, (value) => {
  date.value = value
}, {immediate: true})
watch(() => date.value, (value) => {
  if(value){
    emits('update:modelValue', value )
  }

})
</script>