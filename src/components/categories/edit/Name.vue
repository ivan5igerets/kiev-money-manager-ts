<template>
  <v-text-field
    :error-messages="error_message"
    :label="text_label"
    :rules="a_rules"
    autocomplete="off"
    @input="$emit('input', text_name)"
    :value="text_value"
    v-model="text_name"
  ></v-text-field>
</template>

<script>
export default {
  props: {
    error_message: {
      type: String,
      required: true,
    },
    text_value: {
      type: String,
      required: true
    },
    text_label: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      a_rules: [value => !!value || 'Поле не может быть пустым'],
      text_name: '',
    }
  },
}
</script>