<template>
    <div>
        <h1>
            Diagram
        </h1>
    <v-tabs grow v-model="tab">
        <v-tab>Затраты</v-tab>
        <v-tab>Доход</v-tab>
    </v-tabs>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tab: null,
        }
    },
}
</script>