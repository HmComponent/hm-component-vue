import { fileURLToPath, URL } from 'node:url';
import typescript2 from 'rollup-plugin-typescript2';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		typescript2({
			check: false,
			include: ['src/components/**/*.vue'],
			tsconfigOverride: {
				compilerOptions: {
					outDir: 'dist',
					sourceMap: true,
					declaration: true,
					declarationMap: true,
				},
			},
			exclude: ['vite.config.ts'],
		}),
	],
	build: {
		cssCodeSplit: false,
		lib: {
			entry: './src/HmPlugin.ts',
			formats: ['es', 'cjs'],
			name: 'HmPlugin',
			fileName: (format) => `hm-component-vue3.${format}.js`,
		},
		rollupOptions: {
			external: ['vue'],
			output: {
				exports: 'named',
				globals: {
					vue: 'Vue',
				},
			},
		},
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
});
