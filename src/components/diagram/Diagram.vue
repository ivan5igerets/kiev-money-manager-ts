<template>
  <div>   
    <PieChart />
    <v-divider />
    
     <!-- тут должен быть список  -->

    <div v-for="item in data" :key="item.id">
      <category v-if="item.k_category" :data="item" />
      <group v-if="item.k_category_group" :data="item" />
    </div>

    <!-- <category />
    <group /> -->


  </div>
</template>

<script>
import PieChart from '@/components/diagram/charts/PieChart'
import category from '@/components/diagram/list/Category'
import group from '@/components/diagram/list/Group'


export default {
  components: {
    PieChart,
    category,
    group,
  },

  props: ['data'],

  data() {
    return {
      power: 50
    }
  },

  // methods: {

  // },
}
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  justify-content: center;
}
</style>