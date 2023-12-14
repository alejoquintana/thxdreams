<template>
    <div>
        <Nav></Nav>
		  <slot />
		  <Footer></Footer>
		</div>
</template>

<script setup>
import Nav from "@/components/header/nav.vue";
import Footer from "@/components/footer/footer.vue";
</script>

<style lang="scss" scoped>
</style>