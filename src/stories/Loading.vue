<template>
  <Overlay v-model="open">
        <div class="loading relative w-fit h-fit rounded-full overflow-hidden" v-if="img">
          <img :src="img" class="max-h-[100px] lg:max-h-[150px]">
        </div>
        <div class="lds-ring z-[100]" v-else><div></div><div></div><div></div><div></div></div>
  </Overlay>
</template>
<script>
  export default {
    name: 'Loading',
  }
</script>
<script setup>
  import { ref, watch } from 'vue';
  import Overlay from './Overlay.vue'
  const props = defineProps({
    modelValue: {
      type: Boolean,
      default: false
    },
    img: {
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
</script>
<style>
.loading::after {
  content: '';
  position: absolute;
  background-image: linear-gradient(-10deg, rgba(255,255,255,0) 3%,#dbdbdb 44%,#dbdbdb 55%,rgba(255,255,255,0) 98%);
  width: 100%;
  height: 300%;
  top: 100%;
  animation: loading-ani 5s infinite;
}
@keyframes loading-ani {
  0% {
  }
  100% {
    top: -300%;
  }
}
.loading-spin {
  animation: spin 1s linear infinite;
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.lds-ring {
  /* change color here */
  color: #dbdbdb
}
.lds-ring,
.lds-ring div {
  box-sizing: border-box;
}
.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid currentColor;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: currentColor transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
