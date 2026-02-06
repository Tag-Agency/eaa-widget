import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import path from 'path';

export default defineConfig({
    plugins: [
        react(),
        cssInjectedByJsPlugin(), // Bundles CSS into the JS file
    ],
    build: {
        outDir: 'public', // Output to public so Next.js serves it statically
        emptyOutDir: false, // Don't delete other files in public
        lib: {
            entry: path.resolve(__dirname, 'widget-entry.tsx'),
            name: 'AxsWidget',
            fileName: (format) => `axs-widget.js`,
            formats: ['iife'], // IIFE for direct browser inclusion
        },
        rollupOptions: {
            // Ensure we bundle React/ReactDOM because the host site might not have them
            // If you want to exclude them, add them to external
            external: [],
            output: {
                globals: {
                    // If we were externalizing:
                    // react: 'React',
                    // 'react-dom': 'ReactDOM',
                },
            },
        },
        minify: true,
    },
    define: {
        'process.env.NODE_ENV': '"production"',
    },
});
