import {
	defineStore
} from 'pinia'

export const useDreamersStore = defineStore('dreamers', {
	state: () => ({
		dreamers: [{
				name: 'facebook',
				url: 'https://www.facebook.com/thxdreams/',
				icon: 'facebook'
			},
			{
				name: 'instagram',
				url: 'https://www.instagram.com/thx_dreams/',
				icon: 'instagram'
			},
			{
				name: 'twitter',
				url: 'https://twitter.com/thx_dreams',
				icon: 'twitter'
			},
		],
	}),
	actions: {},
})