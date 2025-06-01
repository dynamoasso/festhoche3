<template>
  <div class="gallery" id="gallery" ref="gallery">
    <a 
      v-for="(photo, index) in photos" 
      :key="index"
      :href="photo.src" 
      :data-pswp-width="photo.width" 
      :data-pswp-height="photo.height" 
      target="_blank"
    >
      <img :src="`${publicPath}${photo.src}`" :alt="photo.alt" />
    </a>
  </div>
</template>

<script>
import { onMounted } from 'vue';

export default {
  name: 'PhotoGallery',
  setup() {
    const publicPath = process.env.BASE_URL || '/';

    // Use relative paths without leading slash to work with publicPath in vue.config.js
    // Using compressed images for better performance
    const photos = [
      { src: 'gallery/marta-compressed/DSC05919.jpg', width: 1080, height: 1418, alt: 'Légende 1' },
      { src: 'gallery/marta-compressed/DSC05920.jpg', width: 1620, height: 1080, alt: 'Légende 2' },
      { src: 'gallery/marta-compressed/DSC05921.jpg', width: 720, height: 1080, alt: 'Légende 3' },
      { src: 'gallery/marta-compressed/DSC05922.jpg', width: 720, height: 1080, alt: 'Légende 4' },
      { src: 'gallery/marta-compressed/DSC05923.jpg', width: 1620, height: 1080, alt: 'Légende 5' },
      { src: 'gallery/marta-compressed/DSC05924.jpg', width: 1620, height: 1080, alt: 'Légende 6' },
      { src: 'gallery/marta-compressed/DSC05927.jpg', width: 1620, height: 1080, alt: 'Légende 7' },
      { src: 'gallery/marta-compressed/DSC05932.jpg', width: 1620, height: 1080, alt: 'Légende 8' },
      { src: 'gallery/marta-compressed/DSC05933.jpg', width: 1620, height: 1080, alt: 'Légende 9' },
      { src: 'gallery/marta-compressed/DSC05937jpg.jpg', width: 1620, height: 1080, alt: 'Légende 10' },
      { src: 'gallery/marta-compressed/DSC05938.jpg', width: 1620, height: 1080, alt: 'Légende 11' },
      { src: 'gallery/marta-compressed/DSC05940.jpg', width: 1620, height: 1080, alt: 'Légende 12' },
      { src: 'gallery/marta-compressed/DSC05943.jpg', width: 1620, height: 1080, alt: 'Légende 13' },
      { src: 'gallery/marta-compressed/DSC05945.jpg', width: 1620, height: 1080, alt: 'Légende 14' },
      { src: 'gallery/marta-compressed/DSC05946.jpg', width: 1620, height: 1080, alt: 'Légende 15' },
      { src: 'gallery/marta-compressed/DSC05958.jpg', width: 1620, height: 1080, alt: 'Légende 16' },
      { src: 'gallery/marta-compressed/DSC05959.jpg', width: 1620, height: 1080, alt: 'Légende 17' },
      { src: 'gallery/marta-compressed/DSC05960.jpg', width: 1620, height: 1080, alt: 'Légende 18' },
      { src: 'gallery/marta-compressed/DSC05961.jpg', width: 1620, height: 1080, alt: 'Légende 19' },
      { src: 'gallery/marta-compressed/DSC05962.jpg', width: 1620, height: 1080, alt: 'Légende 20' },
      { src: 'gallery/marta-compressed/DSC05968.jpg', width: 1620, height: 1080, alt: 'Légende 21' },
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
      photos
    };
  }
}
</script>

<style scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
  padding: 20px;
}

.gallery a img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s ease;
}

.gallery a img:hover {
  transform: scale(1.03);
}
</style>
