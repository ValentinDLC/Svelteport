<script>
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import Icon from '@iconify/svelte';

	const softSkills = [
		{
			name: 'Adaptabilité',
			color: '#3498db',
			description: 'Capacité à s\'adapter à différents environnements de travail et à des technologies variées. Dans le projet de création de la page d\'accueil d\'une agence de voyage, j\'ai dû m\'adapter aux maquettes Figma et aux exigences spécifiques du client, en intégrant l\'interface responsive de manière efficace.'
		},
		{
			name: 'Résolution de Problèmes',
			color: '#e74c3c',
			description: 'Aptitude à identifier des problèmes et à trouver des solutions efficaces. Lors du débogage et de l\'optimisation du site de photographe, j\'ai analysé les performances et proposé des solutions pour améliorer le référencement et l\'accessibilité, ce qui a permis d\'augmenter la visibilité du site.'
		},
		{
			name: 'Collaboration',
			color: '#2ecc71',
			description: 'Capacité à travailler efficacement en équipe et à communiquer avec les autres. Dans le projet de développement du back-end d\'un site de notation de livres, la collaboration avec d\'autres développeurs et designers a été essentielle pour assurer une intégration fluide entre le front-end et le back-end.'
		},
		{
			name: 'Gestion du Temps',
			color: '#f39c12',
			description: 'Capacité à gérer son temps efficacement pour respecter les délais. La gestion de plusieurs projets, comme la création d\'une application web de location immobilière et d\'une page web dynamique, a nécessité une bonne organisation et une planification rigoureuse pour respecter les délais impartis.'
		},
		{
			name: 'Créativité',
			color: '#9b59b6',
			description: 'Capacité à penser de manière créative pour concevoir des solutions innovantes. Dans le projet de création d\'une page web dynamique, j\'ai utilisé JavaScript pour créer des interactions utilisateur engageantes, nécessitant une approche créative pour améliorer l\'expérience utilisateur.'
		},
		{
			name: 'Attention aux Détails',
			color: '#1abc9c',
			description: 'Capacité à prêter attention aux détails pour garantir la qualité du code et du design. Lors de l\'intégration des maquettes Figma pour le projet d\'agence de voyage, l\'attention aux détails était cruciale pour respecter les spécifications de design et assurer une interface utilisateur cohérente.'
		},
		{
			name: 'Compétences en Communication',
			color: '#e67e22',
			description: 'Capacité à communiquer clairement des idées techniques à des non-techniciens. La rédaction de rapports sur les résultats des optimisations effectuées sur le site de photographe a nécessité une communication claire et concise, facilitant la compréhension des changements apportés.'
		},
		{
			name: 'Esprit Critique',
			color: '#34495e',
			description: 'Capacité à évaluer et à critiquer son propre travail et celui des autres. En analysant les performances du site et en proposant des améliorations, j\'ai développé un esprit critique sur les pratiques de développement, ce qui m\'a permis d\'améliorer continuellement la qualité de mon travail.'
		}
	];

	let mountedSoftSkills = false;

	const skills = {
		frontend: [
			{ name: 'HTML', icon: 'logos:html-5' },
			{ name: 'CSS', icon: 'logos:css-3' },
			{ name: 'JavaScript', icon: 'logos:javascript' },
			{ name: 'Svelte', icon: 'logos:svelte-icon' },
			{ name: 'React', icon: 'logos:react' }
		],
		backend: [
			{ name: 'Node.js', icon: 'logos:nodejs-icon' },
			{ name: 'Express', icon: 'logos:express' },
			{ name: 'MongoDB', icon: 'logos:mongodb-icon' },
		],
		tools: [
			{ name: 'Git', icon: 'logos:git' },
			{ name: 'Webstorm', icon: 'logos:webstorm' },
			{ name: 'Postman', icon: 'logos:postman-icon' },
			{ name: 'Vercel', icon: 'logos:vercel-icon' },
			{ name: 'Notion', icon: 'logos:notion-icon' }
		]
	};

	let mountedSections = {
		frontend: false,
		backend: false,
		tools: false
	};

	onMount(() => {
		// Initialiser l'animation des soft-skills
		mountedSoftSkills = true;

		// Observer les sections de compétences techniques
		const sections = document.querySelectorAll('.skills-section[data-section]');
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					const sectionType = entry.target.getAttribute('data-section');

					// Vérifier si c'est une section valide dans notre modèle
					if (sectionType && skills[sectionType]) {
						mountedSections[sectionType] = true;
					}

					observer.unobserve(entry.target);
				}
			});
		}, {
			threshold: 0.1
		});

		sections.forEach(section => observer.observe(section));

		return () => {
			sections.forEach(section => observer.unobserve(section));
		};
	});
