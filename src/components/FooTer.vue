<template>
    
    <footer class="footer">
        <hr>
      <div class="footer-container">
        <!-- Section pour les professionnels -->
        <div class="footer-section">
          <h4>PROFESSIONNELS</h4>
          <ul class="liste">
            <li><a href="#">Vols et prises de vue</a></li>
            <li><a href="#">Vos événements avec Montgolfières Inc.</a></li>
            <li><a href="#">Presse</a></li>
          </ul>
        </div>
        
        <!-- Section pour les mécènes -->
        <div class="footer-section">
          <h4>PARTENAIRES</h4>
          <ul class="liste">
            <li><a href="#">Nos partenaires</a></li>
            <li><a href="#">Nous soutenir</a></li>
          </ul>
        </div>
        
        <!-- Section pour la Société d'Amis -->
        <div class="footer-section">
          <h4>SOCIÉTÉS D'AMIS</h4>
          <ul class="liste">
            <li><a href="#">Devenir membre</a></li>
          </ul>
        </div>
        <!-- Section pour les informations légales et les contacts -->
        <div class="footer-section">
          <ul class="liste">
            <li><a href="#">Gestion des cookies</a></li>
            <li><a href="#">Politique de confidentialité</a></li>
            <li><a href="#">Mentions légales</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">S'inscrire à la lettre d'information</a></li>
            <li><a href="#">Mettre à jour son profil à la lettre d'information</a></li>
            <li><a href="#">Nous rejoindre</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>2023© Montgolfières Inc. - Tous droits réservés</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "FooterComponent",
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #ffffff;
    color: rgb(0, 0, 0);
    font-family: 'Playfair Display', Arial, sans-serif;
    padding: 1rem 0;
  }
  
  .footer-container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 0 auto;
    max-width: 1100px;
  }
  
  .footer-section {
    flex: 1;
    min-width: 250px;
    padding: 1rem;
  }
  
  .footer-section h4 {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  
  .footer-section ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    font-size: 0.7rem;
  }
  
  .footer-section ul li {
    margin-bottom: 0.5rem;
  }
  
  .footer-section ul li a {
    color: rgb(0, 0, 0);
    text-decoration: none;
  }
  
  .footer-section ul li a:hover {
    text-decoration: underline;
  }
  
  .footer-bottom {
    text-align: center;
    margin-top: 1rem;
  }

  </style>
  