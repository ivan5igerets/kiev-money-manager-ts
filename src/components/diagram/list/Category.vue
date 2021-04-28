<template>
    <v-list>
      <v-list-item-group color="primary">
        <v-list-item>
            <v-list-item-content>
              <div class="item">
                <category_icon v-bind:a_icon="{s_icon_class: data.s_icon_class, s_icon_color: data.s_icon_color}"/>
                <div class="main-part">
                    <div class="text">
                        <div> {{ data.text_category }} <span class="percents"> {{ data.m_sum_percent }} % </span> </div>
                        <div> {{ data.m_sum }} </div>
                    </div>
                    <v-progress-linear :value="data.m_sum_percent" :color="data.s_icon_color"></v-progress-linear>
                </div> 
              </div>
            </v-list-item-content> 
        </v-list-item>
      </v-list-item-group>

     </v-list>
</template>

<script>
import category_icon from '@/components/categories/IconShow'


export default {
  components: {
    category_icon,
  },

  props: ['data'],

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

.percents {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */
  color: #787676;
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