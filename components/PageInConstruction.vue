<template>
	<ParallaxBackground gradient>

		<div class="py-16 px-8 px-lg-0 each-mx-w-m">
			<div class="mt-16"></div>
			<div class="text-center text-white">
				<h1 class="text-shadow first-upper fs-8">{{ title }}</h1>
				<h2 v-if="useLanguagesStore().language == 'eng'" class="text-shadow fw-300 mb-8">This page is under construction!</h2>
				<h2 v-else class="text-shadow fw-300 mb-8">Esta página está en construcción!</h2>
				<v-btn variant="flat" to="/" class="px-5">
					<span v-if="useLanguagesStore().language == 'eng'">Go home</span>
					<span v-else>Ir a inicio</span>
				</v-btn>
			</div>
			<div class="mb-8"></div>
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