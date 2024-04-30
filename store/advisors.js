import {
	defineStore
} from "pinia"

import { useHelpersStore } from './helpers'
import {useLanguagesStore} from './languages'

export const useAdvisorsStore = defineStore("advisors", {
	state: () => ({
		advisors: [],
	}),
	actions: {
		async fetchAdvisors() {
			await fetch(useHelpersStore().getApi('advisors') + '&language=' + useLanguagesStore().language)
				.then(response => response.json())
				.then(response => {
					this.advisors = response
				})
				.catch((error) => console.log(error));
			return true
		},
	},
})