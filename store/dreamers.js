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
		async fetchFullDreamer(dreamerPath,id = 0) {
			let url = `${getApi('dreamer')}?path=${(id == 0 ? dreamerPath.substring(1) : id)}`
			await fetch(url)
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
				})
				.catch((error) => console.log(error));
			return true
		},
		async fetchDreamersShort(filters = null) {
			let url = getApi('dreamers_short') + '?v=' + new Date().getTime()
			if (filters) {
				url = url + `&accomplished=${filters.accomplished}&country=${filters.country}&year=${filters.year}&grower=${filters.grower}`
			}
			await fetch(url)
				.then(response => {
					let json = response.json()
					return json
				})
				.then(response => {
					this.dreamers = response.dreamers
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
	// if (process.env.NODE_ENV == "development") {
		https://thxdreams.com/api/dreamers.php
		// return "https://thxdreams.com/api/" + table + ".php"
		return "https://phpstack-628703-4271081.cloudwaysapps.com/api/" + table + ".php"
	// }
	return "/api/" + table + ".php"
}