<template>
	<ParallaxBackground gradient>
		<div class="px-4 px-lg-0">
			<div class="py-8 pb-16 px-4 px-lg-16 mx-w-m bg-white rounded-xl">
				<h1 class="text-center">
					Join Thx!: Create a Lasting Social Impact
				</h1>
				<br>

				<p>
					Are you a passionate individual driven to make a meaningful difference in the lives of others? At Thx, we
					seek
					purpose-driven individuals to join our mission of empowering farmworkers and creating a more just and
					equitable
					world. You're joining a global community that drives change and provides opportunities.
				</p>
				<br>

				<p>
					We want you on our team! Visit our LinkedIn page to stay updated on future job openings:
					<a href="https://www.linkedin.com/company/thxdreams/" target="_blank" class="classic-a"
						rel="noopener noreferrer">https://www.linkedin.com/company/thxdreams/</a>
				</p>
				<br>
				<br>

				<h3>
					Our Values-Driven Recruitment Process
				</h3>
				<br>
				<p>
					At Thx, we believe that our people are our greatest asset. That's why we're committed to fostering a
					diverse,
					equitable, and inclusive workplace. Our recruitment process reflects these values and ensures we attract
					and
					hire
					the best talent who aligns with our mission and principles.
				</p>
				<br>
				<p>
					Thank you for your interest in Thx. Together, let's make a lasting impact on the world.
				</p>
				<br>
				<br>
				<p>
					Stay connected!
				</p>
			</div>
		</div>
	</ParallaxBackground>
</template>

<script setup>
const route = useRoute()
const title = route.name.replace('-', ' ')
useHead({
	title: title.charAt(0).toUpperCase()
		+ title.slice(1) + ' - THX!'
})
</script>