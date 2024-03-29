import {defineStore} from 'pinia'

export const useDreamersStore = defineStore('dreamers', {
	state: () => ({
		dreamers: null,
		CarouselDreamers: null,
		paginatedDreamers: null,
		dreamer: null,
	}),
	getters: {
		dreamersLength(state) {
			return state.dreamers.length
		}
	},
	actions: {
		async fetchFullDreamer(dreamerPath) {
			console.log("getApi('dreamer') + '?path=' + dreamerPath.substring(1)",getApi('dreamer') + '?path=' + dreamerPath.substring(1));
			await fetch(getApi('dreamer') + '?path=' + dreamerPath.substring(1))
				.then(response => response.json())
				.then(response => {
					this.dreamer = response
				})
				.catch((error) => console.log(error));
			return true
		},
		async fetchCarouselDreamers() {
			await fetch(getApi('dreamers') + '?section=home-carousel')
				.then(response => response.json())
				.then(response => {
					this.CarouselDreamers = response
					console.log("response",response);
				})
				.catch((error) => console.log(error));
			return true
		},
		async paginateDreamers(page) {
			page--
			let perPage = 12
			let start = page * perPage
			let end = ((page * perPage) + 12) >= this.dreamers.length ? (this.dreamers.length - 1) : ((page * perPage) + 12)
			this.paginatedDreamers = this.dreamers.slice(start,end)
		},
	},
})

/*
fetch('/api/users', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			name: 'Dio',
			password: 'irejectmyhumanityjojo',
		}),
	})
	.then((response) => {
		if (response.status >= 200 && response.status < 300) {
			return response.json()
		}
		// reject if the response is not 2xx
		throw new Error(response.statusText)
	})
	.then((user) => {
		// ...
	}) 
*/

function getApi(table) {
	if (process.env.NODE_ENV == "development") {
		return "https://phpstack-628703-4271081.cloudwaysapps.com/api/" + table + ".php"
	}
	return "/api/" + table + ".php"
}