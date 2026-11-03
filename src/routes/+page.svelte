<script>
	import { profile, skills, experience, projects, repositoryGroups, education, interests } from '$lib/data/portfolio.js';

	const allRepositories = repositoryGroups.flatMap((group) => group.repositories);
	let searchTerm = '';
	let normalizedQuery = '';
	let filteredGroups = repositoryGroups;
	$: normalizedQuery = searchTerm.trim().toLocaleLowerCase('fr');
	$: filteredGroups = repositoryGroups
		.map((group) => ({
			...group,
			repositories: group.repositories.filter((repository) =>
				repository.name.toLocaleLowerCase('fr').includes(normalizedQuery)
			)
		}))
		.filter((group) => group.repositories.length > 0);
</script>

<svelte:head>
	<title>{profile.brand} · {profile.name} — Tests automatisés</title>
	<meta
		name="description"
		content="Portfolio de Valentin Dardenne, développeur de tests automatisés : Playwright, pytest, CI/CD et projets Full-Stack."
	/>
	<meta name="theme-color" content="#191a19" />
</svelte:head>

<main>
	<section class="hero" id="accueil" aria-labelledby="hero-title">
		<div class="hero-copy">
			<p class="eyebrow"><span class="status-dot"></span> Disponible pour de nouvelles opportunités</p>
			<h1 id="hero-title">Valentin<br /><span>Dardenne</span></h1>
			<p class="hero-role">Développeur de tests automatisés</p>
			<p class="hero-summary">
				Je conçois des logiciels fiables et vérifiables. J’automatise les parcours, structure les tests et intègre la qualité dans les pipelines de livraison.
			</p>
			<div class="hero-actions">
				<a class="button button-primary" href="#projets">Découvrir mes projets <span aria-hidden="true">↘</span></a>
				<a class="button button-secondary" href={profile.cv} target="_blank" rel="noreferrer">Télécharger mon CV <span aria-hidden="true">↓</span></a>
			</div>
			<div class="quick-facts" aria-label="Informations de contact">
				<span>{profile.location}</span>
				<a href={`tel:${profile.phone.replaceAll(' ', '')}`}>{profile.phone}</a>
				<a href={`mailto:${profile.email}`}>{profile.email}</a>
			</div>
		</div>
		<div class="hero-panel" aria-label="Domaines d'expertise">
			<div class="panel-top"><span>Qualité logicielle</span><span>01 / 06</span></div>
			<div class="panel-mark" aria-hidden="true">D<span>.</span></div>
			<p>Du test au déploiement</p>
			<div class="panel-tags"><span>Playwright</span><span>pytest</span><span>CI/CD</span></div>
		</div>
		<a class="scroll-hint" href="#profil"><span aria-hidden="true">↓</span> Faire défiler</a>
	</section>

	<section class="section profile-section" id="profil">
		<div class="section-heading">
			<p class="eyebrow">01 — Profil</p>
			<h2>La qualité commence <span>avant le test.</span></h2>
		</div>
		<div class="profile-grid">
			<div class="profile-intro">
				<p>{profile.introduction}</p>
				<p class="profile-note">Diplômé du titre RNCP niveau 6 Développeur Full-Stack · certifié OPQUAST Qualité Web.</p>
			</div>
			<div class="experience-list" aria-label="Expérience professionnelle">
				{#each experience as item}
					<article class="experience-item">
						<div class="experience-meta"><h3>{item.role}</h3><span>{item.date}</span></div>
						<p class="experience-company">{item.company}</p>
						<p>{item.description}</p>
					</article>
				{/each}
			</div>
		</div>
	</section>

	<section class="section skills-section" id="competences">
		<div class="section-heading">
			<p class="eyebrow">02 — Compétences</p>
			<h2>Des outils pour <span>livrer avec confiance.</span></h2>
		</div>
		<div class="skills-grid">
			{#each skills as group}
				<article class="skill-group">
					<h3>{group.category}</h3>
					<div class="skill-tags">
						{#each group.items as skill}
							<span>{skill}</span>
						{/each}
					</div>
				</article>
			{/each}
		</div>
	</section>

	<section class="section projects-section" id="projets">
		<div class="section-heading section-heading-row">
			<div><p class="eyebrow">03 — Projets</p><h2>Du concret, <span>mesurable.</span></h2></div>
			<p class="section-aside">Une sélection de réalisations, de l’automatisation métier à la donnée.</p>
		</div>
		<div class="projects-grid">
			{#each projects as project, index}
				<article class="project-card">
					<div class="project-topline"><span>0{index + 1}</span><span>{project.kind}</span></div>
					<h3>{project.title}</h3>
					<p>{project.description}</p>
					<p class="project-highlight"><span aria-hidden="true">↗</span> {project.highlight}</p>
					<div class="project-bottom">
						<div class="project-tags">{#each project.stack as tool}<span>{tool}</span>{/each}</div>
						{#if project.repository}
							<a class="text-link" href={project.repository} target="_blank" rel="noreferrer" aria-label={`Voir le dépôt ${project.title}`}>GitHub ↗</a>
						{/if}
					</div>
				</article>
			{/each}
		</div>
	</section>

	<section class="section repository-section" id="depots">
		<div class="section-heading section-heading-row">
			<div><p class="eyebrow">04 — Dépôts GitHub</p><h2>Tout le parcours, <span>au même endroit.</span></h2></div>
			<p class="repository-count"><strong>{allRepositories.length}</strong><span>dépôts répertoriés</span></p>
		</div>
		<p class="repository-intro">Projets personnels, expérimentations et travaux de formation. Les dépôts privés sont signalés et ne donnent pas accès au code.</p>
		<label class="search-label" for="repo-search">Filtrer le catalogue</label>
		<input id="repo-search" class="repo-search" type="search" bind:value={searchTerm} placeholder="Ex. Playwright, Portfolio, holberton…" />
		<div class="repository-groups">
			{#each filteredGroups as group}
				<section class="repository-group">
					<h3>{group.category}<span>{group.repositories.length}</span></h3>
					<ul>
						{#each group.repositories as repository}
							<li>
								{#if repository.visibility === 'private'}
									<span class="repository-name">{repository.name}</span><span class="private-label">Privé</span>
								{:else}
									<a class="repository-name" href={`https://github.com/ValentinDLC/${repository.name}`} target="_blank" rel="noreferrer">{repository.name}<span aria-hidden="true"> ↗</span></a>
								{/if}
							</li>
						{/each}
					</ul>
				</section>
			{:else}
				<p class="empty-state">Aucun dépôt ne correspond à « {searchTerm} ».</p>
			{/each}
		</div>
		<a class="button button-secondary github-button" href={profile.github} target="_blank" rel="noreferrer">Ouvrir mon profil GitHub ↗</a>
	</section>

	<section class="section education-section" id="formation">
		<div class="section-heading"><p class="eyebrow">05 — Formation</p><h2>Apprendre, <span>puis mettre en pratique.</span></h2></div>
		<div class="education-grid">
			{#each education as item}
				<article class="education-item"><span>{item.date}</span><h3>{item.degree}</h3><p>{item.institution}</p></article>
			{/each}
		</div>
		<p class="language-note"><strong>Langues</strong> Français · langue maternelle <span>Anglais · courant (C1)</span></p>
	</section>

	<section class="section interests-section" id="interets">
		<div class="section-heading"><p class="eyebrow">En dehors du code</p><h2>Curieux aussi <span>ailleurs.</span></h2></div>
		<div class="interest-list">{#each interests as interest}<span>{interest}</span>{/each}</div>
	</section>

	<section class="contact-section" id="contact">
		<p class="eyebrow">06 — Contact</p>
		<h2>Parlons de <span>qualité.</span></h2>
		<p>Ouvert aux opportunités en automatisation des tests et qualité logicielle.</p>
		<div class="contact-actions"><a class="button button-primary" href={`mailto:${profile.email}`}>Me contacter ↗</a><a class="button button-secondary" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a class="button button-secondary" href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a></div>
	</section>
</main>

<style>
	main { width: 100%; }
	.hero { min-height: min(760px, calc(100svh - 74px)); display: grid; grid-template-columns: 1.2fr 0.8fr; align-items: center; gap: clamp(2rem, 8vw, 8rem); position: relative; padding: clamp(4rem, 9vw, 8rem) clamp(1.25rem, 5vw, 5rem) 6rem; border-bottom: 1px solid var(--line); }
	.hero-copy { max-width: 760px; }
	.eyebrow { color: var(--gold); font: 600 0.76rem/1.4 var(--font-mono); letter-spacing: 0.1em; text-transform: uppercase; }
	.status-dot { display: inline-block; width: 0.55rem; height: 0.55rem; margin-right: 0.5rem; border-radius: 50%; background: var(--green); box-shadow: 0 0 0 4px rgb(44 131 78 / 16%); }
	.hero h1 { margin: 1.25rem 0 0; color: var(--text); font-size: clamp(4rem, 10vw, 8.8rem); font-weight: 750; letter-spacing: -0.075em; line-height: 0.83; text-align: left; }
	.hero h1 span { color: var(--gold); }
	.hero-role { margin: 2rem 0 0; color: var(--green); font-size: clamp(1.3rem, 2.8vw, 2rem); font-weight: 650; }
	.hero-summary { max-width: 630px; color: var(--muted); font-size: clamp(1rem, 1.5vw, 1.18rem); line-height: 1.8; }
	.hero-actions, .contact-actions { display: flex; flex-wrap: wrap; gap: 0.8rem; margin-top: 2rem; }
	.button { min-height: 3rem; display: inline-flex; align-items: center; justify-content: center; gap: 1rem; padding: 0.75rem 1.1rem; border: 1px solid transparent; border-radius: 3px; font-weight: 650; transition: transform 180ms ease, background 180ms ease, border-color 180ms ease; }
	.button:hover { text-decoration: none; transform: translateY(-2px); }
	.button-primary { background: var(--gold); color: #171814; }
	.button-primary:hover { background: #e3c35f; }
	.button-secondary { border-color: var(--line-strong); color: var(--text); background: transparent; }
	.button-secondary:hover { border-color: var(--gold); color: var(--gold); }
	.quick-facts { display: flex; flex-wrap: wrap; gap: 0.6rem 1.4rem; margin-top: 2.2rem; color: var(--muted); font-size: 0.9rem; }
	.quick-facts a { color: var(--muted); }
	.hero-panel { width: min(100%, 380px); min-height: 370px; justify-self: center; display: flex; flex-direction: column; justify-content: space-between; padding: 1.5rem; border: 1px solid var(--line-strong); background: linear-gradient(145deg, #222522, #191a19 65%); box-shadow: 18px 18px 0 rgb(209 174 75 / 10%); }
	.panel-top { display: flex; justify-content: space-between; color: var(--muted); font: 0.7rem var(--font-mono); text-transform: uppercase; letter-spacing: 0.08em; }
	.panel-mark { color: var(--text); font-size: clamp(8rem, 16vw, 13rem); font-weight: 800; letter-spacing: -0.12em; line-height: 0.9; text-align: center; }
	.panel-mark span { color: var(--gold); }
	.hero-panel > p { padding-top: 1rem; border-top: 1px solid var(--green); color: var(--text); font-size: 1.1rem; font-weight: 650; }
	.panel-tags, .skill-tags, .project-tags { display: flex; flex-wrap: wrap; gap: 0.45rem; }
	.panel-tags span, .skill-tags span, .project-tags span { border: 1px solid var(--line-strong); border-radius: 2px; padding: 0.35rem 0.55rem; color: var(--muted); font: 0.75rem var(--font-mono); }
	.scroll-hint { position: absolute; bottom: 1.5rem; left: clamp(1.25rem, 5vw, 5rem); color: var(--muted); font: 0.7rem var(--font-mono); text-transform: uppercase; letter-spacing: 0.1em; }
	.scroll-hint span { margin-right: 0.4rem; color: var(--gold); }
	.section { padding: clamp(4.5rem, 8vw, 7rem) clamp(1.25rem, 5vw, 5rem); border-bottom: 1px solid var(--line); scroll-margin-top: 90px; }
	.section-heading { max-width: 900px; margin-bottom: 3rem; }
	.section-heading h2, .contact-section h2 { max-width: 800px; margin: 0.6rem 0 0; color: var(--text); font-size: clamp(2.4rem, 5vw, 4.8rem); font-weight: 700; letter-spacing: -0.055em; line-height: 1.02; text-align: left; }
	.section-heading h2 span, .contact-section h2 span { color: var(--gold); }
	.profile-grid { display: grid; grid-template-columns: 0.78fr 1.22fr; gap: clamp(2rem, 7vw, 7rem); }
	.profile-intro p { color: var(--muted); font-size: 1.08rem; line-height: 1.85; }
	.profile-intro .profile-note { padding: 1rem 0 1rem 1rem; border-left: 2px solid var(--green); color: var(--text); font-size: 0.94rem; }
	.experience-list { display: grid; gap: 1.3rem; }
	.experience-item { padding: 0 0 1.25rem; border-bottom: 1px solid var(--line); }
	.experience-meta { display: flex; flex-wrap: wrap; align-items: baseline; justify-content: space-between; gap: 0.5rem 1rem; }
	.experience-meta h3, .skill-group h3, .repository-group h3 { margin: 0; color: var(--text); font-size: 1.04rem; }
	.experience-meta span, .education-item > span { color: var(--muted); font: 0.75rem var(--font-mono); }
	.experience-item p { margin: 0.5rem 0 0; color: var(--muted); line-height: 1.65; }
	.experience-item .experience-company { color: var(--green); }
	.skills-section { background: var(--surface); }
	.skills-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1px; border: 1px solid var(--line); background: var(--line); }
	.skill-group { min-height: 150px; padding: 1.5rem; background: var(--surface); }
	.skill-group h3 { margin-bottom: 1.2rem; color: var(--gold); }
	.learning-note { margin: 1.3rem 0 0; color: var(--muted); font-size: 0.9rem; line-height: 1.7; }
	.section-heading-row { display: flex; align-items: end; justify-content: space-between; gap: 2rem; }
	.section-aside { max-width: 300px; margin: 0 0 0.4rem; color: var(--muted); line-height: 1.7; }
	.projects-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }
	.project-card { display: flex; flex-direction: column; min-height: 300px; padding: clamp(1.25rem, 2vw, 2rem); border: 1px solid var(--line); background: var(--surface); transition: border-color 180ms ease, transform 180ms ease; }
	.project-card:hover { transform: translateY(-3px); border-color: var(--green); }
	.project-topline { display: flex; justify-content: space-between; gap: 1rem; color: var(--muted); font: 0.7rem var(--font-mono); }
	.project-topline span:first-child { color: var(--gold); }
	.project-card h3 { margin: 2rem 0 0.65rem; color: var(--text); font-size: clamp(1.3rem, 2.3vw, 1.8rem); letter-spacing: -0.035em; }
	.project-card > p { color: var(--muted); line-height: 1.7; }
	.project-card .project-highlight { color: var(--green); font-size: 0.9rem; }
	.project-bottom { display: flex; flex-wrap: wrap; align-items: end; justify-content: space-between; gap: 1rem; margin-top: auto; padding-top: 1.4rem; }
	.project-tags span { font-size: 0.68rem; }
	.text-link { white-space: nowrap; color: var(--gold); font-size: 0.85rem; }
	.repository-section { background: #1d1f1d; }
	.repository-count { display: flex; align-items: baseline; gap: 0.7rem; margin: 0 0 0.6rem; color: var(--muted); }
	.repository-count strong { color: var(--gold); font-size: 2.5rem; }
	.repository-intro { max-width: 720px; color: var(--muted); line-height: 1.7; }
	.search-label { display: block; margin: 2rem 0 0.5rem; color: var(--text); font-size: 0.85rem; font-weight: 650; }
	.repo-search { width: 100%; max-width: 560px; padding: 0.9rem 1rem; border: 1px solid var(--line-strong); border-radius: 2px; background: var(--background); color: var(--text); }
	.repo-search:focus { outline: 2px solid var(--gold); outline-offset: 2px; }
	.repository-groups { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; margin-top: 1.5rem; }
	.repository-group { padding: 1.4rem; border: 1px solid var(--line); background: var(--background); }
	.repository-group h3 { display: flex; justify-content: space-between; gap: 1rem; padding-bottom: 1rem; border-bottom: 1px solid var(--green); }
	.repository-group h3 span { color: var(--muted); font: 0.75rem var(--font-mono); }
	.repository-group ul { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.15rem 0.8rem; margin: 1rem 0 0; padding: 0; list-style: none; }
	.repository-group li { display: flex; align-items: center; justify-content: space-between; gap: 0.5rem; min-width: 0; padding: 0.35rem 0; }
	.repository-name { overflow: hidden; color: var(--muted); font: 0.72rem var(--font-mono); text-overflow: ellipsis; white-space: nowrap; }
	a.repository-name:hover { color: var(--gold); }
	.repository-name span { color: var(--green); }
	.private-label { flex: none; color: var(--gold); font: 0.62rem var(--font-mono); text-transform: uppercase; }
	.empty-state { color: var(--muted); }
	.github-button { margin-top: 1.5rem; }
	.education-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1rem; }
	.education-item { min-height: 155px; padding: 1.3rem; border-top: 2px solid var(--green); background: var(--surface); }
	.education-item h3 { margin: 1rem 0 0.5rem; color: var(--text); font-size: 1rem; }
	.education-item p { color: var(--muted); }
	.language-note { margin-top: 2rem; color: var(--muted); }
	.language-note span { margin-left: 1rem; }
	.language-note strong { margin-right: 1rem; color: var(--gold); }
	.interest-list { display: flex; flex-wrap: wrap; gap: 0.75rem; }
	.interest-list span { padding: 0.7rem 0.9rem; border: 1px solid var(--line-strong); color: var(--muted); }
	.contact-section { padding: clamp(4rem, 8vw, 7rem) clamp(1.25rem, 5vw, 5rem); scroll-margin-top: 90px; background: #222522; }
	.contact-section > p:not(.eyebrow) { color: var(--muted); }
	@media (max-width: 850px) { .hero { grid-template-columns: 1fr; padding-top: 5rem; } .hero-panel { width: min(100%, 480px); min-height: 260px; justify-self: start; } .panel-mark { font-size: 8rem; } .profile-grid { grid-template-columns: 1fr; } .section-heading-row { align-items: start; flex-direction: column; } }
	@media (max-width: 620px) { .hero { min-height: auto; padding-bottom: 5rem; } .hero h1 { font-size: clamp(3.8rem, 17vw, 6.3rem); } .hero-actions .button { flex: 1 1 100%; } .quick-facts { flex-direction: column; } .skills-grid, .projects-grid, .repository-groups, .education-grid { grid-template-columns: 1fr; } .repository-group ul { grid-template-columns: 1fr; } .experience-meta { flex-direction: column; gap: 0.3rem; } .section-heading h2, .contact-section h2 { font-size: clamp(2.3rem, 11vw, 3.4rem); } .language-note span { display: block; margin: 0.5rem 0 0; } }
	@media (prefers-reduced-motion: reduce) { *, *::before, *::after { scroll-behavior: auto !important; transition-duration: 0.01ms !important; animation-duration: 0.01ms !important; } }
</style>
