<template>
    <div class="relative navbar-container">
      <video class="video-bg" autoplay loop muted>
        <source src="../assets/navideo.mp4" type="video/mp4">
      </video>
      <nav class="navbar">
        <div class="container flex justify-center items-center">
          <div class="left-side flex items-center">
            <router-link to="/">
            <img href="#" src="../assets/logo.png" class="logo">
            </router-link>
          </div>
          <div class="nav-links flex">
            <a href="#" class="hover:text-gray-300 transition duration-300">ÉVÉNEMENTS</a>
            <a href="#" class="hover:text-gray-300 transition duration-300">SERVICES</a>
            <a href="#" class="hover:text-gray-300 transition duration-300">BILLETERIE</a>
            <a href="#" class="hover:text-gray-300 transition duration-300">COMMENTAIRES</a>
            <a href="#" class="hover:text-gray-300 transition duration-300">STATISTIQUES</a>
          </div>
          <div class="right-side flex items-center">
            <router-link to="/login">
              <button class="button">Login</button>
            </router-link>
          </div>
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
    overflow-x: hidden;
    width: 100%;
    height: calc(8 * var(--navbar-height));
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
    font-size: 0.9rem;
    font-weight: 400;
  }
  
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
  }
  
  .left-side,
  .right-side {
    flex: 1;
    display: flex;
    justify-content: center;
  }
  
  .nav-links {
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .logo {
    width: 110px;
    height: auto;
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
  background: transparent;
  border: 2px solid #000;
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  background-color: #fff;
}

.button:hover {
  background-color: #000;
  color: #fff;
}
  

  .video-bg {
    position: absolute;
    top: -1rem;
    left: -1rem;
    right: -1rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
  </style>
  