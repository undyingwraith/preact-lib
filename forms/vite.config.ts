/// <reference types="vitest" />
import { resolve } from 'path';
import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import checker from 'vite-plugin-checker';

export default defineConfig({
	plugins: [
		preact(),
		checker({
			typescript: { buildMode: true }
		}),
		libInjectCss(),
		dts({ include: ['src'], entryRoot: './src' })
	],
	build: {
		lib: {
			// Could also be a dictionary or array of multiple entry points
			entry: resolve(__dirname, 'src/index.ts'),
			name: 'forms',
			fileName: 'forms',
		},
		rollupOptions: {
			preserveSymlinks: true,

			external: ['preact'],
			output: {
				entryFileNames: '[name].js',
				// Provide global variables to use in the UMD build
				// for externalized deps
				globals: {
					preact: 'preact',
				},
			},
		},
	},
})