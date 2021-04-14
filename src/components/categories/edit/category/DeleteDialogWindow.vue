<template>
  <v-dialog @input="update" :value="is_open">
    <v-card>
      <v-card-title>
        Удалить категорию <b class="font-weight-bold ml-2">{{text_category}}</b>?
      </v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="cancel">Отмена</v-btn>
        <v-btn color="red darken-1" text @click="deleteCategory">Удалить</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import categoryApi from '@/api/category'

export default {
  props: {
    is_open: {
      type: Boolean,
      required: true,
    },
    k_category: {
      type: String,
      required: true,
    },
    text_category: {
      type: String,
      required: true,
    },
  },
  methods: {
    cancel() {
      this.update(false)
    },

    update(value) {
      this.$root.$emit('delete-item', value)
    },

    deleteCategory() {
      categoryApi.destroy(this.k_category).then(() => {
        this.update(false)
        this.$router.go(-1)
      })
    }
  }
}

</script>