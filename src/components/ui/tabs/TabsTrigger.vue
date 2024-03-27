<script setup>
import { computed } from "vue";
import { TabsTrigger, useForwardProps } from "radix-vue";
import { cn } from "../../../lib/utils";

const props = defineProps({
  value: { type: String, required: true },
  disabled: { type: Boolean, required: false },
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
  <TabsTrigger
    v-bind="forwardedProps"
    :class="
      cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-full bg-btnDisabled text-black font-medium data-[state=active]:bg-primary data-[state=active]:text-white',
        props.class
      )
    "
  >
    <slot />
  </TabsTrigger>
</template>
