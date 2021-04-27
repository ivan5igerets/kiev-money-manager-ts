<template>
  <div>
    <!-- Тут будет выводиться список операций за день -->

    <div class="header">
      <div class="indicator-box">
        <div> Доход </div>
        <div class="income"> {{ monthlyIncome }} </div>
      </div>

      <v-divider
        inset
        vertical
      ></v-divider>
      
      <div class="indicator-box">
        <div> Затраты </div>
        <div class="spending"> {{ monthlySpanding }} </div>
      </div>


      <v-divider
        inset
        vertical
      ></v-divider>

      <div class="indicator-box">
        <div> Баланс </div>
        <div class="balance"> {{ monthlyIncome - monthlySpanding }} </div>
      </div>
    </div>

      <div class="list-placeholder" v-if="!days.length && !loading">
        В этом месяце нет записей
      </div>

    <loader v-if="loading" />
    <div 
      v-else
      class="day"
      v-for="(day, i) in days"
      :key="i"  
    >

          <div class="list-header">
            <div class="item"> {{ dateFormating(day[0].dl_operation) }} </div>
            <div class="right-part">
              <div class="item" v-if="sumOfDaysIncome(day)"> <span class="grey-small-text"> Доход: </span> <span class="income"> {{ sumOfDaysIncome(day) }} </span> </div>
              <div class="item" v-if="sumOfDaysSpanding(day)"> <span class="grey-small-text"> Затраты: </span> <span class="spending"> {{ sumOfDaysSpanding(day) }} </span> </div>
            </div>
          </div>

          <v-list dense >

            <v-list-item-group color="primary">
            
              <v-list-item
                :to="{ name: 'OperationEdit', params: {k_operation: item.k_operation}}"
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

                  <v-list-item-title v-text="item.text_comment ? item.text_comment : item.text_category"></v-list-item-title>

                <v-list-item-action>
                  <span :class="{ income: item.is_income, spending: !item.is_income || item.m_sum < 0 }"> {{ item.m_sum }} </span>
                </v-list-item-action>

              </v-list-item>

            </v-list-item-group>
            
          </v-list>
        </div>
     <operation_button_add />
  </div>

  
</template>

<script>
import operation_button_add from '@/components/operations/ButtonsAdd'
import category_icon from '@/components/categories/IconShow'
import historyApi from '@/api/history'
import loader from '@/components/Loader'
import { mapState } from 'vuex'

export default {
  components: {
    category_icon,
    loader,
    operation_button_add,
  },

  data() {
    return {
      loading: false,
      days: [],
      date: '',
      // isDateOpen: false,
      monthlyIncome: 0,
      monthlySpanding: 0,
    }
  },

  mounted() {
    this.initCurrentData();
    this.getOperations();
    this.$root.$on('change-date', this.changeDate)
  },

  computed: {
    ...mapState('date',{
      month: 'month',
    })
  },

  methods: {

    getOperations() {
      this.loading = true;
      this.days = [];
      this.monthlyIncome = 0;
      this.monthlySpanding = 0;
      historyApi.day({
        dl_filter: this.date + '-01'
      })
      .then(res => {
        this.countSumOfMonthlyTransactions(res.data)
        this.sortByDate(res.data);
        this.loading = false;
      })
      .catch(err => {
        // console.log('day err', err.response.data.errors);
        this.loading = false;
      })
    },

    sortByDate(operations) {
      const daysTemp = operations.reduce((_, cur) => {
                      if(_[cur.dl_operation]) {
                          _[cur.dl_operation].push(cur);
                  } else {
                      _[cur.dl_operation] = [cur];
                  }
                  return _;
                  }, {})
                  

      const keys = Object.keys(daysTemp);
      keys.sort(function(a, b) {
        return (new Date(b) - new Date(a));
      })

      let k;
      for (let i = 0; i < keys.length; i++) {
        k = keys[i];
        // console.log(k, ':', daysTemp[k]);
        this.days.push(daysTemp[k])
      }
    },

    countSumOfMonthlyTransactions(arr) {
        arr.forEach(el => {
          if (el.is_income) {
            this.monthlyIncome += el.m_sum;
          } else {
            this.monthlySpanding += el.m_sum;
          }
        });
    },

    countSumOfDayTransactions(arr, flag) {
      return arr.reduce( (total, day) => {
        if (day.is_income === flag) {
          return total + day.m_sum;
        } 
        return total;
      }, 0 )
    }, 

    sumOfDaysIncome(arr) {
      return this.countSumOfDayTransactions(arr, 1);
    },

    sumOfDaysSpanding(arr) {
      return this.countSumOfDayTransactions(arr, 0);
    },

    dateFormating(dateStr) {
      const daysOfWeek = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
      const date = new Date(dateStr);
      return `${this.pad(date.getDate())}/${this.pad(date.getMonth() + 1)} ${ daysOfWeek[date.getDay()]}`;
    },

    initCurrentData() {
      if (!this.month) {
        const tempDate = new Date();
        this.date = `${tempDate.getFullYear()}-${this.pad(tempDate.getMonth() + 1)}`
      } else {
        this.date = this.month;
      }

    },

    pad(num) {
      if(num < 10) {
        return '0' + num;
      }
      return num;
    },


    changeDate(date) {
      this.date = date
      // console.log('date', this.date);
      this.getOperations();
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

.datepicker {
  // width: calc(100% - 20px);
  height: 50px;
  padding: 0 10px;
  margin-top: 10px;
  // background: chocolate;
}

.list-placeholder {
  text-align: center;
  align-items: center;
  margin-top: 30px;
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