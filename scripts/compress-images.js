const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Default configuration
const defaultConfig = {
  quality: 80, // JPEG quality (0-100)
  maxWidth: 1920, // Maximum width for images
  maxHeight: 1080, // Maximum height for images
};

// Function to compress images from one directory to another
async function compressImages(sourceDir, outputDir, config = {}) {
  // Merge default config with provided config
  const options = { ...defaultConfig, ...config };

  // Ensure source directory exists
  if (!fs.existsSync(sourceDir)) {
    console.log(`Source directory does not exist: ${sourceDir}`);
    return;
  }

  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
    console.log(`Created output directory: ${outputDir}`);
  }

  // Get all image files from source directory
  const imageFiles = fs.readdirSync(sourceDir)
    .filter(file => /\.(jpg|jpeg|png)$/i.test(file));

  console.log(`Found ${imageFiles.length} images to process in ${sourceDir}`);

  // Process each image
  let totalOriginalSize = 0;
  let totalCompressedSize = 0;

  for (const file of imageFiles) {
    const sourcePath = path.join(sourceDir, file);
    const outputPath = path.join(outputDir, file);

    // Get original file size
    const originalStats = fs.statSync(sourcePath);
    totalOriginalSize += originalStats.size;

    try {
      // Process the image
      await sharp(sourcePath)
        .resize({
          width: options.maxWidth,
          height: options.maxHeight,
          fit: 'inside',
          withoutEnlargement: true
        })
        .jpeg({ quality: options.quality })
        .toFile(outputPath);

      // Get compressed file size
      const compressedStats = fs.statSync(outputPath);
      totalCompressedSize += compressedStats.size;

      const compressionRatio = ((1 - compressedStats.size / originalStats.size) * 100).toFixed(2);
      console.log(`Processed ${file}: ${formatBytes(originalStats.size)} → ${formatBytes(compressedStats.size)} (${compressionRatio}% reduction)`);
    } catch (error) {
      console.error(`Error processing ${file}:`, error);
    }
  }

  // Print summary
  if (totalOriginalSize > 0) {
    const overallReduction = ((1 - totalCompressedSize / totalOriginalSize) * 100).toFixed(2);
    console.log(`\nCompression Summary for ${path.basename(sourceDir)}:`);
    console.log(`Total original size: ${formatBytes(totalOriginalSize)}`);
    console.log(`Total compressed size: ${formatBytes(totalCompressedSize)}`);
    console.log(`Overall reduction: ${overallReduction}%`);
  } else {
    console.log(`\nNo images found in ${sourceDir}`);
  }

  return { totalOriginalSize, totalCompressedSize };
}

// Main function to process all image directories
async function processAllImages() {
  // Compress Marta concert images
  console.log('Compressing Marta concert images...');
  await compressImages(
    path.join(__dirname, '..', 'public', 'gallery', 'marta'),
    path.join(__dirname, '..', 'public', 'gallery', 'marta-compressed')
  );

  // Compress Fest'Hoche #3 ambiance images
  console.log('\nCompressing Fest\'Hoche #3 ambiance images...');
  await compressImages(
    path.join(__dirname, '..', 'public', 'gallery', 'festhoche3'),
    path.join(__dirname, '..', 'public', 'gallery', 'festhoche3-compressed')
  );
}

// Helper function to format bytes
function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

// Run the process
processAllImages().then(() => {
  console.log('All image compression completed!');
}).catch(err => {
  console.error('Error during image compression:', err);
});
