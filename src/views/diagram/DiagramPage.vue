<template>
    <div>
        <v-tabs grow v-model="tab">
            <v-tab>Затраты</v-tab>
            <v-tab>Доход</v-tab>
        </v-tabs>

        <v-divider />

        <loader v-if="loading" />
        <v-tabs-items v-else v-model="tab">
            <v-tab-item> <Diagram v-if="tab === 0" key="1" />  </v-tab-item>
            <v-tab-item> <Diagram v-if="tab === 1" key="2" />  </v-tab-item>
        </v-tabs-items>
    </div>
</template>

<script>
import loader from '@/components/Loader'
import Diagram from '@/components/diagram/Diagram'
import historyApi from '@/api/history'

export default {
    components: {
        loader,
        Diagram,
    },

    data() {
        return {
            tab: null,
            loading: !true,
            date: '2021-04'
        }
    },

    mounted() {
        this.getData()
    },

    methods: {
        getData() {
            historyApi.month({
                dl_filter: this.date + '-01'
            })
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
        },
    },
}
</script>