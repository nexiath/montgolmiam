<template>
    <div id="landing-page">
      <!-- Header -->
      <header>
        <h1>Bienvenue sur </h1>
      </header>
  
      <!-- Contenu principal -->
      <main>
        <section id="intro">
          <p>Bienvenue</p>
        </section>
        
        <section id="features">
          <h2>Réserver une montgolfière ?</h2>
        </section>
  
        <section id="contact">
          <h2>Contactez-nous</h2>
        </section>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LandingPage', // Nom à deux mots
    data() {
      return {};
    },
    methods: {},
    computed: {}
  };
  </script>
  
  <style scoped>
  #landing-page {
    font-family: 'Playfair Display', serif;
  }
  
  header, main, footer {
    margin: 20px;
    padding: 20px;
  }
  </style>
  