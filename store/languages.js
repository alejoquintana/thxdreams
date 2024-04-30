import { defineStore } from 'pinia'
import { useHelpersStore } from './helpers'
import { useAdvisorsStore } from './advisors'



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
				fetch(getLanguageJSON(this.language))
					.then(response => response.json())
					.then(response => {
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

function getLanguageJSON(lang) {
	// if (process.env.NODE_ENV == "development") {
	// 	return `http://localhost:3000/api/languages/texts-${lang}.json`
	// }
	return `api/languages/texts-${lang}.json`
	// return "/api/" + table + ".php"
}