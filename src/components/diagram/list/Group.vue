<template>
    <div class="css-group-list">
    <v-list-group no-action flat>
        <template v-slot:activator>

            <v-list-item-content>
              <div class="item">
                <category_icon v-bind:a_icon="{s_icon_class: 'mdi-food', s_icon_color: '#f44336FF'}"/>
                <div class="main-part">
                    <div class="text">
                        <div> Группа </div>
                        <div> 1027397 </div>
                    </div>
                    <v-progress-linear value="15"></v-progress-linear>
                </div> 
              </div>
            </v-list-item-content> 
        
            <!-- <v-menu bottom left>
                <template v-slot:activator="{on, attrs}">
                    <v-btn color="grey" icon v-bind="attrs" v-on="on">
                    <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item key="1" >
                    <v-list-item-title>Редактировать</v-list-item-title>
                    </v-list-item>
                    <v-list-item key="2" >
                    <v-list-item-title>Удалить</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu> -->
        </template>

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
      
    </v-list-group>
    </div>
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

// .css-group-list {
  .v-list-group__header__append-icon {
    display: none !important;
  }
  .v-list-item__action {
    padding-right: 2px!important;
  }
// }

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