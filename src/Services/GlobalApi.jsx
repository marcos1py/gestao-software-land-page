// GlobalApi.js
import blogsData from './blogs.json';

const GlobalApi = {
  getPost: async () => {
    return new Promise((resolve) => {
      // Simulate an asynchronous operation (similar to axios.get)
      setTimeout(() => {
        resolve({ data: { data: blogsData } });
      }, 500);
    });
  },
  getPostById: async (id) => {
    const post = blogsData.find((blog) => blog.id === parseInt(id));
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: { data: post } });
      }, 500);
    });
  },
};

export default GlobalApi;
