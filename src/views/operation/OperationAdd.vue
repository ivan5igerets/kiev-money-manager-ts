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

      const i_calculate_height = 251
      const i_wrap_height = document.getElementsByClassName('v-main__wrap')[0].offsetHeight
      const category_list = document.getElementById('category-list-container')
      const i_category_height = category_list.offsetHeight

      const i_delta = i_wrap_height - i_calculate_height
      if(i_delta < i_category_height) {
        const i_height_sub = i_category_height - i_delta
        category_list.style.height = (i_category_height-i_height_sub)+'px';
      }
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