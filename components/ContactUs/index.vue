<template>
	<ParallaxBackground gradient>

		<v-row>
			<v-col cols="12" md="8" class="rounded-xl bg-primary pa-3" id="contact__contentFormulario">
				<v-form>
					<v-container>
						<v-row>
							<v-col cols="12" class="contact__contentTitle">
								<h1>{{contactUs.form_title}}</h1>
							</v-col>

							<v-col cols="12" md="6">
								<v-text-field :rules="nameRules" :label="contactUs.form_name" name="name" variant="solo-filled"
									id="inputName"></v-text-field>
							</v-col>

							<v-col cols="12" md="6">
								<v-text-field :rules="emailRules" :label="contactUs.form_email" name="email"
									variant="solo-filled" id="inputEmail"></v-text-field>
							</v-col>

							<v-col cols="12" md="12">
								<v-textarea name="message" id="inputMessage" rows="4" :label="contactUs.form_message"
									variant="solo-filled"></v-textarea>
							</v-col>

							<v-col cols="12" md="12" id="contact__contentAlertForm" class="d-none">
								<v-alert color="warning" variant="outlined">
									<template v-slot:title>
										<v-icon icon="mdi-alert"></v-icon> Invalid fields!
									</template>
									Please review all fields to submit the form
								</v-alert>
							</v-col>

							<v-col cols="12" md="12" class="mt-0">
								<button class="bg-white text-primary fs-lg--sm-down fw-500" type="button"
									id="contact__btnSubmit" @click="submitForm">{{contactUs.form_button}}</button>
							</v-col>

						</v-row>
					</v-container>
				</v-form>
			</v-col>
		</v-row>

	</ParallaxBackground>
</template>


<!-- ------------------- -->
<!-- 		SCRIPTS		 -->
<!-- ------------------- -->
<script setup>
import { storeToRefs } from 'pinia'
const languagesStore = useLanguagesStore()
const helpersStore = useHelpersStore()
const { $swal } = useNuxtApp()

languagesStore.fetchLanguages()

const { contactUs } = storeToRefs(languagesStore);

function submitForm() {
	console.log("submit!!")

	const name = document.getElementById("inputName").value
	const email = document.getElementById("inputEmail").value
	const message = document.getElementById("inputMessage").value

	document.getElementById("contact__contentAlertForm").classList.add("d-none")

	if (!name || !validateEmail(email) | !message) {
		document.getElementById("contact__contentAlertForm").classList.remove("d-none")
		console.log("Formulario incompleto")
		return
	}

	helpersStore.applyPrograms({
		name,
		email,
		message,
		form: "contact_us",
	})

	$swal.fire({
		title: 'Form sent correctly!',
		icon: 'success',
		confirmButtonText: 'Ok'
	})
	// alert("Form sent correctly!")
}


const validateEmail = (email) => {
	return email.match(
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	);
};

</script>



<!-- ------------------- -->
<!-- 		STYLES		 -->
<!-- ------------------- -->
<style lang="scss" scoped>
/* Mis estilos */
h1 {
	text-align: center;
}

#contact__contentFormulario {
	margin: auto;
	opacity: 0.8;
}

#contact__btnSubmit {
	padding: .8em 1.5em;
	width: 100%;
}

.text-primary {
	color: rgb(var(--v-theme-primary)) !important;
}
</style>
