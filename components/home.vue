<template>
	<div>
		<div class="py-16 px-8 px-lg-0 each-mx-w-m parallax" :class="'bg-'+ bg" @click.shift="bgToggle">
			<div class="pt-8"></div>
			<div class="d-flex justify-center">
				<NuxtLink to="/">
					<img src="/imgs/logothx-blanco.png" class="my-8 img-shadow" :style="`max-width:${mq('lgAndUp') ? 300 : 170}px`" />
					<!-- <v-img cover src="/imgs/logothx-blanco.png" :max-width="mq('lgAndUp') ? 300 : 170" class="my-8"></v-img> -->
				</NuxtLink>
			</div>
			<component :is="[CarouselDreamers,CarouselDreamersBACKUP][bg%2]"></component>
			<p class="text-shadow text-white text-center ls fs-7--lg-up fs-5 fw-500--lg-up fw-100 mt-16">We create life enriching connections
				between
				shoppers and<br>farmworkers</p>
			<div class="d-flex-center mt-6">
			<div  class="bg-primary pa-3 rounded-pill">
				<v-icon color="white" icon="mdi-arrow-down" size="x-large">
				</v-icon>
			</div>
			</div>
			<div style="height: 400px;"></div>
			<CarouselQuotes class="mb-8"></CarouselQuotes>
		</div>
		<div class="bg-primary pt-6 px-8 each-mx-w-m">
			<div class="my-2 mb-8">
				<v-img cover src="/imgs/logo_header_top-blanco.png" max-width="60" class=""></v-img>
			</div>
			<h2 class="fs-xxl font-weight-bold text-center">How it works?</h2>
			<ThxVideo></ThxVideo>
			<p class="mt-12 text-white text-center mb-16 ls" style="font-size: 1.35rem;">We create life enriching connections
				between shoppers and<br>farmworkers</p>

			<p class="fw-900 text-end" style="font-size: 56px;line-height: 3.6rem;height: 3rem;">
				About us
			</p>

		</div>
		<div class="py-10 px-8 bg-white each-mx-w-m">
			<div>

				<p class="text-primary fw-500" style="line-height: 1.5rem">
					The core focus of Infinity Nuts lies in the exportation of premium quality dates, as evidenced by our
					operations.<br>The aforementioned date cultivars include Shahani dates, Pyaram, Mazafati, Kabkab, Zahedi,
					Medjol, and Bam.
				</p>
				<button class="bg-primary fw-300 px-5 py-3 rounded-lg mt-6">
					Read more
				</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import CarouselDreamers from "@/components/carousel/CarouselDreamers.vue"
import CarouselDreamersBACKUP from "@/components/carousel/CarouselDreamersBACKUP.vue"
function bgToggle() {
	bg.value = ++bg.value % 3
}
const bg = ref(2)

</script>

<style lang="scss" scoped>
.bg-red {
	opacity: 0;
}
$linear: linear-gradient(0deg, rgba(black, 0) 85%, rgba($primary, 0.8) 100%);
.bg-0 {
	background-image: $linear, url('/imgs/bg-0.png');
}
.bg-1 {
	background-image: $linear, url('/imgs/bg-1.png');
}
.bg-2 {
	background-image: $linear, url('/imgs/bg-2.png');
}
.parallax {
	min-height: 500px;
	background-attachment: fixed;
	background-position: bottom;
	background-repeat: no-repeat;
	background-size: cover;
	background-color: rgba($color: #FFF, $alpha: 1.0) !important;
}
</style>