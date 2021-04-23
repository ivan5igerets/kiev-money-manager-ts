import axios from '@/api/axios'

const categoriesGet = parameters => {
  return axios.get('api/operation-categories', {params: parameters})
}

export default {
  categoriesGet
}