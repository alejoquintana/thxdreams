// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
	devtools: { enabled: true },
	css: ['@/assets/scss/custom.scss', 'assets/scss/main.scss'],
	components: [
		{
			path: '~/components',
			pathPrefix: false,
		},
	],
	// head: {
	// 	meta: [],
	// 	link: [
	// 		{ rel: 'stylesheet', href: 'https://fonts.googleapis.com' },
	// 		{ rel: 'stylesheet', href: 'https://fonts.gstatic.com', crossorigin:true},
	// 		{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap' },
	// 	]
	// },
	modules: [
		(_options, nuxt) => {
			nuxt.hooks.hook('vite:extendConfig', (config) => {
				// @ts-expect-error
				config.plugins.push(vuetify({ autoImport: true }))
			})
		},
		[
			"@pinia/nuxt",
			{
				autoImports: ["defineStore", "acceptHMRUpdate"],
			},
		],
		// 'nuxt-sweetalert2'
	],
	alias: {
		pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"
	},
	app: {
		pageTransition: { name: 'page', mode: 'out-in' },
		layoutTransition: { name: 'layout', mode: 'out-in' }
	},
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "assets/scss/_variables.scss" as *;'
				}
			}
		},
		vue: {
			template: {
				transformAssetUrls,
			},
		},
	},
	imports: {
		dirs: ['store']
	},
	build: {
		transpile: ['vuetify'],
	},
})