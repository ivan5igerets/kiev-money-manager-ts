<template>
  <div>   
    <PieChart />
    <v-divider />
    
     <!-- тут должен быть список  -->
    <category />
    <group />


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

  data() {
    return {
      power: 50
    }
  },
}
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  justify-content: center;
}
</style>