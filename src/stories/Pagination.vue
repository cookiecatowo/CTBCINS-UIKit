<template>
  <div class="flex items-center justify-between text-pagination" :class="[totalPages > 6 ? 'w-[420px]' : 'w-fit']">
    <ChevronDoubleLeftIcon class="h-[18px] stroke-2" @click="previousPage" 
      :class="[currentPage == 1 ? '' : 'cursor-pointer text-primary', totalPages < 7 ? 'px-4' : '']"  
      :disabled="currentPage == 1"/>
    <div class="flex gap-x-2 text-xl">
      <span class="flex items-center justify-center pb-px w-9 h-9" 
        :class="[1 == currentPage ? 'bg-primary text-white rounded-full' : 'cursor-pointer']" @click="currentPage = 1"> 
        1
      </span>
      <span v-if="!showPageController(2)  && totalPages > 5">...</span>
      <template v-for="n in totalPages">
        <span v-if="showPageController(n)" class="flex items-center justify-center pb-px w-9 h-9" 
          :class="[n == currentPage ? 'bg-primary text-white rounded-full' : 'cursor-pointer']" @click="currentPage = n"> 
          {{ n }} 
        </span>
      </template>
      <span v-if="!showPageController(totalPages - 1 ) && totalPages > 5">...</span>
      <span v-if="totalPages > 1" class="flex items-center justify-center pb-px w-9 h-9" 
        :class="[totalPages == currentPage ? 'bg-primary text-white rounded-full' : 'cursor-pointer']" @click="currentPage = totalPages"> 
        {{ totalPages }}
      </span>
    </div>
    <ChevronDoubleRightIcon class="h-[18px] stroke-2" @click="nextPage"  
      :class="[currentPage == totalPages ? '' : 'cursor-pointer text-primary', totalPages < 7 ? 'px-4' : '']" 
      :disabled="currentPage == totalPages"/>
  </div>
</template>

<script>
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/vue/24/outline';

export default {
  emits: ["update:modelValue"],
  props: {
    modelValue: {
      type: Number,
      default: 1
    },
    totalPages: {
      type: Number,
      default: 1
    }
  },
  components: {
    ChevronDoubleLeftIcon,
    ChevronDoubleRightIcon
  },
  data() {
    return {
      currentPage: 1
    }
  },
  methods: {
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    showPageController(page){
      if (page == 1 || page == this.totalPages) { //無論如何，頭尾不顯示
        return false
      }
      if (this.totalPages <= 5) { //小於五，不做判斷全部顯示
        return true
      } else if (this.currentPage <= 4) { //大於五，在前1-4，顯示1-5
        return page <= 5 ? true : false
      } else if (this.currentPage >= this.totalPages - 3) { //大於五，在後1-4，顯示後1-5
        return page >= this.totalPages - 4 ? true : false
      } else { //非頭尾，顯示左右各兩個
        return Math.abs(page - this.currentPage) <= 2 ? true : false
      }
    }
  }, 
  watch:{
    modelValue:{
      handler(val) {
        this.currentPage = val
      },
      immediate: true
    },
    currentPage: {
      handler(val) {
        this.$emit('update:modelValue', val)
      },
    },
    totalPages() {
      if (this.currentPage > this.totalPages){
        this.currentPage = this.totalPages
      }
    }
  }
};
</script>
