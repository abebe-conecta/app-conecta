    import axios from './axios.config'

    export default {
      getAll: async () => {
        try {
          return await axios.get('/projects');
        } catch (error) {
          throw error
        }
      },
      getById: async (id) => {
        try {
          return await axios.get('/projects' + id);
        } catch (error) {
          throw error
        }
      },
      post: async (project) => {
        return await axios.post(
          '/projects',
          project)
      }
    }
