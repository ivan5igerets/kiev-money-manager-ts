import axios from '@/api/axios'

const post = parameters => {
  return axios.post('api/category-item', parameters)
}

export default {
  post
}