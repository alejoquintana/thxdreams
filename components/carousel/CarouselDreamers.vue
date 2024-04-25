<template>
	<!-- <v-btn @click="changescroller">scroller</v-btn> -->
	<div class="relative d-flex-center not-mx-w-m">
		<div class="grid-item main">
			<div class="items" ref="slider">
				<DreamerCard v-for="(dreamer, i) in dreamersStore.CarouselDreamers" :key="i" :dreamer="dreamer"
					@goToDreamer="goToDreamer">
				</DreamerCard>
			</div>
		</div>
		<Transition name="fade">
			<modal v-if="showModal" @closeModal="closeModal()">
				<v-row v-if="dreamer && dreamer.id" style="max-width: 800px;" class="mt-4">
					<v-col cols="12">
						<v-responsive :aspect-ratio="16 / 9" class="ma-auto">
							<iframe :src="dreamer.video" class="w-100 h-100 rounded-xl" webkitallowfullscreen
								mozallowfullscreen allowfullscreen frameBorder="0"></iframe>
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
							<v-col cols="12" lg="4" v-for="img, i in dreamer.images.slice(0, 3)" :key="i"
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
			</modal>
		</Transition>
	</div>
</template>

<script setup>
const forceUpdate = ref(0);
const scroller = ref(100);

const dreamersStore = useDreamersStore()
const languagesStore = useLanguagesStore()

dreamersStore.fetchCarouselDreamers()
languagesStore.fetchLanguages()

const { dreamer } = storeToRefs(dreamersStore);
const { language } = storeToRefs(languagesStore);

const forceRerender = () => {
	forceUpdate.value += 1;
};
//const carousel = ref(null);
onMounted(() => {
	forceRerender("moun");
	if (!slider.value || !slider.value) return
	var autoScrolling = setInterval(() => {
		if (!slider.value || !slider.value) return
		slider.value.scroll({
			top: 0,
			left: slider.value.scrollLeft + scroller.value,
			behavior: "smooth",
		});
	}, 1000);
	slider.value.addEventListener('mousedown', (e) => {
		clearInterval(autoScrolling);
		isDown = true;
		startX = e.pageX - slider.value.offsetLeft;
		scrollLeft = slider.value.scrollLeft;
	});
	slider.value.addEventListener('mouseleave', () => {
		isDown = false;
	});
	slider.value.addEventListener('mouseup', () => {
		isDown = false;
	});
	slider.value.addEventListener('mousemove', (e) => {
		if (!isDown) return;
		e.preventDefault();
		const x = e.pageX - slider.value.offsetLeft;
		const walk = (x - startX) * 3; //scroll-fast
		slider.value.scrollLeft = scrollLeft - walk;
	});
});
const slider = ref(null);
let isDown = false; let startX; let scrollLeft;
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
</script>

<style lang="scss" scoped>
.grid-item {
	padding: 3.5em 1em;
	font-size: 1em;
	font-weight: 700;
	width: 100vw;

	// @media screen and (min-width: 500px) {
	// 	width: 70vw;
	// 	padding: 0 30vw;
	// 	-webkit-mask-image: -webkit-linear-gradient(0deg,
	// 			rgba(0, 0, 0, 0) 0%,
	// 			rgba(0, 0, 0, 1) 3%,
	// 			rgba(0, 0, 0, 1) 97%,
	// 			rgba(0, 0, 0, 0) 100%);
	// }
}

.main {
	color: lighten(blue, 25%);
	grid-area: main;
	padding: 0;
}

.items {
	position: relative;
	width: 100%;
	overflow-x: scroll;
	overflow-y: hidden;
	white-space: nowrap;
	transition: all 0.2s;
	will-change: transform;
	user-select: none;
}

.item-sizes {
	min-height: 250px;
	min-width: 500px;

	@media screen and (max-width: 500px) {
		min-height: 200px;
		min-width: 350px;
	}

}

.item {
	//cursor: pointer;
	display: inline-block;
}

.item:hover {
	.img-hover {
		transform: scale(1.2);
	}
}

.img-hover {
	transition: all 500ms;
}

/* width */
.items::-webkit-scrollbar {
	height: 0px;
}

.width-enter-active {
	transition: opacity 0.5s ease 0.5s;
}

.width-leave-active {
	transition: opacity 0.5s ease;
}

.width-enter-from,
.width-leave-to {
	opacity: 0;
}

// .width-enter-active {
//   animation: width-in 1s linear;
// }
// .width-leave-active {
//   animation: width-in 1s linear reverse;
// }
// @keyframes width-in {
// 	0% {
// 		width: 0;
// 	}
// 	50% {
// 		width: 350px;
// 	}
// }
.filter {
	transition: all 300ms;
	max-width: 50px;
	border: 0px $primary solid;
	width: 100%
}

.filter.selected {
	max-width: 65px;
	border: 5px $primary solid;
	//transform: scale(1.5);
}
</style>
