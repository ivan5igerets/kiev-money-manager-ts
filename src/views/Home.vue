<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
})
export default class Home extends Vue {

  mounted() {
    this.$router.push('auth')
  }

}
</script>
