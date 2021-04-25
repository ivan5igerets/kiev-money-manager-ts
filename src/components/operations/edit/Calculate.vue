<template>
  <div class="css-calculate-container" v-show="is_show">
    <v-text-field
      :rounded="true"
      class="css-operation-sum"
      readonly
      :value="text_number_display"></v-text-field>
    <v-text-field
      :rounded="true"
      class="css-operation-comment"
      placeholder="Комментарий"
      :maxlength="COMMENT_MAX_LENGTH"
      prepend-inner-icon="mdi-lead-pencil"></v-text-field>
    <div class="css-calculate-grid">
      <div class="css-calculate-button" @click="numberSet(7)">7</div>
      <div class="css-calculate-button" @click="numberSet(8)">8</div>
      <div class="css-calculate-button" @click="numberSet(9)">9</div>
      <div class="css-calculate-button css-calculate-button-date">
        <v-dialog ref="dialog" v-model="is_calender_open">
          <template v-slot:activator="{ on, attrs }">
            <div v-bind="attrs" v-on="on">
              <div class="css-date-month-operation">
                {{o_date.i_month}}/{{o_date.i_day}}</div>
              <div class="css-year-operation">{{o_date.i_year}}</div>
            </div>
          </template>
        <v-date-picker locale="ru-RU" v-model="text_date" @input="dateSelect"></v-date-picker>
        </v-dialog>
      </div>
      <div class="css-calculate-button" @click="numberSet(4)">4</div>
      <div class="css-calculate-button" @click="numberSet(5)">5</div>
      <div class="css-calculate-button" @click="numberSet(6)">6</div>
      <div class="css-calculate-button" @click="operatorSet('+')">
        <v-icon>mdi-plus</v-icon>
      </div>
      <div class="css-calculate-button" @click="numberSet(1)">1</div>
      <div class="css-calculate-button" @click="numberSet(2)">2</div>
      <div class="css-calculate-button" @click="numberSet(3)">3</div>
      <div class="css-calculate-button" @click="operatorSet('-')">
        <v-icon>mdi-minus</v-icon>
      </div>
      <div class="css-calculate-button" @click="numberSet('.')">.</div>
      <div class="css-calculate-button" @click="numberSet(0)">0</div>
      <div class="css-calculate-button" @click="clear()">
        <v-icon>mdi-backspace-outline</v-icon>
      </div>
      <div class="css-calculate-button css-button-save" @click="calculate()" v-if="text_operator">
        <v-icon>mdi-equal</v-icon>
      </div>
      <div class="css-calculate-button css-button-save" v-else>
        <v-icon>mdi-check-circle-outline</v-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    is_show: {
      type: Boolean,
      required: true,
    }
  },

  data() {
    const o_date_now = new Date();
    const text_date = o_date_now.getFullYear()+'-'+(o_date_now.getMonth()+1)+'-'+o_date_now.getDate();

    return {
      COMMENT_MAX_LENGTH: 60,
      is_calender_open: false,
      o_date: this.dateObject(text_date),
      text_date: text_date,
      text_number_a: '',
      text_number_b: '',
      text_number_display: 0,
      text_operator: null
    }
  },

  methods: {
    dateObject(text_date) {
      const o_date = new Date(text_date);
      const i_month = o_date.getMonth() + 1;
      return {
        'i_day': o_date.getDate(),
        'i_month': i_month < 10 ? '0'+i_month : i_month,
        'i_year': o_date.getFullYear()
      }
    },

    dateSelect(text_date) {
      this.o_date = this.dateObject(text_date)
      this.text_date = text_date
      this.is_calender_open = false
    },
    
    operatorSet(operator) {
      if(this.text_operator)
        this.calculate()

      this.text_operator = operator
      this.text_number_display += operator
    },

    numberValidate(text_current_number, i_new_number){
      const text_number = text_current_number+i_new_number
      const regex = /^\d{1,8}(\.|\.\d{1,2}?)?$/;
      return text_number.match(regex) !== null
    },

    numberSet(i_number){
      if(this.text_operator === null){
        if(!this.numberValidate(this.text_number_a, i_number))
          return;

        this.text_number_a += i_number;
        this.text_number_display = this.text_number_a;
      }
      else{
        if(!this.numberValidate(this.text_number_b, i_number))
          return;

        this.text_number_b += i_number;
        this.text_number_display += i_number;
      }

      console.log(this.text_number_a, this.text_number_b)
    },

    calculate(){
      const f_number_a = this.text_number_a ? parseFloat(this.text_number_a) : 0;
      const f_number_b = this.text_number_b ? parseFloat(this.text_number_b) : 0;
      let f_number_temp = 0
      switch(this.text_operator){
        case '+':
          f_number_temp = f_number_a + f_number_b;
          break;
        case '-':
          f_number_temp = f_number_a - f_number_b;
          break;
        case '*':
          f_number_temp = f_number_a * f_number_b;
          break;
        case '/':
          f_number_temp = f_number_a / f_number_b;
          break;
      }
      this.text_number_display = f_number_temp;
      this.text_number_a = '' + f_number_temp + '';
      this.text_number_b = '';
      this.text_operator = null;
    },

    clear(){
      if(!this.text_number_display)
        return;

      const i_current_number_length = this.text_number_display.length;
      const last_char = this.text_number_display.substring(i_current_number_length - 1, i_current_number_length)

      if(last_char === this.text_operator)
        this.text_operator = null
      else if(this.text_number_b)
        this.text_number_b = this.text_number_b.substring(0, this.text_number_b.length - 1)
      else
        this.text_number_a = this.text_number_a.substring(0, this.text_number_a.length - 1)

      if(i_current_number_length === 1)
        this.text_number_display = 0
      else
        this.text_number_display = this.text_number_display.substring(0, i_current_number_length - 1)
    }
  }
}
</script>

<style lang="scss">
.css-calculate-container {
  background-color: #fbf8f8;
  bottom: 0;
  border-top: 1px solid #CCCCCC;
  position: absolute;
  width: 100%;
}

.css-calculate-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: center;
  grid-auto-rows: 50px;
  border-top: 1px solid #CCCCCC;
  border-left: 1px solid #CCCCCC;

  .css-calculate-button {
    border-bottom: 1px solid #CCCCCC;
    border-right: 1px solid #CCCCCC;
    padding-top: 15px;
    text-align: center;
    background-color: #fbf8f8;

    &.css-calculate-button-date {
      padding-top: 10px !important;
    }
  }

  .css-calculate-button-date {
    .css-date-month-operation {
      font-size: 13px;
    }
    .css-year-operation {
      font-size: 11px;
    }
  }

  .css-button-save {
    background-color: #FFF84D;
    border: 1px solid #FFF84D;
  }
}

.css-operation-sum {
  position: absolute;
  padding-top: 5px;
  width: 100%;
  text-align: right;
  border-bottom: 0!important;

  .v-input__slot {
    padding-right: 10px!important;
  }

  input {
    text-align: right;
  }
}

.css-operation-comment {
  padding-top: 5px;
  border-radius: 0;
  height: 45px;
  width: 75%;
  border-bottom: 0!important;
}

</style>