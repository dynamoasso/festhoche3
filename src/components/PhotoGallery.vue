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
    const photos = [
      { src: 'gallery/marta/DSC05919.jpg', width: 3205, height: 4208, alt: 'Légende 1' },
      { src: 'gallery/marta/DSC05920.jpg', width: 5145, height: 3430, alt: 'Légende 2' },
      { src: 'gallery/marta/DSC05921.jpg', width: 3353, height: 5029, alt: 'Légende 3' },
      { src: 'gallery/marta/DSC05922.jpg', width: 3880, height: 5820, alt: 'Légende 4' },
      { src: 'gallery/marta/DSC05923.jpg', width: 4684, height: 3123, alt: 'Légende 5' },
      { src: 'gallery/marta/DSC05924.jpg', width: 4928, height: 3280, alt: 'Légende 6' },
      { src: 'gallery/marta/DSC05927.jpg', width: 4256, height: 2832, alt: 'Légende 7' },
      { src: 'gallery/marta/DSC05932.jpg', width: 4128, height: 2752, alt: 'Légende 8' },
      { src: 'gallery/marta/DSC05933.jpg', width: 3760, height: 2507, alt: 'Légende 9' },
      { src: 'gallery/marta/DSC05937jpg.jpg', width: 4672, height: 3115, alt: 'Légende 10' },
      { src: 'gallery/marta/DSC05938.jpg', width: 4160, height: 2773, alt: 'Légende 11' },
      { src: 'gallery/marta/DSC05940.jpg', width: 5344, height: 3563, alt: 'Légende 12' },
      { src: 'gallery/marta/DSC05943.jpg', width: 2656, height: 1771, alt: 'Légende 13' },
      { src: 'gallery/marta/DSC05945.jpg', width: 4032, height: 2688, alt: 'Légende 14' },
      { src: 'gallery/marta/DSC05946.jpg', width: 4928, height: 3285, alt: 'Légende 15' },
      { src: 'gallery/marta/DSC05958.jpg', width: 4608, height: 3072, alt: 'Légende 16' },
      { src: 'gallery/marta/DSC05959.jpg', width: 4256, height: 2837, alt: 'Légende 17' },
      { src: 'gallery/marta/DSC05960.jpg', width: 4992, height: 3328, alt: 'Légende 18' },
      { src: 'gallery/marta/DSC05961.jpg', width: 5472, height: 3648, alt: 'Légende 19' },
      { src: 'gallery/marta/DSC05962.jpg', width: 4896, height: 3264, alt: 'Légende 20' },
      { src: 'gallery/marta/DSC05968.jpg', width: 5696, height: 3797, alt: 'Légende 21' },
      { src: 'gallery/marta/DSC05969.jpg', width: 4576, height: 3051, alt: 'Légende 22' }
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
