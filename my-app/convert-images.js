import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function optimizeImages() {
    const inputPath = join(__dirname, 'public/assets/images/**/*.{jpg,png}');
    const outputPath = join(__dirname, 'public/assets/images/');
    
    console.log('Starting image conversion to WebP...');
    
    try {
        const files = await imagemin([inputPath], {
            destination: outputPath,
            plugins: [
                imageminWebp({quality: 80})
            ]
        });
        
        console.log(`Successfully optimized ${files.length} images!`);
        files.forEach(f => console.log(' -> ' + f.destinationPath));
    } catch (e) {
        console.error('Error optimizing images:', e);
    }
}

optimizeImages();
