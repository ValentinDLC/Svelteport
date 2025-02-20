<script>
	import { fly } from 'svelte/transition';
  </script>
  
  <div class="about-container" in:fly="{{ y: 50, duration: 500 }}">
	<h1>À propos</h1>
   
	<div class="about-grid">
	  <section class="about-section">
		<h2>Mon Parcours</h2>
		<div class="content-card">
		  <p>Votre description détaillée ici...</p>
		</div>
	  </section>
	 
	  <section class="about-section">
		<h2>Formation</h2>
		<div class="content-card">
		  <ul class="timeline">
			<li>
			  <div class="timeline-date">2020 - 2023</div>
			  <div class="timeline-content">
				<h3>Diplôme</h3>
				<p>Description de la formation...</p>
			  </div>
			</li>
		  </ul>
		</div>
	  </section>
	</div>
  </div>
  
  <style>
	.about-container {
	  padding: clamp(1rem, 3vw, 2rem);
	}
  
	h1 {
	  font-size: clamp(2rem, 5vw, 3rem);
	  margin-bottom: clamp(2rem, 5vw, 3rem);
	}
  
	.about-grid {
	  display: grid;
	  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	  gap: clamp(2rem, 5vw, 4rem);
	}
  
	.content-card {
	  background: white;
	  padding: clamp(1.5rem, 3vw, 2rem);
	  border-radius: 8px;
	  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
	}
  
	.timeline {
	  list-style: none;
	  padding: 0;
	}
  
	.timeline li {
	  position: relative;
	  padding-left: 2rem;
	  margin-bottom: 2rem;
	}
  
	.timeline-date {
	  font-weight: bold;
	  color: #007bff;
	  margin-bottom: 0.5rem;
	}
  
	@media (max-width: 768px) {
	  .about-grid {
		grid-template-columns: 1fr;
	  }
	}
  </style>
  