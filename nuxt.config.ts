// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	css: ['assets/scss/main.scss',"bootstrap/dist/css/bootstrap.min.css"],
	modules: [
		'@pinia/nuxt',
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
		}
	},
})
