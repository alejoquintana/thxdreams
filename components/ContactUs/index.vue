<template>
	<ParallaxBackground gradient>

		<v-row>
			<v-col cols="12" md="8" class="rounded-xl bg-primary pa-3" id="contact__contentFormulario">
				<v-form >
    				<v-container>
						<v-row>
							<v-col cols="12" class="contact__contentTitle">
								<h1>Contactanos</h1><!-- <h1>Get In Touch</h1> -->
							</v-col>
							
							<v-col cols="12" md="6">
								<v-text-field
									:rules="nameRules"
									label="Nombre" 
									name="name" 
									variant="outlined"
									id="inputName"
								></v-text-field>
							</v-col>

							<v-col cols="12" md="6">
								<v-text-field
									:rules="emailRules"
									label="E-mail"
									name="email" 
									variant="outlined"
									id="inputEmail"
								></v-text-field>
							</v-col>

							<v-col cols="12" md="12">
								<v-textarea name="message" id="inputMessage" rows="4" label="Mensaje" variant="outlined"></v-textarea>
							</v-col>

							<v-col cols="12" md="12" id="contact__contentAlertForm" class="d-none">
								<v-alert
									color="warning"
									variant="outlined"
									>
									<template v-slot:title>
										<v-icon icon="mdi-alert"></v-icon> Campos invalidaos!
									</template>
									Por favor revise todos los campos para enviar el formulario
								</v-alert>
							</v-col>
							
							<v-col cols="12" md="12" class="mt-0">
								<button class="bg-white text-primary fs-lg--sm-down fw-500" type="button" id="contact__btnSubmit" @click="submitForm">Enviar mensaje</button>
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
	languagesStore.fetchLanguages()

	const { ContactUs } = storeToRefs(languagesStore);
	console.log(ContactUs);

	
	function submitForm() {
		console.log("submit!!")

		const name = document.getElementById("inputName").value
		const email = document.getElementById("inputEmail").value
		const message = document.getElementById("inputMessage").value

		document.getElementById("contact__contentAlertForm").classList.add("d-none")
		
		if(!name || !validateEmail(email) | !message){
			document.getElementById("contact__contentAlertForm").classList.remove("d-none")
			console.log("Formulario incompleto")
			return
		}

		
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
	h1{
		text-align: center;
	}

	#contact__contentFormulario{
		margin: auto;
		opacity: 0.8;
	}

	#contact__btnSubmit{
		padding: .8em 1.5em;
		width: 100%;
	}

	.text-primary {
		color: rgb(var(--v-theme-primary)) !important;
	}



	/* Ya estaban cargados */
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

