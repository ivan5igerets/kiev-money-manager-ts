<template>
  <loader v-if="loading" />
  <div v-else>
    <categories v-bind:a_categories="a_categories" @category_select="categorySelect"/>
    <calculate v-bind:is_show="is_category_select"/>
  </div>
</template>

<script>
import calculate from '@/components/operations/edit/Calculate'
import categories from '@/components/operations/edit/Categories'
import loader from '@/components/Loader'

import operationApi from '@/api/operation'

export default {
  components: {
    calculate,
    categories,
    loader
  },

  data() {
    return {
      a_categories: [],
      is_category_select: false,
      loading: true,
    }
  },

  methods: {
    categorySelect() {
      this.is_category_select = true
    }
  },

  mounted() {
    operationApi.categoriesGet({is_income: this.$route.query.is_income}).then((a_response) => {
      this.a_categories = a_response.data
      this.loading = false
    })
  }
}
</script>