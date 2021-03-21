<template>
  <div id="app">
    <!-- <router-view/> -->
    <component :is="layout">
    </component>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import authApi from '@/api/auth'

import empty from '@/layouts/empty.vue'
import additional from '@/layouts/additional.vue'
import mainn from '@/layouts/main.vue'

@Component({
  components: {
    empty,
    additional,
    mainn,
  }
})
export default class Template extends Vue {
  
  // computed: {
  //   layout() {
  //     return this.$route.meta.layout
  //   }
  // }

  get layout(): string {
    console.log(this.$route.meta.layout);
    return this.$route.meta.layout;
  }

  getUser() {
    authApi.getUser()
    .then(res => {
      // localStorage.setItem('token', res.data.token)
      // this.$router.push('/')
        console.log(res.data);
      })
    .catch(err => {
      console.log(err.response.data.errors);
      this.$router.push('/auth')
      })
  }

  mounted() {
    this.getUser();
  }

}
</script>

<style lang="scss">
* {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
