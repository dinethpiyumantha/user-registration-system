// apiService.js
// This file will handle the API requests

import axios from "axios";

const BaseURL = "https://mditest.elifeamerica.com";
const ClientId = 4;
const ClientSecret = "sfQfhp6tDeGvEp7ZhVwk0MjbpaP55tJ1oJAKuZAE";
const Scope = "";
const GrantType = "password";

const registrationService = {
  register: async (user) => {
    try {
      const userModified = new FormData();

      userModified.append('email', user.email);
      userModified.append('first_name', user.first_name);
      userModified.append('last_name', user.last_name);
      userModified.append('password', user.password);
      userModified.append('confirm_password', user.confirm_password);
      userModified.append('dob', `1994-01-16`);
      userModified.append('mobile_number', `0${user.local_number}`);
      userModified.append('gender', "male");

      const response = await axios.post(`https://mditest.elifeamerica.com/api/v1/register`, userModified, {
        headers: {
          'Content-Type': 'multipart/form-data', 
        },
      });
      console.log(response);
      return response.data;
    } catch (error) {
      throw new Error("Login failed. Please check your credentials.");
    }
  },
};

export default registrationService;