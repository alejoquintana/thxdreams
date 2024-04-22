import {
	defineStore
} from 'pinia'

export const useLanguagesStore = defineStore('languages', {
	state: () => ({
		language: "eng", // eng o esp
		fetched: false,
		ourDreams: {},
		advisoryBoard: {},
		seedingFutures: {},
		ContactUs: {},
	}),
	actions: {
		fetchLanguages() {
			if (!this.fetched) {

				fetch(`https://thxdreams.com/api/languages/texts-${this.language}.json`)
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

	},
})