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

    <div 
      class="day"
      v-for="(day, i) in days"
      :key="i"  
    >

          <div class="list-header">
            <div class="item"> 16/04 Пт </div>
            <div class="right-part">
              <div class="item"> <span class="grey-small-text"> Доходы </span> <span class="income"> 20000 </span> </div>
              <div class="item"> <span class="grey-small-text"> Затраты </span> <span class="spending"> 10000 </span> </div>
            </div>
          </div>

          <v-list>

            <v-list-item-group color="primary">
            
              <v-list-item
                v-for="(item, k_category) in day"
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
                  <span :class="{ income: item.is_income, spending: !item.is_income  }"> {{ item.m_sum }} </span>
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
import historyApi from '@/api/history'

export default {
  components: {
    button_add,
    category_icon,
  },

  data() {
    return {
      days: [],
      date: '2021-04-01',
    }
  },

  mounted() {

    historyApi.day({
      dl_filter: this.date
    })
    .then(res => {
      // console.log('day res',res.data);

      this.sortByDate(res.data)
      
      console.log('days',this.days);

    })
    .catch(err => {
      console.log('day err', err.response.data.errors);
    })

  },

  methods: {

    sortByDate(operations) {
      this.days = operations.reduce((_, cur) => {
                      if(_[cur.dl_operation]) {
                          _[cur.dl_operation].push(cur);
                  } else {
                      _[cur.dl_operation] = [cur];
                  }
                  return _;
                  }, {})
    },

  }

}
</script>

<style lang="scss" scoped>

.day {
  // border-bottom: 1px solid #e0e0e0;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
}

.header {
  display: flex;
  justify-content: space-around;
  position: relative;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
}

.list-header {
  display: flex;
  justify-content: space-between;
  position: relative;
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  margin-top: 20px;
  padding: 5px;

  .right-part {
    display: flex;
  }

  .item {
    text-align: center;
    margin: 0 5px;
  }
}

.grey-small-text {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;

  color: #B6B6B6;

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