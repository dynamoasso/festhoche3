<template>
  <div id="app">
    <div class="landing-view" :class="{ 'scrolled': hasScrolled }">
      <div class="poster-container">
        <img :src="`${publicPath}Festhoche-affiche-2025.png`" alt="Affiche du Fest'Hoche" class="poster-image" />
      </div>
      <h1>La Galerie <span class="highlight-pink">PHOTOS</span> du Fest'Hoche #3</h1>
      <div class="scroll-indicator">
        <div class="arrow-down"></div>
      </div>
    </div>
    <main :class="{ 'visible': hasScrolled }">
      <GalleryContainer />
    </main>
    <SideMenu :sections="sections" :class="{ 'visible': hasScrolled }" />
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

    // Track if user has scrolled
    const hasScrolled = ref(false);

    // Get the public path for assets
    const publicPath = process.env.BASE_URL || '/';

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

      // Update hasScrolled based on scroll position
      // Consider the user has scrolled if they've moved more than 100px down
      hasScrolled.value = window.scrollY > 100;

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
      sections,
      publicPath,
      hasScrolled
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
  overflow-x: hidden;
}

#app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: transparent; /* Changed to transparent to show body background */
  border-radius: 0;
}

.landing-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  transition: min-height 0.5s ease;
  padding-bottom: 20px; /* Add some padding at the bottom */
}

/* Adjust landing view for mobile */
@media (max-width: 768px) {
  .landing-view {
    justify-content: flex-start; /* Align to top on mobile */
    padding-top: 10vh; /* Add some padding at the top */
    min-height: 90vh; /* Slightly reduce height to ensure scroll indicator is visible */
  }
}

.landing-view.scrolled {
  min-height: auto;
}

h1 {
  color: #084052; /* Blue color from the poster */
  margin: 20px 0 0 0;
  font-family: 'Luckiest Guy', cursive;
  font-size: 2.2rem;
  letter-spacing: 1px;
}

/* Adjust title size and margin for mobile */
@media (max-width: 768px) {
  h1 {
    font-size: 1.8rem;
    margin: 10px 0 0 0; /* Reduced margin to move scroll indicator up */
    line-height: 1.2; /* Tighter line height for mobile */
  }
}

.highlight-pink {
  color: #E83182; /* Pink color from the poster */
}

.poster-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  transition: all 0.5s ease;
}

.poster-image {
  max-width: 100%;
  height: auto;
  max-height: 65vh; /* Reduced height to make room for scroll indicator */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: max-height 0.5s ease;
}

/* Adjust poster size for mobile devices */
@media (max-width: 768px) {
  .poster-image {
    max-height: 55vh; /* Even smaller on mobile to ensure scroll indicator is visible */
  }
}

.scrolled .poster-image {
  max-height: 300px; /* Reduced size after scrolling */
}

.scroll-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px; /* Reduced margin to move it up */
  opacity: 1;
  transition: opacity 0.5s ease;
  position: relative; /* Added for better positioning */
  z-index: 10; /* Ensure it's above other elements */
}

/* Adjust scroll indicator for mobile devices */
@media (max-width: 768px) {
  .scroll-indicator {
    margin-top: 5px; /* Even smaller margin on mobile */
    transform: scale(1.2); /* Make it slightly larger on mobile for better visibility */
  }
}

.scrolled .scroll-indicator {
  opacity: 0;
}

.scroll-indicator span {
  margin-bottom: 10px;
  font-size: 14px;
  color: #666;
}

.arrow-down {
  width: 20px;
  height: 20px;
  border-left: 2px solid #666;
  border-bottom: 2px solid #666;
  transform: rotate(-45deg);
  animation: bounce 2s infinite;
}

/* Make arrow more visible on mobile */
@media (max-width: 768px) {
  .arrow-down {
    width: 24px;
    height: 24px;
    border-left: 3px solid #666;
    border-bottom: 3px solid #666;
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0) rotate(-45deg);
  }
  40% {
    transform: translateY(10px) rotate(-45deg);
  }
  60% {
    transform: translateY(5px) rotate(-45deg);
  }
}

/* Enhanced bounce animation for mobile */
@media (max-width: 768px) {
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0) rotate(-45deg);
    }
    40% {
      transform: translateY(15px) rotate(-45deg); /* Increased bounce distance */
    }
    60% {
      transform: translateY(8px) rotate(-45deg); /* Increased bounce distance */
    }
  }

  .arrow-down {
    animation-duration: 1.5s; /* Slightly faster animation on mobile */
  }
}

main {
  opacity: 0;
  transition: opacity 0.5s ease;
}

main.visible {
  opacity: 1;
}

/* Side Menu styling */
.side-menu {
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none; /* Prevent interaction when hidden */
}

.side-menu.visible {
  opacity: 1;
  pointer-events: auto; /* Allow interaction when visible */
}
</style>
