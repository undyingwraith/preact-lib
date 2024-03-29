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
			rollupTypes: false,
		}),
	],
	build: {
		lib: {
			// Could also be a dictionary or array of multiple entry points
			entry: resolve(__dirname, 'src/index.ts'),
			name: 'Components',
			fileName: 'index',
		},
		rollupOptions: {
			preserveSymlinks: true,
			external: ['preact', '@preact/signals', '@preact-lib/interfaces', 'react-hook-form'],
			output: {
				// Provide global variables to use in the UMD build
				// for externalized deps
				globals: {
					preact: 'preact',
					'@preact/signals': '@preact/signals',
					'@preact-lib/interfaces': '@preact-lib/interfaces',
				},
			},
		},
		emptyOutDir: mode !== 'dev',
		sourcemap: mode == 'dev',
		minify: mode == 'dev' ? 'esbuild' : 'terser',
	},
	test: {
		global: true,
		environment: 'jsdom',
	}
}));
