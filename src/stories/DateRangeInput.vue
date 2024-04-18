<template>
  <div class="flex flex-col gap-y-2">
    <div class="flex flex-col gap-y-4">
      <div class="inline items-end break-all">
        <span v-if="title" class="text-lg font-semibold">{{ title }}</span>
        <span v-if="subtitle" class="text-sm font-normal ml-1 mb-[2px]">{{ subtitle }}</span>
      </div>
      <div class="relative w-full items-center" :class="{'focus': isFocus}">
        <Input v-model="dateDisplay" :placeholder="placeholder" :disabled="disabled" 
        class="pr-12" :class="{'pr-20': !!tooltip, 'border-alert': !!errMsg && !isFocus}" @focus="focus" @blur="blur"/>
        <span class="absolute end-0 inset-y-0 flex items-center justify-center px-3 gap-x-2" >
          <DatePicker v-model="date" :disabled="disabled" :min-date="minDate" :max-date="maxDate" range/>
          <Tooltip :content="tooltip" v-if="tooltip" :size="tSize"/> 
        </span>
      </div>
    </div>
    <span v-if="errMsg" class="text-xs text-alert">{{ errMsg }}</span>
  </div>
</template>
<script>
  export default {
    name: 'DateRangeInput',
  }
</script>
<script setup>
import { format } from 'date-fns'
import { Input } from '../components/ui/input'
import { ref, watch } from 'vue';
import DatePicker from './DatePicker.vue';
import Tooltip from './Tooltip.vue';

const props = defineProps({
  modelValue: { 
    type: String
  },
  minDate: {
    type: [ Date, Object, String ],
  },
  maxDate: {
    type: [ Date, Object, String ],
  },
  title: {
    type: String,
  },
  subtitle: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: '請輸入...'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  errMsg: {
    type: String,
    default: ''
  },
  tooltip: {
    type: String,
    default: ''
  },
  tSize: {
    type: String,
    default: ''
  },
})

const emits = defineEmits(["update:modelValue", "focus", "blur"]);
const isFocus = ref(false);

const focus = () => {
  isFocus.value = true
  emits("focus");
}
const blur = () => {
  isFocus.value = false
  date.value = dateFormater(dateDisplay.value)
  if(!date.value) {
    dateDisplay.value = ''
  }
  emits("blur");
}

//Date. Input 轉換
const dateDisplay = ref('')
const date = ref(props.modelValue)

const dateFormater = (value) => {
  let str = value?.replace(/\//g, '-');
  const parts = str.split('-');
  if (parts.length === 6) {
    const sYear = parts[0];
    const sMonth = parseInt(parts[1]).toString().padStart(2, '0');
    const sDay = parseInt(parts[2]).toString().padStart(2, '0');
    const eYear = parts[3];
    const eMonth = parseInt(parts[4]).toString().padStart(2, '0');
    const eDay = parseInt(parts[5]).toString().padStart(2, '0');
    const start = `${sYear}-${sMonth}-${sDay}`
    const end = `${eYear}-${eMonth}-${eDay}`
    if(Date.parse(start) > Date.parse(end)){
      return { 
        start: end,
        end: start
      }
    }else{
       return { 
        start: start,
        end: end
      }
    }
  } else if (parts.length == 2 && str.length === 17) {
    const sYear = parts[0].substr(0, 4);
    const sMonth = parts[0].substr(4, 2);
    const sDay = parts[0].substr(6, 2);
    const eYear = parts[1].substr(0, 4);
    const eMonth = parts[1].substr(4, 2);
    const eDay = parts[1].substr(6, 2);
    const start = `${sYear}-${sMonth}-${sDay}`
    const end = `${eYear}-${eMonth}-${eDay}`
    if(Date.parse(start) > Date.parse(end)){
      return { 
        start: end,
        end: start
      }
    }else{
       return { 
        start: start,
        end: end
      }
    }
  } else {
    return '';
  }
}

watch(() => props.modelValue, (value) => {
  if(value){
    date.value = value
  }
}, {immediate: true})

watch(() => date.value, (value) => {
  if(value){
    if(value.start instanceof Date){
      date.value.start = format(value.start, "yyyy-MM-dd")
    }
    if(value.end instanceof Date){
      date.value.end = format(value.end, "yyyy-MM-dd")
    }
    dateDisplay.value =  date.value.start ? date.value.start.replace(/-/g, '') + '-' + date.value.end.replace(/-/g, '') : ''
    // dateDisplay.value = date.value
    emits('update:modelValue', value)
  }
  
  
}, {immediate: true})

</script>
<style>
  .focus::before {
    z-index: 10;
    content: '';
    position: absolute;
    left: 4px;
    bottom: 0;
    width: calc( 100% - 8px );
    height: 3px;
    border: 2px solid #037E80;
    border-radius: 4px;
    pointer-events: none;
  }
</style>