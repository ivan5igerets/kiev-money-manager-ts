<template>
  <div class="about">
    <!-- <h1>This is an about page</h1>

    <h2>Тут собраны компоненты приложения</h2>

      <button class="saveForm"> Сохранить </button>

      <br><br>

      <button class="circle">
        <img class="circle_img" src="@/assets/images/plus_icon.svg" alt="">
      </button>

      <br><br>

      <input type="text" class="" placeholder="Введите текст">
      <input type="password" class="error" placeholder="Введите текст">

      <router-link to="#"> Пример ссылки </router-link>

      <br><br>

      <div class="center">
        <input type="checkbox" id="cbx" style="display:none"/>
        <label for="cbx" class="toggle"><span></span></label>    
      </div> -->

      <!-- <input type="number"> -->

    <ProgressBar />


  </div>
</template>


<script lang="ts">
import { component } from 'node_modules/vue/types/umd';
import {Component, Vue} from 'vue-property-decorator'
import ProgressBar from '../components/ProrgessBar.vue'

@Component({
  components: {
    ProgressBar,
  }
})
export default class Template extends Vue {
}
</script>