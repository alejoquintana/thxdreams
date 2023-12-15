<template>
	<header>
		<DownloadApp />
		<nav>
			<h1>THX LOGO</h1>
			<h2>THE HUMAN FACE OF SUSTAINABILITY</h2>
			<ul>
				<li v-for="(route, i) in routes" :key="i">
					<NuxtLink :to="route.path">{{route.name}}</NuxtLink>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script setup>
import DownloadApp from "./downloadApp.vue";
import { useHelpersStore as helpers } from '@/store/helpers.js'
const routes = helpers().routes;
</script>

<style lang="scss" scoped></style>~/store/helpers.js