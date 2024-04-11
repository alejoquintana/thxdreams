<template>
	<div class="thx-modal-viewport">
		<div class="thx-modal-container rounded-xl">
			<div class="thx-modal-header">
				<div class="flex-grow-1">
					<slot name="header"></slot>
				</div>
				<v-btn @click="$emit('closeModal')" variant="text" color="white" icon="mdi-arrow-right" rounded="pill">
					<v-icon icon="mdi-close" size="30"></v-icon>
				</v-btn>
			</div>
			<div class="thx-modal-content">
				<slot></slot>
			</div>
			<div class="thx-modal-footer">
				<slot name="footer"></slot>
			</div>
		</div>
	</div>
</template>

<script setup>
onMounted(() => {
	document.body.classList.add("modal-open");
});
onUnmounted(() => {
	document.body.classList.remove("modal-open");
});
</script>

<style lang="scss" scoped>
.thx-modal-viewport{
	z-index: 9999;
	position: fixed;
	width: 100vw;
	height: 100vh;
	background: #2b2b2baa;
	top: 0;
	left: 0;
	display: flex;
	place-content: center;
	place-items: center;
	.thx-modal-container{
		@media screen and (min-width: 500px) {
			max-width: 80vw;
		}
		max-width: 90vw;
		//height: 80vh;
		background: $primary;
		border: 1px solid #FFF;
		padding: 10px;
		padding: 20px;
		.thx-modal-header{
			
			display: flex;
			// border-bottom: 1px solid #FFF;
			// margin-bottom: 10px;
		}
		.thx-modal-content{
			overflow-y: scroll;
			overflow-x: hidden;
			max-height: 80vh;
			padding-right: 10px;
		}
	}
}
.thx-modal-content::-webkit-scrollbar {
	width: 10px;
}

/* Track */
.thx-modal-content::-webkit-scrollbar-track {
	background: rgba($secondary, 0.2);
}

/* Handle */
.thx-modal-content::-webkit-scrollbar-thumb {
	border-radius: 24px;
	background: $secondary;
}

/* Handle on hover */
.thx-modal-content::-webkit-scrollbar-thumb:hover {
	background: $primary
}
</style>