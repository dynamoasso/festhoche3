<template>
  <div class="photographers-preamble">
    <h2 class="preamble-title">Nos Photographes</h2>
    <div class="photographers-container">
      <div class="photographer">
        <div class="photographer-image">
          <img :src="`${publicPath}gallery/alicja/alicja.jpg`" alt="Alicja Pakulska" />
        </div>
        <div class="photographer-info">
          <h3>Alicja Pakulska</h3>
          <p>Photographe passionnée capturant l'essence des moments musicaux et artistiques avec une sensibilité unique.</p>
          <div class="social-links">
            <a href="https://alicjapakulska.myportfolio.com/" target="_blank" rel="noopener noreferrer">
              <span class="social-icon">🌐</span> Site Web
            </a>
            <a href="https://www.instagram.com/li_cya/" target="_blank" rel="noopener noreferrer">
              <span class="social-icon">📸</span> Instagram
            </a>
            <a href="https://www.facebook.com/alicja.pakulska" target="_blank" rel="noopener noreferrer">
              <span class="social-icon">📘</span> Facebook
            </a>
          </div>
        </div>
      </div>

      <div class="photographer">
        <div class="photographer-image">
          <img :src="`${publicPath}gallery/johann/johann.jpg`" alt="Johann Aubin" />
        </div>
        <div class="photographer-info">
          <h3>Johann Aubin</h3>
          <p>Artiste visuel dont l'objectif capture l'émotion et l'énergie des performances live avec un style distinctif.</p>
          <div class="social-links">
            <a href="https://www.instagram.com/_johann_illustrations_/" target="_blank" rel="noopener noreferrer">
              <span class="social-icon">📸</span> Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhotographersPreamble',
  setup() {
    const publicPath = process.env.BASE_URL || '/';

    return {
      publicPath
    };
  }
}
</script>

<style scoped>
.photographers-preamble {
  margin-bottom: 50px;
  color: #ffffff;
}

.preamble-title {
  text-align: center;
  margin-bottom: 30px;
  font-weight: 300;
  letter-spacing: 1px;
}

.photographers-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
}

.photographer {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px;
  background: linear-gradient(135deg, #4a6741, #5c7a52);
  border-radius: 8px;
  padding: 20px;
  transition: transform 0.3s ease;
}

.photographer:hover {
  transform: translateY(-5px);
}

.photographer-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 20px;
  border: 3px solid white;
}

.photographer-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.photographer-info {
  text-align: center;
}

.photographer-info h3 {
  margin-bottom: 10px;
  font-weight: 500;
}

.photographer-info p {
  margin-bottom: 20px;
  line-height: 1.5;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
}

.social-links a {
  display: inline-flex;
  align-items: center;
  color: #ffffff;
  text-decoration: none;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 8px 12px;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.social-links a:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.social-icon {
  margin-right: 5px;
}

/* Responsive adjustments */
@media (min-width: 768px) {
  .photographers-container {
    flex-direction: row;
  }

  .photographer {
    width: calc(50% - 20px);
  }
}

@media (max-width: 767px) {
  .photographer {
    margin-bottom: 30px;
  }
}
</style>
