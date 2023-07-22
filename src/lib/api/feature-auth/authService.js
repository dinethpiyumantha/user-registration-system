// apiService.js
// This file will handle the API requests

import axios from "axios";

const BaseURL = "https://mditest.elifeamerica.com";
const ClientId = 4;
const ClientSecret = "sfQfhp6tDeGvEp7ZhVwk0MjbpaP55tJ1oJAKuZAE";
const Scope = "";
const GrantType = "password";

const authService = {
  login: async (credentials) => {
    
    try {
      // Create a new FormData object
      const formData = new FormData();

      // Append the credentials data to the FormData object
      formData.append('username', credentials.username);
      formData.append('password', credentials.password);
      formData.append('client_id', ClientId);
      formData.append('client_secret', ClientSecret);
      formData.append('scope', Scope);
      formData.append('grant_type', GrantType);

      const response = await axios.post(`${BaseURL}/oauth/token`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set the 'Content-Type' header to 'form-data'
        },
      });

      return response.data;
    } catch (error) {
      throw new Error('Login failed. Please check your credentials.');
    }
  },
  authorize: async (token) => {
    try {
      const response = await axios.post(`${BaseURL}/api/v1/auth/user`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      throw new Error('Login failed. Please check your credentials.');
    }
  }
};



export default authService;
