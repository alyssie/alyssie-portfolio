<template>
	<!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
	<Home />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Home from './pages/Home.vue'

export default defineComponent({
	name: 'App',
	components: {
		Home
	}
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
</style>
