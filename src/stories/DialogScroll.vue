<template>
  <Dialog :open="open">
    <!-- <DialogTrigger>
      Edit Profile
    </DialogTrigger> -->
     <DialogPortal>
      <DialogOverlay
        class="fixed inset-0 z-49 px-4 lg:px-8 py-16 grid place-items-center overflow-y-auto bg-[#000000]/50 backdrop-blur data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
        :style="margin"
        @click="close"
      >
        <DialogScrollContent class="w-full h-fit p-16" @click.stop  :style="padding">
          <div class="absolute right-3 top-3 rounded-lg text-[#454545] hover:opacity-50"
            @click="close"
            v-if="!force && !img"
          >
            <X class="w-8 h-8" />
          </div>
          <div>
            <slot/>
          </div>
        </DialogScrollContent>
      </DialogOverlay>
    </DialogPortal>
  </Dialog>
  <!-- <button @click="open = true">Click</button> -->
</template>
<script setup>
import { computed, ref, watch } from 'vue';
import { X } from 'lucide-vue-next'
import {
  Dialog,
  DialogScrollContent,
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
  force: {
    type: Boolean,
    default: false
  },
  padding: {
    type: String
  },
  margin: {
    type: String
  },
})

const open = ref(props.modelValue)
const emits = defineEmits(["update:modelValue"]);
watch(() => props.modelValue, (value) => {
  open.value = value
}, {immediate: true})
watch(() => open.value, (value) => {
  emits('update:modelValue', value )
})
const close = () => {
  if(!props.force){
    open.value = false
  }
}

const padding = computed(() => {
  return {
    padding: props.padding,
  }
});
const margin = computed(() => {
  return {
    padding: props.margin,
  }
});

</script>
