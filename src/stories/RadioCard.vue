<template> 
<div class="w-full items-center"  :class="{'mt-4 lg:mt-10': props.direction == 'top' }">
  <div class="flex gap-6 lg:gap-y-8" :class="[props.direction == 'top'? '' :'flex-col lg:flex-row flex-wrap']">
    <div
      class="rounded-[20px] p-5 flex w-full lg:w-[453px] transition-all" :style="style" v-for="item in list"
      :class="[radio == item.value ? 'outline outline-primary outline-4 scale-active' : 'outline outline-border outline-2', direction]" 
      @click="onClick(item.value)">
      <div class="col-span-2 relative flex justify-center items-center" :class="{'pr-4 lg:pr-6': props.direction == 'left' }" >
        <img :src="item.img" 
          class=" lg:max-h-[132px] lg:max-w-[130px] w-fit h-fit"
          :class="props.direction == 'left'? 'lg:absolute lg:bottom-0 max-w-[110px] max-h-[110px]' :'absolute bottom-4 lg:bottom-2 max-w-[80px] max-h-[80px]'">
      </div>
      <div class="col-span-3 flex flex-col justify-center gap-y-2 text-sm lg:text-base font-normal" :class="{'items-center': props.direction == 'top' }">
        <Label class="text-lg lg:text-xl font-semibold">{{ item.label }}</Label>
        <slot :name="'s'+ item.value">
          {{ item.description }}
        </slot>
      </div>
    </div>
  </div>
</div>
</template>
<script setup>
import { Label } from '../components/ui/label';
import { computed, defineProps, ref, watch } from 'vue';

const props = defineProps({
  modelValue: {
    type:[ String, Boolean, Number ],
  },
  list: {
    type: Array,
  },
  direction: {
    type: String,
    default: 'left',
    validator: function (value) {
      return ['left', 'top'].indexOf(value) !== -1;
    },
  },
  disabled: {
    type: Boolean,
    default: false
  },
  width: {
    type: String
  },
  height: {
    type: String
  },
})

const emits = defineEmits(["update:modelValue", "click"]);
const radio = ref(props.modelValue)
watch(() => props.modelValue, (value) => {
  radio.value = value
}, {immediate: true})
watch(() => radio.value, (value) => {
  emits('update:modelValue', value )
})

const onClick = (value) => {
  radio.value = value
  emits('click', value);
};

const direction = computed(() => {
  switch (props.direction || 'left'){
    case 'left':
      return 'h-[135px] lg:grid grid-cols-5 '
    case 'top':
      return 'min-h-[180px] flex flex-col items-center pt-[60px] lg:px-12'
  }
})
const style = computed(() => {
  return {
    width: props.width,
    height: props.height
  }
});
</script>
<style>
.scale-active {
	animation: scaleInOut 0.3s; 
}

@keyframes scaleInOut { 
    0%   { transform: scale(1, 1); } 
    50%  { transform: scale(0.97, 0.97); } 
    100%   { transform: scale(1, 1); }
}
</style>