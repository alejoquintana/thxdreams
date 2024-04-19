<template>
	<div>

		<PageInConstruction></PageInConstruction>
		<div v-if="false" class="mx-w-m">
			<v-row v-if="dreamer" no-gutters class="my-16">
				<v-col cols="4" class="relative">
					<div v-if="dreamer.accomplished" class="bg-primary rounded-circle pa-1 absolute top-0 right-0">
						<v-icon icon="mdi-check" color="white" size="large"></v-icon>
					</div>
					<v-img aspect-ratio="1" cover class="dreamer-avatar rounded-circle border-primary" :src="getDreamerAvatar(dreamer.id)">
					</v-img>
				</v-col>
				<v-col cols="8" class="px-8">
					<div class="d-flex-between-end">
						<h1 class="fs-8 text-primary">
							{{ dreamer.name }}
						</h1>
						<span class="fs-5 fw-100 text-black">
							{{ dreamer.country }}, {{ dreamer.year }}
						</span>
					</div>
					<div v-html="dreamer.text" class="my-6"></div>
				</v-col>
				<v-col cols="12" class="mt-16">
					<v-responsive :aspect-ratio="16 / 9" class="">
						<iframe :src="dreamer.video" class="w-100 h-100" webkitallowfullscreen mozallowfullscreen allowfullscreen
						frameBorder="0"></iframe>
					</v-responsive>
				</v-col>
				<v-col cols="12" class="mt-16">
					<v-row >
						<v-col cols="3" class="" v-for="images in dreamer.images">
							<v-img aspect-ratio="1" cover class="" :src="'/imgs/sonadores_fotos/'+ images.id +'.jpg'">
							</v-img>
						</v-col>
					</v-row>
				</v-col>
			</v-row>
		</div>
		</div>
</template>

<script setup>
useHead({
	title: 'THX! - Dreamer'
})

const route = useRoute()
import { storeToRefs } from 'pinia'

const dreamersStore = useDreamersStore()
dreamersStore.fetchFullDreamer(route.path)

const { dreamer } = storeToRefs(dreamersStore);

</script>

<style lang="scss" scoped>
.dreamer-avatar{
	border: 5px solid white; 
  	outline: 5px solid $primary;
}
</style>