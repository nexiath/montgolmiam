<template>
    <div id="image-container">
      <div
        v-for="(slide) in slides"
        :key="slide.id"
        class="image-wrapper"
        :style="{left: slide.position + 'px'}"
      >
        <img :src="slide.image" alt="Image" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        slides: [],
        speed: 1,
        imageWidth: 200, 
      };
    },
    created() {
      this.initializeSlides();
      this.startAnimation();
    },
    methods: {
      initializeSlides() {
        const images = [
        "https://images7.alphacoders.com/616/616533.jpg",
          "https://images6.alphacoders.com/462/462371.jpg",
          "https://images5.alphacoders.com/666/666394.jpg",
          "https://images8.alphacoders.com/898/898225.jpg",
          "https://images4.alphacoders.com/775/775619.jpg",
          "https://i.pinimg.com/originals/f1/97/ae/f197ae5422a4c2be6586a384f4c908b6.jpg",
          "https://cdn.pixabay.com/photo/2022/02/16/15/01/hot-air-balloon-7016956_960_720.jpg",
          "https://www.novo-monde.com/app/uploads/2019/06/montgolfiere-cappadoce.jpg",
          "https://c4.wallpaperflare.com/wallpaper/19/608/874/above-wallpaper-preview.jpg",
          "https://images6.alphacoders.com/371/371681.jpg",
          "https://images5.alphacoders.com/419/419991.jpg",
        ];
  
        let position = 0;
        images.forEach((image, index) => {
          this.slides.push({
            id: index,
            image,
            position,
          });
          position += this.imageWidth;
        });
      },
      startAnimation() {
        const animate = () => {
          this.slides.forEach(slide => {
            slide.position -= this.speed;
            if (slide.position <= -this.imageWidth) {
              slide.position = (this.slides.length - 1) * this.imageWidth;
            }
          });
          requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      },
    },
  };
  </script>
  
  <style scoped>
  *{
    padding-top: 3%;
    padding-bottom: 3%;
  }
  #image-container {
    overflow: hidden;
    position: relative;
    height: 100px; 
    width: 100%;
  }
  
  .image-wrapper {
    position: absolute;
    top: 0;
  }
  
  img {
    height: 100px; /* Ajustez la hauteur ici */
    width: 200px; /* Ajustez la largeur ici */
    object-fit: cover;
    opacity: 0.7;
  }
  </style>
  