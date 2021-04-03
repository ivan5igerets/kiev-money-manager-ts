<template>
  <loader v-if="loading" />
  <v-form v-else ref="form" lazy-validation>
    <div class="сss-profile-container pa-4">
      <name v-model="name" v-bind:name="name" v-bind:error_message="name_error_message" @input="update"/>
      <email v-model="email" v-bind:email="email" v-bind:error_message="email_error_message" @input="update"/>
      <div class="css-password">
        <div><p class="body-1 css-password-label">Пароль</p></div>
        <div><router-link :to="{name: 'ChangePassword'}">Изменить</router-link></div>
      </div>
    </div>
  </v-form>
</template>

<script>

import name from '@/components/field/name'
import email from '@/components/field/email'
import loader from '@/components/Loader'

import authApi from '@/api/auth'
import profileApi from '@/api/profile'

export default {
  components: {
    name,email, loader
  },

  data() {
    return {
      email: '',
      email_error_message: '',
      i_timeout: 0,
      loading: true,
      name: '',
      name_error_message: '',
    };
  },

  mounted() {
    authApi.getUser().then(response =>
    {
      this.loading = false
      this.name = response.data.name
      this.email = response.data.email
    })
  },

  methods: {
    errorReset() {
      this.name_error_message = '';
      this.email_error_message = '';
    },

    errorShow(a_errors) {
      for(const s_field in a_errors) {
        switch(s_field) {
          case 'name':
            this.name_error_message = a_errors[s_field][0];
            break;
          case 'email':
            this.email_error_message = a_errors[s_field][0];
            break;
        }
      }
    },

    update() {
      if(!this.$refs.form.validate())
        return;

      this.errorReset()
      clearTimeout(this.i_timeout)

      this.i_timeout = setTimeout(() => {

        profileApi.updateProfile({
          name: this.name,
          email: this.email
        }).catch(o_response => {
          const a_errors = o_response.response.data.errors;
          this.errorShow(a_errors)
        })
      }, 1000);
    },
  }
}

</script>

<style>
.css-password {
  display: flex;
}

.css-password-label {
  margin-right: 4px;
  color: grey;
}
</style>