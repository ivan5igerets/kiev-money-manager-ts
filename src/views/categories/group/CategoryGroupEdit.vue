<template>
  <loader v-if="loading" />
  <v-form v-else ref="form" class="pa-4" id="category_add" @submit="save" lazy-validation>
    <div class="d-flex justify-center align-center">
      <group_icon v-bind:a_icon="a_icon" />
      <group_name
        v-bind:error_message="error_message_name"
        v-bind:text_value="text_group"
        text_label="Название группы"
        v-model="text_group"
      />
    </div>
    <switch_budget_type v-bind:a_budget="a_budget" v-bind:error_message="error_message_budget" v-model="a_budget"/>
    <v-select
      :error-messages="error_message_category"
      :items="a_categories_select"
      :rules="a_categories_rules"
      :value="a_categories"
      label="Категории"
      multiple
      v-model="a_categories"
    ></v-select>
    <button_save_form id_form="category_add"/>
  </v-form>
</template>

<script>
import button_save_form from '@/components/ButtonSaveForm'
import group_icon from '@/components/categories/edit/Icon'
import group_name from '@/components/categories/edit/Name'
import loader from '@/components/Loader'
import switch_budget_type from '@/components/categories/edit/SwitchBudgetType'

import groupApi from '@/api/group'
import groupCategoriesApi from '@/api/groupCategories'

export default {
  components: {
    button_save_form,
    group_icon,
    group_name,
    loader,
    switch_budget_type,
  },
  data() {
    return {
      a_categories_rules: [value => value.length > 0 || 'Поле не может быть пустым'],
      a_budget: {'is_percent': 0, 'm_budget': 0},
      a_categories: [],
      a_categories_select: [],
      a_icon: {'s_icon_class': 'mdi-food', 's_icon_color': '#f44336FF'},
      error_message_budget: '',
      error_message_name: '',
      error_message_category: '',
      loading: true,
      text_group: '',
    }
  },

  mounted() {
    const a_group_categories_promise = groupCategoriesApi.get({
      is_income: 0,
      k_category_group: this.$route.params.k_category_group,
    });

    Promise.all([groupApi.get(this.$route.params.k_category_group), a_group_categories_promise]).then(a_response => {
      const a_group_info = a_response[0].data

      this.a_categories = a_group_info.a_category
      this.a_budget.is_percent = a_group_info.m_budget_percent !== 0 ? 1 : 0
      this.a_budget.m_budget = a_group_info.m_budget_percent || a_group_info.m_budget_float
      this.a_icon.s_icon_color = a_group_info.s_icon_color
      this.a_icon.s_icon_class = a_group_info.s_icon_class
      this.text_group = a_group_info.text_group

      a_response[1].data.forEach((a_group) => {
        this.a_categories_select.push({
          'text': a_group['text_category'],
          'value': a_group['k_category']
        })
      });
      this.loading = false
    });
  },

  methods: {
    errorReset() {
      this.error_message_budget = '';
      this.error_message_name = '';
      this.error_message_category = '';
    },

    errorShow(a_errors) {
      this.errorReset()
      for(const s_field in a_errors) {
        switch(s_field) {
          case 'm_budget_float':
          case 'm_budget_percent':
            this.error_message_budget = a_errors[s_field][0];
            break;
          case 'text_group':
            this.error_message_name = a_errors[s_field][0];
            break;
          case 'a_category':
            this.error_message_category = a_errors[s_field][0];
            break;
        }
      }
    },

    save() {
      if(!this.$refs.form.validate())
        return;

      groupApi.put(this.$route.params.k_category_group, {
        a_category: this.a_categories,
        is_income: 0,
        m_budget_float: this.a_budget.is_percent ? 0 : this.a_budget.m_budget,
        m_budget_percent: this.a_budget.is_percent ? this.a_budget.m_budget : 0,
        s_icon_class: this.a_icon.s_icon_class,
        s_icon_color: this.a_icon.s_icon_color,
        text_group: this.text_group
      }).then(() => {
        this.$router.go(-1)
      })
      .catch(o_response => {
        this.errorShow(o_response.response.data.errors)
      })
    }
  }
}
</script>