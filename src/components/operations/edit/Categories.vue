<template>
  <v-card flat>
    <v-card-text>
      <div class="css-category-list-grid">
          <div class="ma-2 text-center" v-for="a_category in a_categories" :key="a_category.k_category">
            <v-avatar
              :color="k_category_select === a_category.k_category ? a_category.s_icon_color : 'grey'"
              :key="a_category.k_category"
              @click="k_category_select=a_category.k_category"
              size="40"
            >
              <v-icon dark>{{a_category.s_icon_class}}</v-icon>
            </v-avatar>
            <div class="text-center text-no-wrap css-category-title">
              {{a_category.text_category}}
            </div>
          </div>
          <div class="ma-2 text-center">
            <v-avatar
              :color="'grey'"
              @click="categoryAdd"
              size="40"
            >
              <v-icon dark style="border: 3px dashed white">mdi-plus</v-icon>
            </v-avatar>
            <div class="text-center text-no-wrap css-category-title">
              Добавить
            </div>
          </div>
      </div>
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
    return {
      k_category_select: 0
    }
  },

  methods: {
    categoryAdd() {
      this.$router.push({name: 'CategoryAdd', query: {is_income: this.$route.query.is_income}});
    }
  }
}

</script>

<style scoped>
  .css-category-list-grid {
    display: grid;
    grid-template-columns: 80px repeat(auto-fill, 80px);
    justify-content: center;
  }

  .css-category-title {
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>