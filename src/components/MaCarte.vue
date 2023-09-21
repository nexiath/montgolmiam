<template>
    <div id="maCarte" :style="{ width: '600px', height: '400px', border: '2px solid #ccc', margin: '20px auto' }"></div>
  </template>
  
  <script>
  import L from 'leaflet';
  import 'leaflet/dist/leaflet.css';
  
  export default {
    mounted() {
      
      const maCarte = L.map('maCarte').setView([48.8566, 2.3522], 13);
  
      
      L.tileLayer('https://{s}.tile.thunderforest.com/mobile-atlas/{z}/{x}/{y}.png?apikey=b91d48ee9c1243298ab96ce734b7a18e', {
        attribution: '&copy; <a href="https://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 22
      }).addTo(maCarte);
  
      
      const montgolfiereIcon = L.icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/3942/3942105.png',
        iconSize: [40, 45],
        iconAnchor: [19, 47],
        popupAnchor: [0, -47]
      });
  
      L.marker([40.8266, 38.36085], {icon: montgolfiereIcon}).addTo(maCarte)
        .bindPopup('Cappadoce, Turquie')
        .openPopup();
    }
  }
  </script>
  
  <style>
      #maCarte {
              width: 600px;
              height: 400px;
              border: 2px solid #ccc;
              margin: 20px auto;
          }
  </style>
  