<script setup>
import { cn } from "../../../lib/utils";

const props = defineProps({
  class: { type: null, required: false },
});
</script>

<template>
  <div :class="cn('mt-auto flex flex-col gap-2 px-4 py-6', props.class)">
    <slot />
  </div>
</template>
