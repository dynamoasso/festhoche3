<template>
  <div class="gallery-container" id="gallery-container">
    <!-- Ambiance Section -->
    <GallerySection 
      v-if="festhochePhotos.length > 0"
      title="L'ambiance"
      sectionId="festhoche"
      photoDirectory="gallery/alicja/festhoche3-compressed"
      :photos="festhochePhotos"
      :initPhotoSwipe="false"
    />

    <!-- DVR Section -->
    <GallerySection
      v-if="dvrPhotos.length > 0"
      title="DVR"
      sectionId="dvr"
      photoDirectory="gallery/alicja/dvr-compressed"
      :photos="dvrPhotos"
      :initPhotoSwipe="false"
    />

    <!-- Danse Section -->
    <GallerySection
      v-if="dansePhotos.length > 0"
      title="L'Atelier du Contre Temps"
      sectionId="danse"
      photoDirectory="gallery/alicja/danse-compressed"
      :photos="dansePhotos"
      :initPhotoSwipe="false"
    />

    <!-- Maevol Section -->
    <GallerySection
        title="Maevol"
        sectionId="maevol"
        photoDirectory="gallery/alicja/maevol-compressed"
        :photos="maevolPhotos"
        :initPhotoSwipe="false"
    />

    <!-- Elye Section -->
    <GallerySection
        title="Elye & The Hydra"
        sectionId="elye"
        photoDirectory="gallery/alicja/elye-compressed"
        :photos="elyePhotos"
        :initPhotoSwipe="false"
    />

    <!-- Marta Concert Section -->
    <GallerySection 
      title="Marta"
      sectionId="marta"
      photoDirectory="gallery/alicja/marta-compressed"
      :photos="martaPhotos"
      :initPhotoSwipe="false"
    />
  </div>
</template>

<script>
import GallerySection from './GallerySection.vue';
import { onMounted } from 'vue';

