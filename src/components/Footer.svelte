<script>
	import { profile } from '$lib/data/portfolio.js';
</script>

<footer class="site-footer">
	<a class="footer-brand" href="/#accueil">Darvora<span>.</span></a>
	<p>Valentin Dardenne · Développeur de tests automatisés</p>
	<a href={`mailto:${profile.email}`}>{profile.email}</a>
	<small>© {new Date().getFullYear()} Darvora · Tous droits réservés</small>
</footer>

<style>
	.site-footer { display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 0.5rem 2rem; padding: 1.7rem clamp(1.25rem, 5vw, 5rem); border-top: 1px solid var(--line); color: var(--muted); font-size: 0.8rem; }
	.site-footer p { margin: 0; }
	.site-footer > a:not(.footer-brand) { color: var(--muted); }
	.footer-brand { color: var(--text); font-size: 1.1rem; font-weight: 800; text-transform: uppercase; }
	.footer-brand span { color: var(--gold); }
	.site-footer small { grid-column: 1 / -1; padding-top: 1rem; border-top: 1px solid var(--line); color: var(--muted); }
	@media (max-width: 760px) { .site-footer { grid-template-columns: 1fr; } .site-footer small { grid-column: auto; } }
</style>
