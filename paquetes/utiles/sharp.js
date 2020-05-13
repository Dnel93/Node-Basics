const sharp = require('sharp');

sharp('descarga.png')
    .resize(80)
    .grayscale()
    .toFile('resized.png');