<template>
  <div id="app">
    <NavBar />
    <router-view/>
    <FooTer />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import FooTer from './components/FooTer.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    FooTer
  }
}
</script>
