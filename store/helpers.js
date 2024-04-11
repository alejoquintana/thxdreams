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
			// {
			// 	path: 'about-us',
			// 	name: "About US"
			// },
			{
				path: 'our-commitments',
				name: "Our commitments"
			},
			{
				path: 'careers',
				name: "Careers"
			},
			{
				path: 'contact-us',
				name: "Contact Us"
			},
		]
	}),
	actions: {
		// getTest() {
		// 	fetch('/api/test.php')
		// 	.then(response => response.json())
		// 	.then(response => {this.test = response})
		// 	.catch((error) => console.log(error));
		// },

	},
})