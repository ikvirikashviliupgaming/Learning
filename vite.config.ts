import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import path from 'path';

// Define your games here - just add new game names to this array
const games = ['game1', 'game2'];

// Generate dynamic input configuration
const input = games.reduce((acc, game) => {
  acc[game] = path.resolve(__dirname, `src/${game}/index.html`);
  return acc;
}, {} as Record<string, string>);

// Generate dynamic static copy targets
const staticCopyTargets = [
  // Copy common assets to each game
  ...games.map(game => ({ src: 'assets/common', dest: game })),
  // Copy game-specific assets
  ...games.map(game => ({ src: `assets/${game}`, dest: `${game}/assets` }))
];

export default defineConfig({
  server: {
    port: 5173,
    open: true,
  },
  publicDir: 'assets',
  root: '.',
  build: {
    target: 'es2020',
    sourcemap: true,
    rollupOptions: {
      input,
      output: {
        entryFileNames: '[name]/main.js',
        chunkFileNames: '[name]/chunks/[hash].js',
        assetFileNames: ({ name }) => {
          if (!name) return '[name]/assets/[hash][extname]';
          if (name.endsWith('.css')) return '[name]/style.css';
          if (name.endsWith('.html')) return '[name]/index.html';
          return '[name]/assets/[hash][extname]';
        },
      },
    },
  },
  plugins: [
    viteStaticCopy({
      targets: staticCopyTargets
    })
  ],
});


