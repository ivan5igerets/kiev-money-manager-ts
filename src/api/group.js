import axios from '@/api/axios'

const post = parameters => {
  return axios.post('api/group-item', parameters)
}

const get = k_category_group => {
  return axios.get('api/group-item/'+k_category_group)
}
const put = (k_category_group, parameters) => {
  return axios.put('api/group-item/'+k_category_group, parameters)
}

export default {
  get,
  put,
  post
}