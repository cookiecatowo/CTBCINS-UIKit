<script setup>
import { computed } from "vue";
import {
  RadioGroupIndicator,
  RadioGroupItem,
  useForwardProps,
} from "radix-vue";
import { cn } from "../../../lib/utils";

const props = defineProps({
  id: { type: String, required: false },
  value: { type: [String, Boolean, Number], required: false },
  checked: { type: Boolean, required: false },
  disabled: { type: Boolean, required: false },
  required: { type: Boolean, required: false },
  name: { type: String, required: false },
  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
  class: { type: null, required: false },
});

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <RadioGroupItem
    v-bind="forwardedProps"
    :class="[
      cn(
        'aspect-square h-[21px] w-[21px] rounded-full border text-black disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:border-slate-50 dark:text-slate-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300',
        props.class
      ),
      props.checked ? 'bg-primary border-primary' : 'border-[#929292]']"
  >
    <!-- <RadioGroupIndicator class="flex items-center justify-center">
      <Circle class="h-2.5 w-2.5 fill-primary text-primary" />
    </RadioGroupIndicator> -->
    <div
      class="flex items-center justify-center w-full h-full relative radio-content"
      :class="[props.checked ? 'after:bg-white radio-scale-active' : 'after:bg-[#D4D4D4]']"
    />
  </RadioGroupItem>
</template>
<style>

.radio-content::after {
  content: '';
  display: block;
  width: 9px;
  height: 9px;
  border-radius: 50%;
}

.radio-scale-active.radio-content::after {
	animation: radio-scale 0.2s; 
}

@keyframes radio-scale { 
    0%   { transform: scale(1, 1); } 
    50%  { transform: scale(1.3, 1.3); } 
    100%   { transform: scale(1, 1); }
}
</style>
