import {
	defineStore
} from 'pinia'

export const useHelpersStore = defineStore('helpers', {
	state: () => ({
		years: [],
		countries: [],
		contacts: [{
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
		routesBACK: [{
				name: "HOME",
				path: '/'
			},
			{
				name: "Our dreams",
				path: '/OurDreams'
			},
			{
				name: "Advisory board",
				path: '/AdvisoryBoard'
			},
			{
				name: "Seeding futures",
				path: '/OurPrograms'
			},
			{
				name: "Contact-us",
				path: '/Contact'
			}
		],
		routes: [{
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
		]
	}),
	getters: {
		navRoutes: (state) => {
			return state.routes.filter(route =>
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
			if (language) {
				url = url + '&language=' + language
			}
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