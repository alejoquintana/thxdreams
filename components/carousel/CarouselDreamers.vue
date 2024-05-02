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
				<DreamerInfo :dreamer="dreamer" :isModal="true"></DreamerInfo>
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
