<template>
	<ParallaxBackground>
		<div>
			<div v-if="seedingFutures.first_title && seedingFutures.first_subtitle" class="banner banner-primary my-6">
				<div class="mx-w-m w-100  px-4 px-lg-0">
					<h1>{{ seedingFutures.first_title }}</h1>
					<p>{{ seedingFutures.first_subtitle }}</p>
				</div>
			</div>
			<div class="px-4 px-lg-0">
				<p v-if="seedingFutures.info_title"
					class="bg-white rounded-xl px-8 py-1 fs-5 fs-6--lg-up fw-600 text-center mx-w-m my-16 text-primary-dark">
					{{
					seedingFutures.info_title }}</p>
			</div>

			<v-row class="mx-w-m my-6  px-5 px-lg-0 rounded-xl bg-primary-05"
				v-if="seedingFutures.info_article_title && seedingFutures.info_article_text">
				<v-col cols="12" md="5">
					<div class="overflow-hidden rounded-xl box-shadow-05">
						<v-img :src="`/img/seeding-futures/Why.jpeg`" class="hover-1"></v-img>
					</div>
				</v-col>
				<v-col cols="12" md="7">
					<h3 class="mb-4 fs-8 text-white text-shadow-05">{{ seedingFutures.info_article_title }}</h3>
					<p class="text-white text-shadow">{{ seedingFutures.info_article_text }}</p>
				</v-col>
			</v-row>

			<v-row v-if="
				seedingFutures.ABCD_items_text &&
				seedingFutures.A_items &&
				seedingFutures.B_items &&
				seedingFutures.C_items &&
				seedingFutures.D_items &&
				seedingFutures.A_title &&
				seedingFutures.B_title &&
				seedingFutures.C_title &&
				seedingFutures.D_title
			" class="my-16 text-white" style="max-width: 1500px;margin: auto;">
				<v-col v-for="item in ['A', 'B', 'C', 'D']" cols="6" md="3">
					<div class="overflow-hidden mb-4" style="max-width: 170px;border-radius: 100%;margin: auto;">
						<v-img :src="`/img/seeding-futures/${item}.jpg`" class="hover-1"></v-img>
					</div>
					<div class="d-flex justify-center">
						<p class="text-center fs-3 fs-4--md-up fw-bold bg-primary mb-4 px-4 px-lg-8 py-1 rounded-xl">{{
							seedingFutures[item + '_title'] }}</p>
					</div>
					<div class="text-center text-shadow" v-html="seedingFutures[item + '_items']"></div>
				</v-col>
			</v-row>

			<div class="px-4 px-lg-0">
				<div class="mx-w-m my-16 pa-4 pa-lg-8 bg-primary rounded-xl" v-if="
					seedingFutures.apply_programs_title &&
					seedingFutures.apply_programs_text &&
					seedingFutures.apply_programs_form_title &&
					seedingFutures.apply_programs_form_name &&
					seedingFutures.apply_programs_form_country &&
					seedingFutures.apply_programs_form_email &&
					seedingFutures.apply_programs_form_button
				">
					<h3 class="text-center fs-6 fs-7--lg fw-500">{{ seedingFutures.apply_programs_title }}</h3>
					<p class="text-center fs-3--sm-down ma-auto" style="max-width: 800px;">{{
						seedingFutures.apply_programs_text }}</p>
					<p class="text-center fs-4 mt-8">{{ seedingFutures.apply_programs_form_title }}</p>
					<v-row no-gutters>
						<v-col cols="12" md="6" class="pa-2">
							<v-text-field class="mb-0" variant="outlined" hide-details v-model="apply_name"
								:placeholder="seedingFutures.apply_programs_form_name"></v-text-field>
						</v-col>
						<v-col cols="12" md="6" class="pa-2">
							<v-text-field class="mb-0" variant="outlined" hide-details v-model="apply_message"
								:placeholder="seedingFutures.apply_programs_form_country"></v-text-field>
						</v-col>
						<v-col cols="12" md="6" class="pa-2">
							<v-text-field class="mb-0" variant="outlined" hide-details v-model="apply_email"
								:placeholder="seedingFutures.apply_programs_form_email"></v-text-field>
						</v-col>
						<v-col cols="12" md="6" class="pa-2">
							<v-btn block class="h-100--md" rounded="sm" color="white" @click="sendApply">
								{{ seedingFutures.apply_programs_form_button }}
							</v-btn>
						</v-col>
					</v-row>
				</div>
			</div>

			<div class="banner banner-primary my-6 px-5 px-lg-0"
				v-if="seedingFutures.second_title && seedingFutures.second_subtitle">
				<div class="mx-w-m w-100">
					<h1>{{ seedingFutures.second_title }}</h1>
					<p>{{ seedingFutures.second_subtitle }}</p>
				</div>
			</div>

			<div class="px-5 px-lg-0">
				<v-row class="mx-w-m my-16" v-if="
					seedingFutures.donate_item_1_title &&
					seedingFutures.donate_item_1_button &&
					seedingFutures.donate_item_2_title &&
					seedingFutures.donate_item_2_text &&
					seedingFutures.donate_item_2_button &&
					seedingFutures.donate_item_3_title &&
					seedingFutures.donate_item_3_text
				">
					<v-col v-for="donate, i in donates" cols="12" md="4">
						<div class="overflow-hidden mb-4" style="max-width: 170px;border-radius: 100%;margin: auto;">
							<v-img :src="`/img/seeding-futures/donate-${i + 1}.jpg`" class="hover-1"></v-img>
						</div>
						<div class="d-flex justify-center mb-4 ga-2">
							<v-btn variant="flat" v-for="button in donate.buttons" :href="button.href" target="_blank">

								<span v-if="button.text">
									{{ seedingFutures[button.text] }}
									<v-icon color="white" :icon="`mdi-${button.icon}`"></v-icon>
								</span>
								<v-icon v-else color="white" :icon="`mdi-${button.icon}`"></v-icon>
							</v-btn>
						</div>
						<p class="fw-700 text-center mb-4 text-white text-shadow">{{ seedingFutures[donate.title] }}</p>
						<p class="text-center fw-500 mb-4 text-white text-shadow">
							{{ seedingFutures[donate.text] }}
						</p>
					</v-col>
				</v-row>
			</div>

			<div class="banner banner-white px-5 px-lg-0"
				v-if="seedingFutures.shop_title && seedingFutures.shop_subtitle && seedingFutures.shop_button">
				<div class="mx-w-m w-100">
					<h1>{{ seedingFutures.shop_title }}</h1>
					<p>{{ seedingFutures.shop_subtitle }}</p>
					<v-btn variant="flat" color="primary" class="mt-6" href="https://thx-dreams.myshopify.com/"
						target="_blank">{{
						seedingFutures.shop_button }}</v-btn>
				</div>
			</div>
		</div>
	</ParallaxBackground>
