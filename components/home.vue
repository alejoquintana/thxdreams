<template>
	<ParallaxBackground gradient>
		<div class="pt-8 px-8 px-lg-0 each-mx-w-m ">
			<CarouselDreamers></CarouselDreamers>
			<p class="text-shadow text-white text-center ls fs-7--lg-up fs-5 fw-500--lg-up fw-500 mt-16"
				v-html="home.first_text"></p>
			<div class="d-flex-center my-6">
				<div class="bg-primary pa-3 rounded-pill">
					<v-icon color="white" icon="mdi-arrow-down" size="x-large">
					</v-icon>
				</div>
			</div>
		</div>
		<div class="px-6 each-mx-w-m">
			<h2 class="fs-10--md-up fs-8--sm text-white font-weight-bold text-center text-shadow">{{ home.how }}</h2>
			<ThxVideo></ThxVideo>

			<div class="px-8 py-6 mt-16 rounded-xl bg-primary-05">
				<h5 class="fs-5 fs-6--lg-up text-white fw-500 text-center text-shadow">
					{{ home.purchase_title }}
				</h5>
				<p class="fs-5 fs-4--sm-down text-white text-center mt-4 mt-lg-0 ls text-shadow">
					{{ home.purchase_text }}
				</p>
			</div>
		</div>
	</ParallaxBackground>
</template>

<script setup>
const languagesStore = useLanguagesStore()
languagesStore.fetchLanguages()
const { home } = storeToRefs(languagesStore);
</script>
