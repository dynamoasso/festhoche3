<template>
  <div id="app">
    <header>
      <h1>Galerie photos du Fest'Hoche #3</h1>
    </header>
    <main>
      <GalleryContainer />
    </main>
    <SideMenu :sections="sections" />
  </div>
</template>

<script>
import GalleryContainer from './components/GalleryContainer.vue'
import SideMenu from './components/SideMenu.vue'
import { onMounted, onUnmounted, ref } from 'vue'

export default {
  name: 'App',
  components: {
    GalleryContainer,
    SideMenu
  },
  setup() {
    // Background color state that will change as user scrolls
    // Starting with a very light gray (#e0e0e0) at the top
    // Ending with a darker gray (#2c2c2c) at the bottom
    const backgroundColor = ref('#e0e0e0');

    // Define sections for the side menu
    const sections = [
      { id: 'festhoche', title: 'Le Fest\'Hoche #3' },
      { id: 'maevol', title: 'Maevol' },
      { id: 'elye', title: 'Elye & The Hydra' },
      { id: 'marta', title: 'Marta' }
    ];

    // Function to handle scroll event - simplified version
    const handleScroll = () => {
      // Calculate scroll progress (0 to 1) based on how far down the page we've scrolled
      // 0 at the top of the page, 1 when we've scrolled to the bottom
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = Math.min(1, Math.max(0, window.scrollY / scrollHeight));

      // Interpolate between the starting color (very light gray) and ending color (darker gray)
      const r = Math.round(interpolate(224, 44, scrollProgress)); // e0 -> 2c
      const g = Math.round(interpolate(224, 44, scrollProgress)); // e0 -> 2c
      const b = Math.round(interpolate(224, 44, scrollProgress)); // e0 -> 2c

      // Set the new background color
      backgroundColor.value = `rgb(${r}, ${g}, ${b})`;
      document.body.style.backgroundColor = backgroundColor.value;
    };

    // Helper function to interpolate between two values
    const interpolate = (start, end, progress) => {
      return start + (end - start) * progress;
    };

    onMounted(() => {
      // Add scroll event listener
      window.addEventListener('scroll', handleScroll);

      // Initial call to set the background color
      handleScroll();
    });

    onUnmounted(() => {
      // Remove scroll event listener
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      backgroundColor,
      sections
    };
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background: #e0e0e0; /* Starting with a very light gray */
  min-height: 100vh;
  transition: background-color 0.5s ease;
}

#app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: transparent; /* Changed to transparent to show body background */
  border-radius: 0;
}

header {
  text-align: center;
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1); /* Darker border for better visibility on light background */
}

h1 {
  color: #333333; /* Darker text for better contrast on light background */
  margin: 0;
  font-weight: 300;
  letter-spacing: 1px;
}
</style>
