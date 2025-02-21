<script>
  let isOpen = false;

  const routes = [
    { path: '/', label: 'Accueil' },
    { path: '/about', label: 'À propos' },
    { path: '/projects', label: 'Projets' },
    { path: '/skills', label: 'Compétences' },
    { path: '/contact', label: 'Contact' }
  ];

  function toggleMenu() {
    isOpen = !isOpen;
  }
</script>

<style>
  .menu-button {
    display: flex;
    align-items: center;
    justify-content: center; /* Centre le contenu horizontalement */
    height: 3rem;
    background-color: #1f2937; /* bg-gray-800 */
    color: white;
    transition: all 0.3s ease-in-out;
    overflow: hidden;
    border-radius: 9999px; /* rounded-full */
    position: relative; /* Pour le positionnement du menu */
  }
  .menu-open {
    width: 100%; /* Prend toute la largeur de l'écran */
  }
  .menu-closed {
    width: 3rem; /* w-12 */
  }
  .menu-list {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
  .menu-list li {
    margin: 0 10px; /* Espacement entre les éléments de navigation */
  }
  .menu-list a {
    color: white;
    text-decoration: none;
    font-size: 0.875rem; /* text-sm */
    transition: color 0.2s;
  }
  .menu-list a:hover {
    color: #d1d5db; /* hover:text-gray-200 */
  }
  /* Styles pour centrer le bouton dans le header */
  .header {
    display: flex;
    justify-content: center; /* Centre horizontalement */
    align-items: center; /* Centre verticalement */
    height: 4rem; /* Ajustez la hauteur selon vos besoins */
    position: relative; /* Pour le positionnement */
    width: 100%; /* Prend toute la largeur */
  }
</style>

<div class="header">
  <button on:click={toggleMenu} class="menu-button {isOpen ? 'menu-open' : 'menu-closed'}">
    <div class="flex items-center w-full px-4">
      {#if isOpen}
        <!-- Icône X (fermeture) -->
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="shrink-0">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
        <nav class="flex-1 mx-4">
          <ul class="menu-list">
            {#each routes as route}
              <li>
                <a href={route.path}>{route.label}</a>
              </li>
            {/each}
          </ul>
        </nav>
      {:else}
        <!-- Icône Menu (ouverture) -->
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      {/if}
    </div>
  </button>
</div>