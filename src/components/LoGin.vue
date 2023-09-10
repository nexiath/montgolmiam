<template>
    <div class="container">
      <form class="login-form">
        <p class="login-text">
          
        </p>
        <input type="email" v-model="username" class="login-username" required placeholder="Email" />
        <input type="password" v-model="password" class="login-password" required placeholder="Password" />
        <input type="button" @click="login" value="LOGIN" class="login-submit" />
      </form>
      <a href="#" class="login-forgot-pass">forgot password?</a>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      async login() {
        try {
          const response = await axios.post('http://localhost:3000/login', {
            username: this.username,
            password: this.password,
          });
          if (response.data.success) {
            alert('Logged in successfully');
          } else {
            alert('Invalid credentials');
          }
        } catch (err) {
          alert('An error occurred during login');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:100,300,400,700');
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.0.3/css/font-awesome.css');
  
  body, html {
    height: 100%;
    
  }
  body {
    font-family: 'Open Sans';
    font-weight: 100;
    display: flex;
    overflow: hidden;
    
  }

  .container {
  padding-top: 50px;
  padding-bottom: 50px;
}
  
  .login-form {
    min-height: 10rem;
    margin: auto;
    max-width: 50%;
    padding: .5rem;
  }
  .login-text {
    color: rgb(0, 0, 0);
    font-size: 1.5rem;
    margin: 0 auto;
    max-width: 50%;
    padding: .5rem;
    text-align: center;
    border-radius: 50%;
  }
  
  .login-username, .login-password {
    background: transparent;
    border: 0 solid;
    border-bottom: 1px solid rgba(184, 184, 184, 0.5);
    color: rgb(0, 0, 0);
    display: block;
    margin: 1rem;
    padding: .5rem;
    transition: 250ms background ease-in;
    width: calc(100% - 3rem);
  }
  
  .login-username:focus, .login-password:focus {
    background: rgb(49, 49, 49);
    color: rgb(171, 171, 171);
    transition: 250ms background ease-in;
  }
  
  .login-forgot-pass {
    
    color: rgb(0, 0, 0);
    cursor: pointer;
    display: block;
    font-size: 75%;
    left: 0;
    opacity: 0.6;
    padding: .5rem;
    position: absolute;
    text-align: center;
    width: 100%;
    padding-bottom: 3%;
  }
  .login-forgot-pass:hover {
    opacity: 1;
  }
  
  .login-submit {
    border: 1px solid rgb(0, 0, 0);
    background: transparent;
    color: rgb(0, 0, 0);
    display: block;
    margin: 1rem auto;
    min-width: 1px;
    padding: .25rem;
    transition: 250ms background ease-in;
    border-radius: 0%;
    font-size: 1rem;
    font-family: 'Playfair Display', serif;;
  }
  .login-submit:hover, .login-submit:focus {
    background: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
    transition: 250ms background ease-in;
  }
  
  [class*=underlay] {
    left: 0;
    min-height: 100%;
    min-width: 100%;
    position: fixed;
    top: 0;
  }
  .underlay-black {
    background: rgba(167, 167, 167, 0.7);
    z-index: -1;
  }
  </style>
  