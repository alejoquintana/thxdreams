<template>
	<!-- <v-row no-gutters class="mb-8">
		<v-col v-for="(filter, i) in filters" :key="i" class="d-flex flex-column align-center" >
			<div class="pa-3 rounded-circle filter bg-white pointer" :class="selected == filter.type?'selected':''" @click="filterDreamers(filter.type)">
				<v-img :src="'imgs/filters/' + filter.icon + '.png'" alt="" aspect-ratio="1" cover></v-img>
			</div>
			<p class="text-white fs-sm text-center mt-2 fw-500 pointer text-shadow"  @click="filterDreamers(filter.type)">
				{{ filter.title }}
			</p>
		</v-col>
	</v-row> -->
	<div class="relative d-flex-center not-mx-w-m">
		<div class="grid-item main">
			<div class="items" ref="slider">
				<div v-for="(dreamer, i) in filteredDreamers" :key="i" class="item">
					<Transition name="width">
						<div v-if="dreamer.type == selected || selected == ''" style="overflow: hidden;">
							<div class="item-sizes px-12">
								<div class="relative" @click="goToDreamer(dreamer.path)">
									<div class="w-100 h-100 absolute z-99 d-flex-between-center text-white">
										<p class="lh-5 py-2 py-lg-4 px-4 px-lg-8 rounded-e-xl"
											:style="`background-color: rgba(0,0,0,0.5);min-width: ${mq('lgAndUp') ? 200 : 140}px;`">
											<span class="fs-4 fw-300">Meet</span>
											<br />
											<span class="fs-6 fs-7--lg-up text-capitalize firsst-upper">{{ dreamer.name }}!</span>
										</p>
										<!-- <div class="pr-2 mt-14">
											<v-btn variant="flat" color="white" text="primary" icon="mdi-arrow-right" rounded="pill">
												<v-icon icon="mdi-arrow-right" color="primary"></v-icon>
											</v-btn>
											<br />
											<p class="mt-2 fs-sm-2 fw-700" style="line-height: 1rem">
												Found<br />more here
											</p>
										</div> -->
									</div>
									<div class="w-100 h-100 absolute z-99 d-flex-between-end text-white">
										<p class="lh-5 py-2 py-lg-4 px-4 px-lg-8 rounded-e-xl"
											:style="`background-color: rgba(0,0,0,0.5);min-width: ${mq('lgAndUp') ? 200 : 140}px;`">
											<span class="fs-4 fw-300">Meet</span>
											<br />
											<span class="fs-5 fs-7--lg-up first-upper">{{ dreamer.name }}!</span>
										</p>
										<!-- <div class="pr-2 mt-14">
											<v-btn variant="flat" color="white" text="primary" icon="mdi-arrow-right" rounded="pill">
												<v-icon icon="mdi-arrow-right" color="primary"></v-icon>
											</v-btn>
											<br />
											<p class="mt-2 fs-sm-2 fw-700" style="line-height: 1rem">
												Found<br />more here
											</p>
										</div> -->
									</div>
									<div class="overflow-hidden rounded-xl">
										<v-img :src="'imgs/sonadores/' + dreamer.img" class="w-100 img-hover" cover
											:aspect-ratio="20 / 15"></v-img>
									</div>
								</div>
							</div>
						</div>
					</Transition>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
const forceUpdate = ref(0);
const dreamersStore = useDreamersStore()
dreamersStore.fetchCarouselDreamers()
const forceRerender = () => {
	forceUpdate.value += 1;
};
//const carousel = ref(null);
onMounted(() => {
	forceRerender("moun");
	if (mq("lgAndUp")) {
		var autoScrolling = setInterval(() => {
			slider.value.scroll({
				top: 0,
				left: slider.value.scrollLeft + 200,
				behavior: "smooth",
			});
		}, 4000);
	}
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
		//console.log(walk);
	});
});
const slider = ref(null);
let isDown = false;
let startX;
let scrollLeft;

const filters = [
	{ type: "home", title: "Home improvement", icon: "home" },
	{ type: "education", title: "Education", icon: "education" },
	{ type: "entrepreneur", title: "Entrepreneurship", icon: "economy" },
];

const dreamers = [
	{ quote:"His dream is to get his son a laptop for his professional development.",type: "home", name: "Jose", img: "75.jpg" },
	{ quote:"His dream is to get his son a laptop for his professional development.",type: "education", name: "Valeria", img: "71.jpg" },
	{ quote:"His dream is to get his son a laptop for his professional development.",type: "entrepreneur", name: "Marcelo", img: "73.jpg" },
	{ quote:"His dream is to get his son a laptop for his professional development.",type: "education", name: "Amalia", img: "56.jpg" },
	{ quote:"His dream is to get his son a laptop for his professional development.",type: "home", name: "Luis", img: "66.jpg" },
	{ quote:"His dream is to get his son a laptop for his professional development.",type: "entrepreneur", name: "Elena", img: "134.jpg" },
	{ quote:"His dream is to get his son a laptop for his professional development.",type: "home", name: "Jorge", img: "76.jpg" },
	{ quote:"His dream is to get his son a laptop for his professional development.",type: "education", name: "Vicente", img: "111.jpg" },
];

const filteredDreamers = ref([]);
filteredDreamers.value = dreamers;
const selected = ref('')
function filterDreamers(type) {
	selected.value = selected.value == type ? '' : type
}

function goToDreamer(path) {
	console.log("path",path);
}
</script>

<style lang="scss" scoped>
.grid-item {
	width: 100vw;
	padding: 3.5em 1em;
	font-size: 1em;
	font-weight: 700;
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
	cursor: pointer;
}

.item-sizes {
	min-height: 250px;
	min-width: 700px;

	@media screen and (max-width: 500px) {
		min-height: 200px;
		min-width: 350px;
	}

}

.item {
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
.filter{
	transition: all 300ms;
	max-width: 50px;
	border: 0px $primary solid;
	width: 100%
}
.filter.selected{
	max-width: 65px;
	border: 5px $primary solid;
	//transform: scale(1.5);
}
</style>
