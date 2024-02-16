/// <reference types="vitest" />
import { resolve } from 'path';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import dts from 'vite-plugin-dts';

export default defineConfig(({ mode }) => ({
	plugins: [
		checker({
			typescript: { buildMode: true }
		}),
		dts({
			entryRoot: './src',
			rollupTypes: false,
		}),
	],
	build: {
		lib: {
			// Could also be a dictionary or array of multiple entry points
			entry: resolve(__dirname, 'src/index.ts'),
			name: 'Services',
			fileName: 'index',
		},
		rollupOptions: {
			preserveSymlinks: true,

			external: ['helia', 'libp2p', '@m-ld/m-ld', '@m-ld/jsonld'],
			output: {
				// Provide global variables to use in the UMD build
				// for externalized deps
				globals: {
					helia: 'helia',
					libp2p: 'libp2p',
					'@m-ld/m-ld': 'meld',
					'@m-ld/jsonld': 'jsonld',
				},
			},
		},
		emptyOutDir: mode !== 'dev',
		sourcemap: mode == 'dev',
		manifest: false,
		minify: mode == 'dev' ? 'esbuild' : 'terser',
	},
	test: {
		globals: true,
	},
}));
