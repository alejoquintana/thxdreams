<template>
	<ParallaxBackground gradient>
		<Transition name="fade">
			<modal v-if="showModal" @closeModal="closeModal()">

				<v-row v-if="dreamersStore.dreamer && dreamersStore.dreamer.id" style="max-width: 800px;" class="mt-4">
					<v-col cols="12">
						<v-responsive :aspect-ratio="16 / 9" class="ma-auto">
							<iframe :src="dreamersStore.dreamer.video" class="w-100 h-100 rounded-xl" webkitallowfullscreen
								mozallowfullscreen allowfullscreen frameBorder="0"></iframe>
						</v-responsive>
					</v-col>
					<v-col cols="12" class=" px-8">
						<div class="text-white d-flex justify-space-between align-end">
							<h1 class="">
								{{ dreamersStore.dreamer.name }}
							</h1>
							<span class="fw-00">
								{{ dreamersStore.dreamer.country }}, {{ dreamersStore.dreamer.year }}
							</span>
						</div>
						<div class="text-white pt-4 fs-3--lgAndUp" v-html="dreamersStore.dreamer.text"></div>
					</v-col>
					<v-col cols="12" class="my-8 d-flex justify-center">
						<v-row>
							<v-col cols="12" lg="4" v-for="img, i in dreamersStore.dreamer.images.slice(0, 3)" :key="i"
								style="max-height: 330px;">
								<v-img :src="useHelpersStore().getImagePath('sonadores_fotos/' + img.id + '.jpg')"
									class="h-100 rounded-xl" cover></v-img>
							</v-col>
						</v-row>
					</v-col>
					<v-col cols="12" class="d-flex justify-center">
						<a variant="outlined" href="https://www.instagram.com/thx_dreams/" size="sm"
							class="btn btn-outlined-white text-white">
							<p>
								<v-icon class="pe-2" icon="mdi-instagram" color="white"></v-icon>
								Visit as @thx_Dreams
							</p>
						</a>
					</v-col>
				</v-row>
			</modal>
		</Transition>
		<div class="banner banner-primary my-6">
			<div class="w-100 mx-w-m fs-3">
				<v-row align="center" no-gutters>
					<v-col cols="12" md="2" class="mb-4">
						<p v-if="useLanguagesStore().language == 'eng'" class="fs-6 text-center">
							OUR DREAMS
						</p>
						<p v-else class="fs-6 text-center">
							SOÑADORES
						</p>
					</v-col>
					<v-col cols="12" md="10" class="px-4 px-lg-0">
						<v-row no-gutters>
							<v-col cols="12" md="10">
								<v-row no-gutters>
									<v-col cols="6" md="3" class="px-1 mb-4">
										<v-select v-model="accomplished.selected" name="accomplished" id="accomplished"
											:label="accomplished.label" variant="outlined" :items="accomplished.items"
											item-title="title" item-value="value" hide-details density="compact"></v-select>
									</v-col>
									<v-col cols="6" md="3" class="px-1 mb-4">
										<v-select v-model="country.selected" name="country" id="country" :label="country.label"
											variant="outlined" :items="country.items" item-title="name" item-value="id"
											hide-details density="compact"></v-select>
									</v-col>
									<v-col cols="6" md="3" class="px-1 mb-4">
										<v-select v-model="year.selected" name="year" id="year" :label="year.label"
											variant="outlined" :items="year.items" hide-details density="compact"></v-select>
									</v-col>
									<v-col cols="6" md="3" class="px-1 mb-4">
										<v-select v-model="grower.selected" name="grower" id="grower" :label="grower.label"
											variant="outlined" :items="grower.items" hide-details density="compact"
											item-title="name" item-value="id"></v-select>
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
		<div class="relative w-100 mx-w-m fs-3 px-4 px-lg-0">
			<v-row v-if="dreamersStore.dreamers && dreamersStore.dreamers.length">
				<v-col cols="6" md="3" class="pa-2" v-for="dreamer,i in dreamersStore.dreamers" :key="i">
					<div class="relative" @click="goToDreamer(dreamer.id)">
						<div v-if="dreamer.accomplished" class="absolute bg-primary rounded-circle pa-1 right-0">
							<v-icon icon="mdi-check" color="white" size="25"></v-icon>
						</div>
						<div
							class="dreamer-box rounded-circle overflow-hidden border-primary border border-lg border-opacity-100 relative">
							<v-img :src="helpers.getImagePath('sonadores/' + dreamer.id + '.jpg')" class="w-100 img-hover"
								cover :aspect-ratio="1"></v-img>
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
			<div v-else>
				<p class="fw-bold fs-7 text-white text-shadow text-center">
					No results founded
				</p>
			</div>
		</div>
	</ParallaxBackground>

</template>

<script setup>
const dreamersStore = useDreamersStore()
const helpers = useHelpersStore()
dreamersStore.fetchDreamersShort()

useHelpersStore().fetchFilters('countries')
useHelpersStore().fetchFilters('years')
useHelpersStore().fetchFilters('growers')
function consoleLog(param) {
	console.log("param", param);
}

const showModal = ref(false);
// const dreamer_images = dreamersStore.dreamer.images.slice(0, 3)
function goToDreamer(id) {
	showModal.value = true
	dreamersStore.fetchFullDreamer('', id)
	//useRouter().push({ path: '/'+path })
}
function closeModal() {
	if (showModal.value = true) {
		showModal.value = false
	}
}

import { storeToRefs } from 'pinia'
const { years, countries, growers } = storeToRefs(useHelpersStore());
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
const grower_eng = ref({
	items: growers,
	selected: lang == 'eng' ? "ALL" : 'TODOS',
	label: lang == 'eng' ? "GROWERS" : 'GROWERS',
})

const accomplished = reactive(accomplished_eng)
const country = reactive(country_eng)
const year = reactive(year_eng)
const grower = reactive(grower_eng)

function goFetchDreamersShort() {
	console.log("grower.value.selected",grower.value.selected);
	dreamersStore.fetchDreamersShort({
		accomplished: accomplished.value.selected,
		country: country.value.selected,
		year: year.value.selected,
		grower: grower.value.selected,
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
	bottom:-25%;
	z-index: 999;
	position: absolute;
}
@media (max-width: 600px) {
	.country{
		height: 30%;
		bottom:-30%;
	}
}
.dreamer-box:hover{
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