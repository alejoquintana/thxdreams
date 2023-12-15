import { defineStore } from 'pinia'

export const useHelpersStore = defineStore('helpers', {
	state: () => ({
		test:null,
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
		getTest() {
			fetch('http://localhost:3000/api/test.php',
			{
				method: "POST", // *GET, POST, PUT, DELETE, etc.
				mode: "cors", // no-cors, *cors, same-origin
				cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
				credentials: "same-origin", // include, *same-origin, omit
				headers: {
					"Content-Type": "application/json",
					// 'Content-Type': 'application/x-www-form-urlencoded',
				},
				redirect: "follow", // manual, *follow, error
				referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
				//body: JSON.stringify(data), // body data type must match "Content-Type" header
			}
			)
				.then((response) => {
					return response.json()
				})
				.then(({ data }) => {
					console.log("123",123);
					console.log("123",data);
					this.test = data
				})
				.catch((error) => console.log(error));
		},

	},
})