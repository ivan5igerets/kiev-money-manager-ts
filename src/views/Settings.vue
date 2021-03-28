<template>
  <loader v-if="loading" />
  <div class="css-main-container" v-else>
    <div class="css-settings-container">
      <label class="css-setting-item">
        <div class="css-setting-name">
          Переносить остаток на следующий месяц
        </div>
        <div class="css-setting-value">
        <checkbox
          v-bind:id="'save_balance_next_month'"
          v-bind:checked="save_balance_next_month"
          v-model="save_balance_next_month"
          v-on:change="setupChange"
        />
      </div>
      </label>
      <label class="css-setting-item">
        <div class="css-setting-name">
          Отображать кнопку "Добавить операцию" в главном меню
        </div>
        <div class="css-setting-value">
          <checkbox
            v-bind:id="'show_button_add_operation_nav_menu'"
            v-bind:checked="show_button_add_operation_nav_menu"
            v-model="show_button_add_operation_nav_menu"
            v-on:change="setupChange"
          />
        </div>
      </label>
      <label class="css-setting-item">
        <div class="css-setting-name">
          Включить режим "Бюджет" для категорий
        </div>
        <div class="css-setting-value">
          <checkbox
            v-bind:id="'enable_budget_mode'"
            v-bind:checked="enable_budget_mode"
            v-model="enable_budget_mode"
            v-on:change="setupChange"
          />
        </div>
      </label>
    </div>
  </div>
</template>

<script>

  import checkbox from '@/components/Checkbox'
  import loader from '@/components/Loader'
  import auth from '@/api/auth'
  import profileApi from '@/api/profile'

  export default {
    components: {
      checkbox, loader
    },

    data() {
      return {
        loading: true,
        save_balance_next_month: null,
        show_button_add_operation_nav_menu: null,
        enable_budget_mode: null,
      };
    },

    mounted() {
      auth.getUser().then(response =>
      {
        this.loading = false
        this.save_balance_next_month = Boolean(response.data.setups.save_balance_next_month)
        this.show_button_add_operation_nav_menu = Boolean(response.data.setups.show_button_add_operation_nav_menu)
        this.enable_budget_mode = Boolean(response.data.setups.enable_budget_mode)
      })
    },

    methods: {
      setupChange(event) {
        const checkbox = event.target;

        profileApi.settings({
          setup_name: checkbox.id,
          setup_value: checkbox.checked
        });
      }
    }
  }
</script>

<style>

 .css-setting-item {
   display: flex;
   flex-flow: row;
   margin: 15px;
 }

 .css-setting-name {
   height: 16px;
   font-size: 14px;
   line-height: 16px;

   color: #000000;
   margin-left: 10px;
   text-align: left;
 }

 .css-setting-value {
   margin-left: auto;
 }
</style>