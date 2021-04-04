<template>
  <div class="css-switch-container">
    <div class="css-switch-button-container">
      <label class="css-switch-button">
        <input checked="checked" type="radio" name="is_percent" value="0">
        <span class="radio"></span>
        <span class="css-switch-button-block css-switch-button-first">₴</span>
      </label>
      <label class="css-switch-button">
        <input checked="checked" type="radio" name="is_percent" value="1">
        <span class="radio"></span>
        <span class="css-switch-button-block">%</span>
      </label>
    </div>
    <div class="css-budget-value">
      <v-text-field :rules="rules" type="number" label="Бюджет"></v-text-field>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        rules: [
          value => {
            const pattern = /^([0-9]|[1-9]((\d{1,8})+)?)(\.\d{1,2})?$/
            return pattern.test(value) || 'Введена некорректная сумма бюджета.'
          }
        ],
      }
    }
  }

</script>

<style>

.css-switch-container {
  align-items: center;
  display:flex;
  justify-content: center;
}

.css-switch-button-container {
  flex: 1 2 100px;
}

.css-switch-button {
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
}
:checked+.radio+.css-switch-button-block {
  background: #FFD630;
  border-color: #FFD630;
  color: #fff;
  transition: all .4s;
}

.css-switch-button > input[type=radio] {
  opacity: 0;
  position: absolute;
}

.css-switch-button-block {
  border: 1px solid #dcdcd9;
  border-radius: 0 3px 3px 0;
  color: #dddfe0;
  display: inline-block;
  font-size: 14pt;
  height: 31px;
  line-height: 31px;
  margin: 5px 0;
  text-align: center;
  width: 35px;
  transition: all .4s;
}

.css-switch-button-first {
  border-radius: 3px 0 0 3px;
  border-right: 0;
}

.css-budget-value {
  flex: 1 2 100%;
}
</style>