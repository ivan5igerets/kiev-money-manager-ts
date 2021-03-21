<template>

  <div class="css-main-container">
    <div class="css-header">
      <div class="css-page-title">Настройки</div>
    </div>
    <div class="css-settings-container">
        <label class="css-setting-item">
        <div class="css-setting-name">
          Переносить остаток на следующий месяц
        </div>
        <div class="css-setting-value">
          <input type="checkbox" id="cbx" style="display:none"/>
          <label for="cbx" class="toggle"><span></span></label>
        </div>
      </label>
      <label class="css-setting-item">
        <div class="css-setting-name">
          Включить режим "Бюджет" для категорий
        </div>
        <div class="css-setting-value">
          <input type="checkbox" class="type-checkbox" id="cbx1" style="display:none"/>
          <label for="cbx1" class="toggle"><span></span></label>
        </div>
      </label>
    </div>
  </div>
</template>

<style>

.css-page-title {
  font-family: Inter, serif;
  font-size: 18px;
  font-style: normal;
  font-weight: normal;
  padding-left: 10px;
  padding-top: 15px;
}
 .css-header {
   background-color: #EDEDED;
   height: 50px;
   text-align: left;
 }

 .css-setting-item {
   display: flex;
   flex-flow: row;
   margin-top: 30px;
 }

 .css-setting-name {
   font-size: 14px;
   margin-left: 10px;
   text-align: left;
 }

 .css-setting-value {
   margin-left: auto;
   margin-right: 20px;
 }
</style>