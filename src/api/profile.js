import axios from '@/api/axios'

const settings = credentials => {
  return axios.put('api/user/settings', credentials)
}

export default {
  settings
}