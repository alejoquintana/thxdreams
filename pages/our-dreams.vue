<template>
	<div class="parallax bg-gradient" @click.shift="bgToggle">
		<div class="pt-8 px-8 px-lg-0 each-mx-w-m ">
			<div class="d-flex justify-center">
				<NuxtLink to="/">
					<img src="/imgs/logothx-blanco.png" class="my-8 img-shadow img-size" />
				</NuxtLink>
			</div>
		</div>
		<div class="px-6 each-mx-w-m">
			OUR DREAM
			<!-- Cumplidos / No cumplidos -->
			<select name="accomplished" id="accomplished">
				<option value="accomplished">Accomplished</option>
				<option value="no_accomplished">Not accomplished</option>
			</select>

			<!-- Pais -->
			<select name="country" id="country">
				<option v-for="year in 10" :key="year" value="accomplished">Accomplished</option>
			</select>

			<!-- Anio -->
			<select name="year" id="year">
				<option value="accomplished">Accomplished</option>
				<option value="no_accomplished">Not accomplished</option>
			</select>

			<!-- d) Ultimo sueno/Nombre/Anio - Este cambienlo por "Socio" / "Partner" (y en el administrador tenemos que agregar una casilla para incluir esta info, que seria el nombre de la empresa de nuestro socio y su logo)
			<select name="done" id="done">
				<option value="accomplished">Accomplished</option>
				<option value="no_accomplished">Not accomplished</option>
			</select> -->
		</div>
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