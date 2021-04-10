<template>
  <div class="mr-2">
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <template v-slot:activator="{on, attrs}">
        <v-avatar :color="a_icon.s_icon_color" size="45" v-bind="attrs" v-on="on">
          <v-icon dark>{{a_icon.s_icon_class}}</v-icon>
        </v-avatar>
      </template>
      <v-card>
        <v-toolbar>
          <v-btn icon @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn text @click="save">Сохранить</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <div class="ma-4 d-flex justify-center align-center">
          <v-avatar :color="color_select" v-model="color_select" size="64">
            <v-icon dark>{{icon_select}}</v-icon>
          </v-avatar>
          <caption class="ml-2">Иконка категории</caption>
        </div>
        <v-tabs fixed-tabs>
          <v-tab>Иконка</v-tab>
          <v-tab>Цвет</v-tab>
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <v-row v-for="(a_icons, i_row) in a_icon_rows" class="ma-1" justify="start" :key="i_row">
                  <v-avatar
                    v-for="s_icon in a_icons"
                    :color="icon_select === s_icon ? 'primary' : 'grey'"
                    :key="s_icon"
                    class="ma-4"
                    @click="icon_select=s_icon"
                    v-model="icon_select"
                  >
                    <v-icon dark>{{s_icon}}</v-icon>
                  </v-avatar>
                </v-row>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <v-color-picker
                  class="v-picker--full-width"
                  dot-size="22"
                  hide-canvas
                  hide-inputs
                  v-model="color_select"
                  show-swatches
                  width="100%"
                  swatches-max-height="400"
                ></v-color-picker>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    a_icon: {
      type: Object,
      required: true,
    }
  },

  data() {
    return {
      dialog: false,
      color_select: this.a_icon.s_icon_color,
      icon_select: this.a_icon.s_icon_class,
      a_icon_rows: [
        ['mdi-food', 'mdi-train-car', 'mdi-cellphone-basic', 'mdi-gift-outline'],
        ['mdi-youtube-subscription', 'mdi-home']
      ]
    }
  },

  methods: {
    save() {
      this.a_icon.s_icon_color = this.color_select
      this.a_icon.s_icon_class = this.icon_select
      this.dialog=false
    }
  }
}
</script>

<style>
  .v-color-picker__dot {
    display: none;
  }
</style>