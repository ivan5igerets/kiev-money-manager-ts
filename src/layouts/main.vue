
<template>
  <v-app id="inspire">
    <v-navigation-drawer
        v-model="drawer"
        app
    >
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>{{$route.meta.title}}</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>

    </v-main>

    <v-bottom-navigation grow value="0" color="primary" v-if="$route.meta.is_nav_menu">
      <v-btn>
        <span>Главная</span>
        <v-icon>mdi-credit-card</v-icon>
      </v-btn>
      <v-btn>
        <span>Категории</span>
        <v-icon>mdi-view-list</v-icon>
      </v-btn>
      <v-btn>
        <span>Диаграмма</span>
        <v-icon>mdi-chart-arc</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  data: () => ({ drawer: null }),
}
</script>