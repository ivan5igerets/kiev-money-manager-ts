<template>
  <loader v-if="loading" />
  <v-form v-else ref="form" class="pa-4" id="category_add" @submit="save" lazy-validation>
    <div class="d-flex justify-center align-center">
      <category_icon v-bind:a_icon="a_icon"/>
      <v-text-field
        aria-autocomplete="none"
        :error-messages="error_message"
        :rules="rules"
        label="Название категории"
        v-model="text_category"
      ></v-text-field>
    </div>
   <switch_budget_type v-bind:a_budget="a_budget" v-model="a_budget"/>
    <v-select
      :clearable="true"
      :items="a_groups"
      label="Группа"
      v-model="k_category_group"
    ></v-select>
    <button_save_form id_form="category_add"/>
  </v-form>
</template>

<script>
import button_save_form from '@/components/ButtonSaveForm'
import category_icon from '@/components/categories/edit/Icon'
import loader from '@/components/Loader'
import switch_budget_type from '@/components/categories/edit/SwitchBudgetType'

import categoryApi from '@/api/category'
import groupsApi from '@/api/groups'

export default {
  components: {loader, button_save_form, switch_budget_type, category_icon},
  data() {
    return {
      a_budget: {'is_percent': 0, 'm_budget': 0},
      a_groups: [],
      a_icon: {'s_icon_class': 'mdi-food', 's_icon_color': '#f44336FF'},
      error_message: '',
      k_category_group: '',
      loading: true,
      text_category: '',
      rules: [value => !!value || 'Поле не может быть пустым'],
    }
  },

  mounted() {
    groupsApi.get().then(response => {
      response.data.forEach((a_group) => {
        this.a_groups.push({
          'text': a_group['text_group'],
          'value': a_group['k_category_group']
        })
      });
      this.loading = false
    })
  },

  methods: {
    save() {
      categoryApi.post({
        is_income: 0,
        k_category_group: this.k_category_group,
        m_budget_float: this.a_budget.is_percent ? 0 : this.a_budget.m_budget,
        m_budget_percent: this.a_budget.is_percent ? this.a_budget.m_budget : 0,
        s_icon_class: this.a_icon.icon_select,
        s_icon_color: this.a_icon.color_select,
        text_category: this.text_category,
      }).then((res) => {
        alert('category save')
      })
      .catch(o_response => {
        alert(o_response)
      })
      console.log(this.text_category, this.k_category_group, this.a_budget, this.a_icon)
    }
  }
}
</script>