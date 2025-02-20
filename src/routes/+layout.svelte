<script>
	import { page } from '$app/stores';
	let isMenuOpen = false; // État pour gérer l'affichage du menu mobile
  
	const toggleMenu = () => {
	  isMenuOpen = !isMenuOpen; // Inverser l'état du menu
	};
  </script>
  
  <div class="app-container">
	<header>
	  <nav>
		<div class="nav-content">
		  <a href="/" class="logo">Portfolio</a>
		  <button class="mobile-menu-btn" aria-label="Menu" on:click={toggleMenu}>
			<span></span>
			<span></span>
			<span></span>
		  </button>
		  <ul class="nav-links {isMenuOpen ? 'open' : ''}">
			<li><a href="/" class:active={$page.url.pathname === '/'}>Accueil</a></li>
			<li><a href="/about" class:active={$page.url.pathname === '/about'}>À propos</a></li>
			<li><a href="/projects" class:active={$page.url.pathname === '/projects'}>Projets</a></li>
			<li><a href="/skills" class:active={$page.url.pathname === '/skills'}>Compétences</a></li>
			<li><a href="/contact" class:active={$page.url.pathname === '/contact'}>Contact</a></li>
		  </ul>
		</div>
	  </nav>
	</header>
  
	<main>
	  <slot />
	</main>
  
	<footer>
	  <div class="footer-content">
		<div class="footer-section">
		  <h3>Contact</h3>
		  <p>email@example.com</p>
		</div>
		<div class="footer-section">
		  <h3>Réseaux</h3>
		  <div class="social-links">
			<a href="#" target="_blank" rel="noopener">LinkedIn</a>
			<a href="#" target="_blank" rel="noopener">GitHub</a>
			<a href="#" target="_blank" rel="noopener">Twitter</a>
		  </div>
		</div>
	  </div>
	  <div class="footer-bottom">
		<p>&copy; 2024 Votre Nom - Tous droits réservés</p>
	  </div>
	</footer>
  </div>
  
  <style>
	.app-container {
	  display: flex;
	  flex-direction: column;
	  min-height: 100vh;
	}
  
	header {
	  position: sticky;
	  top: 0;
	  background: white;
	  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
	  z-index: 1000;
	}
  
	nav {
	  padding: clamp(0.5rem, 2vw, 1rem);
	}
  
	.nav-content {
	  max-width: min(90%, 1200px);
	  margin: 0 auto;
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	}
  
	.logo {
	  font-size: clamp(1.25rem, 3vw, 1.5rem);
	  font-weight: bold;
	  text-decoration: none;
	  color: #007bff;
	}
  
	.nav-links {
	  display: flex;
	  gap: clamp(1rem, 3vw, 2rem);
	  list-style: none;
	  margin: 0;
	  padding: 0;
	}
  
	.nav-links a {
	  text-decoration: none;
	  color: #333;
	  font-size: clamp(0.9rem, 2vw, 1rem);
	  padding: 0.5rem;
	  transition: color 0.3s;
	}
  
	.nav-links a:hover,
	.nav-links a.active {
	  color: #007bff;
	}
  
	.mobile-menu-btn {
	  display: none;
	  flex-direction: column;
	  gap: 4px;
	  background: none;
	  border: none;
	  padding: 0.5rem;
	  cursor: pointer;
	}
  
	.mobile-menu-btn span {
	  display: block;
	  width: 24px;
	  height: 2px;
	  background: #333;
	  transition: 0.3s;
	}
  
	main {
	  flex: 1;
	  width: 100%;
	  max-width: min(90%, 1200px);
	  margin: 0 auto;
	  padding: clamp(1rem, 5vw, 3rem);
	}
  
	footer {
	  background: #f8f9fa;
	  padding: clamp(2rem, 5vw, 4rem) 0 1rem;
	}
  
	.footer-content {
	  max-width: min(90%, 1200px);
	  margin: 0 auto;
	  display: grid;
	  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	  gap: clamp(2rem, 5vw, 4rem);
	  padding: 0 clamp(1rem, 3vw, 2rem);
	}
  
	.footer-section h3 {
	  font-size: clamp(1.1rem, 2.5vw, 1.25rem);
	  margin-bottom: 1rem;
	}
  
	.social-links {
	  display: flex;
	  gap: 1rem;
	  flex-wrap: wrap;
	}
  
	.social-links a {
	  color: #666;
	  text-decoration: none;
	  transition: color 0.3s;
	}
  
	.social-links a:hover {
	  color: #007bff;
	}
  
	.footer-bottom {
	  text-align: center;
	  margin-top: 2rem;
	  padding-top: 1rem;
	  border-top: 1px solid #ddd;
	}
  
	@media (max-width: 768px) {
	  .mobile-menu-btn {
		display: flex; /* Afficher le bouton de menu mobile */
	  }
  
	  .nav-links {
		display: none; /* Masquer les liens de navigation par défaut */
		position: absolute;
		top: 100%;
		left: 0;
		right: 0;
		background: white;
		flex-direction: column;
		padding: 1rem;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	  }
  
	  .nav-links.open {
		display: flex; /* Afficher les liens de navigation lorsque le menu est ouvert */
	  }
  
	  .footer-content {
		grid-template-columns: 1fr;
		text-align: center;
	  }
  
	  .social-links {
		justify-content: center;
	  }
	}
  
	@media (prefers-reduced-motion: reduce) {
	  * {
		animation: none !important;
		transition: none !important;
	  }
	}
  </style>