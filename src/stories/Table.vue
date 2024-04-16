<template>
  <div class="my-6">
    <table class="gap-x-2 w-full data-table" :class="collapse ? 'data-table-collapse' : 'data-table-separate'">
      <thead class="h-[85px] text-base lg:text-lg text-white rounded-tableCard border" v-if="slots.header">
        <slot name="header"></slot>
      </thead>
      <tbody class="text-sm lg:text-base">
        <slot/>
        
        <tr v-if="slots.footer">
          <td colspan="50" class="table-cell">
            <div class="w-full h-full flex justify-center items-center ">
              <slot name="footer"> </slot>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  export default {
    name: 'Table',
  }
</script>
<script setup>
  import { useSlots } from 'vue';

  const props = defineProps({
    collapse: {
      type: Boolean,
      default: false
    },
  })
  const slots = useSlots()
</script>
<style>
.data-table-separate{
  border-collapse: separate;
  border-spacing: 0px 20px;
}
.data-table-collapse{
  border-collapse: separate;
  border-spacing: 0px 0px;
}

/* Theader */
.data-table th {
  text-align: left;
  height: 65px;
  font-weight: 500;
  background-color: #3B3B3B;
  border-top: 1px solid #D9D9D9;
  border-bottom: 1px solid #D9D9D9;
}
.data-table th:nth-child(1){
  padding-left: 18px;
  border-left: 1px solid #D9D9D9;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
}
.data-table th:nth-last-child(1){
  padding-right: 18px;
  border-right: 1px solid #D9D9D9;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
}
.data-table td {
  height: 65px;
  font-weight: 500; 
  background-color: white;
}
/* TSeprate */
.data-table-separate td {
  border-top: 1px solid #D9D9D9;
  border-bottom: 1px solid #D9D9D9;
}
.data-table-separate td:nth-child(1){
  padding-left: 18px;
  border-left: 1px solid #D9D9D9;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
}
.data-table-separate td:nth-last-child(1){
  padding-right: 18px;
  border-right: 1px solid #D9D9D9;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
}

/* TCollapse */
.data-table-collapse td:nth-child(1){
  padding-left: 18px;
}
.data-table-collapse td:nth-last-child(1){
  padding-right: 18px;
}
.data-table-collapse tr:nth-child(1) {
  position: relative;
}
.data-table-collapse tr:nth-child(1) td::before{
  z-index: -1;
  content: '';
  position: absolute;
  top: -10px;
  left: 0;
  width: 100%;
  height: 10px;
  background-color: white;
}
.data-table-collapse tr:nth-last-child(1) td:nth-child(1){
  padding-left: 18px;
  border-bottom-left-radius: 16px;
}
.data-table-collapse tr:nth-last-child(1) td:nth-last-child(1){
  padding-right: 18px;
  border-bottom-right-radius: 16px;
}

@media (min-width: 1024px) {
  .data-table th {
    height: 85px;
  }
    .data-table td {
    height: 85px;
  }
}
</style>
