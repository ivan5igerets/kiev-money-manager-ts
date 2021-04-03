<template>
  <div>
    <v-bottom-sheet v-model="sheet">
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="mx-2 button-add" fab color="primary" v-bind="attrs" v-on="on">
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="tile in tiles"
          :key="tile.title"
          @click="sheet = false"
          :to="{name: tile.to}"
        >
          <v-list-item-avatar>
            <v-avatar
                size="32px"
                tile
            >
              <v-icon color="primary">{{tile.icon}}</v-icon>
            </v-avatar>
          </v-list-item-avatar>
          <v-list-item-title>{{ tile.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-bottom-sheet>
  </div>
</template>

<script>

export default {
  data: () => ({
    sheet: false,
    tiles: [
      {icon: 'mdi-view-list', to: 'CategoryAdd', title: 'Добавить категорию'},
      {icon: 'mdi-folder', to: 'CategoryAdd', title: 'Добавить группу'},
    ],
  }),
}

</script>

<style>
.button-add {
  position: absolute;
  bottom: 10px;
  right: 10px;
}

</style>