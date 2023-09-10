<template>
    <div class="home">
      
      <LandingPartenaires />
      
    </div>
  </template>
  
  <script>

import LandingPartenaires from './LandingPartenaires.vue';


export default {
  name: 'ParteNaires',
  components: {
    LandingPartenaires,

  }
  }
  </script>
  
  <style>
  .tout, #app {
    height: 100vh;
    width: 100vw;
  }
  
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
  
  #app-logo {
    width: 100px;
  }
  </style>
  