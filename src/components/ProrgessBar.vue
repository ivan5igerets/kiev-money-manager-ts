<template>
    <div>
        <h1>Разрабатывай тут ProgressBar</h1>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'

@Component
export default class Template extends Vue {

    // пример поля
    private name = ''
  
    // пример метода
    sendData() {
       
        console.log('шо ты?');
    }
}
</script>

<style lang="scss" scoped>

</style>