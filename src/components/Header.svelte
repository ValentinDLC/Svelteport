<script>
	let isOpen = false;
	const links = [
		{ href: '#profil', label: 'Profil' },
		{ href: '#competences', label: 'Compétences' },
		{ href: '#projets', label: 'Projets' },
		{ href: '#depots', label: 'Dépôts' },
		{ href: '#formation', label: 'Formation' },
		{ href: '#contact', label: 'Contact' }
	];
</script>

<header class="site-header">
	<a class="brand" href="/#accueil" aria-label="Darvora, accueil">darvora<span>.</span></a>
	<button class="menu-toggle" type="button" aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={isOpen} aria-controls="site-nav" on:click={() => (isOpen = !isOpen)}>
		<span></span><span></span>
	</button>
	<nav id="site-nav" class:open={isOpen} aria-label="Navigation principale">
		{#each links as link}
			<a href={link.href} on:click={() => (isOpen = false)}>{link.label}</a>
		{/each}
		<a class="nav-cv" href="/Documents/CV_Darvora_Valentin_Dardenne.pdf" target="_blank" rel="noreferrer">CV ↗</a>
	</nav>
</header>

<style>
	.site-header { position: fixed; z-index: 1000; inset: 0 0 auto; height: 74px; display: flex; align-items: center; justify-content: space-between; padding: 0 clamp(1.25rem, 5vw, 5rem); border-bottom: 1px solid var(--line); background: rgb(25 26 25 / 94%); backdrop-filter: blur(14px); }
	.brand { color: var(--text); font-size: 1.4rem; font-weight: 800; letter-spacing: -0.08em; text-transform: uppercase; }
	.brand:hover { text-decoration: none; }
	.brand span { color: var(--gold); }
	nav { display: flex; align-items: center; gap: clamp(0.8rem, 2vw, 1.8rem); }
	nav a { color: var(--muted); font-size: 0.82rem; transition: color 150ms ease; }
	nav a:hover { color: var(--gold); text-decoration: none; }
	nav .nav-cv { padding: 0.55rem 0.8rem; border: 1px solid var(--line-strong); color: var(--gold); }
	.menu-toggle { display: none; }
	@media (max-width: 760px) {
		.site-header { height: 64px; }
		.menu-toggle { display: flex; width: 2.7rem; height: 2.7rem; flex-direction: column; justify-content: center; gap: 0.4rem; padding: 0.6rem; border: 1px solid var(--line-strong); background: transparent; }
		.menu-toggle span { height: 1px; width: 100%; background: var(--text); }
		nav { position: absolute; top: 64px; left: 0; right: 0; display: none; flex-direction: column; align-items: stretch; gap: 0; padding: 0.5rem 1.25rem 1rem; border-bottom: 1px solid var(--line); background: var(--background); }
		nav.open { display: flex; }
		nav a { padding: 0.85rem 0; border-bottom: 1px solid var(--line); }
		nav .nav-cv { margin-top: 0.65rem; padding: 0.8rem; border: 1px solid var(--line-strong); text-align: center; }
	}
</style>
