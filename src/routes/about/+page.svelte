<script>
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	const softSkills = [
		{ name: 'Autonomie', level: 80, color: '#FF5733' },
		{ name: 'Curiosité Intellectuelle', level: 90, color: '#33A1FF' },
		{ name: 'Capacité d\'adaptation', level: 85, color: '#28A745' },
		{ name: 'Problem solver', level: 75, color: '#FFC107' },
		{ name: 'Polyvalent', level: 70, color: '#6F42C1' },
		{ name: 'Cohésion d\'équipe', level: 80, color: '#E83E8C' }
	];

	let mountedSoftSkills = false;
	let softSkillPercentages = softSkills.map(() => 0);

	function animateSoftSkillPercentage(index, targetValue) {
		const duration = 1500;
		const startTime = performance.now();

		function update(currentTime) {
			const elapsed = currentTime - startTime;
			const progress = Math.min(elapsed / duration, 1);
			softSkillPercentages[index] = Math.floor(progress * targetValue);

			if (progress < 1) {
				requestAnimationFrame(update);
			}
		}

		requestAnimationFrame(update);
	}

	onMount(() => {
		mountedSoftSkills = true;
		softSkills.forEach((skill, index) => {
			animateSoftSkillPercentage(index, skill.level);
		});
	});
</script>

<div class="about-container" in:fly="{{ y: 50, duration: 500 }}">
	<h1>À propos</h1>

	<div class="about-grid">
		<section class="about-section">
			<h2>Mon Parcours</h2>
			<div class="content-card">
				<p>
					Actuellement en reconversion dans le développement web, je recherche une alternance pour renforcer mes compétences et contribuer à des projets concrets.
					<br><br>
					J'ai développé une forte capacité d'adaptation et une approche autonome et pragmatique dans l'apprentissage des technologies web. Passionné par le JavaScript, le développement front-end et l'optimisation des interfaces, je suis motivé à concevoir des solutions performantes et intuitives.
					<br><br>
					En intégrant votre équipe, je souhaite mettre mes compétences en React, JavaScript et API au service de vos projets tout en continuant à progresser au contact de développeurs expérimentés.
					<br><br>
					💡 Motivé, curieux et prêt à relever de nouveaux défis, je suis disponible immédiatement pour un échange !
				</p>
			</div>
		</section>

		<section class="about-section" data-section="soft-skills">
			<h2>Soft-skills</h2>
			<div class="skills-list">
				{#each softSkills as skill, index}
					<div class="skill-card">
						<div class="skill-bar-container">
							<div class="skill-bar">
								<div
										class="skill-progress {mountedSoftSkills ? 'animate' : ''}"
										style="--final-width: {skill.level}%; --final-color: {skill.color};"
								></div>
							</div>
							<span class="skill-percentage {mountedSoftSkills ? 'animate' : ''}"
								  style="--final-color: {skill.color};"
								  data-value={skill.level}>
								{softSkillPercentages[index]}%
							</span>
						</div>
						<span class="skill-name {mountedSoftSkills ? 'animate' : ''}"
							  style="--final-color: {skill.color}">
							{skill.name}
						</span>
					</div>
				{/each}
			</div>

			<div class="buttons-container">
				<a href="/https:directory.opquast.com/fr/certificat/DV4H6G/" target="_blank" class="certificate-link">
					<div class="certificate-button">
						<img src="/images/Opquast.png" alt="Certificat Opquast" class="certificate-image" />
						<span class="certificate-text">Certificat Opquast</span>
					</div>
				</a>
				<a href="/path/to/cv.pdf" target="_blank" class="certificate-link">
					<div class="certificate-button">
						<img src="/path/to/cv-image.png" alt="Mon CV" class="certificate-image" />
						<span class="certificate-text">Mon CV</span>
					</div>
				</a>
			</div>
		</section>
	</div>
</div>

<style>
	.about-container {
		padding: clamp(1rem, 3vw, 2rem);
	}

	h1 {
		font-size: clamp(2rem, 5vw, 3rem);
		margin-bottom: clamp(2rem, 5vw, 3rem);
	}

	.about-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: clamp(2rem, 5vw, 4rem);
	}

	.content-card {
		background: white;
		padding: clamp(1.5rem, 3vw, 2rem);
		border-radius: 8px;
		box-shadow: 0 2px 4px rgba(0,0,0,0.1);
	}

	.skills-list {
		display: flex;
		gap: 2rem;
		justify-content: center;
		flex-wrap: wrap;
		margin-bottom: 2rem;
	}

	.skill-card {
		display: flex;
		flex-direction: column;
		align-items: initial;
		gap: 0.5rem;
		width: 80px;
		transition: transform 0.2s;
		margin: 0 1rem;
	}

	.skill-card:hover {
		transform: translateY(-5px);
	}

	.skill-bar-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 150px;
	}

	.skill-bar {
		border-radius: 5px;
		width: 100%;
		height: 20px;
		position: relative;
		overflow: hidden;
	}

	.skill-progress {
		position: absolute;
		left: 0;
		width: 0;
		height: 100%;
		border-radius: 5px;
		background-color: #ddd;
	}

	.skill-progress.animate {
		animation: growRightAndColor 1.5s cubic-bezier(0.23, 1, 0.32, 1) forwards;
	}

	@keyframes growRightAndColor {
		0% {
			width: 0;
			background-color: #ddd;
		}
		100% {
			width: var(--final-width);
			background-color: var(--final-color);
		}
	}

	.skill-percentage {
		font-size: 0.9rem;
		font-weight: 600;
		color: #666;
	}

	.skill-name {
		font-weight: bold;
		font-size: 0.8rem;
		text-align: center;
	}

	.buttons-container {
		display: flex;
		justify-content: center;
		gap: 2.5rem;
		margin-top: 2rem;
		flex-wrap: wrap;
	}

	.certificate-link {
		text-decoration: none;
	}

	.certificate-button {
		display: flex;
		flex-direction: column;
		align-items: center;
		transition: all 0.3s ease;
		position: relative;
		width: 120px;
	}

	.certificate-image {
		width: 80px;
		height: 80px;
		object-fit: cover;
		transition: transform 0.3s ease;
		border-radius: 50%;
	}

	.certificate-text {
		opacity: 0;
		transform: translateY(-10px);
		transition: all 0.3s ease;
		position: absolute;
		bottom: -25px;
		text-align: center;
		color: #333;
		font-weight: 600;
		width: 100%;
	}

	.certificate-button:hover .certificate-image {
		transform: translateY(-5px);
		box-shadow: 0 5px 15px rgba(0,0,0,0.1);
	}

	.certificate-button:hover .certificate-text {
		opacity: 1;
		transform: translateY(0);
	}

	@media (max-width: 768px) {
		.skills-list {
			gap: 5.5rem;
		}

		.skill-card {
			width: 70px;
			margin: 0 0.5rem;
		}

		.buttons-container {
			gap: 3rem;
		}

		.certificate-button {
			width: 100px;
		}

		.certificate-image {
			width: 70px;
			height: 70px;
		}
	}
</style>