<template>
  <v-form ref="form" v-model="valid">
    <div class="d-flex justify-center align-center">
      <div class="d-flex mr-2">
        <label>
          <input
            :checked="a_budget.is_percent ? 'checked' : ''"
            class="css-percent-input-radio"
            name="is_percent"
            type="radio"
            v-on:change="update"
            value="0"
            v-model.number="is_percent"
          >
          <span class="radio"></span>
          <span class="css-switch-button-block css-switch-button-first">₴</span>
        </label>
        <label>
          <input
            :checked="a_budget.is_percent ? 'checked' : ''"
            class="css-percent-input-radio"
            type="radio"
            name="is_percent"
            value="1"
            v-on:change="update"
            v-model.number="is_percent"
          >
          <span class="radio"></span>
          <span class="css-switch-button-block">%</span>
        </label>
      </div>
      <div class="css-budget-value">
        <v-text-field
          :rules="rules"
          :value="a_budget.m_budget"
          aria-autocomplete="none"
          label="Бюджет"
          type="number"
          v-on:input="update"
          v-model.number="m_budget"
        >
        </v-text-field>
      </div>
    </div>
  </v-form>
</template>

<script>
  export default {
    props: ['a_budget'],

    data() {
      return {
        is_percent: 0,
        m_budget: 0,
        valid: true,
        rules: [
          value => {
            const pattern = this.is_percent ? /^(\d{1,2}(\.\d{1,2})?|100)$/ : /^([0-9]|[1-9]((\d{1,8})+)?)(\.\d{1,2})?$/
            return pattern.test(value) || 'Введена некорректная сумма бюджета'
          }
        ],
      }
    },

    methods: {
      update() {
        this.$refs.form.validate()
        this.$emit('input', {'m_budget': this.m_budget, 'is_percent': Boolean(this.is_percent)})
      }
    }
  }

</script>

<style>

:checked+.radio+.css-switch-button-block {
  background: #FFD630;
  border-color: #FFD630;
  color: #fff;
  transition: all .4s;
}

.css-percent-input-radio {
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