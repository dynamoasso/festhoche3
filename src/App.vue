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
      { id: 'festhoche', title: 'L\'ambiance' },
      { id: 'dvr', title: 'DVR' },
      { id: 'danse', title: 'L\'Atelier du Contre Temps' },
      { id: 'maevol', title: 'Maevol' },
      { id: 'elye', title: 'Elye & The Hydra' },
      { id: 'marta', title: 'Marta' }
    ];

    // Function to handle scroll event with section-specific colors
    const handleScroll = () => {
      // Calculate scroll progress (0 to 1) based on how far down the page we've scrolled
      // 0 at the top of the page, 1 when we've scrolled to the bottom
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = Math.min(1, Math.max(0, window.scrollY / scrollHeight));

      // Get positions of all sections to determine where we are in the page
      const festhocheSection = document.getElementById('festhoche');
      const dvrSection = document.getElementById('dvr');
      const maevolSection = document.getElementById('maevol');

      // Default colors (light gray to dark gray)
      let r = 0, g = 0, b = 0;

      // Base gray colors that would be used without special sections
      const baseR = Math.round(interpolate(224, 44, scrollProgress));
      const baseG = Math.round(interpolate(224, 44, scrollProgress));
      const baseB = Math.round(interpolate(224, 44, scrollProgress));

      // Warm yellow colors for DVR section
      const warmR = 224; // Keep red high for warmth
      const warmG = 192; // Reduce green slightly
      const warmB = 112; // Reduce blue significantly for yellow

      // Initialize with base gray colors
      r = baseR;
      g = baseG;
      b = baseB;

      if (dvrSection) {
        const dvrRect = dvrSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if DVR section is visible or we're in its vicinity
        if (dvrRect.top < windowHeight * 1.5 && dvrRect.bottom > -windowHeight * 0.5) {
          // Calculate how centered the DVR section is in the viewport
          // 1 when fully centered, 0 when just entering or leaving
          const visibleHeight = Math.min(dvrRect.bottom, windowHeight) - Math.max(dvrRect.top, 0);
          let visibilityRatio = Math.min(1, visibleHeight / Math.min(dvrRect.height, windowHeight));

          // Enhance visibility ratio to create a smoother transition
          // This creates a bell curve effect that peaks when the section is centered
          if (dvrRect.top <= 0 && dvrRect.bottom >= windowHeight) {
            // Section fills the viewport - maximum effect
            visibilityRatio = 1;
          } else if (dvrRect.top > 0) {
            // Section is entering from the bottom - gradual increase
            visibilityRatio = Math.pow(visibilityRatio, 0.7);
          } else if (dvrRect.bottom < windowHeight) {
            // Section is leaving from the top - gradual decrease
            visibilityRatio = Math.pow(visibilityRatio, 0.7);
          }

          // Apply warm colors based on visibility ratio
          r = Math.round(interpolate(baseR, warmR, visibilityRatio));
          g = Math.round(interpolate(baseG, warmG, visibilityRatio));
          b = Math.round(interpolate(baseB, warmB, visibilityRatio));
        }
      } else {
        // Fallback if DVR section not found
        r = baseR;
        g = baseG;
        b = baseB;
      }

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
