<template>
  <div id="app">
    <component :is="layout">
    </component>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import { namespace } from 'vuex-class'
const auth = namespace('auth')

import authApi from '@/api/auth'

import additional from '@/layouts/additional.vue'
import edit from '@/layouts/edit.vue'
import empty from '@/layouts/empty.vue'
import mainn from '@/layouts/main.vue'

@Component({
  components: {
    empty,
    edit,
    additional,
    mainn,
  }
})
export default class Template extends Vue {
  
  @auth.Mutation
  private setName!: (newName: string) => void

  @auth.Mutation
  private setEmail!: (newName: string) => void
  
  @auth.Mutation
  private loadingToggle!: (newValue: boolean) => void

  get layout(): string {
    return this.$route.meta.layout;
  }

  getUser() {
    this.loadingToggle(true);
    authApi.getUser()
    .then(res => {
        this.setName(res.data.name);
        this.setEmail(res.data.email);
        this.loadingToggle(false);
      })
    .catch(err => {
      console.log(err.response.data.errors);
      this.$router.push('/auth')
      this.loadingToggle(false);
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
