import {
	defineStore
} from "pinia"

import {useLanguagesStore} from './languages'

export const useAdvisorsStore = defineStore("advisors", {
	state: () => ({
		advisors: [],
	}),
	actions: {
		async fetchAdvisors() {
			await fetch(getApi('advisors') + '?language=' + useLanguagesStore().language)
				.then(response => response.json())
				.then(response => {
					// console.log("response",response);
					this.advisors = response
				})
				.catch((error) => console.log(error));
			return true
		},
	},
})

function getApi(table) {
	// if (process.env.NODE_ENV == "development") {
		https: //thxdreams.com/api/dreamers.php
			// return "https://thxdreams.com/api/" + table + ".php" + '?v=' + new Date().getTime()
		return "https://phpstack-628703-4271081.cloudwaysapps.com/api/" + table + ".php"
	// }
	return "/api/" + table + ".php"
}