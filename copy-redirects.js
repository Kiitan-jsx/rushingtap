import fs from 'fs';
import path from 'path';

const sourcePath = path.resolve('public', '_redirects');
const destDir = path.resolve('dist');
const destPath = path.join(destDir, '_redirects');

// Ensure dist directory exists
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Copy the file
fs.copyFileSync(sourcePath, destPath);

console.log(`Copied ${sourcePath} to ${destPath}`);np