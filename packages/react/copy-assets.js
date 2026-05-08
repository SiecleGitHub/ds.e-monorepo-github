const fs = require('fs');
const path = require('path');

function copyAssets() {
  const sourceDir = path.resolve(__dirname, '../../scss/lib');
  const targetDir = path.resolve(__dirname, 'lib/scss');

  // Create target directory if it doesn't exist
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  // Copy CSS files
  const cssFiles = ['Select.css', 'Utilities.css', 'global.css', 'Button.css', 'Margin.css'];
  
  cssFiles.forEach(file => {
    const sourceFile = path.join(sourceDir, file);
    const targetFile = path.join(targetDir, file);
    
    if (fs.existsSync(sourceFile)) {
      fs.copyFileSync(sourceFile, targetFile);
      console.log(`Copied ${file} to ${targetFile}`);
    } else {
      console.warn(`Source file not found: ${sourceFile}`);
    }
  });

  // Copy foundation files
  const foundationSourceDir = path.resolve(__dirname, '../../foundation/lib');
  const foundationTargetDir = path.resolve(__dirname, 'lib/foundation');

  if (!fs.existsSync(foundationTargetDir)) {
    fs.mkdirSync(foundationTargetDir, { recursive: true });
  }

  if (fs.existsSync(foundationSourceDir)) {
    fs.copyFileSync(foundationSourceDir + '/index.js', foundationTargetDir + '/index.js');
    console.log('Copied foundation index.js');
  }
}

copyAssets();
