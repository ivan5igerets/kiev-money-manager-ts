<template>
  <loader v-if="loading" />
  <div v-else>
    <categories v-bind:a_categories="a_categories"/>
  </div>
</template>

<script>
import categories from '@/components/operations/edit/Categories'
import loader from '@/components/Loader'

import operationApi from '@/api/operation'

export default {
  components: {
    categories,
    loader
  },

  data() {
    return {
      a_categories: [],
      loading: true,
    }
  },

  mounted() {
    operationApi.categoriesGet({is_income: this.$route.params.is_income}).then((a_response) => {
      this.a_categories = a_response.data
      this.loading = false
    })
  }
  }
</script>