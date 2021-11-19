<template>
	<div class="relative" @click="hover = true" @mouseover="hover = true" @mouseleave="hover = false">
		<img :src="img" alt="" class="w-100">
		<div class="flex flex-wrap w-full content-center absolute inset-0 p-8 bg-black bg-opacity-90" :class="{ 'animate-fade': hover }" v-if="hover">
			<div class="block">
				<p class="text-white font-bold text-2xl sm:text-1xl lg:text-4xl uppercase">{{role}}</p>
				<p class="text-white text-md mt-4 uppercase">{{name}}</p>
				<p class="text-white font-bold text-md lg:text-xl uppercase">{{client}}</p>
				<div v-if="link" class="mt-4 absolute right-4 lg:right-8 bottom-5 lg:bottom-10">
					<a :href="link" target="_blank" class="bg-white py-1 px-2 lg:py-2 lg:px-3 rounded-full font-semibold uppercase text-gray-600 hover:text-black transition-all"> ➤</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'Projects',
    props: {
		img: String,
		name: String,
		role: String,
		client: String,
		link: String,
    },
	data() {
		return { hover: false, }
	},
})
</script>

<style scoped>
</style>
