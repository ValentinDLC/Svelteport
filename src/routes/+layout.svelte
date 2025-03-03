<!-- Layout.svelte -->
<script>
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
    import '../global.css';


	let isMenuOpen = false;
  
	const toggleMenu = () => {
	  isMenuOpen = !isMenuOpen;
	};
  </script>
  
  <div class="app-container">
	<Header />
  
	<main>
	  <slot />
	</main>
  
	<Footer />
  </div>
  
  <style>
	.app-container {
	  display: flex;
	  flex-direction: column;
	  min-height: 100vh;
	}
  
	main {
	  flex: 1;
	  width: 100%;
	  max-width: min(90%, 1200px);
	  margin: 0 auto;
	  padding: clamp(1rem, 5vw, 3rem);
	}
  </style>