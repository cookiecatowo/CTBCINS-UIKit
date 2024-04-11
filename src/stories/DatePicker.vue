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
        />
        <Calendar v-else v-model="date" />
      </PopoverContent>
    </Popover>
    <CalendarIcon class="mr-2 h-4 w-4 text-border" v-else/>
  </div>
  <div class="block sm:hidden">
    <CalendarIcon class="mr-2 h-4 w-4 text-[#7A7A7A] cursor-pointer" v-if="!disabled" @click="open = true"/>
    <CalendarIcon class="mr-2 h-4 w-4 text-border" v-else/>
    <Dialog v-model="open" class="block sm:hidden" :size="range ? 'w-[320px] h-[90%] max-h-[740px]' : 'w-[310px]'" scroll padding="30px 15px 10px 15px">
      <Calendar
          v-if="range"
          v-model.range="date"
          :columns="2"
        />
        <Calendar v-else v-model="date" />
    </Dialog>
  </div>

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
import Dialog from './Dialog.vue';
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
</script>