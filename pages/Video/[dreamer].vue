<template>
	<div>
		<ParallaxBackground gradient>
			<div class="pt-8 px-8 px-lg-0 each-mx-w-m ">
				<DreamerInfo :dreamer="dreamer"></DreamerInfo>
			</div>
		</ParallaxBackground>
	</div>
</template>

<script setup>
const route = useRoute()
const dreamersStore = useDreamersStore()

dreamersStore.fetchFullDreamer('', route.params.dreamer)

const { dreamer } = storeToRefs(dreamersStore);

useHead({
	title: 'THX! - Home'
})
</script>