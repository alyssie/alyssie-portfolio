<template>
	<nav class="absolute inset-0 p-5">
		<div class="container mx-auto">
			<div class="flex justify-between">
				<!-- <p class="flex justify-start py-2 m-0">@aaalyssie</p> -->
				<!-- <ul class="flex justify-end">
					<li class="py-2 px-6"><a href="#">Home</a></li>
					<li class="py-2 px-6"><a href="#">About</a></li>
					<li class="py-2 px-6"><a href="#">Works</a></li>
					<li class="py-2 px-6"><a href="#">Pricing</a></li>
				</ul> -->
			</div>
		</div>
	</nav>
	<header class="flex justify-center py-14 h-auto lg:h-screen">
		<div class="self-center">
			<div class="flex justify-center relative h-96">
				<a href="https://wa.me/+639761363085" class="stick flex self-center rounded-lg p-3 mx-3 mt-10 hover:h-86 h-82 transition-all">
					<span class="self-end">
						<img alt="icon" src="../assets/icons/whatsapp-icon.png" class="opacity-20 transition-all" />
					</span>
				</a>
				<a href="mailto:caluyaalyssamae@gmail.com" class="stick flex self-center rounded-lg p-3 mx-3 mt-10 hover:h-100 h-96 transition-all">
					<span class="self-end">
						<img alt="icon" src="../assets/icons/gmail-icon.png" class="opacity-20 transition-all" />
					</span>
				</a>
				<a href="https://github.com/alyssie" class="stick flex self-center rounded-lg p-3 mx-3 mt-10 hover:h-86 h-82 transition-all">
					<span class="self-end">
						<img alt="icon" src="../assets/icons/github-icon.png" class="opacity-20 transition-all" />
					</span>
				</a>
				<div class="photo flex justify-center border-4 border-white rounded-full absolute inset-y-0 w-56 h-56 m-auto">
					<img alt="icon" src="../assets/images/alyssie.jpg" class="rounded-full h-48 self-center" />
				</div>
			</div>
			<div class="introduction">
				<h1 class="title text-center text-4xl font-black tracking-widest mt-16 mb-4">ALYSSIE</h1>
				<p class="text-center font-light">Hello there! Welcome to my website.<br>I’m a freelance Web Developer based in Manila, Philippines.</p>
			</div>
			<div class="counter flex justify-around mx-auto mt-10">
				<div>
					<p class="text-center font-light text-xl font-bold">5</p>
					<p class="text-center font-light text-base">CLIENTS</p>
				</div>
				<div>
					<p class="text-center font-light text-xl font-bold">20+</p>
					<p class="text-center font-light text-base">PROJECTS</p>
				</div>
				<div>
					<p class="text-center font-light text-xl font-bold">5</p>
					<p class="text-center font-light text-base">YEARS</p>
				</div>
			</div>
		</div>
	</header>
	<div id="projects">
		<div class="container mx-auto py-10 px-2 px-lg-40 relative">
			<!-- <img src="../assets/icons/shape-a.svg" alt="" class="absolute -top-56 -left-10 z-0"> -->
			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 relative z-10">
				<Projects img="https://i.imgur.com/mSeWMQk.png" name="Cromlech Website" role="Wordpress development" client="TAYP" link="https://cromlech.com.ph/" />
				<Projects img="https://i.imgur.com/vfKSW1y.png" name="Tara Na Casino Website" role="Wordpress development" client="TAYP" link="https://taranacasino.com/" />
				<Projects img="https://i.imgur.com/xcA2s6W.png" name="Acht Pferde Website" role="Wordpress development" client="TAYP" link="https://achtpferde.com/" />
				<Projects img="https://i.imgur.com/AmTlKK2.png" name="Criticaal Med Theory" role="Wordpress development" client="TAYP" link="https://criticalmedtheory.com/" />
				<Projects img="https://i.imgur.com/L94FUJ3.png" name="KiPay Website" role="Wordpress development" client="TAYP" link="https://jbeapindustries.ph/" />
				<Projects img="https://i.imgur.com/vlH2cJM.jpg" name="KiPay Website" role="Full-stack development & Design" client="KiPay Exchange" link="https://kipayexchange.com" />
				<Projects img="https://i.imgur.com/Sq7qffd.jpg" name="Go Volunteer Website" role="Full-stack development & Design" client="Supsoft Technologies" link="https://go-volunteer.netlify.app" />
				<Projects img="https://i.imgur.com/POkTtpZ.jpg" name="Supsoft Tech Website" role="Full-stack development & Design" client="Supsoft Technologies" link="http://supsofttech.com/" />
				<Projects img="https://i.imgur.com/4Z9apnk.jpg" name="Cheese Anything Webpage" role="Front-end development" client="31 Digital Media" link="https://www.cheeseanything.com/" />
				<Projects img="https://i.imgur.com/291JJuu.jpg" name="Cecon Landing Pages" role="Front-end development" client="31 Digital Media" link="" />
				<Projects img="https://i.imgur.com/sHGPOkY.jpg" name="Pomodoro App" role="Full-stack development & Design" client="Personal Project" link="https://alyssie-pomodoro-app.netlify.app" />
				<Projects img="https://i.imgur.com/ZPMCkYs.jpg" name="Shortly Challenge" role="Full-stack development" client="Front-end Mentor" link="https://alyssie-shortly-url-shortening-api.netlify.app" />
				<Projects img="https://i.imgur.com/lyk6vnc.jpg" name="Rockwell Website" role="Mobile Front-end development" client="31 Digital Media" link="https://www.prosceniumatrockwell.com/" />
				<Projects img="https://i.imgur.com/w0nBAj9.jpg" name="IP Address Tracker Challenge" role="Full-stack development" client="Front-end Mentor" link="https://alyssie-shortly-url-shortening-api.netlify.app" />
				<Projects img="https://i.imgur.com/05j8XcL.jpg" name="Vivenso Website" role="Front-end development" client="31 Digital Media" link="https://vivenso.ph/" />
				<Projects img="https://i.imgur.com/l6G8zVd.jpg" name="UMI Collections" role="Front-end development" client="UMI Collections" link="https://umicollections.secure-decoration.com/" />
				<Projects img="https://i.imgur.com/xUxzbrp.jpg" name="Easy Franchise Website" role="Front-end development" client="31 Digital Media" link="https://www.easyfranchise.com/" />
				<Projects img="https://i.imgur.com/MffdnA4.jpg" name="Beepbeep Website" role="Front-end development" client="31 Digital Media" link="https://beepbeep.ph/" />
				<Projects img="https://i.imgur.com/Sfx2GKd.jpg" name="Brentertainment Website" role="Front-end development" client="31 Digital Media" link="" />
				<Projects img="https://i.imgur.com/Dz2yfTK.jpg" name="Anongsayo Website" role="Full-stack development & Design" client="Anong Sayo" link="" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Projects from '../components/Projects.vue'
export default defineComponent({
    name: 'Home',
    props: {
    },
	components: {
		Projects
	},
	setup: () => {
		const showcase = false
		return { showcase }
	}
})
</script>

<style scoped>
    header{
		background-image: linear-gradient(#dadada, #ffffff);
	}
	.stick{
		background: #c4c4c4;
		cursor: pointer;
	}
    .stick:hover img{
        opacity: 1;
    }
	.photo{
		background: #c4c4c4;
	}
</style>
