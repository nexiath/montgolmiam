<template>
    <div class="landing-page">
      <!-- Evenements Section -->
      <section id="events">
        <h2 class="events-title">Événements à venir</h2>
  
        <div class="events-grid">
          <!-- Event 1 -->
          <div class="event-box" style="background-image: url('https://globetrekkeuse.com/wp-content/uploads/2016/11/montgolfiere-en-cappadoce-decollage-e1478182791935.jpg');" @click="voirTousEvenements">
            <div class="event-info">
              <span class="event-date">Jusqu'au 10 septembre 2023</span>
              <span class="event-category">Vol en groupe</span>
              <span class="event-title">Vol matinal</span>
              <span class="event-reference">Référence</span>
            </div>
          </div>
  
          <!-- Event 2 -->
          <div class="event-box" style="background-image: url('https://www.villanovo.fr/images/magazine/article_965_4995_1589294801.jpg');" @click="voirTousEvenements">
            <div class="event-info">
              <span class="event-date">Du 12 au 15 octobre 2023</span>
              <span class="event-category">Compétition</span>
              <span class="event-title">Coupe des montgolfières</span>
              <span class="event-reference">Référence</span>
            </div>
          </div>
  
          <!-- Events 3 -->
          <div class="event-box" style="background-image: url('https://png.pngtree.com/thumb_back/fw800/background/20210910/pngtree-turkey-hot-air-balloon-tourists-travel-real-shots-image_847896.jpg');" @click="voirTousEvenements">
            <div class="event-info">
              <span class="event-date">Du 12 au 15 octobre 2023</span>
              <span class="event-category">Compétition</span>
              <span class="event-title">Coupe des montgolfières</span>
              <span class="event-reference">Référence</span>
            </div>
          </div>
  
          <!-- Events 4 -->
          <div class="event-box" style="background-image: url('https://cdn.pixabay.com/photo/2021/11/11/13/15/hot-air-balloon-6786317_1280.jpg');" @click="voirTousEvenements">
            <div class="event-info">
              <span class="event-date">Du 12 au 15 octobre 2023</span>
              <span class="event-category">Compétition</span>
              <span class="event-title">Coupe des montgolfières</span>
              <span class="event-reference">Référence</span>
            </div>
          </div>
        </div>
  
        <!-- Button to view all events -->
        <div class="button-container">
          <button class="discover-button" @click="voirTousEvenements">
            Découvrez tous nos événements
          </button>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: "LandingPage",
    methods: {
      voirTousEvenements() {
        console.log("Voir tous les événements");
      },
    },
  };
  </script>
  
  <style scoped>

.event-title {
  text-align: left;
  margin-bottom: 20px;
  padding-left: 40px; /* Espace pour l'icône */
  position: relative;
}

.event-title::before {
  content: url('https://www.flaticon.com/fr/icone-gratuite/montgolfiere_3228513?term=hot+air+balloon&page=1&position=13&origin=search&related_id=3228513'); /* Remplacez 'icon_url_here' par l'URL de votre icône */
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}

  .landing-page {
    font-family: 'Playfair Display', serif;
  }
  
  body {
    font-family: 'Playfair Display', serif;
    margin: 20px;
    padding: 20px;
  }
  
  .events-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }
  
  .event-box {
    cursor: pointer;
    position: relative;
    width: calc(30% - 20px);;
    height: 250px;
    background-size: cover;
    background-position: center;
    transition: transform 0.3s ease;
  }
  
  .event-box:hover {
    transform: scale(1.05);
  }
  
  .event-info {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.6);
    color: #fff;
    padding: 15px;
    text-align: center;
  }
  
  .button-container {
    text-align: center;
    margin-top: 30px;
  }
  
  .discover-button {
    background: transparent;
    border: 2px solid #000;
    padding: 12px 24px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  
  .discover-button:hover {
    background-color: #000;
    color: #fff;
  }
  </style>
  