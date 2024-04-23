<template>
	<ParallaxBackground gradient>
		<div v-if="advisoryBoard.first_title && advisoryBoard.first_subtitle" class="banner banner-primary my-6">
			<div class="mx-w-m w-100">
				<h1>{{ advisoryBoard.first_title }}</h1>
				<p>{{ advisoryBoard.first_subtitle }}</p>
			</div>
		</div>
		<div class="advisors-container mx-w-m" v-if="advisors && advisors.length">
			<div v-for="advisor, i in advisors" :key="i" class="inner-border">
				<div class=" rounded-circle overflow-hidden">

					<v-img class="scale-image" :src="useHelpersStore().getImagePath('directorio/' + advisor.id + '.jpg')"
						aspect-ratio="1"></v-img>
				</div>
			</div>
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
	// max-width: 1500px;
	// margin: auto;
	display: flex;
	justify-content: space-between;
}
.scale-image {
// border: 2px solid $primary;
	transform: scale(1.1);
}
.inner-border{
	max-width: 150px;
	width: 100%;
}
.inner-border{
	transition: all 500ms;
}
.inner-border:hover{
// border: 2px solid $primary;
	max-width: 250px;
}
.border-primary-bottom {
	border-bottom: 2px solid $primary;
}
</style>