<template>
	<div class="footer-container py-16 px-lg-16 px-8">
		<v-row class="px-lg-16">
			<v-col cols="12" lg="4">
				<client-only></client-only>
				<div class="d-flex flex-column" :class="{ 'align-center': mq('smAndDown') }">
					<NuxtLink :to="'/' + route.path" v-for="route, i in routes" :key="i" style="line-height: 2.3rem;"
						class="fw-700--sm-down fs-xl--sm-down text-primary hover-1">
						{{ route.name }}
					</NuxtLink>
				</div>
				<div class="d-flex-center mb-16">
					<button class="bg-primary fw-500 px-5 btn-block rounded-pill mt-6" style="font-size: 1.35rem;">
						Subscribe to our newsletter
					</button>
				</div>
			</v-col>
			<v-col cols="12" lg="8">
				<v-row>
					<v-col cols="12" lg="6">
						<v-row class="text-primary fs-3 fs-3--lg-up fw-300">
							<v-col cols="12" lg="12">
								<v-icon icon="mdi-arrow-right" size="large" color="primary"></v-icon>
								345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345
							</v-col>
							<v-col cols="6" lg="12">
								<v-icon icon="mdi-phone" size="large" color="primary"></v-icon>
								(123) 456-7890
							</v-col>
							<v-col cols="6" lg="12">
								<v-icon icon="mdi-printer" size="large" color="primary"></v-icon>
								(123) 456-7890
							</v-col>
						</v-row>

					</v-col>
					<v-col cols="12" lg="6">
						<div class="d-flex-center ga-3 my-8">
							<NuxtLink :to="social.url" v-for="social, i in socials" :key="i" target="_blank" rel="noopener" class="pointer">
								<v-icon :icon="'mdi-' + social.icon" size="x-large" color="primary" class="hover-3"></v-icon>
							</NuxtLink>
						</div>
						<div class="d-flex-center">
							<NuxtLink to="/">
								<img src="/imgs/logo_header_top.png" class="pointer w-100" style="max-width:100px" />
								<!-- <v-img :max-width="100" cover src="/imgs/logo_header_top.png" class="pointer"></v-img> -->
							</NuxtLink>
						</div>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</div>
</template>

<script setup>
//import { useHelpersStore as helpers } from '@/store/helpers.js'
const socials = useHelpersStore().socials;
const contacts = useHelpersStore().contacts;
const routes = useHelpersStore().routes;
// const routes = [
// 	{ path: 'about-us', name: "About US" },
// 	{ path: 'our-commitments', name: "Our commitments" },
// 	{ path: 'careers', name: "Careers" },
// 	{ path: 'contact-us', name: "Contact Us" },
// ]
</script>

<style lang="scss" scoped>
.footer-container {
	background-image: linear-gradient(to bottom,
			#cee5f3,
			#f2f3f5);
}
</style>