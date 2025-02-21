<!-- Footer.svelte -->
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
  
  <style>
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
  </style>