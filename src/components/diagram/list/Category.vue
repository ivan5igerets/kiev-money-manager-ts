<template>
    <v-list>
      <v-list-item-group color="primary">
        <v-list-item>
            <v-list-item-content>
              <div class="item">
                <category_icon v-bind:a_icon="{s_icon_class: 'mdi-food', s_icon_color: '#f44336FF'}"/>
                <div class="main-part">
                    <div class="text">
                        <div>Категрия</div>
                        <div> 1027397 </div>
                    </div>
                    <v-progress-linear value="15"></v-progress-linear>
                </div> 
              </div>
            </v-list-item-content> 
        </v-list-item>
        
        <v-list-item>
            <v-list-item-content>
              <div class="item">
                <category_icon v-bind:a_icon="{s_icon_class: 'mdi-food', s_icon_color: '#f44336FF'}"/>
                <div class="main-part">
                    <div class="text">
                        <div>Категрия</div>
                        <div> 1027397 </div>
                    </div>
                    <v-progress-linear value="15"></v-progress-linear>
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