<script>
    import { page } from '$app/stores';
  
    const routes = [
      { path: '/', label: 'Accueil' },
      { path: '/about', label: 'À propos' },
      { path: '/projects', label: 'Projets' },
      { path: '/skills', label: 'Compétences' },
      { path: '/contact', label: 'Contact' }
    ];
  </script>
  
  <header>
    <nav>
      <ul>
        {#each routes as route}
          <li>
            <a 
              href={route.path} 
              class:active={$page.url.pathname === route.path}
            >
              {route.label}
            </a>
          </li>
        {/each}
      </ul>
    </nav>
  </header>
  
  <style>
    header {
      background: #fff;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
  
    nav {
      max-width: 1200px;
      margin: 0 auto;
      padding: 1rem;
    }
  
    ul {
      display: flex;
      gap: 2rem;
      list-style: none;
      padding: 0;
      margin: 0;
    }
  
    a {
      color: #333;
      text-decoration: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      transition: all 0.3s ease;
    }
  
    a.active {
      background: #007bff;
      color: white;
    }
  
    a:hover:not(.active) {
      background: #f0f0f0;
    }
  </style>