<template>
  <Dialog :open="open">
     <DialogPortal>
      <DialogOverlay
        class="fixed inset-0 z-50 grid place-items-center bg-[#000000]/50 backdrop-blur data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
      >
        <slot></slot>
      </DialogOverlay>
    </DialogPortal>
  </Dialog>
</template>
<script>
  export default {
    name: 'Loading',
  }
</script>
<script setup>
  import { ref, watch } from 'vue';
  import {
    Dialog,
  } from '../components/ui/dialog'
  import {
    DialogOverlay,
    DialogPortal,
  } from 'radix-vue'
  const props = defineProps({
    modelValue: {
      type: Boolean,
      default: false
    }
  })
  const open = ref(props.modelValue)
  const emits = defineEmits(["update:modelValue"]);
  watch(() => props.modelValue, (value) => {
    open.value = value
  }, {immediate: true})
  watch(() => open.value, (value) => {
    emits('update:modelValue', value )
  })
</script>