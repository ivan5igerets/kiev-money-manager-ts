<template>
    <div class="signIn">

        <form id="signUp" @submit.prevent="sendData">
            <input type="text" v-model="name" class="" placeholder="Имя">
            <input type="text" v-model="email" class="" placeholder="E-mail">
            <input type="password" v-model="password" class="" placeholder="Пароль">
            <input type="password" v-model="password2" class="" placeholder="Подтверждение пароля">
        </form>

        <div>
            <button form="signUp" class="saveForm"> Зарегестрироваться </button>
        </div>

    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import authApi from '@/api/auth'

@Component
export default class Template extends Vue {
    private name = ''
    private email = '';
    private password = '';
    private password2 = '';

    async sendData() {
        // console.log('name', this.name);
        // console.log('email', this.email);
        // console.log('pass', this.password);
        // console.log('pass2', this.password2);

        const out = await authApi.register({
                name: this.name,
                email: this.email,
                password: this.password,
                "password_confirmation": this.password2
            })
        console.log('out', out);
    }
}
</script>

<style lang="scss" scoped>
.signIn {
    // background: red;
    height: calc(100vh - 215px);
    position: relative;
}

input {
    margin: 15px;
}

button {
    position: absolute;
    left: 20px;
    bottom: 10px;
}
</style>