<template>
	<div>
		<small>// banner</small>
		<h2>
			SEEDING FUTURES
		</h2>
		<p>Our Mission is to support farmworkers and their families further their education.</p>
		<p>We believe education is the gateway to a free, healthy, fair and prosperous society</p>
		<small>// image before</small>
		<h6>
			WHY
		</h6>
		<p>One of the greatest barriers for farmworkers and farmworker families to be able to move up socially is the disadvantage they have in accessing high quality educational support Lack of access to education for farmworker adults and barriers to accessing education for farmworker children leaves families with little hope for improving their livelihoods and progressing in the jobs.

	There is a need to provide accessible farmworker friendly education support, thus Seeding Futures.</p>
	
	<small>// banner</small>
	<h2>BECOME A CHANGEMAKER</h2>
	<p>There are many ways you can support farmworkers</p>

	<small>// banner</small>
	<h2>DO GOOD AND LOOK GOOD</h2>
	<p>With the purchase of our t-shirts, you are helping a farmworker get closer to fulfill his dream.</p>
	<button>Shop & Help</button>
</div>
</template>

<script setup>
const options = [
	{
		img: '',
		title:'MAKING A DIRECT DONATION',
		subtitle:'',
		buttons: [{ text: 'donate', icon: 'heart' }]
	},
	{
		img: '',
		title:'BECOMING AN AMBASSADOR / TEAM MEMBER',
		subtitle:'and helping us raise money with your contacts',
		buttons: [{ text: 'contact us', icon: 'mail' }]
	},
	{
		img: '',
		title:'SPREADING OUR PROGRAM',
		subtitle:'with your friends and colleagues, by sharing in social media',
		buttons: [
			{ icon: 'mail' },
		]
	},
]
const plans =[
	{
		img:'',
		class: 'A',
		title: 'LESSON PLAN',
		steps: [
			'Online School support lessons for farmworkers children',
			'English language 2 Tiers (Individual and group)',
			'English Technical Terms (Specific to agricultural technical terms)',
		],
	},
	{
		img:'',
		class: 'B',
		title: 'EQUIPMENT PLAN',
		steps: [
			'Provide Laptops, Chromebooks, Tablets and internet access',
			'Provide books, literature and other materials as necessary',
		],
	},
	{
		img:'',
		class: 'C',
		title: 'ADULT CERTIFICATE ACHIEVEMENT PLAN',
		steps: [
			'Support help to attain a certification level (Elementary, etc.)',
			'Support lessons',
			'Scholarships and sponsorships',
		],
	},
	{
		img:'',
		class: 'D',
		title: 'HIGHER EDUCATION',
		steps: [
			'Scholarships to help attain degrees or certifications',
			'Support lessons',
			'Follow up',
		],
	},
]
</script>

<style lang="scss" scoped></style>