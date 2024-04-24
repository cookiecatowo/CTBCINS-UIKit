<template>
  <Dialog :open="open">
     <DialogPortal>
      <DialogOverlay
        class="fixed inset-0 z-50 grid place-items-center bg-[#000000]/50 backdrop-blur data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
        :style="style"
      >
        <slot>
          <div class="bg-white fixed w-[50px] h-[50px] z-[100] hover:bg-black">
            123123
          </div>
        </slot>
      </DialogOverlay>
    </DialogPortal>
  </Dialog>
  <div class="bg-white fixed w-[50px] h-[50px] z-[100] hover:bg-black">
    123123
  </div>
</template>
<script>
  export default {
    name: 'Overlay',
  }
</script>
<script setup>
  import { computed, ref, watch } from 'vue';
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
    },
    zIndex: {
      type: String
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

  const style = computed(() => {
    return {
      zIndex: props.zIndex
    }
  })
</script>