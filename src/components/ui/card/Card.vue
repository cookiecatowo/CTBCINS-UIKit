<script setup>
import { cn } from "../../../lib/utils";

const props = defineProps({
  class: { type: null, required: false },
});
</script>

<template>
  <div
    :class="
      cn(
        'rounded-[20px] transition-all tracking-wider',
        props.class
      )
    "
  >
    <slot />
  </div>
</template>

