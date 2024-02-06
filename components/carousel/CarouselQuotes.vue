<template>
	<div @click="optsChange">
		<Transition>
			<div v-if="show" class="bg-primary-opacity rounded-xl pa-4">
				<div class="text-white text-center fs-md">
					<p class="first-upper">
						“{{ dreamers[index].quote }}”
					</p>
					<div class="d-flex-center ga-3 mt-4">
						<v-img max-width="50" :src="'imgs/sonadores/' + dreamers[index].img" class="rounded-circle" cover :aspect-ratio="1"></v-img>
						<p class="font-weight-bold first-upper">
							{{ dreamers[index].name }}
							<br>
							<span class="first-upper">
								{{ dreamers[index].country }}
							</span>
						</p>
					</div>
				</div>
			</div>
		</Transition>
	</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const index = ref(0)
const show = ref(true)
onMounted(() => {
	setInterval(() => {
		show.value = false
		index.value = ++index.value % dreamers.length
		setTimeout(() => {
			show.value = true
		},1000)
	}, 6000)
})

const dreamers = [
	{ img: "53.jpg",country: "Peru", name: "Valeria", quote: "My dream is to replace the broken roof of my hoyse so that my belongings stay dry when it rains" },
	{ img: "54.jpg",country: "Colombia", name: "Marcelo", quote: "My dream is to replace the broken roof of my hoyse so that my belongings stay dry when it rains" },
	{ img: "64.jpg",country: "Argentina", name: "Pedro", quote: "My dream is to replace the broken roof of my hoyse so that my belongings stay dry when it rains" },
	{ img: "111.jpg",country: "Venezuela", name: "Fermin", quote: "My dream is to replace the broken roof of my hoyse so that my belongings stay dry when it rains" },
	{ img: "53.jpg",country: "Bolivia", name: "Luis", quote: "My dream is to replace the broken roof of my hoyse so that my belongings stay dry when it rains" },
]

</script>

<style lang="scss" scoped>
.bg-primary-opacity {
	background-color: rgba($primary, 0.6);
}

.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>