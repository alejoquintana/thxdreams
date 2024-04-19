<template>
	<ContactUs v-if="false" />
	<PageInConstruction v-else></PageInConstruction>
</template>

<script setup>
const route = useRoute()
const title = route.name.replace('-', ' ')
useHead({
	title: title.charAt(0).toUpperCase()
		+ title.slice(1) + ' - THX!'
})
</script>