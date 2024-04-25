import {
	defineStore
} from 'pinia'
import {
	useHelpersStore
} from './helpers'
import {
	useAdvisorsStore
} from './advisors'



export const useLanguagesStore = defineStore('languages', {
	state: () => ({
		language: "eng", // eng o esp
		fetched: false,
		routes: [],
		home: {},
		ourDreams: {},
		advisoryBoard: {},
		seedingFutures: {},
		contactUs: {},
	}),
	actions: {
		fetchLanguages(changed = false) {
			if (changed || !this.fetched) {

				// fetch(`/api/languages/texts-${this.language}.json`)
				fetch(`https://thxdreams.com/api/languages/texts-${this.language}.json?v=${new Date().getTime()}`)
					.then(response => response.json())
					.then(response => {
						console.log("response.routes",response.routes);
						this.home = response.home
						this.routes = response.routes
						this.ourDreams = response.ourDreams
						this.advisoryBoard = response.advisoryBoard
						this.seedingFutures = response.seedingFutures
						this.contactUs = response.contactUs
						this.fetched = true
					})
					.catch((error) => console.log(error));
			}
		},
		setLanguage(lang) {
			this.language = lang
			useHelpersStore().setRoutes(lang)
			useAdvisorsStore().fetchAdvisors()
			this.fetchLanguages(true)
		},

	},
})