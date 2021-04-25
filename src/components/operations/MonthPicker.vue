<template>
    <div 
      v-if="$route.meta.isNeedDate"
      class="datepicker"
    >

        <v-menu
          left
          v-model="isDateOpen"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-x
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="month"
              placeholder="Месяц"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="date"
            type="month"
            locale="ru"
            @input="changeDate"
          ></v-date-picker>
        </v-menu>

    </div>
</template>

<script>
export default {
    data() {
        return {
            date: '',
            isDateOpen: false,
        }
    },

    created() {
      const tempDate = new Date();
      this.date = `${tempDate.getFullYear()}-${tempDate.getMonth() + 1}`
    },

    methods: {
        changeDate() {
            // console.log('date', this.date);
            this.isDateOpen = false;

            // тут нужно имитить в рут и передавать дату
            this.$root.$emit('change-date', this.date)
        },
    },

    computed: {
        month: function() {
            const month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 
            'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
            const simpleArr = this.date.split('-');

            console.log(this.date);

            return month[+simpleArr[1]-1]
        }
    }
}
</script>

<style lang="scss" scoped>
.datepicker {
  width: 110px;
  height: 30px;
//   padding: 0 10px;
}

</style>