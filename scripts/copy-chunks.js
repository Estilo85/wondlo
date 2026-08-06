const fs = require('fs');
const path = require('path');

function copyChunks() {
  const root = path.resolve(__dirname, '..');
  const srcDir = path.join(root, '.next', 'server', 'chunks');
  const destDir = path.join(root, '.next', 'server');

  if (!fs.existsSync(srcDir)) {
    console.log('[copy-chunks] no chunks directory found at', srcDir);
    return;
  }

  const files = fs.readdirSync(srcDir).filter((f) => f.endsWith('.js'));
  if (files.length === 0) {
    console.log('[copy-chunks] no .js chunk files to copy');
    return;
  }

  files.forEach((file) => {
    const s = path.join(srcDir, file);
    const d = path.join(destDir, file);
    try {
      fs.copyFileSync(s, d);
      console.log(`[copy-chunks] copied ${file}`);
    } catch (err) {
      console.error(`[copy-chunks] failed to copy ${file}:`, err.message);
    }
  });
}

try {
  copyChunks();
} catch (err) {
  console.error('[copy-chunks] unexpected error:', err);
  process.exitCode = 1;
}
