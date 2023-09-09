<!-- Ajoutez cette ligne dans la section <head> de votre fichier HTML principal -->
<!-- <meta name="viewport" content="width=device-width, initial-scale=1.0"> -->

<template>
    <div class="relative navbar-container">
      <video class="video-bg" autoplay loop muted>
        <source src="../assets/navideo.mp4" type="video/mp4">
      </video>
      <nav class="navbar">
        <div class="container flex justify-between items-center">
          <img href="#" src="https://static.vecteezy.com/system/resources/previews/008/850/279/original/3d-hot-air-balloon-png.png" class="logo">
          <div class="flex justify-center items-center space-x-4 flex-grow">
            <a href="#" class="hover:text-gray-300 transition duration-300">MONTGOLFIERES</a>
            <a href="#" class="hover:text-gray-300 transition duration-300">VISITE</a>
            <a href="#" class="hover:text-gray-300 transition duration-300">VOUS ÊTES</a>
            <a href="#" class="hover:text-gray-300 transition duration-300">AGENDA</a>
            <a href="#" class="hover:text-gray-300 transition duration-300">RESSOURCES</a>
          </div>
          <button class="button">LOGIN</button>
        </div>
      </nav>
    </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
/* Reset */
.navbar, .navbar-container, .container {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.navbar-container {
  top: 0;
  left: 0;
  right: 0;
  position: relative;
  width: 100%;
  height: calc(8 * var(--navbar-height)); /* 3 times the navbar height */
  --navbar-height: 60px;
}

.navbar {
  top: 0;
  left: 0;
  right: 0;
  height: var(--navbar-height);
  background: transparent;
  z-index: 10;
  font-family: 'Playfair Display', serif;
  font-size: larger;
  font-weight: 400;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
}

.video-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.logo {
  width: 100px;
  height: auto;
  margin-right: 20rem; /* Poussez le logo vers la droite */
}

a {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.9);
  padding: 0.5rem;
  border-radius: 10px;
  margin: 0 0.5rem;
  transition: all 0.4s ease;
  text-shadow: 0px 0px 5px rgba(159, 159, 159, 0.9);
}

.button {
  font-family: 'Playfair Display', serif;
  font-size: 1rem;
  line-height: 1.8rem;
  text-decoration: none;
  border-radius: 50px;
  background-color: #FFFFFF;
  padding: 0.5%;
  margin-left: 20rem;
}

.button:hover {
  background-color: gold;
}

/* Video Background */
video {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  width: 100%;
}
</style>
