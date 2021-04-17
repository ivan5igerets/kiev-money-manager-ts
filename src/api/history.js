import axios from '@/api/axios'

const day = parameters => {
    return axios.get('api/operation-history-day', { params: parameters })
}

const month = params => {
    return axios.get('api/operation-history-month', { params: params })
}

export default {
    day,
    month,
}