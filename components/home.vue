<template>
	<ParallaxBackground gradient>
			<div class="pt-8 px-8 px-lg-0 each-mx-w-m ">
				<!-- <div class="d-flex justify-center">
					<NuxtLink to="/">
						<img src="/imgs/logothx-blanco.png" class="my-8 img-shadow img-size" />
					</NuxtLink>
				</div> -->
				<CarouselDreamers></CarouselDreamers>
				<p class="text-shadow text-white text-center ls fs-7--lg-up fs-5 fw-500--lg-up fw-500 mt-16">Our Purpose is
					to
					provide authentic connections between shoppers and farmworkers while helping farmworkers TO ACHIEVE THEIR
					DREAMS, thus EMPOWERING BRANDS with enhanced meaning and value.</p>
				<div class="d-flex-center my-6">
					<div class="bg-primary pa-3 rounded-pill">
						<v-icon color="white" icon="mdi-arrow-down" size="x-large">
						</v-icon>
					</div>
				</div>
			</div>
			<div class="px-6 each-mx-w-m">
				<h2 class="fs-10 fs-xl--sm-down text-white font-weight-bold text-center text-shadow">How Thx! works</h2>
				<ThxVideo></ThxVideo>

				<div class="px-8 py-6 mt-16 rounded-xl bg-primary-05">
					<h5 class="fs-5 fs-6--lg-up text-white fw-500 text-center text-shadow">
						WATCH YOUR PURCHASE CHANGE A LIFE!
					</h5>
					<p class="fs-5 fs-4--sm-down text-white text-center mt-4 mt-lg-0 ls text-shadow">
						Every time you buy a product with the Thx! sticker, you are helping a farmworker to achieve their
						dream;
						and
						with Thx!, you know exactly where your contribution is directed.
					</p>
				</div>
			</div>
	</ParallaxBackground>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.gradient {
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

.img-size {
	max-width: 250px
}

@media (min-width: 900px) {
	.img-size {
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