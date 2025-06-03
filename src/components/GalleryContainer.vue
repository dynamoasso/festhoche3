<template>
  <div class="gallery-container" id="gallery-container">
    <!-- Photographers Preamble -->
    <PhotographersPreamble />

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

    <!-- Banquet Section -->
    <GallerySection
      v-if="banquetPhotos.length > 0"
      title="Le Grand Banquet"
      sectionId="banquet"
      photoDirectory="gallery/alicja/banquet-compressed"
      :photos="banquetPhotos"
      :initPhotoSwipe="false"
    />

    <!-- Ateliers Section -->
    <GallerySection
      v-if="ateliersPhotos.length > 0"
      title="Les ateliers"
      sectionId="ateliers"
      photoDirectory="gallery/alicja/ateliers-compressed"
      :photos="ateliersPhotos"
      :initPhotoSwipe="false"
    />

    <!-- Claquettes Section -->
    <GallerySection
      v-if="claquettesPhotos.length > 0"
      title="Lancer de claquettes"
      sectionId="claquettes"
      photoDirectory="gallery/alicja/claquettes-compressed"
      :photos="claquettesPhotos"
      :initPhotoSwipe="false"
    />
  </div>
</template>

<script>
import GallerySection from './GallerySection.vue';
import PhotographersPreamble from './PhotographersPreamble.vue';
import { onMounted } from 'vue';

