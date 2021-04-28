<template>
    <div>
        <v-tabs grow v-model="tab">
            <v-tab>Затраты</v-tab>
            <v-tab>Доход</v-tab>
        </v-tabs>
        <loader v-if="loading" />
        <v-tabs-items v-else v-model="tab">
            <v-tab-item> <Diagram /> 1 </v-tab-item>
            <v-tab-item> <Diagram /> 2 </v-tab-item>
        </v-tabs-items>
    </div>
</template>

<script>
import loader from '@/components/Loader'
import Diagram from '@/components/diagram/Diagram'

export default {
    components: {
        loader,
        Diagram,
    },

    data() {
        return {
            tab: null,
            loading: !true,
        }
    },
}
</script>