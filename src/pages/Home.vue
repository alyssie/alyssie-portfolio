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
				<a href="viber://chat?number=%2B639063540820" class="stick flex self-center rounded-lg p-3 mx-3 mt-10 hover:h-86 h-82 transition-all">
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
			<div class="container introduction">
				<h1 class="title text-center text-4xl font-black tracking-widest mt-16 mb-4">ALYSSIE</h1>
				<p class="text-center font-light">Hello! Welcome to my portfolio.<br>I’m a freelance web developer based in Manila, Philippines.</p>
				<p class="text-center font-light mt-5">Please note that the web designs shown here are not mine unless specified.</p>
				<p class="text-center font-light">Some websites may be unavailable, modified, or updated to a different version than what’s shown in the photos.</p>
			</div>
			<div class="counter flex justify-around mx-auto mt-10">
				<div>
					<p class="text-center font-light text-xl font-bold">10+</p>
					<p class="text-center font-light text-base">CLIENTS</p>
				</div>
				<div>
					<p class="text-center font-light text-xl font-bold">50+</p>
					<p class="text-center font-light text-base">PROJECTS</p>
				</div>
				<div>
					<p class="text-center font-light text-xl font-bold">7</p>
					<p class="text-center font-light text-base">YEARS</p>
				</div>
			</div>
		</div>
	</header>
	<div id="projects">
		<div class="container mx-auto py-10 px-2 px-lg-40 relative">
			<!-- <img src="../assets/icons/shape-a.svg" alt="" class="absolute -top-56 -left-10 z-0"> -->
			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 relative z-10">
				<Projects img="https://i.imgur.com/2sz1GLV.png" name="PAWS Donation Website - 2024" role="Full WordPress Development" client="TAYP" link="https://donatetopaws.org.ph/" />
				<Projects img="https://i.imgur.com/73nu7wG.png" name="Artpro Website - 2023" role="Full WordPress Developmentt" client="31 Digital" link="https://artprogames.com/" />
				<Projects img="https://i.imgur.com/N2LReBG.png" name="El Poco Cantina - 2022" role="Full WordPress Development" client="TAYP" link="https://elpococantina.com/" />
				<Projects img="https://i.imgur.com/vo4tsgc.png" name="Burton Edge Website - 2024" role="Figma Web Design" client="Burton Edge" link="https://www.figma.com/design/PRKQr4xPa4F4kCB3MyI7i9/Burton-Edge?node-id=0-1&t=yP07EIRzLNZpKCeR-1" />
				<Projects img="https://i.imgur.com/raSmNoS.png" name="Benitez Private Resort Website - 2024" role="Full WordPress Development" client="TAYP" link="https://benitezresort.com/" />
				<Projects img="https://i.imgur.com/0mPkkNx.png" name="Kinman Website - 2024" role="Full WordPress Development" client="31 Digital" link="https://kinman.com/" />
				<Projects img="https://i.imgur.com/hiYY4ND.png" name="KS TECH Website - 2024" role="Full WordPress Development" client="Naomi" link="https://kstechconstruction.com/" />
				<Projects img="https://i.imgur.com/ma3h1JM.png" name="The Coaching Group Website - 2024" role="Full WordPress Development" client="TAYP" link="https://coachinggroupinc.com/" />
				<Projects img="https://i.imgur.com/JKL8Y6s.png" name="Imperial Cleaning Services Website - 2024" role="Front-end WordPress Development" client="Velenda" link="" />
				<Projects img="https://i.imgur.com/wG5IKEG.png" name="Acht Pferde Website - 2022" role="Full WordPress Development" client="TAYP" link="https://achtpferde.com/" />
				<Projects img="https://i.imgur.com/ohkNzUB.png" name="Eight Infinity Website - 2023" role="Full WordPress Development" client="TAYP" link="https://eightinfinity.com.ph/" />
				<Projects img="https://i.imgur.com/6YZL9xx.png" name="Dragonix Website - 2023" role="Elementor Widget Development" client="31 Digital" link="https://dragonixbooks.com/" />
				<Projects img="https://i.imgur.com/cCMlhDY.png" name="Sylvester Website - 2022" role="Front-end development" client="Personal Project" link="https://alyssie-sylvester.netlify.app/" />	
				<Projects img="https://i.imgur.com/4Uw3p1H.png" name="RPGamePacks Website - 2022" role="Full WordPress Development" client="TAYP" link="https://rpgamepacks.com/" />
				<Projects img="https://i.imgur.com/bidNewl.png" name="Notorious Motorsports Website - 2023" role="Full WordPress Development" client="TAYP" link="https://notoriousmotorsports.com.ph/" />
				<Projects img="https://i.imgur.com/hMPQAws.png" name="Tayp Food - 2022" role="Full WordPress Development" client="TAYP" link="tayp.ph/food" />
				<Projects img="https://i.imgur.com/3EAQxHx.png" name="Commercial DB Website - 2023" role="Full WordPress Development & Design" client="Patrick Ooi" link="https://commercialdb.com/" />
				<Projects img="https://i.imgur.com/y9iEVtH.png" name="Toys Ultra Website - 2022" role="Full WordPress Development" client="TAYP" link="http://toysultra.com/" />
				<Projects img="https://i.imgur.com/kEpVuUS.png" name="Critical Med Theory - 2022" role="Full WordPress Development" client="TAYP" link="https://criticalmedtheory.com/" />
				<Projects img="https://i.imgur.com/kHg7nN8.png" name="Cromlech Website - 2022" role="Full WordPress Development" client="TAYP" link="https://cromlech.ph/" />
				<Projects img="https://i.imgur.com/RYpcFIY.png" name="Jbeap Industries - 2022" role="Full WordPress Development" client="TAYP" link="https://jbeapindustries.ph/" />
				<Projects img="https://i.imgur.com/yLDXwDY.png" name="Allegro - 2022" role="Full WordPress Development" client="31 Digital" link="https://allegrobeverage.com/" />
				<Projects img="https://i.imgur.com/NEnL3hk.png" name="Better Today Contact Page - 2022" role="Front-end Development" client="31 Digital" link="" />
				<Projects img="https://i.imgur.com/6bZhVsK.png" name="Sportsbets Website - 2022" role="Full WordPress Development" client="31 Digital" link="" />
				<Projects img="https://i.imgur.com/4Z9apnk.jpg" name="Cheese Anything Webpage - 2021" role="Front-end Development" client="31 Digital Media" link="https://www.cheeseanything.com/" />
				<Projects img="https://i.imgur.com/sHGPOkY.jpg" name="Pomodoro App - 2021" role="Full-stack Development & Design" client="Personal Project" link="https://alyssie-pomodoro-app.netlify.app" />
				<Projects img="https://i.imgur.com/suqxube.png" name="Unicomm Ingredients - 2021" role="Front-end Development" client="31 Digital" link="https://www.unicommingredients.com/" />
				<Projects img="https://i.imgur.com/w0nBAj9.jpg" name="IP Address Tracker Challenge - 2021" role="Full-stack Development" client="Front-end Mentor" link="https://alyssie-ip-tracker.netlify.app" />
				<Projects img="https://i.imgur.com/EBz5QyT.png" name="Tara Na Casino Website - 2021" role="Full WordPress Development" client="TAYP" link="https://taranacasino.com/" />
				<Projects img="https://i.imgur.com/vlH2cJM.jpg" name="KiPay Website - 2021" role="Full-stack Development & Design" client="KiPay Exchange" link="https://kipayexchange.com/" />
				<Projects img="https://i.imgur.com/Sq7qffd.jpg" name="Go Volunteer Website - 2021" role="Full-stack Development & Design" client="Supsoft Technologies" link="https://go-volunteer.netlify.app" />
				<Projects img="https://i.imgur.com/W6OAlqk.png" name="Cookmunity by Ajinomoto - 2021" role="Front-End WordPress development" client="31 Digital Media" link="https://www.cookmunitybyajinomoto.com/" />
				<Projects img="https://i.imgur.com/291JJuu.jpg" name="Cecon Landing Pages - 2021" role="Front-end Development" client="31 Digital Media" link="" />
				<Projects img="https://i.imgur.com/awKbnQL.png" name="Rockwell Primaries Website - 2021" role="Mobile Front-end Development" client="31 Digital Media" link="https://rockwellprimaries.com.ph/" />
				<Projects img="https://i.imgur.com/UhU5EcT.png" name="53 Benitez Website - 2021" role="Mobile Front-end Development" client="31 Digital Media" link="https://rockwellprimaries.com.ph/projects/53-benitez/" />
				<Projects img="https://i.imgur.com/OcjdYLP.png" name="Terreno South Rockwell Website - 2021" role="Mobile Front-end Development" client="31 Digital Media" link="https://www.terrenosouth.com.ph/" />
				<Projects img="https://i.imgur.com/kZZNabj.png" name="Nara Residence by Rockwell Website - 2021" role="Mobile Front-end Development" client="31 Digital Media" link="https://www.nararesidencesbyrockwell.com/" />
				<Projects img="https://i.imgur.com/FAAawS6.png" name="Rockwell South Carmelray Website - 2021" role="Mobile Front-end Development" client="31 Digital Media" link="https://www.rockwellsouthatcarmelray.com/" />	
				<Projects img="https://i.imgur.com/OCB1QIz.png" name="Proscenium at Rockwell - 2020" role="Mobile Front-end Development" client="31 Digital Media" link="https://www.prosceniumatrockwell.com/" />
				<Projects img="https://i.imgur.com/POkTtpZ.jpg" name="Supsoft Tech Website" role="Full-stack Development & Design" client="Supsoft Technologies" link="http://supsofttech.com/" />
				<Projects img="https://i.imgur.com/05j8XcL.jpg" name="Vivenso Website" role="Full WordPress Development" client="31 Digital Media" link="https://vivenso.ph/" />
				<Projects img="https://i.imgur.com/xUxzbrp.jpg" name="Easy Franchise Website - 2019" role="Front-end Development" client="31 Digital Media" link="https://www.easyfranchise.com/" /><Projects img="https://i.imgur.com/Dz2yfTK.jpg" name="Anongsayo Website - 2021" role="Full-stack Development & Design" client="Anong Sayo" link="" />
				<Projects img="https://i.imgur.com/l6G8zVd.jpg" name="UMI Collections - 2021" role="Front-end Development" client="UMI Collections" link="http://umicollections.com/" />
				<Projects img="https://i.imgur.com/ZPMCkYs.jpg" name="Shortly Challenge - 2021" role="Full-stack Development" client="Front-end Mentor" link="https://alyssie-shortly-url-shortening-api.netlify.app" />
				<Projects img="https://i.imgur.com/MffdnA4.jpg" name="Beepbeep Website - 2018" role="Front-end Development" client="31 Digital Media" link="https://beepbeep.ph/" />
				<Projects img="https://i.imgur.com/Sfx2GKd.jpg" name="Brentertainment Website - 2017" role="Front-end Development" client="31 Digital Media" link="http://brentertainment.tv/" />
				<Projects img="https://i.imgur.com/q97juej.png" name="Asia Select - 2016" role="Front-end Development" client="Asia Select" link="https://asiaselect.ph/" />
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
