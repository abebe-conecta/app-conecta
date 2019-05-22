import axios from 'axios'

const appUrl = 'localhost:3000'
const axiosCustomInstance = axios.create({
  baseURL: appUrl
});

//axiosCustomInstance.defaults.headers.common['Authorization'] = Bearer localStorage.getItem('_lxs_access_token')

export default axiosCustomInstance
