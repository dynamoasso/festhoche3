<template>
  <div class="gallery-section">
    <h2 class="section-title">{{ title }}</h2>
    <div class="gallery" id="gallery-{{ sectionId }}" ref="gallery">
      <a 
        v-for="(photo, index) in photos" 
        :key="index"
        :href="photo.src" 
        :data-pswp-width="photo.width" 
        :data-pswp-height="photo.height" 
        target="_blank"
        :class="['photo-container', photo.width > photo.height ? 'horizontal' : 'vertical']"
        :style="getRandomOffset()"
      >
        <img :src="`${publicPath}${photo.src}`" :alt="photo.alt" />
      </a>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue';

export default {
  name: 'GallerySection',
  props: {
    title: {
      type: String,
      required: true
    },
    sectionId: {
      type: String,
      required: true
    },
    photoDirectory: {
      type: String,
      required: true
    },
    photos: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const publicPath = process.env.BASE_URL || '/';

    // Function to generate random offset for deconstructed effect
    const getRandomOffset = () => {
      // Generate small random values for translate only (no rotation)
      const translateX = (Math.random() * 10 - 5) + 'px'; // -5px to 5px
      const translateY = (Math.random() * 10 - 5) + 'px'; // -5px to 5px

      return {
        transform: `translate(${translateX}, ${translateY})`,
        zIndex: Math.floor(Math.random() * 10) // Random z-index for layering effect
      };
    };

    onMounted(async () => {
      const PhotoSwipeLightbox = (await import('photoswipe/lightbox')).default;
      const lightbox = new PhotoSwipeLightbox({
        gallery: `#gallery-${props.sectionId}`,
        children: 'a',
        pswpModule: () => import('photoswipe')
      });
      lightbox.init();
    });

    return {
      publicPath,
      getRandomOffset
    };
  }
}
</script>

<style scoped>
.gallery-section {
  margin-bottom: 50px;
}

.section-title {
  color: #ffffff;
  margin-bottom: 20px;
  font-weight: 300;
  letter-spacing: 1px;
  text-align: center;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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
  transition: transform 0.3s ease; /* Smooth transition for hover effects */
  will-change: transform; /* Optimize for animations */
}

.horizontal {
  grid-column: span 2;
}

.vertical {
  grid-column: span 1;
  /* Make vertical images taller to maintain proportions */
  grid-row: span 2;
}

/* Center horizontal images that are alone on their line */
.horizontal:last-child:nth-child(4n-1),
.horizontal:last-child:nth-child(4n-2) {
  grid-column: 2 / span 2; /* Center in the middle 2 columns */
  justify-self: center;
}

/* Responsive adjustments */
@media (max-width: 992px) {
  .gallery {
    grid-template-columns: repeat(3, 1fr);
  }

  .horizontal {
    grid-column: span 2;
  }

  .vertical {
    grid-column: span 1;
  }

  /* Center horizontal images that are alone on their line in 3-column grid */
  .horizontal:last-child:nth-child(3n-1) {
    grid-column: 1 / span 2; /* Center in the first 2 columns */
    justify-self: center;
  }
}

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

  /* In 2-column grid, horizontal images already span the full width, so no special centering needed */
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
</style>