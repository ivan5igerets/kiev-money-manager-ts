<template>
  <div>
    
    <v-tabs
      grow
      v-model="tab"
    >
      <v-tab>Затраты</v-tab>
      <v-tab>Доходы</v-tab>
      <!-- <v-tab>Item Three</v-tab> -->
      
    </v-tabs>

    <v-divider></v-divider>

    <v-tabs-items v-model="tab">
        <v-tab-item>
          шо ты 1

          <v-list>

             <!-- list item -->
            <!-- <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
      
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item> -->

            <v-list-group
              :value="true"
              prepend-icon="mdi-account-circle"
              no-action
            >

              <template v-slot:activator>
                <v-list-item-title>Users</v-list-item-title>
              </template>

              <v-list-item
                v-for="([title, icon], i) in admins"
                :key="i"
                link
              >
                <v-list-item-icon>
                  <v-icon v-text="icon"></v-icon>
                </v-list-item-icon>
              
                <v-list-item-title v-text="title"></v-list-item-title>

              </v-list-item>

            </v-list-group>

            <v-list-group
              no-action
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>Actions</v-list-item-title>
                </v-list-item-content>
              </template>
    
              <v-list-item
                v-for="([title, icon], i) in cruds"
                :key="i"
                link
              >
                <v-list-item-title v-text="title"></v-list-item-title>
    
                <v-list-item-icon>
                  <v-icon v-text="icon"></v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>

          </v-list>

        </v-tab-item>
        
        <v-tab-item>
          шо ты 2

        </v-tab-item>
      </v-tabs-items>

    <!-- Список котегорий -->

  <button_add />
  </div>
</template>

<script>

import button_add from '@/components/categories/ButtonAdd'
import groupsApi from '../../api/groups'
import categoriesApi from '../../api/categories'

export default {
  
  data() {
    return {
      tab: null,
      admins: [
        ['Management', 'mdi-account-multiple-outline'],
        ['Settings', 'mdi-cog-outline'],
      ],
      cruds: [
        ['Create', 'mdi-plus-outline'],
        ['Read', 'mdi-file-outline'],
        ['Update', 'mdi-update'],
        ['Delete', 'mdi-delete'],
      ],
    }
  },

  mounted() {
    this.getData()
  },

  methods: {
    getData() {

      groupsApi.get()
      .then(res => {
        console.log('groups',res.data);
      })
      .catch(err => {
        console.log(err);
      })

      categoriesApi.get()
      .then(res => {
        console.log('single categories',res.data);
      })
      .catch(err => {
        console.log(err);
      })
    }
  },

  components: {
    button_add
  }
}

</script>

<style lang="scss" scoped>
.groups {
  background: lightcoral;
  // height: 30px;
  width: 100%;
  box-shadow: 0 0 3px 2px rgba(0,0,0,0.25);
}

</style>