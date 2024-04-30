import { defineStore } from 'pinia'
import { useHelpersStore } from './helpers'


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
			let url = `${useHelpersStore().getApi('dreamer')}&path=${(id == 0 ? dreamerPath.substring(1) : id)}`
			await fetch(url)
				.then(response => response.json())
				.then(response => {
					this.dreamer = response
				})
				.catch((error) => console.log(error));
			return true
		},
		async fetchCarouselDreamers() {
			await fetch(useHelpersStore().getApi('dreamers') + '&section=home-carousel')
				.then(response => response.json())
				.then(response => {
					this.CarouselDreamers = response
				})
				.catch((error) => console.log(error));
			return true
		},
		async fetchDreamersShort(filters = null) {
			let url = useHelpersStore().getApi('dreamers_short')
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