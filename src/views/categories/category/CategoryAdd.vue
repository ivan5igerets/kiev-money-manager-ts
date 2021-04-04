<template>
  <loader v-if="loading" />
  <v-form v-else ref="form" class="pa-4" lazy-validation id="category_add">
    <v-text-field
      :error-messages="error_message"
      :rules="rules"
      label="Название категории"
    ></v-text-field>
   <switch_budget_type />
    <v-select
        :clearable="true"
        :items="a_groups"
        label="Группы"
    ></v-select>
    <button_save_form id_form="category_add"/>
  </v-form>
</template>

<script>
import button_save_form from '@/components/ButtonSaveForm'
import switch_budget_type from '@/components/categories/SwitchBudgetType'
import loader from '@/components/Loader'

import groupListApi from '@/api/groupList'

export default {
  components: {loader, button_save_form, switch_budget_type},
  data() {
    return {
      a_groups: [],
      error_message: '',
      loading: true,
      rules: [
        value => !!value || 'Поле не может быть пустым.'
      ],
    }
  },

  mounted() {
    groupListApi.get().then(response =>
    {
      response.data.forEach((a_group) => {
        this.a_groups.push({
          'text': a_group['text_group'],
          'value': a_group['k_category_group']
        })
      });
      this.loading = false
    })
  }
}
</script>