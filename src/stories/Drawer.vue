<template>
  <Drawer :open="open" @update:open="(value) => close(value)">
    <!-- <DrawerTrigger>Open</DrawerTrigger> -->
    <DrawerPortal>
      <DrawerOverlay/>
      <DrawerContent>
        <div class="overflow-y-auto">
          <slot></slot>
        </div>
        <DrawerFooter>
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
<script setup>
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
  DrawerOverlay,
} from '../components/ui/drawer'
import { DrawerPortal } from "vaul-vue";
import { ref, watch } from 'vue'; 

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
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

</script>