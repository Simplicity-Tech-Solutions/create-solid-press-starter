import { defineConfig } from 'vite';
const { resolve } = require('path')
import solidPlugin from 'vite-plugin-solid';
import liveReload from 'vite-plugin-live-reload'
import { ssr } from 'vite-plugin-ssr/plugin';
// import devtools from 'solid-devtools/vite';

const PACKAGE_JSON = require('./package.json');
const DEVELOPMENT_BUILD_CONFIG = PACKAGE_JSON.config.developmentBuild;
const DEVELOPMENT_CONFIG = PACKAGE_JSON.config.development;
const LIVE_CONFIG = PACKAGE_JSON.config.production;


export default defineConfig({
  // config
  root: '',
  base: PACKAGE_JSON.config.environment === 'production' ? LIVE_CONFIG['build-url']  : ( PACKAGE_JSON.config.environment === 'development' ? DEVELOPMENT_CONFIG['build-url'] : DEVELOPMENT_BUILD_CONFIG['build-url'] ),
  define: {
    WEBSITE_ENVIORNMENT: JSON.stringify(PACKAGE_JSON.config.environment )
  },
  plugins: [
    /* 
      Uncomment the following line to enable solid-devtools.
      For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
    */
    // devtools(),
    solidPlugin(),
    liveReload(__dirname+'/**/*.{php,html,css,js.jsx,ts,tsx}'),
  ],
  server: {
    // required to load scripts from custom host
    cors: true,
    // we need a strict port to match on PHP side
    // change freely, but update in your functions.php to match the same port
    strictPort: true,
    port: 3000,
    https: false,

    hmr: {
      host: 'localhost',
      //port: 443
    },
    
  },
  build: {
    target: 'esnext', // default is 'esnext'
    // output dir for production build ( DO NOT CHANGE )
    outDir: resolve(__dirname, './dist'),
    assetsDir: 'assets',
    emptyOutDir: true,
    manifest: true,
    rollupOptions: {
      output: {
        entryFileNames: 'main-[hash].js',
        chunkFileNames: 'chunk-[hash].js',
        assetFileNames: 'asset-[hash].[ext]',
      },
    },
    
  
    // minifying switch
    minify: true,
    write: true
  },
});
