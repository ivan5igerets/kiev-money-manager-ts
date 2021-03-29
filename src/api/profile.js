import axios from '@/api/axios'

// axios.defults.

const updateProfile = parameters => {
    return axios.put('api/user/profile', parameters)
}

// const register = credentials => {
//     return axios.post('api/user/register', credentials)
// }

// const login = credentials => {
//     return axios.post('api/user/login', credentials)
// }

export default {
    updateProfile
    // register, 
    // login,
}