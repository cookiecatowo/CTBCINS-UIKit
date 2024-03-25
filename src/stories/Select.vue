<template>
  <div class="flex flex-col gap-y-2">
    <div class="flex flex-col gap-y-4">
      <div class="inline items-end break-all">
        <span v-if="title" class="text-lg font-semibold">{{ title }}</span>
        <span v-if="subtitle" class="text-sm font-normal ml-1 mb-[2px]">{{ subtitle }}</span>
      </div>
      <div class="relative w-full items-center" >
        <Select v-model="updateModelValue">
          <SelectTrigger :disabled="disabled" :class="{'pr-12': !!tooltip , 'border-alert': !!errMsg, 'text-textDisabled': !updateModelValue }">
            <SelectValue :placeholder="placeholder"/>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem class="text-textDisabled" :value='null' disabled>{{placeholder}}</SelectItem>
              <SelectItem v-for="item in list" :value="item.value">
                {{ item.label }}
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <span class="absolute end-0 inset-y-0 flex items-center justify-center px-3 gap-x-2" v-if="tooltip">
          <Tooltip :content="tooltip" :size="tSize"/>
        </span>
      </div>
    </div>
    <span v-if="errMsg" class="text-xs text-alert">{{ errMsg }}</span>
  </div>
</template>
<script setup >
import { ref, computed } from 'vue';
import Tooltip from './Tooltip.vue';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select'

const props = defineProps({
  modelValue: {
    type: String,
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
const emits = defineEmits(["update:modelValue"]);
const updateModelValue = computed({
  get() {
    return props.modelValue;
  },
  set(newValue) {
    emits("update:modelValue", newValue);
  }
});

</script>