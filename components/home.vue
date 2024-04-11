<template>
	<div class="parallax bg-gradient" @click.shift="bgToggle">
		<div class="pt-8 px-8 px-lg-0 each-mx-w-m ">
			<!-- <div class="pt-8"></div> -->
			<div class="d-flex justify-center">
				<NuxtLink to="/">
					<img src="/imgs/logothx-blanco.png" class="my-8 img-shadow img-size" />
					<!-- <v-img cover src="/imgs/logothx-blanco.png" :max-width="mq('lgAndUp') ? 300 : 170" class="my-8"></v-img> -->
				</NuxtLink>
			</div>
			<component :is="[CarouselDreamersBACKUP,CarouselDreamers][bg%2]"></component>
			<p class="text-shadow text-white text-center ls fs-7--lg-up fs-5 fw-500--lg-up fw-500 mt-16">WE CREATE LIFE
				ENRICHING CONNECTIONS
				BETWEEN
				SHOPPERS AND FARMWORKERS</p>
			<div class="d-flex-center my-6">
				<div class="bg-primary pa-3 rounded-pill">
					<v-icon color="white" icon="mdi-arrow-down" size="x-large">
					</v-icon>
				</div>
			</div>
			<!-- <div style="height: 400px;"></div> -->
			<!-- <CarouselQuotes class="mb-8"></CarouselQuotes> -->
		</div>
		<div class="px-6 each-mx-w-m">
			<!-- <div class="my-2 mb-8">
				<v-img cover src="/imgs/logo_header_top-blanco.png" max-width="60" class=""></v-img>
			</div> -->
			<h2 class="fs-10 fs-xl--sm-down text-white font-weight-bold text-center text-shadow">How Thx! works</h2>
			<ThxVideo></ThxVideo>

			<div class="px-8 py-6 mt-16 rounded-xl bg-primary-05">
				<h5 class="fs-5 fs-6--lg-up text-white fw-500 text-center text-shadow">
					WATCH YOUR PURCHASE CHANGE A LIFE!
				</h5>
				<p class="fs-5 fs-4--sm-down text-white text-center mt-4 mt-lg-0 ls text-shadow">
					Every time you buy a product with the Thx! sticker, you are helping a farmworker to achieve their dream;
					and
					with Thx!, you know exactly where your contribution is directed.
				</p>
			</div>


		</div>
		<!-- <div class="py-10 px-8 each-mx-w-m">
			<div>
				<p class="fw-900 text-end" style="font-size: 56px;line-height: 3.6rem;height: 3rem;">
					About us
				</p>

				<p class="text-primary fw-500" style="line-height: 1.5rem">
					The core focus of Infinity Nuts lies in the exportation of premium quality dates, as evidenced by our
					operations.<br>The aforementioned date cultivars include Shahani dates, Pyaram, Mazafati, Kabkab, Zahedi,
					Medjol, and Bam.
				</p>
				<button class="bg-primary fw-300 px-5 py-3 rounded-lg mt-6">
					Read more
				</button>
			</div>
		</div> -->
		<div class="gradient"></div>
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
.gradient{
	width: 100%;
		height: 100px;
		background-image: linear-gradient(180deg, #00000000, rgba($primary, 1));
}
.bg-red {
	opacity: 0;
}

$linear: linear-gradient(0deg, rgba(black, 0) 85%, rgba($primary, 0.8) 100%);

.bg-gradient {
	background-image: url('/imgs/fondo-web-thx.jpg');
	background-color: $darker;
}

.img-size{
	max-width: 250px
}

@media (min-width: 900px) {
	.img-size{
		max-width: 400px
	}
}


.parallax {
	// min-height: 500px;
	background-attachment: fixed;
	background-position: top;
	// background-repeat: no-repeat;
	//background-color: rgba($color: #FFF, $alpha: 1.0) !important;
	background-size: cover;
	-webkit-background-size: cover;
			/* safari may need this */
}
@media (max-width: 960px) {
	.parallax {
		background-position: center;
	}
}
</style>