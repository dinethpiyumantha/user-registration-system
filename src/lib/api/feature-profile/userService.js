// apiService.js
// This file will handle the API requests

import axios from "axios";

const BaseURL = "https://mditest.elifeamerica.com";
const ClientId = 4;
const ClientSecret = "sfQfhp6tDeGvEp7ZhVwk0MjbpaP55tJ1oJAKuZAE";
const Scope = "";
const GrantType = "password";

const userService = {
  getUser: async (token) => {
    try {
      const response = await axios.get(`${BaseURL}/api/v1/profile`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      throw new Error('Login failed. Please check your credentials.');
    }
  },
  update: async (user, token) => {
    try {
      const response = await axios.put(`${BaseURL}/api/v1/profile`, user, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      throw new Error('Login failed. Please check your credentials.');
    }
  },
  changeProfilePicture: async (image, token) => {
    try {
      const userModified = new FormData();

      userModified.append('profile_image', image);

      const response = await axios.post(`https://mditest.elifeamerica.com/api/v1/register`, userModified, {
        headers: {
          'Content-Type': 'multipart/form-data', 
          'Authorization': `Bearer ${token}`,
        },
      });
      console.log(response);
      return response.data;
    } catch (error) {
      throw new Error("Login failed. Please check your credentials.");
    }
  }
};

export default userService;
