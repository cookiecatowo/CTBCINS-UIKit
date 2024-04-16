<template>
  <Popover>
    <PopoverTrigger as-child>
        <EllipsisHorizontalIcon class="text-label h-9 w-9 cursor-pointer"/>
    </PopoverTrigger>
    <PopoverContent class="w-[180px] grid p-0 rounded-lg divide-y m-2 shadow">
      <template v-for="item in list">
        <div class="hover:bg-inputDisabled w-full min-h-[60px] flex justify-between items-center p-3 cursor-pointer" 
        :class="[item.delete ? 'text-red': '']" v-if="!item.hide" @click="onClick(item.value)">
          <slot :name="'s_'+item.value"> 
            <span>{{ item.label }} </span>
            <XMarkIcon class="h-5 w-5 shrink-0" v-if="item.delete"/>
          </slot>
        </div>
      </template>
    </PopoverContent>
  </Popover>
</template>
<script>
  export default {
    name: 'PopMenu',
  }
</script>
<script setup>
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../components/ui/popover';
import { EllipsisHorizontalIcon } from '@heroicons/vue/24/solid'
import { XMarkIcon } from "@heroicons/vue/24/outline";

const props = defineProps({
  list: {
    type: Array,
  }
})

const emits = defineEmits(["click"]);
const onClick = (value) => {
  emits('click', value);
};
</script>
<style>
shadow {
  box-shadow: 0px 4px 10.2px 0px #0000001A;
}
</style>