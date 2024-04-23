<template>
	<header class="header w-100" ref="header" :style="'background:rgba(80,53,148, '+headerStyle+')'">
		<nav class="text-center pa-6 py-3 d-flex justify-space-between">
			<div :style="'opacity:'+imgStyle">
				<NuxtLink to="/">
					<img style="width:55px;object-fit: cover;" src="/imgs/logo_header_top-blanco.png" />
					<!-- <v-img :width="55" cover src="/imgs/logo_header_top-blanco.png"></v-img> -->
				</NuxtLink>
			</div>
			<div v-if="mq('mdAndUp')" class="d-flex-center ga-12 text-white fs-4">
				<NuxtLink :to="'/'+route.path" v-for="route,i in routes" :key="i" class="routes hover-2"
					:class="{'selected': route.path == PageRoute.name}">
					{{ route.name }}
				</NuxtLink>
			</div>
			<div class="d-flex align-center ga-3">
				<v-icon icon="mdi-magnify" color="white" size="x-large"></v-icon>
				<v-icon v-if="mq('mdAndDown')" icon="mdi-menu" color="white" size="x-large"
					@click="showSideMenu = true"></v-icon>
			</div>
			<!-- <div class="d-flex justify-center ga-4" >
				<NuxtLink v-for="(route, i) in routes" :key="i" :to="route.path">{{ route.name }}</NuxtLink>
			</div> -->
		</nav>
	</header>
	<Transition name="fade">
		<div v-if="showSideMenu" class="side-menu-comp">
			<div class="bg-primary pa-4 pb-0" v-click-outside="logged">
				<div class="d-flex justify-end">
					<v-icon icon="mdi-close" color="white" size="x-large" @click="logged"></v-icon>
				</div>
				<div class="d-flex flex-column align-center" v-click-outside="logged">
					<NuxtLink :to="'/'+route.path" v-for="route,i in routes" :key="i" class="ma-4 border-bottom"
						:class="{ 'selected': route.path == PageRoute.name }" @click="showSideMenu=false">{{ route.name }}
					</NuxtLink>
				</div>
			</div>
		</div>
	</Transition>
</template>

<script setup>
const PageRoute = useRoute()
const routes = useHelpersStore().getNavRoutes;
const imgStyle = ref(0)
const headerStyle = ref(0)
const showSideMenu = ref(false)

function logScroll() {
	imgStyle.value = window.scrollY / 500;
	headerStyle.value = window.scrollY / 500;
}
function logged() {
	showSideMenu.value = false
}

onBeforeMount(() => {
	window.addEventListener('scroll', logScroll)
})
onMounted(() => {
	window.addEventListener('scroll', logScroll)
})

onBeforeUnmount(() => {
	window.removeEventListener('scroll', logScroll)
})
</script>

<style lang="scss" scoped>
.header {
	//background-color: ;
	position: fixed;
	z-index: 1000;
}
.side-menu-comp{
	position: fixed;
	width: 100vw;
	height: 100vh;
	z-index: 9999;
	background-color: rgba(0, 0, 0,0.4);
}
.routes{
	transition: all 500ms;
	border-radius: 20px;
	//font-weight: bold;
	text-shadow: 0px 0px 10px black;
	//background-color: rgba($primary, 0.3);
}
.selected{
	background-color: rgba($primary, 0.5);
	padding: 5px 20px;
	border: 1px solid white;
	border-radius: 24px;
	//text-decoration: underline;
}
</style>