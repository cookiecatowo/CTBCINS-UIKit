<template>
  <div class="relative w-full lg:w-fit h-fit  mt-4 lg:mt-0 cursor-pointer">
    <Card 
      class="relative flex justify-between min-h-[164px] lg:min-h-0 lg:w-[350px] lg:h-[146px] lg:hover:w-[402px] lg:hover:h-[168px] rounded-[20px] tracking-wider card-hover overflow-hidden" 
      :style="style"
      @click="onClick">
      <div class="text-white flex flex-col lg:justify-center items-center lg:items-start lg:gap-y-2 p-4 lg:p-0 lg:pl-8 w-full lg:w-fit lg:min-w-[181px] lg:max-w-[210px] mt-12 lg:mt-0">
        <Label class="text-lg lg:text-24 font-semibold shrink-0 text-center lg:text-left">{{ label }}</Label>
        <Label class="text-sm lg:text-base font-normal text-center lg:text-left">{{ eng }}</Label>
      </div>
      <div class="hidden lg:flex items-center justify-center min-w-[140px]">
        <img :src="img" class="py-2 pr-2 max-w-full max-h-full z-[2]">
      </div>
    </Card>
    <div class="absolute flex lg:hidden -top-10 w-full items-center justify-center">
        <img :src="img" class="py-2 pr-2  max-h-[110px] z-[2]">
    </div>
  </div>

</template>
<script>
  export default {
    name: 'InsuranceCard',
  }
</script>
<script setup>
import { Card } from '../components/ui/card'
import { Label } from '../components/ui/label'
import { computed } from 'vue';
  const props = defineProps({
    label: {
      type: String,
    },
    eng: {
      type: String,
    },
    color: {
      type: String,
    },
    img: {
      type: String,
    },
    width: {
      type: String,
    },
    height: {
      type: String,
    },
    shadow: {
      type: String,
    },
  })

const style = computed(() => {
  return {
    background: props.color,
    boxShadow: '0px 14px 23px 0px ' + props.shadow,
  }
})

const emits = defineEmits(["click"]);
const onClick = () => {
  emits('click');
};
</script>
<style>
@media (min-width: 1024px) {
  .card-hover::before {
    content: '';
    position: absolute;
    left: -95px;
    top: -90px;
    width: 200px;
    height: 200px;
    border: 41px solid;
    border-image: linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%) 30;
    opacity: 0%;
    transition: all 0.3s;
  }
  .card-hover::after {
    content: '';
    position: absolute;
    right: -90px;
    bottom: -150px;
    width: 250px;
    height: 250px;
    border-radius: 9999px;
     padding: 40px;
     background: linear-gradient(205.68deg, rgba(255, 255, 255, 0.4) 10.23%, rgba(145, 147, 167, 0) 70.55%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    opacity: 0%;
    transition: all 0.3s;
  }
  .card-hover:hover::before {
    opacity: 100%;
  }
  .card-hover:hover::after {
    opacity: 100%;
  }
}
</style>

