<template>
  <div class="flex justify-between items-start px-4 lg:px-20 py-3 lg:py-8 bg-white rounded-2xl">
    <template v-for="item, iter in list">
      <Label  class="relative flex flex-col justify-center items-center gap-2 steps">
        <template v-if="step == iter + 1">
          <img :src="selectImg" class="h-8 lg:h-12 z-10" v-if="selectImg">
          <MapPinIcon class="h-8 lg:h-12 text-red z-10" v-else/>
        </template>
        <template v-else>
          <img :src="stepImg" class="h-6 lg:h-10 mb-2 z-10" v-if="stepImg">
          <MapPinIcon class="h-6 lg:h-10 text-[#c7c7c7] mb-2 z-10" v-else/>
        </template>
        <span class="text-xs lg:text-base font-medium text-center max-w-[120px] lg:max-w-[170px]">{{ item }}</span>
      </Label>
      <div class="relative flex flex-grow steps" v-if="iter < list.length -1"></div>
    </template>
  </div>
</template>
<script>
  export default {
    name: 'Stepper',
  }
</script>
<script setup>
import { Label } from '../components/ui/label';
import { MapPinIcon } from '@heroicons/vue/24/solid';

const props = defineProps({
  list: {
    type: String,
  },
  step: {
    type: Number,
  },
  stepImg: {
    type: String,
  },
  selectImg: {
    type: String,
  },
})
</script>
<style>
.steps:not(:first-child)::before {
  background: transparent;
  border-top: 1px dashed;
  border-color: #D8D8D8;
  content: '';
  position: absolute;
  width: 50%;
  top: 20px;
  left: 0;
}
.steps:not(:last-child)::after {
  background: transparent;
  border-top: 1px dashed;
  border-color: #D8D8D8;
  content: '';
  position: absolute;
  width: 50%;
  top: 20px;
  right: 0;
}

@media (max-width: 1024px) {
  .steps:not(:first-child)::before, .steps:not(:last-child)::after  {
    top: 13px;
  }
}
</style>