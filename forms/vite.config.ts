/// <reference types="vitest" />
import { resolve } from 'path';
import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import checker from 'vite-plugin-checker';

export default defineConfig(({ mode }) => ({
    plugins: [
        preact(),
        checker({
            typescript: { buildMode: true }
        }),
        libInjectCss(),
        dts({
            entryRoot: './src',
            rollupTypes: true,
        })
    ],
    build: {
        lib: {
            // Could also be a dictionary or array of multiple entry points
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'Forms',
            fileName: 'index',
        },
        rollupOptions: {
            preserveSymlinks: true,

            external: ['preact', '@preact/signals', 'formik', '@preact-lib/components'],
            output: {
                //entryFileNames: '[name].js',
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    preact: 'preact',
                    formik: 'formik',
                    '@preact/signals': '@preact/signals',
					'@preact-lib/components': '@preact-lib/components',
                },
            },
        },
        emptyOutDir: mode !== 'dev',
        sourcemap: mode == 'dev',
        minify: mode == 'dev' ? 'esbuild' : 'terser',
    },
}));
