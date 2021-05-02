<template>
    <div class="css-diagram-group-list">
    <v-list-group no-action flat>
        <template v-slot:activator>

            <v-list-item-content @click.stop="openGroupOperationHistory(data.k_category_group)">
              <div class="item">
                <category_icon v-bind:a_icon="{s_icon_class: data.s_icon_class, s_icon_color: data.s_icon_color}"/>
                <div class="main-part">
                    <div class="text">
                        <div> {{ data.text_group }} </div>
                        <div> {{ data.m_sum }} </div>
                    </div>
                    <v-progress-linear :value="data.m_sum_percent"></v-progress-linear>
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

        <v-list-item
            :key="item.id"
            :to="{name: 'CategoryOperationHistory', params: {k_category: item.k_category}}"
            v-for="item in data.a_category"
        >
            <v-list-item-content>
              <div class="item">
                <category_icon v-bind:a_icon="item.a_icon"/>
                <div class="main-part">
                    <div class="text">
                        <div> {{ item.text_category }} </div>
                        <div> {{ item.m_sum }} </div>
                    </div>
                    <v-progress-linear :value="item.m_sum_percent"></v-progress-linear>
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

  props: ['data'],

  methods: {
    openGroupOperationHistory(k_category_group) {
      this.$router.push({name: 'GroupOperationHistory', params: {k_category_group: k_category_group}})
    }
  },

  created() {
      console.log(this.data);
  },

  data() {
    return {
      power: 50
    }
  },
}
</script>

<style lang="scss">

.css-diagram-group-list {
  .v-list-group__header__append-icon {
    min-width: 0!important;
    margin-left: 0!important;
  }

  .v-list-item__action {
    padding-right: 2px!important;
  }

  .v-list-group__header {
    flex-direction: row-reverse !important;
  }

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
}
</style>