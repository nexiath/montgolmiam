<template>
    <div class="home">
      
      <SlickSyncedSlider />
      <LandingPage />
      <MaCarte />
      
    </div>
  </template>
  
  <script>

import SlickSyncedSlider from './SlickSyncedSlider.vue';
import MaCarte from './MaCarte.vue';
import LandingPage from './LandingPage.vue';


export default {
  name: 'HomePage',
  components: {
    SlickSyncedSlider,
    MaCarte,
    LandingPage,

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
  