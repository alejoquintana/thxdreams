import { defineStore } from 'pinia'

export const useHelpersStore = defineStore('helpers', {
	state: () => ({
		contacts: [
			{
				text: 'CALL US',
				info: '+1(754) 200 5755',
				icon: 'phone'
			},
			{
				text: 'ADDRESS',
				info: '1725 Main St Weston FL 33326 ',
				icon: 'location'
			},
			{
				text: 'EMAIL',
				info: 'info @thxdreams.com',
				icon: 'mail'
			},
		],
		socials: [
			{
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
		routes: [
			{name:"HOME",path:'/'},
			{
				name: "OUR DREAMS",
				path: '/OurDreams'
			},
			{
				name: "ADVISORY BOARD",
				path: '/AdvisoryBoard'
			},
			{
				name: "SEEDING FUTURES",
				path: '/OurPrograms'
			},
			{
				name: "CONTACT-US",
				path: '/Contact'
			}
		]
	}),
	actions: {
	},
})