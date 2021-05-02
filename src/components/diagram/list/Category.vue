<template>
    <v-list>
      <v-list-item-group color="primary">
        <v-list-item :to="{name: 'CategoryOperationHistory', params: {k_category: data.k_category}}">
            <v-list-item-content>
              <div class="item align-center">
                <category_icon v-bind:a_icon="data.a_icon"/>
                <div class="main-part">
                    <div class="text">
                        <div> {{ data.text_category }} </div>
                        <div> {{ data.m_sum }} </div>
                    </div>
                    <category_budget_line_diagram
                      v-bind:i_height="5"
                      v-bind:m_budget="data.m_budget"
                      v-bind:m_sum_total="data.m_sum"
                      v-show="data.m_budget !== 0 && enable_budget_mode && !data.is_income"
                    />
                </div>
              </div>
            </v-list-item-content> 
        </v-list-item>
      </v-list-item-group>
     </v-list>
</template>

<script>
import category_icon from '@/components/categories/IconShow'
import category_budget_line_diagram from '@/components/reports/CategoryBudgetLineDiagram'

export default {
  components: {
    category_icon,
    category_budget_line_diagram
  },

  props: {
    data: {
      type: Object,
      required: true,
    },
    enable_budget_mode: {
      type: Boolean,
      required: true,
    },
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
}

.main-part {
    width: 100%;
    // align-items: ;
    // background: chartreuse;
}

.text {
    display: flex;
    justify-content: space-between;
    margin-bottom: 6px;
}
</style>