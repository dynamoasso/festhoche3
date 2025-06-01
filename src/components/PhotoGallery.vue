<template>
  <div class="gallery" id="gallery" ref="gallery">
    <a 
      v-for="(photo, index) in photos" 
      :key="index"
      :href="photo.src" 
      :data-pswp-width="photo.width" 
      :data-pswp-height="photo.height" 
      target="_blank"
      :class="['photo-container', photo.width > photo.height ? 'horizontal' : 'vertical']"
    >
      <img :src="`${publicPath}${photo.src}`" :alt="photo.alt" />
<!--      <div class="photo-caption">{{ getFilename(photo.src) }}</div>-->
    </a>
  </div>
</template>

<script>
import { onMounted } from 'vue';

export default {
  name: 'PhotoGallery',
  setup() {
    const publicPath = process.env.BASE_URL || '/';

    // Function to extract filename from path
    const getFilename = (path) => {
      return path.split('/').pop();
    };

    // Use relative paths without leading slash to work with publicPath in vue.config.js
    // Using compressed images for better performance
    // Reordered to create a more pleasing arrangement of horizontal and vertical images
    const photos = [
      // Pattern: 2 horizontal, 1 vertical
      { src: 'gallery/marta-compressed/DSC05920.jpg', width: 1620, height: 1080, alt: 'Légende 2' },
      { src: 'gallery/marta-compressed/DSC05923.jpg', width: 1620, height: 1080, alt: 'Légende 5' },
      { src: 'gallery/marta-compressed/DSC05921.jpg', width: 720, height: 1080, alt: 'Légende 3' },

      // Pattern: 2 horizontal, 1 vertical
      { src: 'gallery/marta-compressed/DSC05924.jpg', width: 1620, height: 1080, alt: 'Légende 6' },
      { src: 'gallery/marta-compressed/DSC05927.jpg', width: 1620, height: 1080, alt: 'Légende 7' },
      { src: 'gallery/marta-compressed/DSC05922.jpg', width: 720, height: 1080, alt: 'Légende 4' },

      // Pattern: 1 vertical, 2 horizontal
      { src: 'gallery/marta-compressed/DSC05919.jpg', width: 1080, height: 1418, alt: 'Légende 1' },
      { src: 'gallery/marta-compressed/DSC05932.jpg', width: 1620, height: 1080, alt: 'Légende 8' },
      { src: 'gallery/marta-compressed/DSC05933.jpg', width: 1620, height: 1080, alt: 'Légende 9' },

      // Pattern: 2 horizontal, 1 vertical
      { src: 'gallery/marta-compressed/DSC05937jpg.jpg', width: 1620, height: 1080, alt: 'Légende 10' },
      { src: 'gallery/marta-compressed/DSC05938.jpg', width: 1620, height: 1080, alt: 'Légende 11' },
      { src: 'gallery/marta-compressed/DSC05945.jpg', width: 720, height: 1080, alt: 'Légende 14' },

      // Pattern: 2 horizontal, 1 vertical
      { src: 'gallery/marta-compressed/DSC05940.jpg', width: 1620, height: 1080, alt: 'Légende 12' },
      { src: 'gallery/marta-compressed/DSC05943.jpg', width: 1620, height: 1080, alt: 'Légende 13' },
      { src: 'gallery/marta-compressed/DSC05960.jpg', width: 720, height: 1080, alt: 'Légende 18' },

      // Pattern: 1 vertical, 2 horizontal
      { src: 'gallery/marta-compressed/DSC05961.jpg', width: 720, height: 1080, alt: 'Légende 19' },
      { src: 'gallery/marta-compressed/DSC05946.jpg', width: 1620, height: 1080, alt: 'Légende 15' },
      { src: 'gallery/marta-compressed/DSC05958.jpg', width: 1620, height: 1080, alt: 'Légende 16' },

      // Pattern: 2 horizontal, 1 vertical
      { src: 'gallery/marta-compressed/DSC05959.jpg', width: 1620, height: 1080, alt: 'Légende 17' },
      { src: 'gallery/marta-compressed/DSC05968.jpg', width: 1620, height: 1080, alt: 'Légende 21' },
      { src: 'gallery/marta-compressed/DSC05962.jpg', width: 720, height: 1080, alt: 'Légende 20' },

      // Last horizontal image
      { src: 'gallery/marta-compressed/DSC05969.jpg', width: 1620, height: 1080, alt: 'Légende 22' }
    ];

    onMounted(async () => {
      const PhotoSwipeLightbox = (await import('photoswipe/lightbox')).default;
      const lightbox = new PhotoSwipeLightbox({
        gallery: '#gallery',
        children: 'a',
        pswpModule: () => import('photoswipe')
      });
      lightbox.init();
    });

    return {
      publicPath,
      photos,
      getFilename
    };
  }
}
</script>

<style scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  gap: 10px;
  padding: 0;
  max-width: 1200px;
  margin: 0 auto;
  background-color: transparent;
}

.gallery a {
  overflow: hidden;
  border-radius: 4px;
  transition: all 0.3s ease;
  position: relative;
  padding: 0;
  margin: 0;
  border: 3px solid white;
}

.gallery a:hover {
  border: 3px solid #fff;
  transform: scale(1.02);
}

.gallery a img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}

.gallery a:hover img {
  /* Remove the transform scale effect to avoid conflicts with the container transform */
}

.photo-container {
  display: flex;
  flex-direction: column;
  position: relative;
}

.horizontal {
  grid-column: span 2;
}

.vertical {
  grid-column: span 1;
  /* Make vertical images taller to maintain proportions */
  grid-row: span 2;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .gallery {
    grid-template-columns: repeat(2, 1fr);
  }

  .horizontal {
    grid-column: span 2;
  }

  .vertical {
    grid-column: span 1;
  }
}

@media (max-width: 480px) {
  .gallery {
    grid-template-columns: 1fr;
  }

  .horizontal, .vertical {
    grid-column: span 1;
    grid-row: auto;
  }
}

.photo-caption {
  text-align: center;
  padding: 8px 5px;
  font-size: 0.9rem;
  color: #333;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 0 0 8px 8px;
  margin-top: -5px;
}
</style>
