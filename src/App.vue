<template>
  <div class="tout">
    <NavBar />
    <SlickSyncedSlider />
    <LandingPage />
    <MaCarte />
    <FooTer />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import SlickSyncedSlider from './components/SlickSyncedSlider.vue';
import MaCarte from './components/MaCarte.vue';
import LandingPage from './components/LandingPage.vue';
import FooTer from "./components/FooTer.vue";

export default {
  name: 'App',
  components: {
    NavBar,
    SlickSyncedSlider,
    LandingPage, 
    MaCarte,
    FooTer
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
