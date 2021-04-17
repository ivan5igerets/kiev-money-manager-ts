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

    <loader v-if="loading" />
    <v-tabs-items v-else v-model="tab">
        <v-tab-item>

          <v-list
            v-if="spending.groups.length"
          >
            <v-subheader> Группы </v-subheader>

            <v-list-group
              v-for="(group, k_category_group) in spending.groups"
              :key="k_category_group"
              no-action
              flat
            >

              <template 
                class="template" 
                v-slot:activator
              >
                <category_icon
                    v-bind:a_icon="{ 
                      s_icon_class: group.s_icon_class, 
                      s_icon_color: group.s_icon_color
                    }" 
                  />
                <v-list-item-title> {{ group.text_group }} </v-list-item-title>
              </template>

              <v-list-item
                v-for="(item, k_category) in group.a_category"
                :key="k_category"
                link
                @click="edit(item.k_category)"
              >
                <v-list-item-icon>
                  <category_icon 
                    v-bind:a_icon="{ 
                      s_icon_class: item.s_icon_class, 
                      s_icon_color: item.s_icon_color
                    }" 
                  />
                </v-list-item-icon>
              
                <v-list-item-title v-text="item.text_category"></v-list-item-title>

                <v-list-item-action>
                  <v-btn
                   v-on:click.stop="removeListItem(item.k_category, item.text_category)"
                   icon
                  >
                    <v-icon color="grey lighten-1">mdi-close</v-icon>
                  </v-btn>
                </v-list-item-action>

              </v-list-item>

            </v-list-group>

          </v-list>

          <v-list
            v-if="income.categories.length"
          >
            <v-subheader> Категории </v-subheader>

            <v-list-item-group color="primary">
            
              <v-list-item
                v-for="(item, k_category) in spending.categories"
                :key="k_category"
                @click="edit(item.k_category)"
              >
                <v-list-item-icon>
                  <category_icon 
                    v-bind:a_icon="{ 
                      s_icon_class: item.s_icon_class, 
                      s_icon_color: item.s_icon_color
                    }" />
                </v-list-item-icon>

                <!-- <v-list-item-title> -->
                  <v-list-item-title v-text="item.text_category"></v-list-item-title>
                <!-- </v-list-item-title> -->

                <v-list-item-action>
                  <v-btn
                   v-on:click.stop="removeListItem(item.k_category, item.text_category)"
                   icon>
                    <v-icon color="grey lighten-1">mdi-close</v-icon>
                  </v-btn>
                </v-list-item-action>

              </v-list-item>

            </v-list-item-group>
            
          </v-list>

        </v-tab-item>
        
        <v-tab-item>
          <v-list
            v-if="income.groups.length"
          >
            <v-subheader> Группы </v-subheader>

            <v-list-group
              v-for="(group, k_category_group) in income.groups"
              :key="k_category_group"
              no-action
              flat
            >

              <template class="template" v-slot:activator>
                <category_icon 
                    v-bind:a_icon="{ 
                      s_icon_class: group.s_icon_class, 
                      s_icon_color: group.s_icon_color
                    }" />
                <v-list-item-title> {{ group.text_group }} </v-list-item-title>
              </template>

              <v-list-item
                v-for="(item, k_category) in group.a_category"
                :key="k_category"
                @click="edit(item.k_category)"
                link
              >
                <v-list-item-icon>
                  <category_icon 
                    v-bind:a_icon="{ 
                      s_icon_class: item.s_icon_class, 
                      s_icon_color: item.s_icon_color
                    }" 
                  />
                </v-list-item-icon>
              
                <v-list-item-title v-text="item.text_category"></v-list-item-title>

                <v-list-item-action>
                  <v-btn
                   v-on:click.stop="removeListItem(item.k_category, item.text_category)"
                   icon
                  >
                    <v-icon color="grey lighten-1">mdi-close</v-icon>
                  </v-btn>
                </v-list-item-action>

              </v-list-item>

            </v-list-group>

          </v-list>

          <v-list
            v-if="income.categories.length"
          >
            <v-subheader> Категории </v-subheader>

            <v-list-item-group color="primary">
            
              <v-list-item
                v-for="(item, k_category) in income.categories"
                :key="k_category"
                @click="edit(item.k_category)"
              >
                <v-list-item-icon>
                  <category_icon 
                    v-bind:a_icon="{ 
                      s_icon_class: item.s_icon_class, 
                      s_icon_color: item.s_icon_color
                    }" />
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title v-text="item.text_category"></v-list-item-title>
                </v-list-item-content>

                <v-list-item-action>
                  <v-btn
                   v-on:click.stop="removeListItem(item.k_category, item.text_category)"
                   icon
                  >
                    <v-icon color="grey lighten-1">mdi-close</v-icon>
                  </v-btn>
                </v-list-item-action>

              </v-list-item>

            </v-list-item-group>
            
          </v-list>

        </v-tab-item>
    </v-tabs-items>

    <delete_dialog_window
      v-model="is_delete"
      v-bind:is_open="is_delete"
      v-bind:k_category="category_id"
      v-bind:text_category="category_title"
    />


  <button_add />
  </div>
</template>

<script>

import button_add from '@/components/categories/ButtonAdd'
import groupsApi from '../../api/groups'
import categoriesApi from '../../api/categories'
import category_icon from '@/components/categories/IconShow'
import loader from '@/components/Loader'
import delete_dialog_window from '@/components/categories/edit/category/DeleteDialogWindow'

export default {
  
  data() {
    return {
      tab: null,
      timer: null,
      loading: false,
      is_delete: false,
      category_id: '',
      category_title: '',
      income: {
        groups: [],
        categories: [],
      },
      spending: {
        groups: [],
        categories: [],
      },
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

  created() {
    this.$root.$on('delete-item', (value) => {
      this.is_delete=value
    });
  },

  mounted() {
    this.getData()
  },

  methods: {
    getData() {
      this.loading = true;

      groupsApi.get()
      .then(res => {
        console.log('groups',res.data);

        res.data.forEach(el => {
          if(el.is_income) {
            this.income.groups.push(el)
          } else {
            this.spending.groups.push(el)
          }
        });
        this.loading = false;
      })
      .catch(err => {
        console.log(err);
        this.loading = false;
      })

      categoriesApi.get()
      .then(res => {
        res.data.forEach(el => {
          if(el.is_income) {
            this.income.categories.push(el)
          } else {
            this.spending.categories.push(el)
          }
        });
        this.loading = false;
      })
      .catch(err => {
        console.log(err);
        this.loading = false;
      })
    },

    removeListItem(id, title) {
      // event.stopPropagation();
      console.log('remove',id);
      this.is_delete = true;
      this.category_id = id + '';
      this.category_title = title;
    },

    edit(id) {
      console.log('edit',id);
      this.$router.push({ name: 'CategoryEdit', params: {k_category: id+''}})
    },

    mousePressed(id) {
      console.log('mouse down');
      this.timer = setTimeout(() => {
        console.log('edit works');
        this.edit(id);
      }, 500)
    },

    mouseUp() {
      console.log('mouse up');
      clearTimeout(this.timer)
    }
  },

  components: {
    button_add,
    category_icon,
    loader,
    delete_dialog_window,
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

.tamplate {
  height: 400px;
}

</style>