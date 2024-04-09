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
        'transition-all',
        props.class
      )
    "
  >
    <slot />
  </div>
</template>

