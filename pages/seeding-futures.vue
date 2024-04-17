<template>
	<div class="parallax bg-gradient pt-16">
		<div class="pt-16 px-8 px-lg-0">
			<div class="d-flex justify-center">
				<NuxtLink to="/">
					<img src="/imgs/logothx-blanco.png" class="my-8 img-shadow img-size" />
				</NuxtLink>
			</div>
		</div>

		<div>
			<div class="banner banner-primary my-6">
				<div class="mx-w-m w-100">
					<h1>{{ seedingFutures.first_title }}</h1>
					<p>{{ seedingFutures.first_subtitle }}</p>
				</div>
			</div>

			<p class="fs-7 fw-600 text-center mx-w-m my-8 text-primary-dark">{{ seedingFutures.info_title }}</p>
			<v-row class="mx-w-m my-6">
				<v-col cols="12" md="6">
					<v-img :src="`/imgs/seeding-futures/Why.jpeg`"></v-img>
				</v-col>
				<v-col cols="12" md="6">
					<h3>{{ seedingFutures.info_article_title }}</h3>
					<p>{{ seedingFutures.info_article_text }}</p>
				</v-col>
			</v-row>

			<v-row class="my-6" style="max-width: 1500px;margin: auto;">
				<v-col v-for="item in ['A', 'B', 'C', 'D']" cols="6" md="3">
					<div class="overflow-hidden mb-4" style="max-width: 170px;border-radius: 100%;margin: auto;">
						<v-img :src="`/imgs/seeding-futures/${item}.jpg`"></v-img>
					</div>
					<p class="text-center fw-bold text-primary-dark mb-4">{{ seedingFutures[item + '_title'] }}</p>
					<div class="d-flex justify-center fw-500 mb-4">
						{{ seedingFutures.ABCD_items_text }}
						<v-icon color="dark" class="ml-2" icon="mdi-heart" size="small"></v-icon>
					</div>
					<div class="text-center" v-html="seedingFutures[item + '_items']"></div>
				</v-col>
			</v-row>

			<v-row class="mx-w-m my-6" v-if="
				seedingFutures.apply_programs_title &&
				seedingFutures.apply_programs_text &&
				seedingFutures.apply_programs_form_title &&
				seedingFutures.apply_programs_form_name &&
				seedingFutures.apply_programs_form_country &&
				seedingFutures.apply_programs_form_email &&
				seedingFutures.apply_programs_form_button
			">
				<v-col cols="12">
					<p>{{ seedingFutures.apply_programs_title }}</p>
					<span>{{ seedingFutures.apply_programs_text }}</span>
				</v-col>
				<v-col cols="12">
					{{ seedingFutures.apply_programs_form_title }}
				</v-col>
				<v-col cols="6">
					<v-text-field class="mb-0" variant="outlined" hide-details
						:placeholder="seedingFutures.apply_programs_form_name"></v-text-field>
				</v-col>
				<v-col cols="6">
					<v-text-field class="mb-0" variant="outlined" hide-details
						:placeholder="seedingFutures.apply_programs_form_country"></v-text-field>
				</v-col>
				<v-col cols="6">
					<v-text-field class="mb-0" variant="outlined" hide-details
						:placeholder="seedingFutures.apply_programs_form_email"></v-text-field>
				</v-col>
				<v-col cols="6">
					<v-btn block class="h-100">
						{{ seedingFutures.apply_programs_form_button }}
					</v-btn>
				</v-col>
			</v-row>

			<div class="banner banner-primary my-6">
				<div class="mx-w-m w-100">
					<h1>{{ seedingFutures.second_title }}</h1>
					<p>{{ seedingFutures.second_subtitle }}</p>
				</div>
			</div>

			<v-row class="mx-w-m my-16">
				<v-col v-for="donate,i in donates" cols="6" md="4">
					<div class="overflow-hidden mb-4" style="max-width: 170px;border-radius: 100%;margin: auto;">
						<v-img :src="`/imgs/seeding-futures/donate-${i+1}.jpg`"></v-img>
					</div>
					<p class="fw-700 text-center mb-4">{{ donate.title }}</p>
					<p class="text-center fw-500 mb-4">
						{{ donate.text }}
					</p>
					<div class="d-flex justify-center ga-2">
						<v-btn variant="flat" v-for="button in donate.buttons" :href="button.href" target="_blank">

							<span v-if="button.text">
								{{ button.text }}
								<v-icon color="white" :icon="`mdi-${button.icon}`"></v-icon>
							</span>
							<v-icon v-else color="white" :icon="`mdi-${button.icon}`"></v-icon>
						</v-btn>
					</div>
				</v-col>

				<!-- <v-col cols="6" md="4">
					<div class="overflow-hidden mb-4" style="max-width: 170px;border-radius: 100%;margin: auto;">
						<v-img src="/imgs/seeding-futures/donate-1.jpg"></v-img>
					</div>
					<p class="fw-700 text-center mb-4">{{ seedingFutures.donate_item_1_title }}</p>
					<p class="text-center fw-500 mb-4">
						{{ seedingFutures.ABCD_items_text }}
						<v-icon color="white" icon="mdi-heart-outline"></v-icon>
					</p>
					<div class="d-flex justify-center ga-2">
						<v-btn>{{ seedingFutures.donate_item_1_button }}</v-btn>
					</div>
				</v-col>

				<v-col cols="6" md="4">
					<div class="overflow-hidden mb-4" style="max-width: 170px;border-radius: 100%;margin: auto;">
						<v-img src="/imgs/seeding-futures/donate-2.jpg"></v-img>
					</div>
					<p class="fw-700 text-center mb-4">{{ seedingFutures.donate_item_2_title }}</p>
					<p class="text-center fw-500 mb-4">
						{{ seedingFutures.ABCD_items_text }}
						<v-icon color="white" icon="mdi-heart-outline"></v-icon>
					</p>
					<p class="text-center mb-4">{{ seedingFutures.donate_item_2_text }}</p>
					<p class="text-center mb-4">{{ seedingFutures.donate_item_2_text }}</p>
					<div class="d-flex justify-center ga-2">
						<v-btn>{{ seedingFutures.donate_item_2_button }}</v-btn>
					</div>
				</v-col>

				<v-col cols="6" md="4">
					<div class="overflow-hidden mb-4" style="max-width: 170px;border-radius: 100%;margin: auto;">
						<v-img src="/imgs/seeding-futures/donate-3.jpg"></v-img>
					</div>

					<p class="fw-700 text-center mb-4">
						{{ seedingFutures.donate_item_3_title }}
					</p>

					<p class="text-center fw-500 mb-4">
						{{ seedingFutures.ABCD_items_text }}
						<v-icon color="white" icon="mdi-heart-outline"></v-icon>
					</p>

					<p class="text-center mb-4">{{ seedingFutures.donate_item_3_text }}</p>
					<div class="d-flex justify-center ga-2">
						<v-btn v-for="btn in 4">{{ btn }}</v-btn>
					</div>
				</v-col> -->
			</v-row>

			<div class="banner banner-white">
				<div class="mx-w-m w-100">
					<h1>{{ seedingFutures.shop_title }}</h1>
					<p>{{ seedingFutures.shop_subtitle }}</p>
					<v-btn variant="flat" color="primary" class="mt-6">{{ seedingFutures.shop_button }}</v-btn>
				</div>
			</div>
		</div>
		<!-- <div class="gradient"></div> -->
	</div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
