import axios from './axios.config'

export default {
  getAll: async () => {
    try {
      return await axios.get('/users');
    } catch (error) {
      throw error
    }
  },
  getById: async (id) => {
    try {
      return await axios.get('/users' + id);
    } catch (error) {
      throw error
    }
  },
  post: async (project) => {
    return await axios.post(
      '/users',
      user)
  }
}
