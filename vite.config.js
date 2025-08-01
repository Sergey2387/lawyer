import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
	base: '/lawyer/',
	plugins: [react(), svgr()],
	server: {
		port: 3000,
		open: true,
		watch: {
			// Следит за всеми файлами в src и автоматически перезагружает сервер
			// По умолчанию уже включено, но можно указать явно
			ignored: '**/node_modules/**',
		},
	},
	preview: {
		port: 4000,
	},
});
