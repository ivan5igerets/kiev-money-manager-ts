<template>
  <v-card flat>
    <v-card-text>
      <v-row v-for="(a_categories, i_row) in a_category_rows" class="ma-2 center" justify="start" :key="i_row">
        <div v-for="a_category in a_categories" :key="a_category.k_category">
          <v-avatar
            :color="k_category_select === a_category.k_category ? a_category.s_icon_color : 'grey'"
            class="mr-4 ma-2"
            @click="k_category_select=a_category.k_category"
          >
            <v-icon dark>{{a_category.s_icon_class}}</v-icon>
          </v-avatar>
          <div class="text-center">{{a_category.text_category}}</div>
        </div>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    a_categories: {
      type: Array,
      required: true
    }
  },

  data() {
    const a_category_rows = [];
    while(this.a_categories.length > 0)
      a_category_rows.push(this.a_categories.splice(0, 4));
    return {
      a_category_rows: a_category_rows,
      k_category_select: 0
    }
  },
}

</script>