<template>
  <Drawer :open="open" @update:open="(value) => close(value)">
    <!-- <DrawerTrigger>Open</DrawerTrigger> -->
    <DrawerPortal >
      <DrawerOverlay :class="hidden"/>
      <DrawerContent class="max-h-[67vh]" :class="hidden" :style="style">
        <div class="overflow-y-auto">
          <slot></slot>
        </div>
        <DrawerFooter v-if="!!footer">
          <DrawerClose>
            <div class="flex justify-end">
              <button class="text-sm text-primary font-semibold">確定</button>
            </div>   
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </DrawerPortal>
  </Drawer>
</template>
<script>
  export default {
    name: 'Drawer',
  }
</script>
<script setup>
import { Computer } from 'lucide-vue-next';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
  DrawerOverlay,
} from '../components/ui/drawer'
import { DrawerPortal } from "vaul-vue";
import { ref, watch, computed } from 'vue'; 

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  maxHeight: {
    type: String
  },
  hidden: {
    type: String
  },
  footer: {
    type: Boolean,
    default: true
  }
})

const open = ref(props.modelValue)
const emits = defineEmits(["update:modelValue", "close"]);
watch(() => props.modelValue, (value) => {
  open.value = value
}, {immediate: true})
watch(() => open.value, (value) => {
  emits('update:modelValue', value )
})
const close = (value) => {
  if(value == false && open.value != value){
    open.value = false
    emits('close')  
  }
}
const style = computed(() => {
  return {
    maxHeight: props.maxHeight
  }
})
</script>