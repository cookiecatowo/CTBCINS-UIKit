<template class="w-fit">
  <Tabs v-model="updateModelValue">
  <div class="flex justify-center w-full">
    <TabsList>
      <TabsTrigger class="text-sm h-[42px] w-[176px] lg:text-xl lg:h-[81px] lg:w-[353px] transition-all"
        :style="style" v-for="item in list" :value="item.value" @click="onClick(item.value)">
        <img :src="item.img" v-if="!!item.img" class="h-[60px] mb-4 lg:h-[110px] lg:mb-6"/>
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
import { computed, ref } from 'vue';

const props = defineProps ({
  modelValue: {
    type: String,
  },
  list: {
    type: Array,
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
// const updateModelValue = computed({
//   get() {
//     return props.modelValue;
//   },
//   set(newValue) {
//     emits("update:modelValue", newValue);
//   }
// });
const updateModelValue = ref('')

const style = computed(() => {
  return {
    width: props.width,
    height: props.height
  }
});

const onClick = (value) => {
  emits('click', value);
};


</script>