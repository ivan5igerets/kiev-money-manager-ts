<template>
  <div>
    <!-- Тут будет выводиться список операций за день -->

    <div class="header">
      <div class="indicator-box">
        <div> Доходы </div>
        <div class="income"> 20000 </div>
      </div>

      <v-divider
        inset
        vertical
      ></v-divider>
      
      <div class="indicator-box">
        <div> Затраты </div>
        <div class="spending"> 10000 </div>
      </div>

      <v-divider
        inset
        vertical
      ></v-divider>

      <div class="indicator-box">
        <div> Баланс </div>
        <div class="balance"> 20000 </div>
      </div>
    </div>

        <div>

          <div class="list-header">
            <div>дата</div>
            <div>Доходы</div>
            <div>Затраты</div>
          </div>

          <v-list
            v-if="testArr.length"
          >
            <!-- <v-subheader> Категории </v-subheader> -->

            <v-list-item-group color="primary">
            
              <v-list-item
                v-for="(item, k_category) in testArr"
                :key="k_category"
              >
                <v-list-item-icon>
                  <category_icon 
                    v-bind:a_icon="{ 
                      s_icon_class: item.s_icon_class, 
                      s_icon_color: item.s_icon_color
                    }" />
                </v-list-item-icon>

                  <v-list-item-title v-text="item.text_category"></v-list-item-title>

                <v-list-item-action>
                  <v-btn
                   @click.prevent="removeListItem(item.k_category)"
                   icon>
                    <v-icon color="grey lighten-1">mdi-close</v-icon>
                  </v-btn>
                </v-list-item-action>

              </v-list-item>

            </v-list-item-group>
            
          </v-list>
        </div>

    <button_add />  
  </div>

  
</template>

<script>
import button_add from '@/components/categories/ButtonAdd'
import category_icon from '@/components/categories/edit/Icon'

export default {
  components: {
    button_add,
    category_icon,
  },

  data() {
    return {
      testArr: [
        {
          text_category: 'шо-то там',
          s_icon_class: 'mdi-cellphone-basic', 
          s_icon_color: '#f44336FF',
          k_category: 1,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-around;
  position: relative;
}

.list-header {
  display: flex;
  justify-content: space-around;
  position: relative;
}

.indicator-box {
  text-align: center;
  margin-top: 5px;
  width: 30%;
}

.income {
  color: #5ED400;
}

.spending {
  color: #FF0000;
}

.balance {
  color: #028BD9;
}
</style>