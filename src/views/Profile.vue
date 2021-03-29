<template>
  <div class="css-main-container">
    <div class="сss-profile-container">

      <form id="profile" @submit.prevent="changeData">

        <div><input v-model="nameL" type="text" name="name" placeholder="Имя" /></div>

        <div><input v-model="emailL" type="email" name="login" placeholder="E-mail" /></div>

        <div class="css-password">
          <p style="font-size: 14px;">Пароль</p>
          <router-link class="css-password-change" to="/change_password"> Изменить </router-link>
        </div>

      </form>

      <div>
          <button ref="button" form="profile" class="saveForm"> Сохранить </button>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import profileApi from '@/api/profile'
import { namespace } from 'vuex-class'
const auth = namespace('auth')

@Component
export default class Profile extends Vue {

  private nameL = '';
  private emailL = '';

  @auth.State
  private name!: string;

  @auth.State
  private email!: string;

  @auth.Mutation
  private setName!: (newName: string) => void

  @auth.Mutation
  private setEmail!: (newName: string) => void

  created() {
    this.nameL = this.name;
    this.emailL = this.email;
  }

  private changeData(): void {

    profileApi.updateProfile({
      name: this.nameL,
      email: this.emailL
    })
    .then (res => {
      if (this.nameL !== this.name) {
        this.setName(this.nameL)
      }

      if (this.emailL !== this.email) {
        this.setEmail(this.emailL)
      }
    })
    .catch(err => {
      console.log(err);
    })

    // if (this.nameL !== this.name) {
    //   this.setName(this.nameL)
    // }

    // if (this.emailL !== this.email) {
    //   this.setEmail(this.emailL)
    // }
  }

  @Watch('name')
  private watchName(newName: string ) {
    this.nameL = newName
  }

  @Watch('email')
  private watchEmail(newEmail: string ) {
    this.emailL = newEmail
  }
}
</script>

<style>
  .css-page-title {
    font-family: Inter, serif;
    font-size: 18px;
    font-style: normal;
    font-weight: normal;
    padding-left: 10px;
    padding-top: 15px;
  }
  .css-header {
    background-color: #EDEDED;
    height: 50px;
    text-align: left;
  }

  .сss-profile-container {
    text-align: left;
    padding: 0 15px 0 15px;
  }

  .сss-profile-container div {
    margin-top: 20px;
  }

  .css-password {
    display: flex;
    font-size: 14px;
  }

  .css-password p {
    color: #B6B6B6;
  }

  .css-password-change {
    margin-left: 5px;
  }

  button {
    position: absolute;
    left: 20px;
    bottom: 10px;
  }
</style>