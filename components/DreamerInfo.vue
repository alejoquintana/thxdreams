<template>
	<div>
		<v-row v-if="dreamer && dreamer.id" class="mt-4" :class="{ 'is-modal': isModal,'text-shadow': !isModal }"
			>
			<v-col cols="12">
				<v-responsive :aspect-ratio="16 / 9" class="ma-auto">
					<iframe :src="dreamer.video" class="w-100 h-100 rounded-xl" webkitallowfullscreen mozallowfullscreen
						allowfullscreen frameBorder="0"></iframe>
				</v-responsive>
			</v-col>
			<v-col cols="12" class="px-md-8">
				<v-row>
					<v-col cols="12" md="8" class="pb-0">
						<h1 class="text-white text-center text-lg-left">
							{{ dreamer.name }}
						</h1>
					</v-col>
					<v-col cols="12" md="4" class="pt-0 d-flex justify-lg-end justify-center align-end">
						<span class="fw-00 text-white">
							<span v-if="dreamer.country">{{ dreamer.country }}</span>
							<span v-if="dreamer.country && dreamer.year && dreamer.year != 0">,
							</span>
							<span v-if="dreamer.year && dreamer.year != 0">{{ dreamer.year }}</span>
						</span>
					</v-col>
				</v-row>
				<div class="text-white pt-4 fs-3--lgAndUp" v-html="dreamer.text"></div>
			</v-col>
			<v-col cols="12" class="d-flex justify-center pt-0" v-if="dreamer.grower">
				<p class="text-white fs-4 fs-6--md fw-500">
					<span v-if="useLanguagesStore().language == 'eng'">Grower</span>
					<span v-else>Grower</span>: {{ dreamer.grower }}
				</p>
			</v-col>
			<v-col cols="12" class="my-4 d-flex justify-center">
				<v-row>
					<v-col cols="12" lg="4" v-for="img, i in dreamer.images.slice(0, 3)" :key="i" style="max-height: 330px;">
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
						<span v-if="language == 'eng'">
							Visit us @thx_Dreams
						</span>
						<span v-else>
							Visitanos @thx.gracias
						</span>
					</p>
				</a>
			</v-col>
		</v-row>
	</div>
</template>

<script setup>
const languagesStore = useLanguagesStore()
languagesStore.fetchLanguages()
const { language } = storeToRefs(languagesStore);

// const props = defineProps(['dreamer'])
defineProps(['dreamer','isModal'])
// const dreamer = ref(props.dreamer)
</script>

<style lang="scss" scoped>
.is-modal{
	max-width: 800px;
}
</style>