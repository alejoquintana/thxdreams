<template>
	<ParallaxBackground gradient>
		contact
	</ParallaxBackground>
</template>

<script setup>
import { storeToRefs } from 'pinia'
const languagesStore = useLanguagesStore()
languagesStore.fetchLanguages()

const { seedingFutures } = storeToRefs(languagesStore);
console.log("seedingFutures.value", seedingFutures);

</script>

<style lang="scss" scoped>
.banner {
	padding: 24px 0;
	display: flex;
	justify-content: center;
}

.banner-primary {
	background-color: $primary;
	color: #fff;
}

.banner-white {
	background-color: #fff;
	color: $primary;
}

.gradient {
	width: 100%;
	height: 100px;
	background-image: linear-gradient(180deg, #00000000, rgba($primary, 1));
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