const languagesStore = useLanguagesStore()
languagesStore.fetchLanguages()

const { seedingFutures } = storeToRefs(languagesStore);
const donates = ref([])
if (seedingFutures.value.donate_item_1_title) {
	
	donates.value = [
		{
			title: seedingFutures.value.donate_item_1_title,
			buttons: [
				{ text: seedingFutures.value.donate_item_1_button, icon: "heart", href:"https://givebutter.com/Thx_Seeding_Futures"},
			],
		},
		{
			title: seedingFutures.value.donate_item_2_title,
			text: seedingFutures.value.donate_item_2_text,
			buttons: [
				{ text: seedingFutures.value.donate_item_2_button, icon: "email", href:"https://thxdreams.com/contact-us"},
			],
		},
		{
			title: seedingFutures.value.donate_item_3_title,
			text: seedingFutures.value.donate_item_3_text,
			buttons: [
				{ icon: "facebook", href:"https://www.facebook.com/thxdreams/"},
				{ icon: "twitter", href: "https://twitter.com/thx_dreams"},
				{ icon: "email", href:"mailto:info @thxdreams.com"},
				// {icon:"whatsapp",href:""},
				{ icon: "message", href:"tel:+1(754)2005755"},
			],
		},
	]
}
</script>

<style lang="scss" scoped>
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

.gradient {
	width: 100%;
	height: 100px;
	background-image: linear-gradient(180deg, #00000000, rgba($primary, 1));
}

$linear: linear-gradient(0deg, rgba(black, 0) 85%, rgba($primary, 0.8) 100%);

.bg-gradient {
	background-image: url('/imgs/fondo-web-thx.jpg');
	background-color: $darker;
}

.img-size {
	max-width: 250px
}

@media (min-width: 900px) {
	.img-size {
		max-width: 400px
	}
}


.parallax {
	// min-height: 500px;
	background-attachment: fixed;
	background-position: top;
	// background-repeat: no-repeat;
	//background-color: rgba($color: #FFF, $alpha: 1.0) !important;
	background-size: cover;
	-webkit-background-size: cover;
	/* safari may need this */
}

@media (max-width: 960px) {
	.parallax {
		background-position: center;
	}
}
</style>