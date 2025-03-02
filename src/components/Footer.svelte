<!-- Footer.svelte -->

    <div class="footer-content">
      <div class="footer-section">
        <h3>Contact</h3>
        <p>valentin.dardenne9@gmail.com</p>
      </div>
      <div class="footer-section">
        <h3>Réseaux</h3>
        <div class="social-links">
          <a href="https://www.linkedin.com/in/valentin-dardenne-70800a76/" target="_blank" rel="noopener">LinkedIn</a>
          <a href="https://github.com/ValentinDLC" target="_blank" rel="noopener">GitHub</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2025 Dardenne - Tous droits réservés</p>
    </div>

  
  <style>

  
    .footer-content {
      max-width: min(90%, 1200px);
      margin: 0 auto;
      display: flex;
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
  </style>