</template>

<script setup>
import { storeToRefs } from 'pinia'
const languagesStore = useLanguagesStore()
const helpersStore = useHelpersStore()
languagesStore.fetchLanguages()
const { $swal } = useNuxtApp()


const apply_name = ref('')
const apply_email = ref('')
const apply_message = ref('')

const validateEmail = (email) => {
	return email.match(
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	);
};
function sendApply() {
	if (!apply_name.value || !validateEmail(apply_email.value) | !apply_message.value) {
		return
	}

	helpersStore.applyPrograms({
		name:apply_name.value,
		email:apply_email.value,
		message:apply_message.value,
		form:"apply_programs",
	})
	$swal.fire({
		title: 'Form sent correctly!',
		icon: 'success',
		confirmButtonText: 'Ok'
	})
	apply_name.value = ""
	apply_email.value = ""
	apply_message.value = ""
}

const { seedingFutures } = storeToRefs(languagesStore);
const donates = ref([
	{
		title: "donate_item_1_title",
		buttons: [
			{ text: "donate_item_1_button", icon: "heart", href: "https://givebutter.com/Thx_Seeding_Futures" },
		],
	},
	{
		title: "donate_item_2_title",
		text: "donate_item_2_text",
		buttons: [
			{ text: "donate_item_2_button", icon: "email", href: "/contact-us" },
		],
	},
	{
		title: "donate_item_3_title",
		text: "donate_item_3_text",
		buttons: [
			// { icon: "facebook", href: "https://www.facebook.com/thxdreams/" },
			{ icon: "twitter", href: "https://twitter.com/thx_dreams" },
			{ icon: "email", href: "mailto:info@thxdreams.com" },
			// {icon:"whatsapp",href:""},
			{ icon: "message", href: "tel:+1(754)2005755" },
		],
	},
])
</script>

<style lang="scss" scoped>
@media (min-width: 600px) {
	button.h-100--md{
		height: 100% !important;
	}
}
.banner {
	padding: 24px 0;
	display: flex;
	justify-content: center;
}

.banner-primary {
	background-color: $primary;
	color: #fff;
}

.banner-white {
	background-color: #fff;
	color: $primary;
}
</style>