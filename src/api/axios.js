import axios from 'axios'

axios.defaults.baseURL = 'http://kiev-money-manager.herokuapp.com/'

axios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    const authorizationToken = token ? `Bearer ${token}` : ''
    config.headers.Authorization = authorizationToken
    return config
})

export default axios