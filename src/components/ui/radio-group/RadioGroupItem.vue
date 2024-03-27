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
      class="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[9px] after:h-[9px] after:rounded-[50%]"
      :class="[props.checked ? 'after:bg-white' : 'after:bg-[#D4D4D4]']"
    />
  </RadioGroupItem>
</template>
