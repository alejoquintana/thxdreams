<template>
	<div class="parallax bg-gradient">
		<div class="pt-8 px-8 px-lg-0 each-mx-w-m ">
			<div class="d-flex justify-center">
				<NuxtLink to="/">
					<img src="/imgs/logothx-blanco.png" class="my-8 img-shadow img-size" />
				</NuxtLink>
			</div>
		</div>

		<div class="banner banner-primary my-6">
			<div class="w-100 mx-w-m fs-3">
				<v-row align="center" no-gutters>
					<v-col cols="12" md="2">
						<p class="fs-6">
							OUR DREAM
						</p>
					</v-col>
					<v-col cols="12" md="10">
						<v-row no-gutters>
							<v-col cols="12" md="10">
								<v-row no-gutters>
									<v-col cols="12" md="3" class="px-1">
										<v-select v-model="accomplished_selected" @blur="consoleLog('accomplished')"
											name="accomplished" id="accomplished" label="DREAMS" variant="outlined"
											:items="accomplished_items" item-title="title" item-value="value" hide-details
											density="compact"></v-select>
									</v-col>
									<v-col cols="12" md="3" class="px-1">
										<v-select v-model="country_selected" @blur="consoleLog('country')" name="country"
											id="country" label="COUNTRIES" variant="outlined" :items="country_items"
											item-title="name" item-value="id" hide-details density="compact"></v-select>
									</v-col>
									<v-col cols="12" md="3" class="px-1">
										<v-select v-model="year_selected" @blur="consoleLog('year')" name="year" id="year"
											label="YEARS" variant="outlined" :items="year_items" hide-details
											density="compact"></v-select>
									</v-col>
									<v-col cols="12" md="3" class="px-1">
										<v-select v-model="sort_selected" @blur="consoleLog('sort')" name="sort" id="sort"
											label="SORT BY" variant="outlined" :items="sort_items" hide-details
											density="compact"></v-select>
									</v-col>
								</v-row>
							</v-col>
							<v-col cols="12" md="2" class="pa-0 pl-1">
								<v-btn rounded="md" color="white" block>
									FILTER
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
		<div class="gradient"></div>
	</div>
</template>

<script setup>

import { storeToRefs } from 'pinia'
const { years, countries } = storeToRefs(useHelpersStore());

function consoleLog(ee) {
	console.log("e", ee);
	console.log("accomplished_selected", accomplished_selected);
	console.log("country_selected", country_selected);
	console.log("year_selected", year_selected);
}

const accomplished_selected = ref('ALL')
const country_selected = ref(0)
const year_selected = ref("ALL")
const sort_selected = ref("NAME")
const accomplished_items = ref([
	{
		title: 'ALL',
		value: 'ALL'
	}, {
		title: 'ACHIEVED',
		value: 'ACHIEVED'
	}, {
		title: 'PENDING',
		value: 'PENDING'
	}
])
const sort_items = ref([
	{
		title: 'NAME',
		value: 'NAME'
	}, {
		title: 'LAST DREAM',
		value: 'LAST_DREAM'
	}, {
		title: 'YEAR',
		value: 'YEAR'
	}
])
const country_items = ref(countries)
const year_items = ref(years)

useHelpersStore().fetchFilters('countries')
useHelpersStore().fetchFilters('years')



</script>

<style lang="scss" scoped>
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