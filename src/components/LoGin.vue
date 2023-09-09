<template>
    <div>
      <h1>Login / Register</h1>
      <input v-model="username" placeholder="Username" />
      <input v-model="password" type="password" placeholder="Password" />
      <button @click="register">Register</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      async register() {
        try {
          await axios.post('http://localhost:3000/register', {
            username: this.username,
            password: this.password
          });
          alert('Registered successfully');
        } catch (err) {
          alert('An error occurred');
        }
      }
    }
  };
  </script>