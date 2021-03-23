<template>
  <div class="css-main-container">
    <div class="css-settings-container">
        <label class="css-setting-item">
        <div class="css-setting-name">
          Переносить остаток на следующий месяц
        </div>
        <div class="css-setting-value">
          <checkbox id="save_balance_next_month" />
        </div>
      </label>
      <label class="css-setting-item">
        <div class="css-setting-name">
          Включить режим "Бюджет" для категорий
        </div>
        <div class="css-setting-value">
          <checkbox id="enable_budget_mode" />
        </div>
      </label>
      <label class="css-setting-item">
        <div class="css-setting-name">
          Отображать кнопку "Добавить операцию" в главном меню
        </div>
        <div class="css-setting-value">
          <checkbox id="show_button_add_operation_nav_menu" />
        </div>
      </label>
    </div>
  </div>
</template>

<script lang="ts">
  import checkbox from '@/components/Checkbox'

  export default {
    components: {
      checkbox
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
   font-size: 14px;
   margin-left: 10px;
   text-align: left;
 }

 .css-setting-value {
   margin-left: auto;
 }
</style>