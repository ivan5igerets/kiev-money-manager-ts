<template>
  <div>
    <v-tabs grow v-model="tab">
      <v-tab>Затраты</v-tab>
      <v-tab>Доход</v-tab>
    </v-tabs>
    <v-divider />
    <loader v-if="loading" />
    <v-tabs-items v-model="tab" v-else>
      <v-tab-item>
        <Diagram
            v-if="tab === 0"
            key="1"
            :data="spending"
            v-bind:enable_budget_mode="enable_budget_mode"
        />
      </v-tab-item>

      <v-tab-item>
        <Diagram
            v-if="tab === 1"
            key="2"
            :data="income"
            v-bind:enable_budget_mode="enable_budget_mode"
        />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import loader from '@/components/Loader'
import Diagram from '@/components/diagram/Diagram'
import historyApi from '@/api/history'
import userApi from '@/api/auth'
import {CoreDate} from "../../date/CoreDate";

export default {
    components: {
        loader,
        Diagram,
    },

    data() {
        return {
            tab: null,
            loading: true,
            date: CoreDate.systemNow(),
            enable_budget_mode: false,
            income: [],
            spending: [],
        }
    },

    mounted() {
        this.getData()
    },

    methods: {
        getData() {
          Promise.all([historyApi.month({dl_filter: this.date}), userApi.getUser()]).then(a_response => {
            this.sortByType(a_response[0].data)
            this.enable_budget_mode = Boolean(a_response[1].data.setups.enable_budget_mode)
            this.loading = false
          })
          .catch(err => {
            console.log(err);
          })
        },

        sortByType(arr) {
            arr.forEach(el => {
                el.is_income ? this.income.push(el) : this.spending.push(el)
            });

        },

    },
}
</script>