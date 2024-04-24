import {
	defineStore
} from 'pinia'

export const useLanguagesStore = defineStore('languages', {
	state: () => ({
		language: "eng", // eng o esp
		language: "eng", // eng o esp
		fetched: false,
		ourDreams: {},
		advisoryBoard: {},
		seedingFutures: {},
		ContactUs: {},
	}),
	actions: {
		fetchLanguages(changed = false) {
			if (changed || !this.fetched) {

				fetch(`api/languages/texts-${this.language}.json`)
				// fetch(`https://thxdreams.com/api/languages/texts-${this.language}.json`)
					.then(response => response.json())
					.then(response => {
						this.ourDreams = response.ourDreams
						this.advisoryBoard = response.advisoryBoard
						this.seedingFutures = response.seedingFutures
						this.ContactUs = response.ContactUs
						this.fetched = true
					})
					.catch((error) => console.log(error));
			}
		},
		setLanguage(lang) {
			this.language = lang
			this.fetchLanguages(true)
		},

	},
})