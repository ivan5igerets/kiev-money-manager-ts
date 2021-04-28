<template>
  <div>   
    <PieChart />
    <v-divider />
    
     <!-- тут должен быть список  -->
     <v-list>
      <v-list-item>
        <div class="item">
          <div>icon</div>
          <div>content</div>
          <div>action</div>
        </div>
      </v-list-item>

     </v-list>

  </div>
</template>

<script>
import PieChart from '@/components/diagram/charts/PieChart'
// import category_icon from '@/components/categories/IconShow'


export default {
  components: {
    PieChart,
    // category_icon,
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