<template>
	<v-app>
		<NavBar></NavBar>
		<main>
			<slot></slot>
		</main>
		<FooterComp></FooterComp>
	</v-app>
</template>

<script setup>
const languagesStore = useLanguagesStore()
languagesStore.fetchLanguages()
</script>