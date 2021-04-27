<template>
  <loader v-if="loading" />
  <div v-else>
    <categories v-bind:a_categories="a_categories" @category_select="categorySelect"/>
    <calculate
      v-bind:dl_operation="dl_operation"
      v-bind:is_show="!!k_category"
      v-bind:m_sum="m_sum"
      v-bind:text_comment="text_comment"
      @operation_save="save"
    />
  </div>
</template>

<script>
import calculate from '@/components/operations/edit/Calculate'
import categories from '@/components/operations/edit/Categories'
import loader from '@/components/Loader'

import {CoreDate} from '/src/date/CoreDate.js'

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
      dl_operation: CoreDate.now(),
      k_category: 0,
      m_sum: 0,
      text_comment: '',
      loading: true,
    }
  },

  methods: {
    categorySelect(k_category) {
      this.k_category = k_category

      const i_calculate_height = 251
      const i_wrap_height = document.getElementsByClassName('v-main__wrap')[0].offsetHeight
      const category_list = document.getElementById('category-list-container')
      const i_category_height = category_list.offsetHeight

      const i_delta = i_wrap_height - i_calculate_height
      if(i_delta < i_category_height) {
        const i_height_sub = i_category_height - i_delta
        category_list.style.height = (i_category_height-i_height_sub)+'px';
      }
    },

    save(a_operation) {
      operationApi.post({
        dl_operation: a_operation['dl_operation'],
        k_category: this.k_category,
        m_sum: a_operation['m_sum'],
        text_comment: a_operation['text_comment']
      }).then(() => {
        this.$router.go(-1)
      }).fail((o_error) => {
        console.log(o_error)
      });
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