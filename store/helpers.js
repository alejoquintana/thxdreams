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
				icon: 'map-marker'
			},
			{
				text: 'EMAIL',
				info: 'info @thxdreams.com',
				icon: 'mail'
			},
		],
		socials: [
			{
				name: 'instagram',
				url: 'https://www.instagram.com/thx_dreams/',
				icon: 'instagram'
			},
			{
				name: 'facebook',
				url: 'https://www.facebook.com/thxdreams/',
				icon: 'facebook'
			},
			{
				name: 'linkedin',
				url: 'https://www.linkedin.com/company/thxdreams',
				icon: 'linkedin'
			},
		],
		routesBACK: [
			{name:"HOME",path:'/'},
			{
				name: "Our dreams",
				path: '/OurDreams'
			},
			{
				name: "Advisory board",
				path: '/AdvisoryBoard'
			},
			{
				name: "Seeding futures",
				path: '/OurPrograms'
			},
			{
				name: "Contact-us",
				path: '/Contact'
			}
		],
		routes: [
			{
				name: "Our dreams",
				path: 'our-dreams'
			},
			{
				name: "Advisory board",
				path: 'advisory-board'
			},
			{
				name: "Seeding futures",
				path: 'seeding-futures'
			},
			{
				path: 'our-commitments',
				name: "Our commitments",
				nav: false
			},
			{
				path: 'careers',
				name: "Careers",
				nav: false
			},
			{
				path: 'contact-us',
				name: "Contact Us"
			},
		]
	}),
	getters: {
		navRoutes: (state) => {
			return state.routes.filter(route =>
			//{
				//console.log("route.nav",route.nav);
				//return
				route.nav == undefined
			//}
			)
		}
	},
	actions: {
		// getTest() {
		// 	fetch('/api/test.php')
		// 	.then(response => response.json())
		// 	.then(response => {this.test = response})
		// 	.catch((error) => console.log(error));
		// },

	},
})