<template>
  <div class="flex flex-col gap-y-2">
    <div class="flex flex-col gap-y-4">
      <div class="inline items-end break-all">
        <span v-if="title" class="text-lg font-semibold">{{ title }}</span>
        <span v-if="subtitle" class="text-sm font-normal ml-1 mb-[2px]">{{ subtitle }}</span>
      </div>
      <div class="relative w-full items-center" >
        <RadioGroup v-model='updateModelValue' class="flex gap-4 flex-wrap" :class="{ 'pr-12': !!tooltip, 'flex-col': column }">
          <div class="flex items-center space-x-2" :class="{'grow': !radioWidth}" :style="style" v-for="item in list">
            <RadioGroupItem :value="item.value" :checked="updateModelValue == item.value" @click="onClick(item.value)"/>
            <Label class="text-base font-normal">{{ item.label }}</Label>
          </div>
        </RadioGroup>
        <span class="absolute right-0 top-0 flex items-center justify-center px-3 gap-x-2" v-if="tooltip">
          <Tooltip :content="tooltip" :size="tSize"/>
        </span>
      </div>
    </div>
    <span v-if="errMsg" class="text-xs text-alert">{{ errMsg }}</span>
  </div>
  
</template>
<script>
  export default {
    name: 'Radio',
  }
</script>
<script setup>
import { Label } from '../components/ui/label';
import Tooltip from './Tooltip.vue';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { computed, defineProps } from 'vue';

const props = defineProps({
  modelValue: {
    type:[ String, Boolean, Number ],
  },
  list: {
    type: Array,
  },
  title: {
    type: String,
  },
  subtitle: {
    type: String,
    default: ''
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
  column: {
    type: Boolean,
    default: false
  },
  radioWidth: {
    type: String
  }
})
const emits = defineEmits(["update:modelValue", "click"]);
const updateModelValue = computed({
  get() {
    return props.modelValue;
  },
  set(newValue) {
    emits("update:modelValue", newValue);
  }
});

const onClick = (value) => {
  emits('click', value);
};


const style = computed(() => {
  return {
    width: props.radioWidth,
  }
});
</script>