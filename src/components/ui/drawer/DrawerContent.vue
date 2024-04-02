<script setup>
import { DrawerContent, DrawerPortal } from "vaul-vue";
import { useForwardPropsEmits } from "radix-vue";
import DrawerOverlay from "./DrawerOverlay.vue";
import { cn } from "../../../lib/utils";

const props = defineProps({
  forceMount: { type: Boolean, required: false },
  trapFocus: { type: Boolean, required: false },
  disableOutsidePointerEvents: { type: Boolean, required: false },
  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
  class: { type: null, required: false },
});
const emits = defineEmits([
  "escapeKeyDown",
  "pointerDownOutside",
  "focusOutside",
  "interactOutside",
  "openAutoFocus",
  "closeAutoFocus",
]);

const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
  <!-- <DrawerPortal>
    <DrawerOverlay /> -->
    <DrawerContent
      v-bind="forwarded"
      :class="
        cn(
          'fixed inset-x-0 bottom-0 z-50 flex h-auto max-h-[67vh] flex-col rounded-t-[20px] bg-white',
          props.class
        )
      "
    >
      <div
        class="shrink-0 mx-auto mt-2 mb-4 h-1 w-[80px] rounded-full bg-label"
      />
      <slot />
    </DrawerContent>
  <!-- </DrawerPortal> -->
</template>
