<template>
  <div id="app">
    <header>
      <h1>Galerie photos du Fest'Hoche #3</h1>
    </header>
    <main>
      <PhotoGallery />
    </main>
  </div>
</template>

<script>
import PhotoGallery from './components/PhotoGallery.vue'

export default {
  name: 'App',
  components: {
    PhotoGallery
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  min-height: 100vh;
}

#app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

header {
  text-align: center;
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

h1 {
  color: #2c3e50;
  margin: 0;
}
</style>
