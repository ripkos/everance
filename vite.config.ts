import { sveltekit } from '@sveltejs/kit/vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';
import { defineConfig } from 'vite';
import commonjs from 'vite-plugin-commonjs';
const iconsPath = 'img/icons/'
export default defineConfig({
	plugins: [
		sveltekit(),
		commonjs(),
		SvelteKitPWA({
			devOptions: {
				enabled: true
			},
			includeAssets: [`${iconsPath}favicon.ico'`, `${iconsPath}apple-touch-icon.png`],
			manifest: {
				name: 'eve.rance.club',
				short_name: 'everance',
				description: 'eve.rance.club - web app for EVE Online developed by RanceClab',
				theme_color: '#000000',
				icons: [
					{
						src: `${iconsPath}android-chrome-192x192.png`,
						sizes: '192x192',
						type: 'image/png'
					},
					{
						src: `${iconsPath}android-chrome-512x512.png`,
						sizes: '512x512',
						type: 'image/png'
					}
				]
			}
		})
	]
});
