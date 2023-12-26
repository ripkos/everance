import { sveltekit } from '@sveltejs/kit/vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';
import { defineConfig } from 'vite';
import commonjs from 'vite-plugin-commonjs';
const iconsPath = 'img/icons/';
export default defineConfig({
	plugins: [
		sveltekit(),
		commonjs(),
		SvelteKitPWA({
			devOptions: {
				enabled: true
			},
			includeAssets: [`${iconsPath}favicon.ico'`, `${iconsPath}apple-touch-icon.webp`],
			manifest: {
				start_url: '/',
				name: 'eve.rance.club',
				short_name: 'everance',
				description: 'eve.rance.club - web app for EVE Online developed by RanceClab',
				theme_color: '#000000',
				background_color: '#000000',
				icons: [
					{
						src: `${iconsPath}android-chrome-192x192.webp`,
						sizes: '192x192',
						type: 'image/webp',
						purpose: 'maskable'
					},
					{
						src: `${iconsPath}android-chrome-512x512.webp`,
						sizes: '512x512',
						type: 'image/webp'
					}
				]
			},
			workbox: {
				runtimeCaching: [
					{
						handler: 'CacheFirst',
						urlPattern: /^https:\/\/eve\.rance\.club/,
						options: {
							cacheableResponse: {
								statuses: [200]
							}
						}
					}
				]
			}
		})
	]
});
