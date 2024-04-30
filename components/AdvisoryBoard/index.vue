<template>
	<ParallaxBackground gradient>
		<div v-if="advisoryBoard.first_title && advisoryBoard.first_subtitle"
			class="banner banner-primary my-6 px-5 px-lg-0">
			<div class="mx-w-m w-100">
				<h1>{{ advisoryBoard.first_title }}</h1>
				<p>{{ advisoryBoard.first_subtitle }}</p>
			</div>
		</div>
		<div class="advisors-container px-5 px-lg-0">
			<v-row v-if="advisors && advisors.length">
				<v-col cols="12" lg="3" md="4" sm="6" v-for="advisor, i in advisors" :key="i">
					<div
						class="bg-white pa-4 rounded-xl text-primary box-shadow h-100 d-flex flex-column justify-space-between">
						<div class="">
							<div class="text-primary border-primary-bottom">
								<span class="fs-5">
									{{ advisor.name }}
								</span>
							</div>
							<div class="text-primary fs-3 fw-bold py-3">
								{{ advisor.position }}
							</div>
							<div v-html="advisor.text" class="text-primary"></div>
						</div>
						<div class="d-flex justify-end">
							<v-responsive :aspect-ratio="1" class="" style="max-width: 163px;">
								<!-- <div style="max-width: 163px;"> -->
									<v-img :src="'/img/directorio/' + advisor.id + '.jpg'"
										class="h-100 rounded-circle border-primary border-lg border-opacity-100" cover></v-img>
								<!-- </div> -->
							</v-responsive>
							<!-- <v-img :src="'https://thxdreams.com/img/directorio/' + 9 + '.jpg'"
								class="h-100 rounded-circle border-primary border-lg border-opacity-100"
								style="max-width: 163px" cover></v-img>
							<v-img :src="'https://thxdreams.com/img/directorio/' + 10 + '.jpg'"
								class="h-100 rounded-circle border-primary border-lg border-opacity-100"
								style="max-width: 163px" cover></v-img> -->
						</div>
					</div>
				</v-col>
			</v-row>
		</div>
	</ParallaxBackground>
</template>

<script setup>
import { storeToRefs } from 'pinia'
const languagesStore = useLanguagesStore()
languagesStore.fetchLanguages()
const advisorsStore = useAdvisorsStore()
advisorsStore.fetchAdvisors()
const { advisors } = storeToRefs(advisorsStore);


const { advisoryBoard } = storeToRefs(languagesStore);
</script>

<style lang="scss" scoped>
.advisors-container {
	max-width: 1500px;
	margin: auto;
}

.border-primary-bottom {
	border-bottom: 2px solid $primary;
}
</style>