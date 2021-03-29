import axios from '@/api/axios'

// axios.defults.

const updateProfile = parameters => {
    return axios.put('api/user/profile', parameters)

const settings = credentials => {
  return axios.put('api/user/settings', credentials)
}

export default {
  updateProfile,
    // register, 
    // login,
  settings
}