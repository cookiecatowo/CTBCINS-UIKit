<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { SelectIcon, SelectTrigger, type SelectTriggerProps, useForwardProps } from 'radix-vue'
import { ChevronDown } from 'lucide-vue-next'
import { cn } from '../../../lib/utils'

const props = defineProps<SelectTriggerProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <SelectTrigger
    v-bind="forwardedProps"
    :class="cn(
      'flex h-[52px] w-full items-center justify-between rounded-lg border border-border bg-background px-3 py-2 text-base placeholder:text-textDisabled disabled:cursor-not-allowed disabled:text-textDisabled disabled:bg-inputDisabled focus:outline-none [&>span]:line-clamp-1',
      props.class,
    )"
  >
    <slot />
    <SelectIcon as-child >
      <ChevronDown class="w-4 h-4 text-black text-base" :class="{'text-textDisabled': forwardedProps.disabled}"/>
    </SelectIcon>
  </SelectTrigger>
</template>
