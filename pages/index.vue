<template>
	<div>
		{{ test }}
		<h3>video</h3>
		<h3>video</h3>
		<h3>banner arandanos</h3>
		<h3>banner varios dreams</h3>
	</div>
</template>
<script setup>
import { useHelpersStore as helpers } from '@/store/helpers.js'
helpers().getTest();
const test = helpers().test;
</script>