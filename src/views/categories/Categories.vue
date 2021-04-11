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

          <div class="groups">

            <v-list dense>
              <v-subheader>REPORTS</v-subheader>

              <v-list-item-group
                v-model="selectedItem"
                color="primary"
              >
                <v-list-item>
        
                  <v-list-item-icon>
                    <v-icon v-text="'mdi-account'"></v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title v-text="'Шо ты там насыпаешь голова?'"></v-list-item-title>
                  </v-list-item-content>
                
                </v-list-item>

                <v-list-item>
                  <v-list-group
                    no-action
                    sub-group
                  >
                    <template v-slot:activator>
                      <v-list-item-content>

                        <v-list-item-icon>
                          <v-icon v-text="'mdi-account'"></v-icon>
                        </v-list-item-icon>

                        <v-list-item-title>Actions</v-list-item-title>
                      </v-list-item-content>
                    </template>
          
                    <!-- <v-list-item-icon>
                      <v-icon v-text="'mdi-account'"></v-icon>
                    </v-list-item-icon> -->

                    <v-list-item-content>
                      <v-list-item-title v-text="'Шо ты там насыпаешь голова?'"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-group>
                </v-list-item>
              </v-list-item-group>
            </v-list>

          </div>

          <br><br><br>
          
          <hr>

          <!-- <hr> -->

          <!-- <div class="groups">

          </div> -->

        </v-tab-item>
        
        <v-tab-item>
          шо ты 2
          <!-- <v-card
            color="basil"
            flat
          >
            <v-card-text> шо ты2 </v-card-text>
          </v-card> -->
        </v-tab-item>
      </v-tabs-items>

    <!-- Список котегорий -->

  <button_add />
  </div>
</template>

<script>

import button_add from '@/components/categories/ButtonAdd'

export default {
  
  data() {
    return {
      tab: null,
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