<script>
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  // import ThemeToggle from './ThemeToggle.svelte';
  // import { theme } from '../stores/theme';
  let isOpen = false;

  const routes = [
    { path: '/', label: 'Accueil' },
    { path: '/about', label: 'À propos' },
    { path: '/projects', label: 'Projets' },
    //{ path: '/skills', label: 'Compétences' },
    //{ path: '/contact', label: 'Contact' }
  ];

  function toggleMenu() {
    isOpen = !isOpen;
  }

  async function handleNavigation(path, event) {
    event.preventDefault();
    await goto(path);
    isOpen = false;
  }

</script>

<div  role="button" class="header {isOpen ? 'header-expanded' : ''} ">
  <a href="/">
    <img src="/images/Logo_P.PNG" alt="logo" class="logo" />
  </a>
  <button
          on:click={toggleMenu}
          class="menu-button {isOpen ? 'menu-open' : 'menu-closed'}">
    <span class="menu-content">
      {#if isOpen}
        <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="shrink-0"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
        <nav>
          <ul class="menu-list">
            {#each routes as route}
              <li>
                <a
                        href={route.path}
                        class:active={$page.url.pathname === route.path}
                        on:click={(e) => handleNavigation(route.path, e)}
                >
                  {route.label}
                </a>
              </li>
            {/each}
          </ul>
        </nav>
      {:else}
        <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      {/if}
    </span>
  </button>
  <!--<ThemeToggle /> -->
</div>

<style>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 8%;
    display: flex;
    align-items: center;
    z-index: 1000;
    background-color: #e9e9e9;
    transition: background-color 0.3s ease;
  }

  .logo {
    width: 4em;
    margin-left: 2rem;
  }


  .menu-button {
    display: flex;
    align-items: center;
    height: 3rem;
    background-color: #1f2937;
    color: white;
    border: none;
    border-radius: 9999px;
    padding: 0;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    overflow: hidden;
  }

  .menu-content {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 1.29em;
  }

  .menu-closed {
    width: 3rem;
    margin-left: 3%;
  }

  .menu-open {
    width: 90%;
    max-width: 100%;
    margin-inline: 1%;
  }

  .menu-list {
    display: flex;
    justify-content: space-around;
    width: 100%;
    list-style: none;
    margin: 0;
    padding: 0 2rem;
  }

  .menu-list li {
    margin: 0;
  }

  .menu-list a {
    color: white;
    text-decoration: none;
    font-size: 0.875rem;
    transition: color 0.2s;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }

  .menu-list a:hover {
    color: #d1d5db;
  }

  .menu-list a.active {
    font-weight: bold;
  }

  nav {
    flex: 1;
    margin-left: 2rem;
  }

  @media (max-width: 768px) {
    .menu-open {
      width: calc(100% - 2rem);
    }

    .menu-list {
      align-items: center;
      padding: 1rem;
      gap: 0.5rem;
    }

    .menu-list a {
      font-size: 90%;
      padding: 0;
    }

    nav {
      margin-left: 1rem;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      animation: none !important;
      transition: none !important;
    }
  }
</style>