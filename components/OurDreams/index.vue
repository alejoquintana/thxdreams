<template>
	<ParallaxBackground gradient>
		<div class="banner banner-primary my-6">
			<div class="w-100 mx-w-m fs-3">
				<v-row align="center" no-gutters>
					<v-col cols="12" md="2">
						<p v-if="useLanguagesStore().language == 'eng'" class="fs-6">
							OUR DREAMS
						</p>
						<p v-else class="fs-6">
							SOÑADORES
						</p>
					</v-col>
					<v-col cols="12" md="10">
						<v-row no-gutters>
							<v-col cols="12" md="10">
								<v-row no-gutters>
									<v-col cols="12" md="3" class="px-1">
										<v-select v-model="accomplished.selected" name="accomplished" id="accomplished" :label="accomplished.label" variant="outlined"
											:items="accomplished.items" item-title="title" item-value="value" hide-details
											density="compact"></v-select>
									</v-col>
									<v-col cols="12" md="3" class="px-1">
										<v-select v-model="country.selected" name="country"
											id="country" :label="country.label" variant="outlined" :items="country.items"
											item-title="name" item-value="id" hide-details density="compact"></v-select>
									</v-col>
									<v-col cols="12" md="3" class="px-1">
										<v-select v-model="year.selected" name="year" id="year"
											:label="year.label" variant="outlined" :items="year.items" hide-details
											density="compact"></v-select>
									</v-col>
									<v-col cols="12" md="3" class="px-1">
										<v-select v-model="sort.selected" name="sort" id="sort"
											:label="sort.label" variant="outlined" :items="sort.items" hide-details
											density="compact"></v-select>
									</v-col>
								</v-row>
							</v-col>
							<v-col cols="12" md="2" class="pa-0 pl-1">
								<v-btn rounded="md" color="white" block @click="goFetchDreamersShort">
									<span v-if="useLanguagesStore().language == 'eng'">
										FILTER
									</span>
									<span v-else>
										FILTRAR
									</span>
								</v-btn>
							</v-col>
						</v-row>
					</v-col>
				</v-row>
				<!-- d) Ultimo sueno/Nombre/Anio - Este cambienlo por "Socio" / "Partner" (y en el administrador tenemos que agregar una casilla para incluir esta info, que seria el nombre de la empresa de nuestro socio y su logo)
					<select name="done" id="done">
						<option value="accomplished">Accomplished</option>
						<option value="no_accomplished">Not accomplished</option>
					</select> -->
			</div>
		</div>
		<div class="w-100 mx-w-m fs-3">
			<v-row>
				<v-col cols="6" md="3" v-for="dreamer in dreamersStore.dreamers">
					<div class="relative">
						<div v-if="dreamer.accomplished" class="absolute bg-primary rounded-circle pa-1 right-0">
							<v-icon icon="mdi-check" color="white" size="25"></v-icon>
						</div>
						<div
							class="dreamer-box rounded-circle overflow-hidden border-primary border border-lg border-opacity-100 relative">
							<v-img :src="'imgs/sonadores/' + dreamer.id + '.jpg'" class="w-100 img-hover" cover
								:aspect-ratio="1"></v-img>
							<div class="country d-flex align-center flex-column">
								<span class="fw-bold fs-4">
									{{ dreamer.name }}
								</span>
								<span class="">
									{{ dreamer.country }}
								</span>
							</div>
						</div>
					</div>
					<!-- {{ dreamer }} -->
				</v-col>
			</v-row>
		</div>
	</ParallaxBackground>
</template>

<script setup>
const dreamersStore = useDreamersStore()
dreamersStore.fetchDreamersShort()

useHelpersStore().fetchFilters('countries')
useHelpersStore().fetchFilters('years')
function consoleLog(param) {
	console.log("param", param);
}

import { storeToRefs } from 'pinia'
const { years, countries } = storeToRefs(useHelpersStore());
const lang = useLanguagesStore().language
const accomplished_eng = ref({
	items: [{
		title: lang == 'eng' ? 'ALL' : 'TODOS',
		value: 'ALL'
	}, {
		title: lang == 'eng' ? 'ACHIEVED' : 'CUMPLIDO',
		value: 'ACHIEVED'
	}, {
		title: lang == 'eng' ? 'PENDING' : 'PENDIENTE',
		value: 'PENDING'
	}],
	selected: 'ALL',
	label: lang == 'eng' ? "DREAMS" : 'SUEÑOS',
})
const country_eng = ref({
	items: countries,
	selected: 0,
	label: lang == 'eng' ? "COUNTRIES" : 'PAISES',
})
const year_eng = ref({
	items: years,
	selected: lang == 'eng' ? "ALL" : 'TODOS',
	label: lang == 'eng' ? "YEARS" : 'AÑOS',
})
const sort_eng = ref({
	items: [{
		title: lang == 'eng' ? 'NAME' : 'NOMBRE',
		value: 'NAME'
	}, {
		title: lang == 'eng' ? 'LAST DREAM' : 'ULTIMO SUEÑO',
		value: 'LAST_DREAM'
	}, {
		title: lang == 'eng' ? 'YEAR' : 'AÑO',
		value: 'YEAR'
	}],
	selected: "NAME",
	label: lang == 'eng' ? "SORT" : 'ORDENAR',
})
const accomplished = reactive(accomplished_eng)
const country = reactive(country_eng)
const year = reactive(year_eng)
const sort = reactive(sort_eng)

function goFetchDreamersShort() {
	dreamersStore.fetchDreamersShort({
		accomplished: accomplished.value.selected,
		country: country.value.selected,
		year: year.value.selected,
		sort: sort.value.selected,
	})
}
</script>

<style lang="scss" scoped>

.country{
	transition: all 300ms;
	background-color: rgba($primary, 0.5);
	color: white;
	width: 100%;
	height: 25%;
	z-index: 999;
	position: absolute;
}
.country{
	bottom:-25%
}
.dreamer-box:hover{
	.name{
		top:0
	}
	.country{
		bottom:0
	}
}

:deep(.v-field) {
	font-size: 0.875rem !important;
}

:deep(.v-btn) {
	height: calc(var(--v-btn-height) + 4px) !important;
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