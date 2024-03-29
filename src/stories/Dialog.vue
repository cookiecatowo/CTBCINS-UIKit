<template>
  <Dialog :open="open">
    <!-- <DialogTrigger>
      Edit Profile
    </DialogTrigger> -->
     <DialogPortal>
      <DialogOverlay
        class="fixed inset-0 z-50 bg-[#000000]/50 backdrop-blur data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
        @click="close"
      />
        <DialogContent class="py-10" :class="[size, {'pt-[100px] lg:pt-[120px]': !!img}]" :style="style">
          <div class="absolute right-3 top-3 rounded-lg text-[#454545] hover:opacity-50"
            @click="close"
            v-if="!force && (!img || (img && props.size != 'sm'))"
          >
            <X class="w-8 h-8" />
          </div>
            <img :src='img' v-if="!!img" class="absolute top-[-50px] left-1/2 -translate-x-1/2 max-h-[170px]"/>
          <DialogHeader class="flex flex-col grow justify-center">
            <DialogTitle class="flex justify-center items-center text-22 lg:text-24 lg:font-semibold">
              <slot name="title">
                {{ title }}
              </slot>
            </DialogTitle>
            <DialogDescription class="text-lg font-medium leading-8 h-fit">
              <slot name="description">
                {{ description }}
              </slot>
            </DialogDescription>
          </DialogHeader>
          <div :class="{'overflow-y-auto grow': props.size == 'lg' }">
            <slot/>
          </div>
            
          <DialogFooter class="h-fit">
            <slot name="footer" />
          </DialogFooter>
        </DialogContent>
    </DialogPortal>
  </Dialog>
  <!-- <button @click="open = true">Click</button> -->
</template>
<script setup>
import { computed, ref, watch } from 'vue';
import { X } from 'lucide-vue-next'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
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
  title: {
    type: String
  },
  description: {
    type: String
  },
  img: {
    type: String
  },
  size: {
    type: String,
    validator: function (value) {
      return ['sm', 'md', 'lg'].indexOf(value) !== -1;
    },
  },
  width: {
    type: String
  },
  height: {
    type: String
  },
  force: {
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
const close = () => {
  if(!props.force){
    open.value = false
  }
}

const size = computed(() => {
  switch (props.size){
    case 'sm':
      return 'max-w-[513px] min-h-[241px]'
    case 'md':
      return 'max-w-[850px] min-h-[300px]'
    case 'lg': 
      return 'max-w-[90%] h-[80%]'
  }
});
const style = computed(() => {
  return {
    width: props.width,
    height: props.height
  }
});
</script>
