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
          <DatePicker v-model="date" :disabled="disabled"/>
          <Tooltip :content="tooltip" v-if="tooltip" :size="tSize"/> 
        </span>
      </div>
    </div>
    <span v-if="errMsg" class="text-xs text-alert">{{ errMsg }}</span>
  </div>
</template>
<script>
  export default {
    name: 'DateInput',
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
  if (parts.length === 3) {
    const year = parts[0];
    const month = parseInt(parts[1]).toString().padStart(2, '0');
    const day = parseInt(parts[2]).toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  } else if (str.length === 8) {
    const year = str.substr(0, 4);
    const month = str.substr(4, 2);
    const day = str.substr(6, 2);
    return `${year}-${month}-${day}`
  } else {
    return '';
  }
}
const displayFormater = (value) => {
  return value
}

watch(() => props.modelValue, (value) => {
  date.value = value
}, {immediate: true})

watch(() => date.value, (value) => {
  if(value instanceof Date){
    date.value = displayFormater(format(value, "yyyy-MM-dd"))
  }
  dateDisplay.value =  date.value ? date.value.replace(/-/g, '') : ''
  emits('update:modelValue', value)
  
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