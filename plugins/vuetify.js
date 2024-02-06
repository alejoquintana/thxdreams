// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import {
	createVuetify
} from 'vuetify'

export default defineNuxtPlugin((app) => {
	const vuetify = createVuetify({
		defaults: {
			VBtn: {
				color: 'primary',
				variant: 'outlined',
				rounded: true,
			},
		},
		theme: {
			themes: {
				light: {
					dark: false,
					colors: {
						primary: '#503594',
					}
				},
			},
		},
	})
	app.vueApp.use(vuetify)
})