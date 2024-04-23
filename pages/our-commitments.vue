<template>
	<ParallaxBackground gradient>
	<div class="px-4 px-lg-0">
		<div class="py-8 pb-16 px-4 px-lg-16 mx-w-m bg-white rounded-xl">
			<h1 class="text-center">
				OUR COMMITMENT: BUILDING A BETTER FUTURE TOGETHER
			</h1>
			<br>
			<p>
				At THX Dreams, we are driven by a powerful mission: to create social impact by empowering farmworkers,
				fostering connections, and generating value for everyone involved. We believe this can only be achieved
				through
				unwavering ethical conduct and a commitment to building enriching relationships with all stakeholders.
			</p>
			<br>
			<h3 class="mb-3">
				Our Guiding Principles:
			</h3>
			<strong>Ethical Conduct and Responsibility</strong>
			<ul class="pl-10">
				<li>
					<strong>Integrity and Honesty:</strong> We act with fairness and transparency in all interactions.
				</li>
				<li>
					<strong>Anti-Corruption and Fraud Policy:</strong> We have zero tolerance for bribery, corruption, or
					illegal activity.
				</li>
				<li>
					<strong>Legal Compliance:</strong> We adhere to all applicable laws and regulations, upholding the
					highest standards.
				</li>
			</ul>
			<br>
			<strong>Respect for Others and the Environment</strong>
			<ul class="pl-10">
				<li>
					<strong>Respect and Diversity:</strong> We embrace the richness of diversity and treat everyone with
					dignity and respect.
				</li>
				<li>
					<strong>Sustainability and Environment:</strong> We actively promote sustainable practices and
					environmental responsibility.
				</li>
				<li>
					<strong>Data Protection and Privacy:</strong> We safeguard the privacy and confidentiality of all
					personal information entrusted to us.
				</li>
			</ul>
			<br>
			<strong>Commitment to Transparency and Accountability</strong>
			<ul class="pl-10">
				<li>
					<strong>Transparency and Accuracy in Information:</strong> We provide accurate and complete information
					about our activities and policies.
				</li>
				<li>
					<strong>Independent Advisory Board:</strong> Our independent body oversees our social impact mission and
					code enforcement, ensuring transparency and best practices.
				</li>
			</ul>
			<br>

			<strong>
				Learning more about our principles:
			</strong>
			<!-- *aca poner links a ambos documentos -->
			<br>

			Code of Ethics
			<br>

			Sustainability Policy

			<br>
			<br>

			<p>
				For any concerns or reports of potential violations of this Code of Conduct or THX LLC's principles, we
				provide the email <a href="mailto:transparency@thxdreams.com" target="_blank" class="classic-a"
					rel="noopener noreferrer">transparency@thxdreams.com</a>. This email is managed directly by the Advisory
				Board, and we
				guarantee
				the confidentiality of personal data.
			</p>
		</div>
		</div>
	</ParallaxBackground>
</template>

<script setup>
const route = useRoute()
const title = route.name.replace('-', ' ')
useHead({
	title: title.charAt(0).toUpperCase()
		+ title.slice(1) + ' - THX!'
})
</script>