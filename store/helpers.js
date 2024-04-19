import {defineStore} from 'pinia'
import {useLanguagesStore} from './languages'

export const useHelpersStore = defineStore('helpers', {
	state: () => ({
		years: [],
		countries: [],
		contacts: [
			{
				text: 'CALL US',
				info: '+1(754) 200 5755',
				href: 'tel:+17542005755',
				icon: 'phone'
			},
			{
				text: 'ADDRESS',
				info: '1725 Main St Weston FL 33326',
				href: 'https://maps.app.goo.gl/wJCUhpoAZuF2q9pE8',
				icon: 'map-marker'
			},
			{
				text: 'EMAIL',
				info: 'info@thxdreams.com',
				href: 'mailto:info@thxdreams.com',
				icon: 'mail'
			},
		],
		socials: [{
				name: 'instagram',
				url: 'https://www.instagram.com/thx_dreams/',
				icon: 'instagram'
			},
			{
				name: 'facebook',
				url: 'https://www.facebook.com/thxdreams/',
				icon: 'facebook'
			},
			{
				name: 'linkedin',
				url: 'https://www.linkedin.com/company/thxdreams',
				icon: 'linkedin'
			},
		],
		routes_eng: [{
				name: "Our dreams",
				path: 'our-dreams'
			},
			{
				name: "Advisory board",
				path: 'advisory-board'
			},
			{
				name: "Seeding futures",
				path: 'seeding-futures'
			},
			{
				path: 'our-commitments',
				name: "Our commitments",
				nav: false
			},
			{
				path: 'careers',
				name: "Careers",
				nav: false
			},
			{
				path: 'contact-us',
				name: "Contact Us"
			},
		],
		routes_esp: [{
				name: "Nuestros sueños",
				path: 'nuestros-suenos'
			},
			{
				name: "Consejo asesor",
				path: 'consejo-asesor'
			},
			{
				name: "Sembrando futuros",
				path: 'sembrando-futuros'
			},
			{
				name: "Nuestros compromisos",
				path: 'nuestros-compromisos',
				nav: false
			},
			{
				name: "Careras",
				path: 'carreras',
				nav: false
			},
			{
				name: "Contactanos",
				path: 'contactanos',
			},
		]
	}),
	getters: {
		getRoutes: (state) => {
			const language = useLanguagesStore().language
			return language == "eng" ? state.routes_eng : state.routes_esp;
		},
		getNavRoutes: (state) => {
			const language = useLanguagesStore().language
			let lang_routes = language == "eng" ? state.routes_eng : state.routes_esp;
			return lang_routes.filter(route =>
				//{
				//console.log("route.nav",route.nav);
				//return
				route.nav == undefined
				//}
			)
		}
	},
	actions: {
		async fetchFilters(column, language = null) {
			let url = getApi('filters') + '?filter=' + column
			if (useLanguagesStore().language == "eng") url = url + '&language=eng'
			if (useLanguagesStore().language == "esp") url = url + '&language=esp'
			await fetch(url)
				.then(response => response.json())
				.then(response => {
					if (column == "years") {
						this.years = response
					}
					if (column == "countries") {
						this.countries = response
					}
				})
				.catch((error) => console.log(error));
			return true
		},

	},
})

function getApi(table) {
	if (process.env.NODE_ENV == "development") {
		return "https://phpstack-628703-4271081.cloudwaysapps.com/api/" + table + ".php"
	}
	return "/api/" + table + ".php"
}