</script>

<div class="about-container" in:fly="{{ y: 50, duration: 500 }}">
	<h1 class="page-title">À propos</h1>

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

		<section class="about-section">
			<h2>Soft-skills</h2>
			<div class="soft-skills-list">
				{#each softSkills as skill}
					<div class="soft-skill-card" style="--skill-color: {skill.color}">
						<span class="soft-skill-name">
							{skill.name}
						</span>
						<div class="skill-description">
							<p>{skill.description}</p>
						</div>
					</div>
				{/each}
			</div>

			<div class="buttons-container">
				<a href="https://directory.opquast.com/fr/certificat/DV4H6G/" target="_blank" class="certificate-link">
					<div class="certificate-button">
						<img src="/images/Opquast.png" alt="Certificat Opquast" class="certificate-image" />
						<span class="certificate-text">Certificat Opquast</span>
					</div>
				</a>
				<a href="/Documents/Alternance_contrat_d_apprentissage_Developpeur-Web_et_Mobile.pdf" target="_blank" class="certificate-link">
					<div class="certificate-button">
						<img src="/images/icon-cv.png" alt="Mon CV" class="certificate-image" />
						<span class="certificate-text">Mon CV</span>
					</div>
				</a>
			</div>
		</section>
	</div>
</div>

<div class="skills-container" in:fly="{{ y: 50, duration: 500 }}">
	<h1 class="page-title">Compétences</h1>

	<div class="skills-sections">
		<section class="skills-section" data-section="frontend">
			<h2>Frontend</h2>
			<div class="skills-list">
				{#each skills.frontend as skill}
					<div class="skill-card">
						<span class="skill-icon {mountedSections.frontend ? 'animate' : ''}">
							<Icon icon={skill.icon}/>
						</span>
					</div>
				{/each}
			</div>
		</section>

		<section class="skills-section" data-section="backend">
			<h2>Backend</h2>
			<div class="skills-list">
				{#each skills.backend as skill}
					<div class="skill-card">
                <span class="skill-icon {mountedSections.backend ? 'animate' : ''}"
					  style="font-size: {skill.name === 'Express' ? '1.5rem' : '3rem'};">
                    <Icon icon={skill.icon} />
                </span>
					</div>
				{/each}
			</div>
		</section>

		<section class="skills-section" data-section="tools">
			<h2>Outils</h2>
			<div class="skills-list">
				{#each skills.tools as skill}
					<div class="skill-card">
						<span class="skill-icon {mountedSections.tools ? 'animate' : ''}">
							<Icon icon={skill.icon}/>
						</span>
					</div>
				{/each}
			</div>
		</section>
	</div>
</div>

<style>
	.about-container {
		padding: clamp(2rem, 3vw, 2rem);
	}

	.page-title {
		font-size: clamp(2rem, 5vw, 3rem);
		margin-bottom: clamp(2rem, 5vw, 3rem);
		text-align: center;
	}

	.about-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: clamp(2rem, 5vw, 4rem);
	}

	.about-section,
	.skills-section {
		background: #f9f9f9;
		border-radius: 8px;
		padding: 2rem;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	}

	.content-card {
		background: white;
		padding: clamp(1.5rem, 3vw, 2rem);
		border-radius: 8px;
		box-shadow: 0 2px 4px rgba(0,0,0,0.1);
	}

	h2 {
		font-size: clamp(1.5rem, 4vw, 2rem);
		margin-bottom: 2rem;
		text-align: center;
	}

	.soft-skills-list {
		display: flex;
		gap: 1.5rem;
		justify-content: center;
		flex-wrap: wrap;
		margin-bottom: 2rem;
	}

	.soft-skill-card {
		display: flex;
		justify-content: center;
		align-items: center;
		transition: transform 0.3s, box-shadow 0.3s;
		margin: 0.5rem;
		border: 2px solid var(--skill-color);
		border-radius: 8px;
		background-color: transparent;
		position: relative;
		width: 8em;
		height: 3em;
		cursor: pointer;
	}

	.soft-skill-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 6px 12px rgba(0,0,0,0.15);
		background-color: var(--skill-color);
		z-index: 10;
	}

	.soft-skill-name {
		font-weight: bold;
		font-size: 1rem;
		text-align: center;
		color: var(--skill-color);
		transition: color 0.3s;
		pointer-events: none;
	}

	.soft-skill-card:hover .soft-skill-name {
		color: white;
	}

	.skill-description {
		position: absolute;
		top: 100%;
		left: 0;
		width: 300px;
		background-color: white;
		border: 2px solid var(--skill-color);
		border-radius: 8px;
		padding: 1rem;
		opacity: 0;
		visibility: hidden;
		transition: opacity 0.3s ease, visibility 0.3s ease;
		box-shadow: 0 6px 16px rgba(0,0,0,0.15);
		z-index: 20;
		text-align: left;
		margin-top: 10px;
	}

	.skill-description p {
		font-size: 0.9rem;
		color: #333;
		margin: 0;
		line-height: 1.5;
	}

	.soft-skill-card:hover .skill-description {
		opacity: 1;
		visibility: visible;
		transition-delay: 0.1s;
	}

	.skill-description::before {
		content: '';
		position: absolute;
		top: -10px;
		left: 20px;
		width: 0;
		height: 0;
		border-left: 10px solid transparent;
		border-right: 10px solid transparent;
		border-bottom: 10px solid var(--skill-color);
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
		cursor: pointer;
	}

	.certificate-button {
		display: flex;
		flex-direction: column;
		align-items: center;
		transition: all 0.3s ease;
		position: relative;
		width: 120px;
		height: 100px;
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
		pointer-events: none;
	}

	.certificate-button:hover .certificate-image {
		transform: translateY(-5px);
		box-shadow: 0 5px 15px rgba(0,0,0,0.1);
	}

	.certificate-button:hover .certificate-text {
		opacity: 1;
		transform: translateY(0);
	}

	.skills-container {
		padding: clamp(1rem, 3vw, 2rem);
		max-width: 1200px;
		margin: 0 auto;
	}

	.skills-sections {
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}

	.skills-list {
		display: flex;
		gap: 2.5rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	.skill-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 1rem;
		width: 80px;
		height: 80px;
		transition: transform 0.3s, box-shadow 0.3s;
		border-radius: 50%;
		background-color: #fff;
		box-shadow: 0 2px 10px rgba(0,0,0,0.1);
		justify-content: center;
	}

	.skill-card:hover {
		transform: translateY(-5px) scale(1.1);
		box-shadow: 0 5px 15px rgba(0,0,0,0.2);
	}

	.skill-icon {
		font-size: 2.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.skill-icon.animate {
		animation: popIn 0.5s ease forwards;
	}


	@keyframes popIn {
		0% {
			transform: scale(0);
			opacity: 0;
		}
		70% {
			transform: scale(1.1);
			opacity: 1;
		}
		100% {
			transform: scale(1);
			opacity: 1;
		}
	}

	@media (hover: none) {
		.soft-skill-card:active .skill-description {
			opacity: 1;
			visibility: visible;
		}

		.certificate-button:active .certificate-text {
			opacity: 1;
			transform: translateY(0);
		}
	}

	/* Media queries */
	@media (max-width: 768px) {
		.soft-skills-list {
			gap: 1rem;
		}

		.soft-skill-card {
			width: 140px;
		}

		.skill-description {
			width: 250px;
			left: 50%;
			transform: translateX(-50%);
		}

		.skill-description::before {
			left: 50%;
			transform: translateX(-50%);
		}

		.skills-list {
			gap: 1.5rem;
		}

		.skill-card {
			width: 70px;
			height: 70px;
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