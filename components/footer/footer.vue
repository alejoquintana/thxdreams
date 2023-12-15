<template>
	<div>
		<div class="row">
			<div class="col-3">
				<h1>THX LOGO NEGRO</h1>
				<div>
					<a v-for="(social, i) in socials" :key="i" :href="social.url" target="_blank" rel="noopener noreferrer">
						<i>{{ social.icon }}</i>
					</a>
				</div>
			</div>
			<div class="col-3">
				<p>RECENT DREAMS</p>
			</div>
			<div class="col-3">
				<p>CONTACT</p>
				<ul>
					<li v-for="(contact, i) in contacts" :key="i">
						<i>{{ contact.text }}</i><br>
						<i>{{ contact.info }}</i>
					</li>
				</ul>
			</div>
		</div>
		<span>© Copyright 2023 - THX!</span>
	</div>
</template>

<script setup>
import { useHelpersStore as helpers } from '@/store/helpers.js'
const socials = helpers().socials;
const contacts = helpers().contacts;
</script>

<style lang="scss" scoped>
</style>~/store/helpers.js