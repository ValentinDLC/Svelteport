<script>
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
	import '../app.css';
</script>

<div class="app-container">
	<Header />
	<div class="route-content"><slot /></div>
	<Footer />
</div>

<style>
	.app-container { min-height: 100vh; }
	.route-content { padding-top: 74px; }
</style>
