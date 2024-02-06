<template>
	<div class="thx-modal-viewport">
		<div class="thx-modal-container">
			<div class="thx-modal-header">
				<slot name="header"></slot>
				<button @click="$emit('closeModal')">cerrar</button>
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

</script>

<style lang="scss" scoped>
.thx-modal-viewport{
	position: fixed;
	width: 100vw;
	height: 100vh;
	background: #88888888;
	top: 0;
	left: 0;
	display: flex;
	place-content: center;
	place-items: center;
	.thx-modal-container{
		width: 80vw;
		height: 80vh;
		background: #FFF;
	}
}
</style>