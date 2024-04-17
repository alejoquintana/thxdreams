import {
	defineStore
} from 'pinia'

export const useLanguagesStore = defineStore('languages', {
	state: () => ({
		language: "eng",
		fetched: false,
		ourDreams: {},
		advisoryBoard: {},
		seedingFutures: {},
		ContactUs: {},
	}),
	actions: {
		fetchLanguages() {
			if (!this.fetched) {

				fetch(`/languages/texts-${this.language}.json`)
					.then(response => response.json())
					.then(response => {
						this.ourDreams = response.ourDreams
						this.advisoryBoard = response.advisoryBoard
						this.seedingFutures = response.seedingFutures
						this.ContactUs = response.ContactUs
						this.fetched = true
						console.log("1", 1);
					})
					.catch((error) => console.log(error));
			}
		},

	},
})