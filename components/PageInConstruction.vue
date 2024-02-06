<template>
	<div class="py-16 px-8 px-lg-0 each-mx-w-m parallax bg-2">
		<div class="mt-16"></div>
		<div class="d-flex justify-center">
			<NuxtLink to="/">
				<img src="/imgs/logothx-blanco.png" class="my-8 img-shadow" :style="`max-width:${mq('lgAndUp') ? 300 : 170}px`" />
				<!-- <v-img cover src="/imgs/logothx-blanco.png" :max-width="mq('lgAndUp') ? 300 : 170" class="my-8"></v-img> -->
			</NuxtLink>
		</div>
		<div class="text-center text-white">
			<h1 class="text-shadow first-upper fs-8">{{ title }}</h1>
			<h2 class="text-shadow fw-300 mb-8">This page is under construction!</h2>
			<v-btn variant="flat" to="/" class="px-5">
				Go home
			</v-btn>
		</div>
		<div class="mb-8"></div>
	</div>
</template>

<script setup>
const route = useRoute()
console.log("route", route);
const title = route.name.replace('-', ' ')
useHead({
	title: title.charAt(0).toUpperCase()
		+ title.slice(1) + ' - THX!'
})
</script>

<style lang="scss" scoped>
.parallax {
	background-image: url('/imgs/bg-2.png');
	min-height: 500px;
	background-attachment: fixed;
	background-position: bottom;
	background-repeat: no-repeat;
	background-size: cover;
	background-color: rgba($color: #FFF, $alpha: 1.0) !important;
}
</style>