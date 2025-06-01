<template>
  <div id="app">
    <header>
      <h1>Galerie photos du Fest'Hoche #3</h1>
    </header>
    <main>
      <GalleryContainer />
    </main>
  </div>
</template>

<script>
import GalleryContainer from './components/GalleryContainer.vue'

export default {
  name: 'App',
  components: {
    GalleryContainer
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background: #121212;
  min-height: 100vh;
}

#app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #121212;
  border-radius: 0;
}

header {
  text-align: center;
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

h1 {
  color: #ffffff;
  margin: 0;
  font-weight: 300;
  letter-spacing: 1px;
}
</style>
