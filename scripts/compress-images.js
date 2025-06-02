const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Default configuration
const defaultConfig = {
  quality: 80, // JPEG quality (0-100)
  maxWidth: 1920, // Maximum width for images
  maxHeight: 1080, // Maximum height for images
  deleteOriginals: false, // Whether to delete original images after compression
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
  let deletedCount = 0;

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

      // Delete original file if requested
      if (options.deleteOriginals) {
        fs.unlinkSync(sourcePath);
        deletedCount++;
        console.log(`Deleted original file: ${sourcePath}`);
      }
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
    if (options.deleteOriginals) {
      console.log(`Deleted ${deletedCount} original files`);
    }
  } else {
    console.log(`\nNo images found in ${sourceDir}`);
  }

  return { totalOriginalSize, totalCompressedSize, deletedCount };
}

// Main function to process all image directories
async function processAllImages(options = {}) {
  const config = {
    deleteOriginals: options.deleteOriginals || false
  };

  // Compress Marta concert images
  console.log('Compressing Marta concert images...');
  await compressImages(
    path.join(__dirname, '..', 'public', 'gallery', 'marta'),
    path.join(__dirname, '..', 'public', 'gallery', 'marta-compressed'),
    config
  );

  // Compress ambiance images
  console.log('\nCompressing ambiance images...');
  await compressImages(
    path.join(__dirname, '..', 'public', 'gallery', 'festhoche3'),
    path.join(__dirname, '..', 'public', 'gallery', 'festhoche3-compressed'),
    config
  );

  // Compress Maevol images
  console.log('\nCompressing Maevol images...');
  await compressImages(
    path.join(__dirname, '..', 'public', 'gallery', 'maevol'),
    path.join(__dirname, '..', 'public', 'gallery', 'maevol-compressed'),
    config
  );

  // Compress Elye images
  console.log('\nCompressing Elye images...');
  await compressImages(
    path.join(__dirname, '..', 'public', 'gallery', 'elye'),
    path.join(__dirname, '..', 'public', 'gallery', 'elye-compressed'),
    config
  );

  // Compress DVR images
  console.log('\nCompressing DVR images...');
  await compressImages(
    path.join(__dirname, '..', 'public', 'gallery', 'dvr'),
    path.join(__dirname, '..', 'public', 'gallery', 'dvr-compressed'),
    config
  );

  // Compress Danse images
  console.log('\nCompressing Danse images...');
  await compressImages(
    path.join(__dirname, '..', 'public', 'gallery', 'danse'),
    path.join(__dirname, '..', 'public', 'gallery', 'danse-compressed'),
    config
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

// Parse command line arguments
function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    deleteOriginals: false
  };

  // Check for --delete-originals flag
  if (args.includes('--delete-originals')) {
    options.deleteOriginals = true;
    console.log('WARNING: Original images will be deleted after compression!');
    console.log('Make sure you have backups if needed.');

    // Add a 3-second delay to allow the user to cancel if needed
    console.log('Starting in 3 seconds...');
    const startTime = Date.now();
    while (Date.now() - startTime < 3000) {
      // Wait for 3 seconds
    }
  }

  return options;
}

// Run the process
const options = parseArgs();
processAllImages(options).then(() => {
  console.log('All image compression completed!');
  if (options.deleteOriginals) {
    console.log('Original images have been deleted to save space.');
  }
}).catch(err => {
  console.error('Error during image compression:', err);
});
