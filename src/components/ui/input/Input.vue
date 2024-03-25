<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { useVModel } from '@vueuse/core'
import { cn } from '../../../lib/utils'

const props = defineProps<{
  defaultValue?: string | number
  modelValue?: string | number
  class?: HTMLAttributes['class']
  disabled?: boolean
  type?: string
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
})
</script>

<template>
  <input v-model="modelValue" :disabled="disabled" :type="type"
    :class="cn('relative flex h-[52px] w-full rounded-lg border border-border p-4 text-base placeholder:text-textDisabled disabled:cursor-not-allowed disabled:text-textDisabled disabled:bg-inputDisabled focus:outline-none', props.class)">
</template>
