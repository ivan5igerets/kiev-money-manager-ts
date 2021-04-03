import axios from '@/api/axios'

const get = parameters => {
  return axios.get('api/group-list', parameters)
}

export default {
  get
}