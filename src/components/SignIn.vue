<template>
    <div class="signIn">
        <!-- <h1>
            Sign In
        </h1> -->

        <form id="signIn" @submit.prevent="sendData">
            <input type="text" v-model="email" class="" placeholder="E-mail">
            <input type="password" v-model="password" class="" placeholder="Введите пароль">
        </form>

        <div>
            <button form="signIn" class="saveForm"> Войти </button>
        </div>


    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import authApi from '@/api/auth'

@Component
export default class Template extends Vue {
    private email = '';
    private password = '';

    sendData() {

        authApi.login({
            email: this.email,
            password: this.password
        }) 
        .then(res => console.log(res))
        .catch(err => console.error(err.response.data))

        // console.log('out', out.data);
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