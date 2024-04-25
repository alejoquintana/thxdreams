<template>
	<div class="item">
		<Transition name="width">
			<div style="overflow: hidden;">
				<div class="item-sizes px-10">
					<div class="relative" @mouseover="showPlay = true" @mouseleave="showPlay = false">
						<!-- <div class="w-100 h-100 absolute z-99 d-flex justify-center align-end text-white">
										<p class="px-4 pb-3 fs-3 fw-400 text-wrap text-center text-shadow">
											"His dream is to get his son a laptop for his professional development."
										</p>
									</div> -->
						<div class="w-100 h-100 absolute z-99 d-flex-between-center text-white">
							<p class="fs-5 w-100 text-center lh-5 fs-7--lg-up py-2 py-lg-4 px-4 px-lg-8 rounded-b-xl align-self-end"
								:style="`background-color: rgba(0,0,0,0.5);min-width: ${mq('lgAndUp') ? '50%' : '200px'};`">
								{{ language == 'eng' ? 'Meet' : 'Conoce a' }}
								<!-- <br /> -->
								<span class="text-capitalize nofirst-upper">{{ dreamer.name }}!</span>
							</p>
						</div>
						<Transition name="fade">
							<div @click="goToDreamer(dreamer.id)"
								class="cursor-pointer w-100 h-100 absolute z-99 d-flex-center-center text-white"
								v-if="showPlay">
								<div class="bg-white rounded-circle p-16">
									<v-icon icon="mdi-play" color="primary" size="80"></v-icon>
								</div>
								<!-- <v-btn @click="goToDreamer(dreamer.id)" variant="flat" color="white" text="primary"
									icon="mdi-arrow-right" rounded="pill">
									<v-icon icon="mdi-play" color="primary" size="80"></v-icon>
								</v-btn> -->
							</div>
						</Transition>
						<div class="overflow-hidden rounded-xl">
							<v-img :src="useHelpersStore().getImagePath('sonadores/' + dreamer.id + '.jpg')"
								class="w-100 img-hover" cover :aspect-ratio="20 / 15"></v-img>
						</div>
					</div>
				</div>
			</div>
		</Transition>
	</div>
</template>

<script setup>
const languagesStore = useLanguagesStore()
languagesStore.fetchLanguages()
const { language } = storeToRefs(languagesStore);

const showPlay = ref(false)
const emit = defineEmits(['goToDreamer'])
const props = defineProps(['dreamer'])
const dreamer = ref(props.dreamer)

function goToDreamer(e) {
	emit('goToDreamer',e)
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
	min-width: 480px;

	@media screen and (max-width: 500px) {
		min-height: 200px;
		min-width: 400px;
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