export default {
  name: 'GalleryContainer',
  components: {
    GallerySection,
    PhotographersPreamble
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

      // Johann's photos for festhoche3
      // Pattern: 2 horizontal, 1 vertical
      { src: 'gallery/johann/festhoche3-compressed/02 .JPG', width: 1620, height: 1080, alt: 'Ambiance Fest\'Hoche #3', author: johann },
      { src: 'gallery/johann/festhoche3-compressed/12.JPG', width: 1620, height: 1080, alt: 'Ambiance Fest\'Hoche #3', author: johann },
      { src: 'gallery/johann/festhoche3-compressed/18.JPG', width: 1620, height: 1080, alt: 'Ambiance Fest\'Hoche #3', author: johann },

      // Pattern: 1 vertical, 2 horizontal
      { src: 'gallery/johann/festhoche3-compressed/54.JPG', width: 1620, height: 1080, alt: 'Ambiance Fest\'Hoche #3', author: johann },
      { src: 'gallery/johann/festhoche3-compressed/55.JPG', width: 1620, height: 1080, alt: 'Ambiance Fest\'Hoche #3', author: johann },
      { src: 'gallery/johann/festhoche3-compressed/56.JPG', width: 1620, height: 1080, alt: 'Ambiance Fest\'Hoche #3', author: johann },

      // Pattern: 2 horizontal, 1 vertical
      { src: 'gallery/johann/festhoche3-compressed/60.JPG', width: 1620, height: 1080, alt: 'Ambiance Fest\'Hoche #3', author: johann },
      { src: 'gallery/johann/festhoche3-compressed/61.JPG', width: 1620, height: 1080, alt: 'Ambiance Fest\'Hoche #3', author: johann },
      { src: 'gallery/johann/festhoche3-compressed/62.JPG', width: 1620, height: 1080, alt: 'Ambiance Fest\'Hoche #3', author: johann },

      // Pattern: 1 vertical, 2 horizontal
      { src: 'gallery/johann/festhoche3-compressed/63.JPG', width: 1620, height: 1080, alt: 'Ambiance Fest\'Hoche #3', author: johann },
      { src: 'gallery/johann/festhoche3-compressed/65.JPG', width: 1620, height: 1080, alt: 'Ambiance Fest\'Hoche #3', author: johann },
      { src: 'gallery/johann/festhoche3-compressed/66.JPG', width: 1620, height: 1080, alt: 'Ambiance Fest\'Hoche #3', author: johann },

      // Pattern: 2 horizontal, 1 vertical
      { src: 'gallery/johann/festhoche3-compressed/68.JPG', width: 1620, height: 1080, alt: 'Ambiance Fest\'Hoche #3', author: johann },
      { src: 'gallery/johann/festhoche3-compressed/79.JPG', width: 1620, height: 1080, alt: 'Ambiance Fest\'Hoche #3', author: johann },
      { src: 'gallery/johann/festhoche3-compressed/90.JPG', width: 1620, height: 1080, alt: 'Ambiance Fest\'Hoche #3', author: johann },

      // Last horizontal images
      { src: 'gallery/johann/festhoche3-compressed/101.JPG', width: 1620, height: 1080, alt: 'Ambiance Fest\'Hoche #3', author: johann },
      { src: 'gallery/johann/festhoche3-compressed/112.JPG', width: 1620, height: 1080, alt: 'Ambiance Fest\'Hoche #3', author: johann },
      { src: 'gallery/johann/festhoche3-compressed/126.JPG', width: 1620, height: 1080, alt: 'Ambiance Fest\'Hoche #3', author: johann }
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
      { src: 'gallery/johann/dvr-compressed/34.JPG', width: 1620, height: 1080, alt: 'DVR', author: johann },

      // Pattern: 2 horizontal, 1 vertical (new photos)
      { src: 'gallery/johann/dvr-compressed/35.JPG', width: 1620, height: 1080, alt: 'DVR', author: johann },
      { src: 'gallery/johann/dvr-compressed/36.JPG', width: 720, height: 1080, alt: 'DVR', author: johann },
      { src: 'gallery/johann/dvr-compressed/37.JPG', width: 720, height: 1080, alt: 'DVR', author: johann },

      // Pattern: 1 vertical, 2 horizontal (new photos)
      { src: 'gallery/johann/dvr-compressed/38.JPG', width: 720, height: 1080, alt: 'DVR', author: johann },
      { src: 'gallery/johann/dvr-compressed/39.JPG', width: 1620, height: 1080, alt: 'DVR', author: johann },
      { src: 'gallery/johann/dvr-compressed/40.JPG', width: 1620, height: 1080, alt: 'DVR', author: johann }
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

    // Photos for the Banquet section
    const banquetPhotos = [
      // Pattern: 2 horizontal, 2 vertical
      { src: 'gallery/alicja/banquet-compressed/DSC05982.jpg', width: 720, height: 1080, alt: 'Le grand banquet', author: alicja },
      { src: 'gallery/alicja/banquet-compressed/DSC05985.jpg', width: 720, height: 1080, alt: 'Le grand banquet', author: alicja },
      { src: 'gallery/alicja/banquet-compressed/DSC05992.jpg', width: 720, height: 1080, alt: 'Le grand banquet', author: alicja },
      { src: 'gallery/alicja/banquet-compressed/DSC05993.jpg', width: 1620, height: 1080, alt: 'Le grand banquet', author: alicja },

      // Johann's banquet photos
      // Using the actual files from johann/banquet-compressed
      { src: 'gallery/johann/banquet-compressed/45.JPG', width: 1620, height: 1080, alt: 'Le grand banquet', author: johann },
      { src: 'gallery/johann/banquet-compressed/47.JPG', width: 1620, height: 1080, alt: 'Le grand banquet', author: johann },
      { src: 'gallery/johann/banquet-compressed/48.JPG', width: 1620, height: 1080, alt: 'Le grand banquet', author: johann },
      { src: 'gallery/johann/banquet-compressed/49.JPG', width: 1620, height: 1080, alt: 'Le grand banquet', author: johann },
      { src: 'gallery/johann/banquet-compressed/53.JPG', width: 1620, height: 1080, alt: 'Le grand banquet', author: johann }
    ];

    // Photos for the Ateliers section
    const ateliersPhotos = [
      // Pattern: 2 horizontal, 1 vertical
      { src: 'gallery/alicja/ateliers-compressed/DSC05973.jpg', width: 1620, height: 1080, alt: 'Les ateliers', author: alicja },
      { src: 'gallery/alicja/ateliers-compressed/DSC05974.jpg', width: 1620, height: 1080, alt: 'Les ateliers', author: alicja },
      { src: 'gallery/alicja/ateliers-compressed/DSC05975.jpg', width: 1620, height: 1080, alt: 'Les ateliers', author: alicja },

      // Pattern: 1 vertical, 2 horizontal
      { src: 'gallery/alicja/ateliers-compressed/DSC05976.jpg', width: 720, height: 1080, alt: 'Les ateliers', author: alicja },
      { src: 'gallery/alicja/ateliers-compressed/DSC05977.jpg', width: 1620, height: 1080, alt: 'Les ateliers', author: alicja },
      { src: 'gallery/alicja/ateliers-compressed/DSC06004.jpg', width: 1620, height: 1080, alt: 'Les ateliers', author: alicja },

      // Pattern: 2 horizontal, 1 vertical
      { src: 'gallery/alicja/ateliers-compressed/DSC06005.jpg', width: 720, height: 1080, alt: 'Les ateliers', author: alicja },
      { src: 'gallery/alicja/ateliers-compressed/DSC06006.jpg', width: 720, height: 1080, alt: 'Les ateliers', author: alicja },
      { src: 'gallery/alicja/ateliers-compressed/DSC06007.jpg', width: 720, height: 1080, alt: 'Les ateliers', author: alicja },

      // Pattern: 1 vertical, 2 horizontal
      { src: 'gallery/alicja/ateliers-compressed/DSC06008.jpg', width: 1620, height: 1080, alt: 'Les ateliers', author: alicja },
      { src: 'gallery/alicja/ateliers-compressed/DSC06009.jpg', width: 720, height: 1080, alt: 'Les ateliers', author: alicja },
      { src: 'gallery/alicja/ateliers-compressed/DSC06010.jpg', width: 720, height: 1080, alt: 'Les ateliers', author: alicja },

      // Pattern: 2 horizontal, 1 vertical
      { src: 'gallery/alicja/ateliers-compressed/DSC06011.jpg', width: 720, height: 1080, alt: 'Les ateliers', author: alicja },
      { src: 'gallery/alicja/ateliers-compressed/DSC06012.jpg', width: 1620, height: 1080, alt: 'Les ateliers', author: alicja },
      { src: 'gallery/alicja/ateliers-compressed/DSC06013.jpg', width: 720, height: 1080, alt: 'Les ateliers', author: alicja },

      // Pattern: 1 vertical, 2 horizontal
      { src: 'gallery/alicja/ateliers-compressed/DSC06014.jpg', width: 1620, height: 1080, alt: 'Les ateliers', author: alicja },
      { src: 'gallery/alicja/ateliers-compressed/DSC06015.jpg', width: 720, height: 1080, alt: 'Les ateliers', author: alicja },
      { src: 'gallery/alicja/ateliers-compressed/DSC06016.jpg', width: 720, height: 1080, alt: 'Les ateliers', author: alicja },

      // Pattern: 2 horizontal, 1 vertical
      { src: 'gallery/alicja/ateliers-compressed/DSC06017.jpg', width: 1620, height: 1080, alt: 'Les ateliers', author: alicja },
      { src: 'gallery/alicja/ateliers-compressed/DSC06018.jpg', width: 1620, height: 1080, alt: 'Les ateliers', author: alicja },
      { src: 'gallery/alicja/ateliers-compressed/DSC06019.jpg', width: 720, height: 1080, alt: 'Les ateliers', author: alicja },

      // Pattern: 1 vertical, 2 horizontal
      { src: 'gallery/alicja/ateliers-compressed/DSC06020.jpg', width: 1620, height: 1080, alt: 'Les ateliers', author: alicja },
      { src: 'gallery/alicja/ateliers-compressed/DSC06021.jpg', width: 720, height: 1080, alt: 'Les ateliers', author: alicja },
      { src: 'gallery/alicja/ateliers-compressed/DSC06023.jpg', width: 1620, height: 1080, alt: 'Les ateliers', author: alicja },

      // Johann's ateliers photos
      // Pattern: 2 horizontal, 1 vertical
      { src: 'gallery/johann/ateliers-compressed/41.JPG', width: 1620, height: 1080, alt: 'Les ateliers', author: johann },
      { src: 'gallery/johann/ateliers-compressed/43.JPG', width: 1620, height: 1080, alt: 'Les ateliers', author: johann },

      // Pattern: 1 vertical, 2 horizontal
      { src: 'gallery/johann/ateliers-compressed/52.JPG', width: 1620, height: 1080, alt: 'Les ateliers', author: johann },
      { src: 'gallery/johann/ateliers-compressed/67.JPG', width: 1620, height: 1080, alt: 'Les ateliers', author: johann },
      { src: 'gallery/johann/ateliers-compressed/69.JPG', width: 1620, height: 1080, alt: 'Les ateliers', author: johann },

      // Pattern: 2 horizontal, 1 vertical
      { src: 'gallery/johann/ateliers-compressed/70.JPG', width: 1620, height: 1080, alt: 'Les ateliers', author: johann },
      { src: 'gallery/johann/ateliers-compressed/71.JPG', width: 1620, height: 1080, alt: 'Les ateliers', author: johann },
      { src: 'gallery/johann/ateliers-compressed/72.JPG', width: 1620, height: 1080, alt: 'Les ateliers', author: johann },

      // Pattern: 1 vertical, 2 horizontal
      { src: 'gallery/johann/ateliers-compressed/73.JPG', width: 1620, height: 1080, alt: 'Les ateliers', author: johann },
      { src: 'gallery/johann/ateliers-compressed/74.JPG', width: 1620, height: 1080, alt: 'Les ateliers', author: johann },
      { src: 'gallery/johann/ateliers-compressed/75.JPG', width: 1620, height: 1080, alt: 'Les ateliers', author: johann },

      // Pattern: 2 horizontal, 1 vertical
      { src: 'gallery/johann/ateliers-compressed/76.JPG', width: 1620, height: 1080, alt: 'Les ateliers', author: johann },
      { src: 'gallery/johann/ateliers-compressed/77.JPG', width: 1620, height: 1080, alt: 'Les ateliers', author: johann },
      { src: 'gallery/johann/ateliers-compressed/80.JPG', width: 1620, height: 1080, alt: 'Les ateliers', author: johann },

      // Pattern: 1 vertical, 2 horizontal
      { src: 'gallery/johann/ateliers-compressed/81.JPG', width: 1620, height: 1080, alt: 'Les ateliers', author: johann },
      { src: 'gallery/johann/ateliers-compressed/82.JPG', width: 1620, height: 1080, alt: 'Les ateliers', author: johann },
      { src: 'gallery/johann/ateliers-compressed/83.JPG', width: 1620, height: 1080, alt: 'Les ateliers', author: johann },

      // Pattern: 2 horizontal, 1 vertical
      { src: 'gallery/johann/ateliers-compressed/84.JPG', width: 1620, height: 1080, alt: 'Les ateliers', author: johann },
      { src: 'gallery/johann/ateliers-compressed/85.JPG', width: 1620, height: 1080, alt: 'Les ateliers', author: johann },
      { src: 'gallery/johann/ateliers-compressed/86.JPG', width: 1620, height: 1080, alt: 'Les ateliers', author: johann },

      // Pattern: 1 vertical, 2 horizontal
      { src: 'gallery/johann/ateliers-compressed/87.JPG', width: 1620, height: 1080, alt: 'Les ateliers', author: johann },
      { src: 'gallery/johann/ateliers-compressed/89.JPG', width: 720, height: 1080, alt: 'Les ateliers', author: johann },
      { src: 'gallery/johann/ateliers-compressed/91.JPG', width: 1620, height: 1080, alt: 'Les ateliers', author: johann },

      // Pattern: 2 horizontal, 1 vertical
      { src: 'gallery/johann/ateliers-compressed/92.JPG', width: 1620, height: 1080, alt: 'Les ateliers', author: johann },
      { src: 'gallery/johann/ateliers-compressed/93.JPG', width: 1620, height: 1080, alt: 'Les ateliers', author: johann },
      { src: 'gallery/johann/ateliers-compressed/94.JPG', width: 1620, height: 1080, alt: 'Les ateliers', author: johann },

      // Last horizontal images
      { src: 'gallery/johann/ateliers-compressed/95.JPG', width: 1620, height: 1080, alt: 'Les ateliers', author: johann },
      { src: 'gallery/johann/ateliers-compressed/96.JPG', width: 1620, height: 1080, alt: 'Les ateliers', author: johann },
      { src: 'gallery/johann/ateliers-compressed/97.JPG', width: 1620, height: 1080, alt: 'Les ateliers', author: johann },
      { src: 'gallery/johann/ateliers-compressed/98.JPG', width: 1620, height: 1080, alt: 'Les ateliers', author: johann },
      { src: 'gallery/johann/ateliers-compressed/99.JPG', width: 1620, height: 1080, alt: 'Les ateliers', author: johann },
      { src: 'gallery/johann/ateliers-compressed/100.JPG', width: 1620, height: 1080, alt: 'Les ateliers', author: johann },
      { src: 'gallery/johann/ateliers-compressed/105.JPG', width: 1620, height: 1080, alt: 'Les ateliers', author: johann },
      { src: 'gallery/johann/ateliers-compressed/106.JPG', width: 1620, height: 1080, alt: 'Les ateliers', author: johann }
    ];

    // Photos for the Claquettes section
    const claquettesPhotos = [
      // Pattern: 2 horizontal, 1 vertical
      { src: 'gallery/alicja/claquettes-compressed/DSC06075.jpg', width: 720, height: 1080, alt: 'Lancer de claquettes', author: alicja },
      { src: 'gallery/alicja/claquettes-compressed/DSC06077.jpg', width: 720, height: 1080, alt: 'Lancer de claquettes', author: alicja },
      { src: 'gallery/alicja/claquettes-compressed/DSC06078.jpg', width: 720, height: 1080, alt: 'Lancer de claquettes', author: alicja },

      // Pattern: 1 vertical, 2 horizontal
      { src: 'gallery/alicja/claquettes-compressed/DSC06079.jpg', width: 1620, height: 1080, alt: 'Lancer de claquettes', author: alicja },
      { src: 'gallery/alicja/claquettes-compressed/DSC06084.jpg', width: 1620, height: 1080, alt: 'Lancer de claquettes', author: alicja },
      { src: 'gallery/alicja/claquettes-compressed/DSC06085.jpg', width: 720, height: 1080, alt: 'Lancer de claquettes', author: alicja },

      // Pattern: 2 horizontal, 1 vertical
      { src: 'gallery/alicja/claquettes-compressed/DSC06086.jpg', width: 1620, height: 1080, alt: 'Lancer de claquettes', author: alicja },
      { src: 'gallery/alicja/claquettes-compressed/DSC06088.jpg', width: 1620, height: 1080, alt: 'Lancer de claquettes', author: alicja },
      { src: 'gallery/alicja/claquettes-compressed/DSC06089.jpg', width: 1620, height: 1080, alt: 'Lancer de claquettes', author: alicja },

      // Pattern: 1 vertical, 2 horizontal
      { src: 'gallery/alicja/claquettes-compressed/DSC06090.jpg', width: 720, height: 1080, alt: 'Lancer de claquettes', author: alicja },
      { src: 'gallery/alicja/claquettes-compressed/DSC06094.jpg', width: 1620, height: 1080, alt: 'Lancer de claquettes', author: alicja },
      { src: 'gallery/alicja/claquettes-compressed/DSC06098.jpg', width: 720, height: 1080, alt: 'Lancer de claquettes', author: alicja },

      // Pattern: 2 horizontal, 1 vertical
      { src: 'gallery/alicja/claquettes-compressed/DSC06099.jpg', width: 720, height: 1080, alt: 'Lancer de claquettes', author: alicja },
      { src: 'gallery/alicja/claquettes-compressed/DSC06101.jpg', width: 1620, height: 1080, alt: 'Lancer de claquettes', author: alicja },
      { src: 'gallery/alicja/claquettes-compressed/DSC06103.jpg', width: 1620, height: 1080, alt: 'Lancer de claquettes', author: alicja },

      // Pattern: 1 vertical, 2 horizontal
      { src: 'gallery/alicja/claquettes-compressed/DSC06104.jpg', width: 720, height: 1080, alt: 'Lancer de claquettes', author: alicja },
      { src: 'gallery/alicja/claquettes-compressed/DSC06109.jpg', width: 1620, height: 1080, alt: 'Lancer de claquettes', author: alicja },
      { src: 'gallery/alicja/claquettes-compressed/DSC06112.jpg', width: 1620, height: 1080, alt: 'Lancer de claquettes', author: alicja },

      // Last horizontal images
      { src: 'gallery/alicja/claquettes-compressed/DSC06114.jpg', width: 1620, height: 1080, alt: 'Lancer de claquettes', author: alicja },
      { src: 'gallery/alicja/claquettes-compressed/DSC06116.jpg', width: 720, height: 1080, alt: 'Lancer de claquettes', author: alicja },
      { src: 'gallery/alicja/claquettes-compressed/DSC06119.jpg', width: 720, height: 1080, alt: 'Lancer de claquettes', author: alicja },
      { src: 'gallery/alicja/claquettes-compressed/DSC06123.jpg', width: 720, height: 1080, alt: 'Lancer de claquettes', author: alicja }
    ];

    return {
      publicPath,
      martaPhotos,
      festhochePhotos,
      maevolPhotos,
      elyePhotos,
      dvrPhotos,
      dansePhotos,
      banquetPhotos,
      ateliersPhotos,
      claquettesPhotos
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
