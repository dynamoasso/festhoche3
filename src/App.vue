<template>
  <div id="app">
    <div class="landing-view" :class="{ 'scrolled': hasScrolled }">
      <div class="poster-container">
        <img :src="`${publicPath}Festhoche-affiche-2025.png`" alt="Affiche du Fest'Hoche" class="poster-image" />
      </div>
      <h1>La Galerie <span class="highlight-pink">PHOTOS</span> du Fest'Hoche <span class="highlight-yellow">#3</span></h1>
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
      { id: 'marta', title: 'Marta' },
      { id: 'banquet', title: 'Le grand banquet' },
      { id: 'ateliers', title: 'Les ateliers' }
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
      const banquetSection = document.getElementById('banquet');
      const ateliersSection = document.getElementById('ateliers');
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

      // Pink colors for ambiance section (using the pink from the title #E83182)
      const pinkR = 232; // High red component for pink
      const pinkG = 49;  // Low green component for pink
      const pinkB = 130; // Medium blue component for pink

      // Teal colors for banquet section (#009A9A)
      const greenR = 0;   // No red component for teal
      const greenG = 154; // Medium-high green component for teal
      const greenB = 154; // Medium-high blue component for teal

      // Lighter teal colors for ateliers section (lighter version of banquet color)
      const lightGreenR = 80;  // Higher red component for lighter teal
      const lightGreenG = 200; // Higher green component for lighter teal
      const lightGreenB = 200; // Higher blue component for lighter teal

      // Initialize with base gray colors
      r = baseR;
      g = baseG;
      b = baseB;

      // Variables to track if sections are visible
      let festhocheVisible = false;
      let festhocheVisibilityRatio = 0;
      let dvrVisible = false;
      let dvrVisibilityRatio = 0;
      let banquetVisible = false;
      let banquetVisibilityRatio = 0;
      let ateliersVisible = false;
      let ateliersVisibilityRatio = 0;

      // Check for ambiance section (festhoche)
      if (festhocheSection) {
        const festhocheRect = festhocheSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if ambiance section is visible or we're in its vicinity
        if (festhocheRect.top < windowHeight * 1.5 && festhocheRect.bottom > -windowHeight * 0.5) {
          // Calculate how centered the ambiance section is in the viewport
          // 1 when fully centered, 0 when just entering or leaving
          const visibleHeight = Math.min(festhocheRect.bottom, windowHeight) - Math.max(festhocheRect.top, 0);
          festhocheVisibilityRatio = Math.min(1, visibleHeight / Math.min(festhocheRect.height, windowHeight));

          // Enhance visibility ratio to create a smoother transition
          // This creates a bell curve effect that peaks when the section is centered
          if (festhocheRect.top <= 0 && festhocheRect.bottom >= windowHeight) {
            // Section fills the viewport - maximum effect
            festhocheVisibilityRatio = 1;
          } else if (festhocheRect.top > 0) {
            // Section is entering from the bottom - gradual increase
            festhocheVisibilityRatio = Math.pow(festhocheVisibilityRatio, 0.7);
          } else if (festhocheRect.bottom < windowHeight) {
            // Section is leaving from the top - gradual decrease
            festhocheVisibilityRatio = Math.pow(festhocheVisibilityRatio, 0.7);
          }

          festhocheVisible = festhocheVisibilityRatio > 0;
        }
      }

      // Check for DVR section (independent of festhoche section)
      if (dvrSection) {
        const dvrRect = dvrSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if DVR section is visible or we're in its vicinity
        if (dvrRect.top < windowHeight * 1.5 && dvrRect.bottom > -windowHeight * 0.5) {
          // Calculate how centered the DVR section is in the viewport
          // 1 when fully centered, 0 when just entering or leaving
          const visibleHeight = Math.min(dvrRect.bottom, windowHeight) - Math.max(dvrRect.top, 0);
          dvrVisibilityRatio = Math.min(1, visibleHeight / Math.min(dvrRect.height, windowHeight));

          // Enhance visibility ratio to create a smoother transition
          // This creates a bell curve effect that peaks when the section is centered
          if (dvrRect.top <= 0 && dvrRect.bottom >= windowHeight) {
            // Section fills the viewport - maximum effect
            dvrVisibilityRatio = 1;
          } else if (dvrRect.top > 0) {
            // Section is entering from the bottom - gradual increase
            dvrVisibilityRatio = Math.pow(dvrVisibilityRatio, 0.7);
          } else if (dvrRect.bottom < windowHeight) {
            // Section is leaving from the top - gradual decrease
            dvrVisibilityRatio = Math.pow(dvrVisibilityRatio, 0.7);
          }

          dvrVisible = dvrVisibilityRatio > 0;
        }
      }

      // Check for Banquet section (independent of other sections)
      if (banquetSection) {
        const banquetRect = banquetSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if Banquet section is visible or we're in its vicinity
        if (banquetRect.top < windowHeight * 1.5 && banquetRect.bottom > -windowHeight * 0.5) {
          // Calculate how centered the Banquet section is in the viewport
          // 1 when fully centered, 0 when just entering or leaving
          const visibleHeight = Math.min(banquetRect.bottom, windowHeight) - Math.max(banquetRect.top, 0);
          banquetVisibilityRatio = Math.min(1, visibleHeight / Math.min(banquetRect.height, windowHeight));

          // Enhance visibility ratio to create a smoother transition
          // This creates a bell curve effect that peaks when the section is centered
          if (banquetRect.top <= 0 && banquetRect.bottom >= windowHeight) {
            // Section fills the viewport - maximum effect
            banquetVisibilityRatio = 1;
          } else if (banquetRect.top > 0) {
            // Section is entering from the bottom - gradual increase
            banquetVisibilityRatio = Math.pow(banquetVisibilityRatio, 0.7);
          } else if (banquetRect.bottom < windowHeight) {
            // Section is leaving from the top - gradual decrease
            banquetVisibilityRatio = Math.pow(banquetVisibilityRatio, 0.7);
          }

          banquetVisible = banquetVisibilityRatio > 0;
        }
      }

      // Check for Ateliers section (independent of other sections)
      if (ateliersSection) {
        const ateliersRect = ateliersSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if Ateliers section is visible or we're in its vicinity
        if (ateliersRect.top < windowHeight * 1.5 && ateliersRect.bottom > -windowHeight * 0.5) {
          // Calculate how centered the Ateliers section is in the viewport
          // 1 when fully centered, 0 when just entering or leaving
          const visibleHeight = Math.min(ateliersRect.bottom, windowHeight) - Math.max(ateliersRect.top, 0);
          ateliersVisibilityRatio = Math.min(1, visibleHeight / Math.min(ateliersRect.height, windowHeight));

          // Enhance visibility ratio to create a smoother transition
          // This creates a bell curve effect that peaks when the section is centered
          if (ateliersRect.top <= 0 && ateliersRect.bottom >= windowHeight) {
            // Section fills the viewport - maximum effect
            ateliersVisibilityRatio = 1;
          } else if (ateliersRect.top > 0) {
            // Section is entering from the bottom - gradual increase
            ateliersVisibilityRatio = Math.pow(ateliersVisibilityRatio, 0.7);
          } else if (ateliersRect.bottom < windowHeight) {
            // Section is leaving from the top - gradual decrease
            ateliersVisibilityRatio = Math.pow(ateliersVisibilityRatio, 0.7);
          }

          ateliersVisible = ateliersVisibilityRatio > 0;
        }
      }

      // Apply colors based on visibility of sections
      if (ateliersVisible) {
        // Ateliers section is visible (takes priority)
        // Start with the banquet color and make it lighter
        r = Math.round(interpolate(greenR, lightGreenR, ateliersVisibilityRatio));
        g = Math.round(interpolate(greenG, lightGreenG, ateliersVisibilityRatio));
        b = Math.round(interpolate(greenB, lightGreenB, ateliersVisibilityRatio));
      } else if (banquetVisible) {
        // Banquet section is visible (takes priority after ateliers)
        r = Math.round(interpolate(baseR, greenR, banquetVisibilityRatio));
        g = Math.round(interpolate(baseG, greenG, banquetVisibilityRatio));
        b = Math.round(interpolate(baseB, greenB, banquetVisibilityRatio));
      } else if (festhocheVisible && dvrVisible) {
        // Both festhoche and dvr sections are visible, blend colors based on visibility ratios
        const totalRatio = festhocheVisibilityRatio + dvrVisibilityRatio;
        const festhocheWeight = festhocheVisibilityRatio / totalRatio;
        const dvrWeight = dvrVisibilityRatio / totalRatio;

        // Calculate blended colors
        const pinkContributionR = pinkR * festhocheWeight;
        const pinkContributionG = pinkG * festhocheWeight;
        const pinkContributionB = pinkB * festhocheWeight;

        const warmContributionR = warmR * dvrWeight;
        const warmContributionG = warmG * dvrWeight;
        const warmContributionB = warmB * dvrWeight;

        r = Math.round(pinkContributionR + warmContributionR);
        g = Math.round(pinkContributionG + warmContributionG);
        b = Math.round(pinkContributionB + warmContributionB);
      } else if (festhocheVisible) {
        // Only festhoche section is visible
        r = Math.round(interpolate(baseR, pinkR, festhocheVisibilityRatio));
        g = Math.round(interpolate(baseG, pinkG, festhocheVisibilityRatio));
        b = Math.round(interpolate(baseB, pinkB, festhocheVisibilityRatio));
      } else if (dvrVisible) {
        // Only DVR section is visible
        r = Math.round(interpolate(baseR, warmR, dvrVisibilityRatio));
        g = Math.round(interpolate(baseG, warmG, dvrVisibilityRatio));
        b = Math.round(interpolate(baseB, warmB, dvrVisibilityRatio));
      } else {
        // No special section is visible, use base colors
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

.highlight-yellow {
  color: #F59C36; /* Yellow color for #3 */
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
