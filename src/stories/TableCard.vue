<template>
  <Card class="w-full h-full border border-[#D9D9D9] rounded-tableCard bg-white" :style="style" >
    <div class="bg-[#3B3B3B] text-white p-4 lg:px-12 tablecard-header" :style="headerPadding" v-if="slots.header">
      <slot name="header"/>
    </div>
    <div class="p-4 lg:p-12" :style="padding">
      <slot/>
    </div>
    <div class="p-4 lg:px-12 tablecard-footer border-t border-[#D9D9D9]" :style="footerPadding" v-if="slots.footer">
      <slot name="footer"/>
    </div>
  </Card>
</template>
<script setup>
import { Card } from '../components/ui/card'
import { computed, useSlots } from 'vue';

const props = defineProps({
  padding: {
    type: String
  },
  margin: {
    type: String
  },
  color: {
    type: String
  },
  headerPadding: {
    type: String
  },
  footerPadding: {
    type: String
  },
})

const slots = useSlots()

const padding = computed(() => {
  return {
    padding: props.padding,
  }
});
const headerPadding = computed(() => {
  return {
    padding: props.headerPadding,
  }
});
const footerPadding = computed(() => {
  return {
    padding: props.footerPadding,
  }
});
const style = computed(() => {
  return {
    margin: props.margin,
    backgroundColor: props.color,
  }
});

</script>
<style>
.tablecard-header{
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}
.tablecard-footer{
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
}
</style>
