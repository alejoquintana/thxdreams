<template>

	<div class="footer-container bg-primary py-8 pt-lg-8 px-lg-16 px-8">
		<v-row class="px-lg-16">
			<v-col cols="12" lg="4">
				<div class="d-flex flex-column" :class="{ 'align-center': mq('smAndDown') }">
					<NuxtLink :to="'/' + route.path" v-for="route, i in routes" :key="i" style="line-height: 2.3rem;"
						class="fw-700--md-up fw-300--sm fs-lg--sm-down text-white hover-1">
						{{ route.name }}
					</NuxtLink>
				</div>
				<div class="d-flex-center mb-16">
					<NuxtLink to="/contact-us">
						<button class="bg-white text-primary fs-lg--sm-down  fw-500 px-5 btn-block rounded-pill btn-sm mt-6">
							<span v-if="useLanguagesStore().language == 'eng'" class="text-primary">
								Subscribe to our newsletter
							</span>
							<span v-else class="text-primary">
								Subscribite a nuestro boletín informativo
							</span>
						</button>
					</NuxtLink>
				</div>
			</v-col>
			<v-col cols="12" lg="8">
				<v-row>
					<v-col cols="12" lg="6">
						<v-row class="text-white fs-3 fs-3--lg-up fw-300">
							<v-col cols="12" lg="12" v-for="contact,i in contacts" :key="i">
								<a :href="contact.href" target="_blank">
									<v-icon :icon="'mdi-'+contact.icon" size="large" color="white"></v-icon>
									{{ contact.info}}
								</a>
							</v-col>
							<!-- <v-col cols="12" lg="12">
								<v-icon icon="mdi-arrow-right" size="large" color="white"></v-icon>
								1725 Main St, Weston FL 33326
							</v-col>
							<v-col cols="6" lg="12">
								<v-icon icon="mdi-phone" size="large" color="white"></v-icon>
								+1 (754) 200 5755
							</v-col>
							<v-col cols="6" lg="12">
								<v-icon icon="mdi-printer" size="large" color="white"></v-icon>
								info@thxdreams.com
							</v-col> -->
						</v-row>

					</v-col>
					<v-col cols="12" lg="6">
						<div class="d-flex-center ga-3 mb-8">
							<NuxtLink :to="social.url" v-for="social, i in socials" :key="i" target="_blank" rel="noopener"
								class="pointer">
								<v-icon :icon="'mdi-' + social.icon" size="x-large" color="white" class="hover-3"></v-icon>
							</NuxtLink>
						</div>
						<div class="d-flex-center">
							<NuxtLink to="/">
								<img src="/imgs/logo_header_top-blanco.png" class="pointer w-100" style="max-width:150px" />
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
const { socials, contacts } = useHelpersStore();

const languagesStore = useLanguagesStore()
languagesStore.fetchLanguages()
const { routes } = storeToRefs(languagesStore);
</script>

<style lang="scss" scoped>
.footer-container {
	// background-image: linear-gradient(to bottom,
	// 		#cee5f3,
	// 		#f2f3f5);
}
</style>