<template>
	<div>
		test:{{ test }}
		<h3>video</h3>
		<h3>video</h3>
		<h3>banner arandanos</h3>
		<h3>banner varios dreams</h3>
	</div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useHelpersStore as helpers } from '@/store/helpers.js'
const helpersStore = helpers();
const { test } = storeToRefs(helpersStore);
helpers().getTest();
//const test = reactive(helpers().test);
</script>