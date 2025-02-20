<script>
    import { fly } from 'svelte/transition';
  
    const projects = [
      {
        title: 'Projet 1',
        description: 'Description du projet...',
        technologies: ['Svelte', 'TailwindCSS'],
        image: '/images/projet1.jpg',
        demo: 'https://...',
        github: 'https://...'
      }
      // Ajoutez d'autres projets...
    ];
  </script>
  
  <div class="projects-container" in:fly="{{ y: 50, duration: 500 }}">
    <h1>Mes Projets</h1>
   
    <div class="projects-grid">
      {#each projects as project}
        <article class="project-card">
          <div class="project-image">
            <img src={project.image} alt={project.title} loading="lazy">
          </div>
         
          <div class="project-content">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
           
            <div class="technologies">
              {#each project.technologies as tech}
                <span class="tech-badge">{tech}</span>
              {/each}
            </div>
           
            <div class="project-links">
              <a href={project.demo} class="btn primary" target="_blank" rel="noopener">
                Voir la démo
              </a>
              <a href={project.github} class="btn secondary" target="_blank" rel="noopener">
                Code source
              </a>
            </div>
          </div>
        </article>
      {/each}
    </div>
  </div>
  
  <style>
    .projects-container {
      padding: clamp(1rem, 3vw, 2rem);
    }
  
    h1 {
      font-size: clamp(2rem, 5vw, 3rem);
      margin-bottom: clamp(2rem, 5vw, 3rem);
    }
  
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: clamp(2rem, 5vw, 4rem);
    }
  
    .project-card {
      background: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;
    }
  
    .project-card:hover {
      transform: translateY(-5px);
    }
  
    .project-image img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
  
    .project-content {
      padding: clamp(1rem, 3vw, 2rem);
    }
  
    .technologies {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin: 1rem 0;
    }
  
    .tech-badge {
      padding: 0.25rem 0.75rem;
      background: #f0f0f0;
      border-radius: 999px;
      font-size: 0.875rem;
    }
  
    .project-links {
      display: flex;
      gap: 1rem;
      margin-top: 1.5rem;
    }
  
    .btn {
      padding: 0.5rem 1rem;
      border-radius: 4px;
      text-decoration: none;
      transition: all 0.3s ease;
    }
  
    .primary {
      background: #007bff;
      color: white;
    }
  
    .secondary {
      border: 1px solid #007bff;
      color: #007bff;
    }
  
    @media (max-width: 640px) {
      .project-links {
        flex-direction: column;
      }
  
      .btn {
        text-align: center;
      }
    }
  </style>
  