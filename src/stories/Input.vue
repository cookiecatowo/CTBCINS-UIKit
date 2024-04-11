<template>
  <div class="flex flex-col gap-y-2">
    <div class="flex flex-col gap-y-4">
      <div class="inline items-end break-all">
        <span v-if="title" class="text-lg font-semibold">{{ title }}</span>
        <span v-if="subtitle" class="text-sm font-normal ml-1 mb-[2px]">{{ subtitle }}</span>
      </div>
      <div class="relative w-full items-center" :class="{'focus': isFocus}">
        <Input v-model="updateModelValue" :placeholder="placeholder" :disabled="disabled"  :type="type"
        :class="{'pr-10': !!tooltip || !!password, 'pr-20': !!tooltip && !!password, 'border-alert': !!errMsg && !isFocus}" @focus="focus" @blur="blur"/>
        <span class="absolute end-0 inset-y-0 flex items-center justify-center px-3 gap-x-2" v-if="tooltip || password">
          <EyeIcon class="w-6 h-6 text-tooltip cursor-pointer" v-if="password && !isHide" @click="isHide = true"/>
          <EyeSlashIcon class="w-6 h-6 text-tooltip cursor-pointer" v-if="password && isHide" @click="isHide = false"/>
          <Tooltip :content="tooltip" v-if="tooltip" :size="tSize"/>
        </span>
      </div>
    </div>
    <span v-if="errMsg" class="text-xs text-alert">{{ errMsg }}</span>
  </div>
  
</template>
<script setup>
import { Input } from '../components/ui/input'
import Tooltip from './Tooltip.vue';
import { ref, computed } from 'vue'
import { EyeIcon, EyeSlashIcon } from '@heroicons/vue/20/solid';

const props = defineProps({
  modelValue: {
    type: [String, Number],
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
  password: {
    type: Boolean,
    default: false
  },
  number: {
    type: Boolean,
    default: false
  },
})
const emits = defineEmits(["update:modelValue", "focus", "blur"]);
const isFocus = ref(false);
const isHide = ref(true);
const updateModelValue = computed({
  get() {
    return props.modelValue;
  },
  set(newValue) {
    emits("update:modelValue", newValue);
    // console.log(typeof newValue)
  }
});
const focus = () => {
  isFocus.value = true
  emits("focus");
}
const blur = () => {
  isFocus.value = false
  emits("blur");
}
const type = computed(() => {
  if(props.password && isHide.value){
    return 'password'
  }else if(props.number){
    return 'number'
  }
  else{
    return 'text'
  }
});
</script>
<style>
  .focus::before {
    z-index: 10;
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    width: calc( 100% - 8px );
    height: 3px;
    border: 2px solid #037E80;
    border-radius: 4px;
    pointer-events: none;
    animation: input-scale 0.3s; 
  }

  @keyframes input-scale { 
      0%   { width: 0px; } 
  }

</style>