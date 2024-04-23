<template>
	<ParallaxBackground gradient>
		<div v-if="advisoryBoard.first_title && advisoryBoard.first_subtitle" class="banner banner-primary my-6">
			<div class="mx-w-m w-100">
				<h1>{{ advisoryBoard.first_title }}</h1>
				<p>{{ advisoryBoard.first_subtitle }}</p>
			</div>
		</div>
		<div class="mx-w-m">
			<v-row v-if="advisors && advisors.length">
				<v-col cols="12" md="4" v-for="advisor,i in advisors" :key="i">
					<div class="bg-white pa-4 rounded-xl text-primary">
						<div class="text-primary border-primary-bottom">
							<span class="fs-4">
								{{ advisor.name }}
							</span>
						</div>
						<div>
							<span class="text-primary fw-500">
								{{ advisor.position }}
							</span>
							<div v-html="advisor.text" class="text-primary">
							</div>
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
.border-primary-bottom{
	border-bottom: 2px solid $primary;
}
</style>