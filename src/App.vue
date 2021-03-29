<template>
  <div id="app">
    <!-- <router-view/> -->
    <component :is="layout">
    </component>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import { namespace } from 'vuex-class'
const auth = namespace('auth')

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
  
  @auth.Mutation
  private setName!: (newName: string) => void

  @auth.Mutation
  private setEmail!: (newName: string) => void

  get layout(): string {
    console.log(this.$route.meta.layout);
    return this.$route.meta.layout;
  }

  getUser() {
    authApi.getUser()
    .then(res => {
        console.log(res.data);

        this.setName(res.data.name);
        this.setEmail(res.data.email);
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
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: #2c3e50;
  font-family: 'Rubik', sans-serif;
  font-style: normal;
  font-weight: normal;
  text-align: center;
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
