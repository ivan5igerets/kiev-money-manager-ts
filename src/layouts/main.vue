
<template>
  <v-app id="inspire">
    <v-navigation-drawer
        v-model="drawer"
        app
        width="300"
    >

      <div class="top-part">

        <img src="../assets/images/logo2.png" alt="">

        <div class="user-info">

          <div class="field">test</div>
          <div class="field">test@dd.cc</div>

        </div>

        <!-- шо ты? -->

      </div>

      <div class="body-part">

        <v-list
          nav
          dense
        >
          <v-list-item-group
            v-model="selectedItem"
            color="primary"
          >
            <v-list-item
              v-for="(item, i) in items"
              @click="moveTo(item.route)"
              :key="i"
            >
              <!-- <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon> -->

              <v-list-item-avatar>
                <!-- <img :src="item.icon" alt=""> -->
                <v-img :src="item.icon"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>

            </v-list-item>
          </v-list-item-group>
        </v-list>

        <div class="footer">
          <v-divider></v-divider>

          <v-list
            nav
            dense
          >
            <v-list-item-group
              color="red"
            >
              <v-list-item>
        
                <v-list-item-avatar>
                  <v-img src="../assets/images/logout.png"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title v-text="'logout'"></v-list-item-title>
                </v-list-item-content>

              </v-list-item>
            </v-list-item-group>
          </v-list>
        </div>

      </div>

    </v-navigation-drawer>

    <v-app-bar app>
      <v-btn v-if="$route.meta.is_back" icon @click="back">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-app-bar-nav-icon v-else @click="drawer = !drawer"></v-app-bar-nav-icon>

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
  data: () => ({ 
    drawer: null,
    selectedItem: null,
    items: [
      { text: 'Профиль', icon: require('@/assets/images/profile.png'), route: 'profile' },
      { text: 'Настройки', icon: require('@/assets/images/settings.png'), route: 'settings'},
    ],
    }),
    methods: {
      moveTo(route) {
        console.log('шо ты?', route);
        setTimeout(() => {
          this.selectedItem = null
          this.drawer = null
          this.$router.push(route)
        }, 300)
      },
       back() {
      this.$router.go(-1)
    }
    }
}
</script>

<style lang="scss" scoped>
.top-part {
  background: #FFD630;
  width: 100%;
  height: 120px;
  display: flex;
  padding: 20px;

  img {
    margin-right: 20px;
  }

  .user-info {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    .field {
      text-align: left;

      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 23px;

      color: #000000;
    }
  }

}

.body-part {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .footer {
    width: 100%;
    position: fixed;
    bottom: 0;
  }
}

.v-list-item__title {
  text-align: left;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;

  color: #000000;
}
// .v-list__tile__content{ 
//   text-align: left;
// }
</style>