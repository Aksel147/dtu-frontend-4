import react from '@vitejs/plugin-react';
import { configDefaults, defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
		environment: 'jsdom',
		setupFiles: ['vitest.setup.ts'],
		exclude: [...configDefaults.exclude, '**/tests/playwright/**'],
	},
});
