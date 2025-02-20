<script>
	import { onMount, onDestroy } from 'svelte';
	import { fly } from 'svelte/transition';
  
	let displayText = '';
	let currentPhraseIndex = 0;
	let isDeleting = false;
	let timeoutId;
  
	const phrases = [
	  "Bienvenue sur mon portfolio",
	  "Je suis développeur web passionné",
	  "Spécialisé en JavaScript et Svelte",
	  "Créons quelque chose d'extraordinaire ensemble"
	];
  
	const typeSpeed = 80;      // Vitesse d'écriture
	const deleteSpeed = 40;    // Vitesse d'effacement
	const delayBeforeDelete = 2500;  // Temps d'attente avant effacement
	const delayBeforeType = 700;     // Temps d'attente avant nouvelle phrase
  
	function typewriterEffect() {
	  const currentPhrase = phrases[currentPhraseIndex];
	 
	  if (isDeleting) {
		// Mode effacement
		displayText = currentPhrase.substring(0, displayText.length - 1);
	   
		if (displayText === '') {
		  isDeleting = false;
		  currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
		  timeoutId = setTimeout(typewriterEffect, delayBeforeType);
		  return;
		}
	   
		timeoutId = setTimeout(typewriterEffect, deleteSpeed);
	  } else {
		// Mode écriture
		displayText = currentPhrase.substring(0, displayText.length + 1);
	   
		if (displayText === currentPhrase) {
		  isDeleting = true;
		  timeoutId = setTimeout(typewriterEffect, delayBeforeDelete);
		  return;
		}
	   
		timeoutId = setTimeout(typewriterEffect, typeSpeed);
	  }
	}
  
	onMount(() => {
	  timeoutId = setTimeout(typewriterEffect, delayBeforeType);
	});
  
	onDestroy(() => {
	  if (timeoutId) clearTimeout(timeoutId);
	});
  </script>
  
  <div class="home-container" in:fly="{{ y: 50, duration: 500 }}">
	<div class="typewriter-container">
	  <h1>
		<span class="typed-text">{displayText}</span>
		<span class="cursor"></span>
	  </h1>
	</div>
  
	<div class="content">
	  <p>Développeur créatif spécialisé dans la création d'expériences web uniques</p>
	 
	  <div class="cta-buttons">
		<a href="/projects" class="btn primary">Voir mes projets</a>
		<a href="/contact" class="btn secondary">Me contacter</a>
	  </div>
	</div>
  </div>
  
  <style>
	.home-container {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  justify-content: center;
	  min-height: 80vh;
	  padding: 2rem;
	  text-align: center;
	}
  
	.typewriter-container {
	  margin-bottom: 2rem;
	}
  
	h1 {
	  font-size: 5vw; /* Utilisation de vw pour une taille de police responsive */
	  min-height: 3.5rem;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  gap: 0.5rem;
	  word-wrap: break-word; /* Permet au texte de passer à la ligne */
	  overflow-wrap: break-word; /* Assure que le texte passe à la ligne si nécessaire */
	  max-width: 100%; /* S'assure que le texte ne dépasse pas la largeur de son conteneur */
	}
  
	.typed-text {
	  white-space: pre-wrap; /* Permet au texte de conserver les espaces et de passer à la ligne */
	}
  
	.cursor {
	  display: inline-block;
	  width: 3px;
	  height: 1em;
	  background-color: currentColor;
	  margin-left: 2px;
	  animation: blink 1s step-end infinite;
	}
  
	@keyframes blink {
	  from, to { opacity: 1; }
	  50% { opacity: 0; }
	}
  
	.content {
	  max-width: 800px;
	  margin: 0 auto;
	}
  
	p {
	  font-size: 1.2rem;
	  color: #666;
	  margin-bottom: 2rem;
	  line-height: 1.6;
	  word-wrap: break-word; /* Permet au texte de passer à la ligne */
	  overflow-wrap: break-word; /* Assure que le texte passe à la ligne si nécessaire */
	}
  
	.cta-buttons {
	  display: flex;
	  gap: 1rem;
	  justify-content: center;
	  flex-wrap: wrap;
	}
  
	.btn {
	  padding: 0.8rem 1.5rem;
	  border-radius: 4px;
	  text-decoration: none;
	  transition: all 0.3s ease;
	  font-weight: 500;
	}
  
	.primary {
	  background: #007bff;
	  color: white;
	  box-shadow: 0 2px 4px rgba(0, 123, 255, 0.2);
	}
  
	.secondary {
	  background: transparent;
	  color: #007bff;
	  border: 2px solid #007bff;
	}
  
	.primary:hover {
	  background: #0056b3;
	  transform: translateY(-2px);
	  box-shadow: 0 4px 8px rgba(0, 123, 255, 0.3);
	}
  
	.secondary:hover {
	  background: #f0f7ff;
	  transform: translateY(-2px);
	}
  
	@media (max-width: 600px) {
	  h1 {
		font-size: 6vw; /* Ajustement de la taille de la police pour les petits écrans */
	  }
  
	  p {
		font-size: 1rem; /* Ajustement de la taille de la police pour le texte */
	  }
  
	  .cta-buttons {
		flex-direction: column; /* Empiler les boutons sur les petits écrans */
	  }
  
	  .btn {
		width: 100%; /* Les boutons prennent toute la largeur sur les petits écrans */
	  }
	}
  </style>