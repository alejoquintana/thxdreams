<template>
	<div class="parallax bg-gradient">
		<div class="pt-4"></div>
		<div class="d-flex justify-center pt-16">
			<NuxtLink to="/">
				<img src="/imgs/logothx-blanco.png" class="my-8 img-shadow img-size" />
			</NuxtLink>
		</div>
		<slot></slot>

		<div v-if="gradient" class="mt-16 gradient"></div>
	</div>
</template>

<script setup>
const { gradient } = defineProps({
	gradient: Boolean,
})
</script>

<style lang="scss" scoped>
.img-size {
	max-width: 250px
}

@media (min-width: 900px) {
	.img-size {
		max-width: 400px
	}
}
.gradient {
	width: 100%;
	height: 100px;
	background-image: linear-gradient(180deg, #00000000, rgba($primary, 1));
}

.bg-gradient {
	background-image: url('/imgs/fondo-web-thx.jpg');
	background-color: $darker;
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
		background-position: right;
	}
}
</style>