export default {
  name: 'GalleryContainer',
  components: {
    GallerySection
  },
  setup() {
    const publicPath = process.env.BASE_URL || '/';
    const alicja = 'Alicja Pakulska';
    const johann = 'Johann Aubin';
    // Photos for the Marta concert section
    // Using the existing photos from the original PhotoGallery component
    const martaPhotos = [
      // Pattern: 2 horizontal, 1 vertical
      { src: 'gallery/alicja/marta-compressed/DSC05920.jpg', width: 1620, height: 1080, alt: 'Légende 2', author: alicja },
      { src: 'gallery/alicja/marta-compressed/DSC05923.jpg', width: 1620, height: 1080, alt: 'Légende 5', author: alicja },
      { src: 'gallery/alicja/marta-compressed/DSC05921.jpg', width: 720, height: 1080, alt: 'Légende 3', author: alicja },

      // Pattern: 2 horizontal, 1 vertical
      { src: 'gallery/alicja/marta-compressed/DSC05924.jpg', width: 1620, height: 1080, alt: 'Légende 6', author: alicja },
      { src: 'gallery/alicja/marta-compressed/DSC05927.jpg', width: 1620, height: 1080, alt: 'Légende 7', author: alicja },
      { src: 'gallery/alicja/marta-compressed/DSC05922.jpg', width: 720, height: 1080, alt: 'Légende 4', author: alicja },

      // Pattern: 1 vertical, 2 horizontal
      { src: 'gallery/alicja/marta-compressed/DSC05919.jpg', width: 720, height: 1080, alt: 'Légende 1', author: alicja },
      { src: 'gallery/alicja/marta-compressed/DSC05932.jpg', width: 1620, height: 1080, alt: 'Légende 8', author: alicja },
      { src: 'gallery/alicja/marta-compressed/DSC05933.jpg', width: 1620, height: 1080, alt: 'Légende 9', author: alicja },

      // Pattern: 2 horizontal, 1 vertical
      { src: 'gallery/alicja/marta-compressed/DSC05937jpg.jpg', width: 1620, height: 1080, alt: 'Légende 10', author: alicja },
      { src: 'gallery/alicja/marta-compressed/DSC05938.jpg', width: 1620, height: 1080, alt: 'Légende 11', author: alicja },
      { src: 'gallery/alicja/marta-compressed/DSC05945.jpg', width: 720, height: 1080, alt: 'Légende 14', author: alicja },

      // Pattern: 2 horizontal, 1 vertical
      { src: 'gallery/alicja/marta-compressed/DSC05940.jpg', width: 1620, height: 1080, alt: 'Légende 12', author: alicja },
      { src: 'gallery/alicja/marta-compressed/DSC05943.jpg', width: 1620, height: 1080, alt: 'Légende 13', author: alicja },
      { src: 'gallery/alicja/marta-compressed/DSC05960.jpg', width: 720, height: 1080, alt: 'Légende 18', author: alicja },

      // Pattern: 1 vertical, 2 horizontal
      { src: 'gallery/alicja/marta-compressed/DSC05961.jpg', width: 720, height: 1080, alt: 'Légende 19', author: alicja },
      { src: 'gallery/alicja/marta-compressed/DSC05946.jpg', width: 1620, height: 1080, alt: 'Légende 15', author: alicja },
      { src: 'gallery/alicja/marta-compressed/DSC05958.jpg', width: 1620, height: 1080, alt: 'Légende 16', author: alicja },

      // Pattern: 2 horizontal, 1 vertical
      { src: 'gallery/alicja/marta-compressed/DSC05959.jpg', width: 1620, height: 1080, alt: 'Légende 17', author: alicja },
      { src: 'gallery/alicja/marta-compressed/DSC05968.jpg', width: 1620, height: 1080, alt: 'Légende 21', author: alicja },
      { src: 'gallery/alicja/marta-compressed/DSC05962.jpg', width: 720, height: 1080, alt: 'Légende 20', author: alicja },

      // Last horizontal image
      { src: 'gallery/alicja/marta-compressed/DSC05969.jpg', width: 1620, height: 1080, alt: 'Légende 22', author: alicja }
    ];

    // Photos for the ambiance section
    // Organized in patterns to create a visually pleasing layout
    const festhochePhotos = [
      { src: 'gallery/alicja/festhoche3-compressed/DSC06053.jpg', width: 1620, height: 1080, alt: 'Ambiance Fest\'Hoche #3', author: alicja },

      // Pattern: 1 vertical, 1 horizontal, 1 vertical
      { src: 'gallery/alicja/festhoche3-compressed/DSC05497.jpg', width: 720, height: 1080, alt: 'Ambiance Fest\'Hoche #3', author: alicja },
      { src: 'gallery/alicja/festhoche3-compressed/DSC05498.jpg', width: 720, height: 1080, alt: 'Ambiance Fest\'Hoche #3', author: alicja },
      { src: 'gallery/alicja/festhoche3-compressed/DSC05514.jpg', width: 720, height: 1080, alt: 'Ambiance Fest\'Hoche #3', author: alicja },

      // Pattern: 2 horizontal, 1 vertical
      { src: 'gallery/alicja/festhoche3-compressed/DSC05499.jpg', width: 720, height: 1080, alt: 'Ambiance Fest\'Hoche #3', author: alicja },
      { src: 'gallery/alicja/festhoche3-compressed/DSC05502.jpg', width: 720, height: 1080, alt: 'Ambiance Fest\'Hoche #3', author: alicja },
      { src: 'gallery/alicja/festhoche3-compressed/DSC05515.jpg', width: 720, height: 1080, alt: 'Ambiance Fest\'Hoche #3', author: alicja },

      // Pattern: 1 vertical, 2 horizontal
      { src: 'gallery/alicja/festhoche3-compressed/DSC05566.jpg', width: 1620, height: 1080, alt: 'Ambiance Fest\'Hoche #3', author: alicja },
      { src: 'gallery/alicja/festhoche3-compressed/DSC05511.jpg', width: 720, height: 1080, alt: 'Ambiance Fest\'Hoche #3', author: alicja },
      { src: 'gallery/alicja/festhoche3-compressed/DSC05526.jpg', width: 1620, height: 1080, alt: 'Ambiance Fest\'Hoche #3', author: alicja },

      // Pattern: 2 horizontal, 1 vertical
      { src: 'gallery/alicja/festhoche3-compressed/DSC05534.jpg', width: 1620, height: 1080, alt: 'Ambiance Fest\'Hoche #3', author: alicja },
      { src: 'gallery/alicja/festhoche3-compressed/DSC05564.jpg', width: 1620, height: 1080, alt: 'Ambiance Fest\'Hoche #3', author: alicja },
      { src: 'gallery/alicja/festhoche3-compressed/DSC05567.jpg', width: 1620, height: 1080, alt: 'Ambiance Fest\'Hoche #3', author: alicja },

      // Pattern: 2 horizontal, 1 vertical
      { src: 'gallery/alicja/festhoche3-compressed/DSC05570.jpg', width: 1620, height: 1080, alt: 'Ambiance Fest\'Hoche #3', author: alicja },
      { src: 'gallery/alicja/festhoche3-compressed/DSC05574.jpg', width: 720, height: 1080, alt: 'Ambiance Fest\'Hoche #3', author: alicja },

      // Pattern: 2 horizontal
      { src: 'gallery/alicja/festhoche3-compressed/DSC05588.jpg', width: 720, height: 1080, alt: 'Ambiance Fest\'Hoche #3', author: alicja },

      // Pattern: 2 horizontal, 1 vertical
      { src: 'gallery/alicja/festhoche3-compressed/DSC05659.jpg', width: 720, height: 1080, alt: 'Ambiance Fest\'Hoche #3', author: alicja },
      { src: 'gallery/alicja/festhoche3-compressed/DSC06027.jpg', width: 1620, height: 1080, alt: 'Ambiance Fest\'Hoche #3', author: alicja },

      // Pattern: 2 horizontal, 1 vertical
      { src: 'gallery/alicja/festhoche3-compressed/DSC06052.jpg', width: 720, height: 1080, alt: 'Ambiance Fest\'Hoche #3', author: alicja },
      { src: 'gallery/alicja/festhoche3-compressed/DSC05702.jpg', width: 1620, height: 1080, alt: 'Ambiance Fest\'Hoche #3', author: alicja },
      { src: 'gallery/alicja/festhoche3-compressed/DSC05798.jpg', width: 1620, height: 1080, alt: 'Ambiance Fest\'Hoche #3', author: alicja },

      // Pattern: 1 vertical, 2 horizontal
      { src: 'gallery/alicja/festhoche3-compressed/DSC05816.jpg', width: 1620, height: 1080, alt: 'Ambiance Fest\'Hoche #3', author: alicja },
      { src: 'gallery/alicja/festhoche3-compressed/DSC05839.jpg', width: 720, height: 1080, alt: 'Ambiance Fest\'Hoche #3', author: alicja },

      // Pattern: 1 horizontal, 1 vertical
      { src: 'gallery/alicja/festhoche3-compressed/DSC05845.jpg', width: 1620, height: 1080, alt: 'Ambiance Fest\'Hoche #3', author: alicja },
      { src: 'gallery/alicja/festhoche3-compressed/DSC06054.jpg', width: 1620, height: 1080, alt: 'Ambiance Fest\'Hoche #3', author: alicja },

      // Pattern: 2 horizontal, 1 vertical
      { src: 'gallery/alicja/festhoche3-compressed/DSC05856.jpg', width: 720, height: 1080, alt: 'Ambiance Fest\'Hoche #3', author: alicja },
      { src: 'gallery/alicja/festhoche3-compressed/DSC05860.jpg', width: 1620, height: 1080, alt: 'Ambiance Fest\'Hoche #3', author: alicja },
      { src: 'gallery/alicja/festhoche3-compressed/DSC06066.jpg', width: 720, height: 1080, alt: 'Ambiance Fest\'Hoche #3', author: alicja },

      // Pattern: 1 vertical, 2 horizontal
      { src: 'gallery/alicja/festhoche3-compressed/DSC06067.jpg', width: 720, height: 1080, alt: 'Ambiance Fest\'Hoche #3', author: alicja },
      { src: 'gallery/alicja/festhoche3-compressed/DSC05918.jpg', width: 720, height: 1080, alt: 'Ambiance Fest\'Hoche #3', author: alicja },

      // Pattern: 1 vertical
      { src: 'gallery/alicja/festhoche3-compressed/DSC06070.jpg', width: 720, height: 1080, alt: 'Ambiance Fest\'Hoche #3', author: alicja },

      // Pattern: 2 horizontal, 1 vertical
      { src: 'gallery/alicja/festhoche3-compressed/DSC05947.jpg', width: 1620, height: 1080, alt: 'Ambiance Fest\'Hoche #3', author: alicja },
      { src: 'gallery/alicja/festhoche3-compressed/DSC05979.jpg', width: 720, height: 1080, alt: 'Ambiance Fest\'Hoche #3', author: alicja },
      { src: 'gallery/alicja/festhoche3-compressed/DSC06082.jpg', width: 1620, height: 1080, alt: 'Ambiance Fest\'Hoche #3', author: alicja },

      // Pattern: 1 vertical, 2 horizontal
      { src: 'gallery/alicja/festhoche3-compressed/DSC06002.jpg', width: 1620, height: 1080, alt: 'Ambiance Fest\'Hoche #3', author: alicja },
      { src: 'gallery/alicja/festhoche3-compressed/DSC06144.jpg', width: 1620, height: 1080, alt: 'Ambiance Fest\'Hoche #3', author: alicja },

    ];

    // Initialize PhotoSwipe for all galleries
    onMounted(async () => {
      const PhotoSwipeLightbox = (await import('photoswipe/lightbox')).default;

      // Create a single PhotoSwipe instance for all galleries
      const lightbox = new PhotoSwipeLightbox({
        gallery: '#gallery-container',
        children: '.gallery a', // Target only the photo links in the galleries
        pswpModule: () => import('photoswipe'),
        loop: true, // Enable looping through photos
        showHideAnimationType: 'fade', // Use fade animation for showing/hiding
        closeOnVerticalDrag: true, // Close on vertical drag
        wheelToZoom: true, // Enable zooming with mouse wheel
        initialZoomLevel: 'fit', // Fit image in the viewport
        secondaryZoomLevel: 2, // Zoom level when double-clicked
        maxZoomLevel: 4, // Maximum zoom level
        bgOpacity: 1, // Fully opaque background to hide photos behind
        backgroundColor: '#000000' // Black background
      });

      // Initialize PhotoSwipe
      lightbox.init();
    });

    // Photos for the Maevol section
    const maevolPhotos = [
      // Pattern: 2 horizontal, 1 vertical
      { src: 'gallery/alicja/maevol-compressed/DSC05790.jpg', width: 720, height: 1080, alt: 'Maevol', author: alicja },
      { src: 'gallery/alicja/maevol-compressed/DSC05796.jpg', width: 720, height: 1080, alt: 'Maevol', author: alicja },
      { src: 'gallery/alicja/maevol-compressed/DSC05804.jpg', width: 1620, height: 1080, alt: 'Maevol', author: alicja },

      // Pattern: 1 vertical, 2 horizontal
      { src: 'gallery/alicja/maevol-compressed/DSC05805.jpg', width: 720, height: 1080, alt: 'Maevol', author: alicja },
      { src: 'gallery/alicja/maevol-compressed/DSC05812.jpg', width: 1620, height: 1080, alt: 'Maevol', author: alicja },
      { src: 'gallery/alicja/maevol-compressed/DSC05815.jpg', width: 720, height: 1080, alt: 'Maevol', author: alicja },

      // Pattern: 2 horizontal, 1 vertical
      { src: 'gallery/alicja/maevol-compressed/DSC05819.jpg', width: 1620, height: 1080, alt: 'Maevol', author: alicja },
      { src: 'gallery/alicja/maevol-compressed/DSC05829.jpg', width: 1620, height: 1080, alt: 'Maevol', author: alicja },

      // Pattern: 1 vertical, 2 horizontal
      { src: 'gallery/alicja/maevol-compressed/DSC05835.jpg', width: 1620, height: 1080, alt: 'Maevol', author: alicja },

      // Last horizontal image
      { src: 'gallery/alicja/maevol-compressed/DSC05844.jpg', width: 720, height: 1080, alt: 'Maevol', author: alicja }
    ];

    // Photos for the Elye section
    const elyePhotos = [
      // Pattern: 2 horizontal, 1 vertical
      { src: 'gallery/alicja/elye-compressed/DSC05848.jpg', width: 720, height: 1080, alt: 'Elye', author: alicja },
      { src: 'gallery/alicja/elye-compressed/DSC05849.jpg', width: 1620, height: 1080, alt: 'Elye', author: alicja },

      // Pattern: 1 vertical, 2 horizontal
      { src: 'gallery/alicja/elye-compressed/DSC05869.jpg', width: 720, height: 1080, alt: 'Elye', author: alicja },
      { src: 'gallery/alicja/elye-compressed/DSC05877.jpg', width: 720, height: 1080, alt: 'Elye', author: alicja },

      // Pattern: 2 horizontal, 1 vertical
      { src: 'gallery/alicja/elye-compressed/DSC05878.jpg', width: 720, height: 1080, alt: 'Elye', author: alicja },
      { src: 'gallery/alicja/elye-compressed/DSC05887.jpg', width: 1620, height: 1080, alt: 'Elye', author: alicja },
      { src: 'gallery/alicja/elye-compressed/DSC05894.jpg', width: 720, height: 1080, alt: 'Elye', author: alicja },

      // Pattern: 1 vertical, 2 horizontal
      { src: 'gallery/alicja/elye-compressed/DSC05897.jpg', width: 720, height: 1080, alt: 'Elye', author: alicja },
      { src: 'gallery/alicja/elye-compressed/DSC05898.jpg', width: 1620, height: 1080, alt: 'Elye', author: alicja },
      { src: 'gallery/alicja/elye-compressed/DSC05900.jpg', width: 720, height: 1080, alt: 'Elye', author: alicja },

      // Pattern: 2 horizontal, 1 vertical
      { src: 'gallery/alicja/elye-compressed/DSC05901.jpg', width: 720, height: 1080, alt: 'Elye', author: alicja },
      { src: 'gallery/alicja/elye-compressed/DSC05910.jpg', width: 1620, height: 1080, alt: 'Elye', author: alicja },

      // Pattern: 1 vertical, 2 horizontal
      { src: 'gallery/alicja/elye-compressed/DSC05914.jpg', width: 1620, height: 1080, alt: 'Elye', author: alicja },
      { src: 'gallery/alicja/elye-compressed/DSC05916.jpg', width: 720, height: 1080, alt: 'Elye', author: alicja }
    ];

    // Photos for the DVR section
    const dvrPhotos = [
      // Pattern: 2 horizontal, 1 vertical
      { src: 'gallery/alicja/dvr-compressed/DSC05493.jpg', width: 1620, height: 1080, alt: 'DVR', author: alicja },
      { src: 'gallery/alicja/dvr-compressed/DSC05494.jpg', width: 720, height: 1080, alt: 'DVR', author: alicja },
      { src: 'gallery/alicja/dvr-compressed/DSC05503.jpg', width: 720, height: 1080, alt: 'DVR', author: alicja },

      // Pattern: 2 horizontal, 1 vertical
      { src: 'gallery/alicja/dvr-compressed/DSC05504.jpg', width: 720, height: 1080, alt: 'DVR', author: alicja },
      { src: 'gallery/alicja/dvr-compressed/DSC05505.jpg', width: 720, height: 1080, alt: 'DVR', author: alicja },
      { src: 'gallery/alicja/dvr-compressed/DSC05531.jpg', width: 720, height: 1080, alt: 'DVR', author: alicja },

      // Pattern: 1 vertical, 2 horizontal
      { src: 'gallery/alicja/dvr-compressed/DSC05535.jpg', width: 1620, height: 1080, alt: 'DVR', author: alicja },
      { src: 'gallery/alicja/dvr-compressed/DSC05538.jpg', width: 720, height: 1080, alt: 'DVR', author: alicja },
      { src: 'gallery/alicja/dvr-compressed/DSC05539.jpg', width: 1620, height: 1080, alt: 'DVR', author: alicja },

      // Pattern: 2 horizontal, 1 vertical
      { src: 'gallery/alicja/dvr-compressed/DSC05541.jpg', width: 1620, height: 1080, alt: 'DVR', author: alicja },
      { src: 'gallery/alicja/dvr-compressed/DSC05545.jpg', width: 1620, height: 1080, alt: 'DVR', author: alicja },
      { src: 'gallery/alicja/dvr-compressed/DSC05551.jpg', width: 720, height: 1080, alt: 'DVR', author: alicja },

      // Pattern: 2 horizontal, 1 vertical
      { src: 'gallery/alicja/dvr-compressed/DSC05552.jpg', width: 1620, height: 1080, alt: 'DVR', author: alicja },
      { src: 'gallery/alicja/dvr-compressed/DSC05554.jpg', width: 1620, height: 1080, alt: 'DVR', author: alicja },
      { src: 'gallery/alicja/dvr-compressed/DSC05555.jpg', width: 720, height: 1080, alt: 'DVR', author: alicja },

      // Pattern: 1 vertical, 2 horizontal
      { src: 'gallery/alicja/dvr-compressed/DSC05557.jpg', width: 1620, height: 1080, alt: 'DVR', author: alicja },
      { src: 'gallery/alicja/dvr-compressed/DSC05558.jpg', width: 1620, height: 1080, alt: 'DVR', author: alicja },
      { src: 'gallery/alicja/dvr-compressed/DSC05559.jpg', width: 1620, height: 1080, alt: 'DVR', author: alicja },

      // Pattern: 2 horizontal, 1 vertical
      { src: 'gallery/alicja/dvr-compressed/DSC05560.jpg', width: 720, height: 1080, alt: 'DVR', author: alicja },
      { src: 'gallery/alicja/dvr-compressed/DSC05562.jpg', width: 1620, height: 1080, alt: 'DVR', author: alicja },
      { src: 'gallery/alicja/dvr-compressed/DSC05593.jpg', width: 720, height: 1080, alt: 'DVR', author: alicja },

      // Last horizontal image
      { src: 'gallery/alicja/dvr-compressed/DSC05594.jpg', width: 1620, height: 1080, alt: 'DVR', author: alicja },

      // Pattern: 2 horizontal, 1 vertical
      { src: 'gallery/johann/dvr-compressed/02.JPG', width: 1620, height: 1080, alt: 'DVR', author: johann },
      { src: 'gallery/johann/dvr-compressed/03.JPG', width: 1620, height: 1080, alt: 'DVR', author: johann },
      { src: 'gallery/johann/dvr-compressed/05.JPG', width: 1620, height: 1080, alt: 'DVR', author: johann },

      // Pattern: 1 vertical, 2 horizontal
      { src: 'gallery/johann/dvr-compressed/07 .JPG', width: 1620, height: 1080, alt: 'DVR', author: johann },
      { src: 'gallery/johann/dvr-compressed/08 .JPG', width: 1620, height: 1080, alt: 'DVR', author: johann },
      { src: 'gallery/johann/dvr-compressed/09 .JPG', width: 1620, height: 1080, alt: 'DVR', author: johann },

      // Pattern: 2 horizontal, 1 vertical
      { src: 'gallery/johann/dvr-compressed/10 .JPG', width: 1620, height: 1080, alt: 'DVR', author: johann },
      { src: 'gallery/johann/dvr-compressed/11 .JPG', width: 1620, height: 1080, alt: 'DVR', author: johann },
      { src: 'gallery/johann/dvr-compressed/12 .JPG', width: 1620, height: 1080, alt: 'DVR', author: johann },

      // Pattern: 1 vertical, 2 horizontal
      { src: 'gallery/johann/dvr-compressed/13 .JPG', width: 1620, height: 1080, alt: 'DVR', author: johann },
      { src: 'gallery/johann/dvr-compressed/14 .JPG', width: 1620, height: 1080, alt: 'DVR', author: johann },
      { src: 'gallery/johann/dvr-compressed/15 .JPG', width: 1620, height: 1080, alt: 'DVR', author: johann },

      // Pattern: 2 horizontal, 1 vertical
      { src: 'gallery/johann/dvr-compressed/16 .JPG', width: 1620, height: 1080, alt: 'DVR', author: johann },
      { src: 'gallery/johann/dvr-compressed/17 .JPG', width: 1620, height: 1080, alt: 'DVR', author: johann },
      { src: 'gallery/johann/dvr-compressed/18 .JPG', width: 1620, height: 1080, alt: 'DVR', author: johann },

      // Pattern: 1 vertical, 2 horizontal
      { src: 'gallery/johann/dvr-compressed/19 .JPG', width: 1620, height: 1080, alt: 'DVR', author: johann },
      { src: 'gallery/johann/dvr-compressed/20 .JPG', width: 1620, height: 1080, alt: 'DVR', author: johann },
      { src: 'gallery/johann/dvr-compressed/21 .JPG', width: 1620, height: 1080, alt: 'DVR', author: johann },

      // Pattern: 2 horizontal, 1 vertical
      { src: 'gallery/johann/dvr-compressed/22 .JPG', width: 1620, height: 1080, alt: 'DVR', author: johann },
      { src: 'gallery/johann/dvr-compressed/23  copie.JPG', width: 1620, height: 1080, alt: 'DVR', author: johann },
      { src: 'gallery/johann/dvr-compressed/24 .JPG', width: 1620, height: 1080, alt: 'DVR', author: johann },

      // Pattern: 1 vertical, 2 horizontal
      { src: 'gallery/johann/dvr-compressed/25 .JPG', width: 1620, height: 1080, alt: 'DVR', author: johann },
      { src: 'gallery/johann/dvr-compressed/26 .JPG', width: 1620, height: 1080, alt: 'DVR', author: johann },
      { src: 'gallery/johann/dvr-compressed/27  .JPG', width: 1620, height: 1080, alt: 'DVR', author: johann },

      // Pattern: 2 horizontal, 1 vertical
      { src: 'gallery/johann/dvr-compressed/28 .JPG', width: 1620, height: 1080, alt: 'DVR', author: johann },
      { src: 'gallery/johann/dvr-compressed/29.JPG', width: 1620, height: 1080, alt: 'DVR', author: johann },
      { src: 'gallery/johann/dvr-compressed/30 .JPG', width: 1620, height: 1080, alt: 'DVR', author: johann },

      // Last horizontal images
      { src: 'gallery/johann/dvr-compressed/31 .JPG', width: 1620, height: 1080, alt: 'DVR', author: johann },
      { src: 'gallery/johann/dvr-compressed/32.JPG', width: 1620, height: 1080, alt: 'DVR', author: johann },
      { src: 'gallery/johann/dvr-compressed/33.JPG', width: 720, height: 1080, alt: 'DVR', author: johann },
      { src: 'gallery/johann/dvr-compressed/34.JPG', width: 1620, height: 1080, alt: 'DVR', author: johann }
    ];

    // Photos for the Danse section
    const dansePhotos = [
      // Pattern: 2 horizontal, 1 vertical
      { src: 'gallery/alicja/danse-compressed/DSC05705.jpg', width: 1620, height: 1080, alt: 'Danse', author: alicja },
      { src: 'gallery/alicja/danse-compressed/DSC05706.jpg', width: 1620, height: 1080, alt: 'Danse', author: alicja },
      { src: 'gallery/alicja/danse-compressed/DSC05707.jpg', width: 1620, height: 1080, alt: 'Danse', author: alicja },

      // Pattern: 1 vertical, 2 horizontal
      { src: 'gallery/alicja/danse-compressed/DSC05708.jpg', width: 720, height: 1080, alt: 'Danse', author: alicja },
      { src: 'gallery/alicja/danse-compressed/DSC05709.jpg', width: 720, height: 1080, alt: 'Danse', author: alicja },
      { src: 'gallery/alicja/danse-compressed/DSC05711.jpg', width: 1620, height: 1080, alt: 'Danse', author: alicja },

      // Pattern: 2 horizontal, 1 vertical
      { src: 'gallery/alicja/danse-compressed/DSC05714.jpg', width: 1620, height: 1080, alt: 'Danse', author: alicja },
      { src: 'gallery/alicja/danse-compressed/DSC05717.jpg', width: 720, height: 1080, alt: 'Danse', author: alicja },
      { src: 'gallery/alicja/danse-compressed/DSC05720.jpg', width: 720, height: 1080, alt: 'Danse', author: alicja },

      // Pattern: 1 vertical, 2 horizontal
      { src: 'gallery/alicja/danse-compressed/DSC05721.jpg', width: 1620, height: 1080, alt: 'Danse', author: alicja },
      { src: 'gallery/alicja/danse-compressed/DSC05723.jpg', width: 1620, height: 1080, alt: 'Danse', author: alicja },
      { src: 'gallery/alicja/danse-compressed/DSC05724.jpg', width: 1620, height: 1080, alt: 'Danse', author: alicja },

      // Pattern: 2 horizontal, 1 vertical
      { src: 'gallery/alicja/danse-compressed/DSC05725.jpg', width: 720, height: 1080, alt: 'Danse', author: alicja },
      { src: 'gallery/alicja/danse-compressed/DSC05727.jpg', width: 720, height: 1080, alt: 'Danse', author: alicja },
      { src: 'gallery/alicja/danse-compressed/DSC05730.jpg', width: 720, height: 1080, alt: 'Danse', author: alicja },

      // Pattern: 1 vertical, 2 horizontal
      { src: 'gallery/alicja/danse-compressed/DSC05731.jpg', width: 720, height: 1080, alt: 'Danse', author: alicja },
      { src: 'gallery/alicja/danse-compressed/DSC05733.jpg', width: 1620, height: 1080, alt: 'Danse', author: alicja },
      { src: 'gallery/alicja/danse-compressed/DSC05734.jpg', width: 1620, height: 1080, alt: 'Danse', author: alicja },

      // Pattern: 2 horizontal, 1 vertical
      { src: 'gallery/alicja/danse-compressed/DSC05735.jpg', width: 720, height: 1080, alt: 'Danse', author: alicja },
      { src: 'gallery/alicja/danse-compressed/DSC05736.jpg', width: 720, height: 1080, alt: 'Danse', author: alicja },
      { src: 'gallery/alicja/danse-compressed/DSC05738.jpg', width: 1620, height: 1080, alt: 'Danse', author: alicja },

      // Pattern: 1 vertical, 2 horizontal
      { src: 'gallery/alicja/danse-compressed/DSC05739.jpg', width: 720, height: 1080, alt: 'Danse', author: alicja },
      { src: 'gallery/alicja/danse-compressed/DSC05743.jpg', width: 1620, height: 1080, alt: 'Danse', author: alicja },

      // Pattern: 2 horizontal, 1 vertical
      { src: 'gallery/alicja/danse-compressed/DSC05745.jpg', width: 1620, height: 1080, alt: 'Danse', author: alicja },
      { src: 'gallery/alicja/danse-compressed/DSC05748.jpg', width: 1620, height: 1080, alt: 'Danse', author: alicja },
      { src: 'gallery/alicja/danse-compressed/DSC05749.jpg', width: 1620, height: 1080, alt: 'Danse', author: alicja },

      // Pattern: 1 vertical, 2 horizontal
      { src: 'gallery/alicja/danse-compressed/DSC05751.jpg', width: 1620, height: 1080, alt: 'Danse', author: alicja },
      { src: 'gallery/alicja/danse-compressed/DSC05753.jpg', width: 1620, height: 1080, alt: 'Danse', author: alicja },
      { src: 'gallery/alicja/danse-compressed/DSC05755.jpg', width: 720, height: 1080, alt: 'Danse', author: alicja },

      // Pattern: 2 horizontal, 1 vertical
      { src: 'gallery/alicja/danse-compressed/DSC05760.jpg', width: 1620, height: 1080, alt: 'Danse', author: alicja },
      { src: 'gallery/alicja/danse-compressed/DSC05762.jpg', width: 1620, height: 1080, alt: 'Danse', author: alicja },
      { src: 'gallery/alicja/danse-compressed/DSC05765.jpg', width: 1620, height: 1080, alt: 'Danse', author: alicja },

      // Last horizontal images
      { src: 'gallery/alicja/danse-compressed/DSC05766.jpg', width: 1620, height: 1080, alt: 'Danse', author: alicja },
      { src: 'gallery/alicja/danse-compressed/DSC05768.jpg', width: 1620, height: 1080, alt: 'Danse', author: alicja },
      { src: 'gallery/alicja/danse-compressed/DSC05770.jpg', width: 1620, height: 1080, alt: 'Danse', author: alicja },
      { src: 'gallery/alicja/danse-compressed/DSC05775.jpg', width: 1620, height: 1080, alt: 'Danse', author: alicja }
    ];

    return {
      publicPath,
      martaPhotos,
      festhochePhotos,
      maevolPhotos,
      elyePhotos,
      dvrPhotos,
      dansePhotos
    };
  }
}
</script>

<style scoped>
.gallery-container {
  display: flex;
  flex-direction: column;
  gap: 50px;
}
</style>
