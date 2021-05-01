<template>
    <div 
      v-if="$route.meta.isNeedDate"
      class="datepicker"
    >
        <v-dialog
          left
          v-model="isDateOpen"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-x
          min-width="auto"
        >
          <template v-slot:activator="{on, attrs}">
            <div v-bind="attrs" v-on="on" class="d-flex">
              <div>{{month}}</div><v-icon>mdi-calendar</v-icon>
            </div>
          </template>
          <v-date-picker
            v-model="date"
            type="month"
            locale="ru"
            @input="changeDate"
          ></v-date-picker>
        </v-dialog>
    </div>
</template>

<script>
import {CoreDate} from '/src/date/CoreDate.js'

import {mapMutations} from 'vuex'

export default {
    data() {
        return {
            date: '',
            isDateOpen: false,
        }
    },

    created() {
      this.initDate();
    },

    methods: {
        changeDate() {
            this.isDateOpen = false;
            this.setMonth(this.date);
            this.$root.$emit('change-date', this.date)
        },

        initDate() {
          this.date = this.$route.query.dl_date ? this.$route.query.dl_date : CoreDate.now()
          this.setMonth(this.date)
        },

        ...mapMutations({
          setMonth: "date/setMonth",
        }),
    },

    watch: {
      $route: function(newUrl) {
        if (newUrl.name == 'OperationHistoryDay') {
          this.changeDate();
        }

        if (newUrl.name !== 'Diagram' && newUrl.name !== 'OperationHistoryDay') {
          this.initDate();
        }
      }
    },

    computed: {
        month: function() {
            const month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 
            'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
            const simpleArr = this.date.split('-');

            return month[+simpleArr[1]-1]
        }
    }
}
</script>