<template class="w-fit">
  <Tabs v-model="updateModelValue">
  <div class="flex justify-center w-full">
    <TabsList>
      <TabsTrigger :class="[size]" :style="style" v-for="item in list" :value="item.value" @click="onClick(item.value)">
        <img :src="item.pic" v-if="!!item.pic" :class="[props.size == 'sm' ? 'h-[60px] mb-4' : 'h-[110px] mb-6']"/>
        {{ item.label }}
      </TabsTrigger>
    </TabsList>
  </div>

    <TabsContent v-if="content" v-for="item in list"  :value="item.value">
      <slot :name="'s_' + item.value" ></slot>
    </TabsContent>
  </Tabs>
</template>
<script setup>
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../components/ui/tabs'
import { computed } from 'vue';

const props = defineProps ({
  modelValue: {
    type: String,
  },
  list: {
    type: Array,
  },
  size: {
    type: String,
    validator: function (value) {
      return ['sm', 'lg'].indexOf(value) !== -1;
    },
  },
  width: {
    type: String,
  },
  height: {
    type: String,
  },
  content: {
    type: Boolean,
    default: false
  }
})
const emits = defineEmits(["click", "update:modelValue"]);
const updateModelValue = computed({
  get() {
    return props.modelValue;
  },
  set(newValue) {
    emits("update:modelValue", newValue);
  }
});

const style = computed(() => {
  return {
    width: props.width,
    height: props.height
  }
});

const size = computed(() => {
  switch (props.size || 'lg'){
    case 'sm':
      return 'text-sm h-[42px] w-[176px]'
    case 'lg':
      return 'text-xl h-[81px] w-[353px]'
  }
});
const onClick = (value) => {
  emits('click', value);
};


</script>