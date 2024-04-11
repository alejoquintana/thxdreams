<template>
	<div class="video-container relative" @click="playVideo">
		<Transition name="fade">
			<div v-if="!playing" class="h-100 w-100 absolute d-flex-center">
				<div class="pa-lg-5 rounded-circle" style="background-color: rgba(0, 0, 0, 0.3);">
					<v-icon icon="mdi-play" color="primary" size="125"></v-icon>
				</div>
			</div>
		</Transition>
		<video ref="video" class="rounded-xl overflow-hidden border-op" src="/imgs/video/thx_b2c.mp4"
			poster="/imgs/video/thx_b2c.portada.png" width="100%">
			Sorry, your browser doesn't support embedded videos, but don't worry, you can
			<a href="/imgs/video/thx_b2c.mp4">download it</a>
			and watch it with your favorite video player!
		</video>
	</div>
</template>

<script setup>
const video = ref(null)
const playing = ref(false)
function playVideo() {
	if (playing.value) {
		video.value.pause()
		playing.value = false
	} else {
		video.value.play()
		playing.value = true
	}
}
</script>

<style lang="scss" scoped>
@media (min-width: 900px) {
	.border-op{
	  border: 40px solid #00000088;
  }
}
</style>