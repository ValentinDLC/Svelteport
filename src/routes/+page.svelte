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
		"J'aime apprendre, concevoir et innover",
		"Créons quelque chose d'extraordinaire ensemble"
	];

	const typeSpeed = 80;
	const deleteSpeed = 40;
	const delayBeforeDelete = 2500;
	const delayBeforeType = 700;

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
		font-size: 5vw;
		min-height: 3.5rem;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
		word-wrap: break-word;
		overflow-wrap: break-word;
		max-width: 100%;
	}

	.typed-text {
		white-space: pre-wrap;
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
		word-wrap: break-word;
		overflow-wrap: break-word;
	}

	.cta-buttons {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	.btn {
		width: 7rem;
		height: 7rem;
		border-radius: 50%;
		text-decoration: none;
		transition: all 0.3s ease;
		font-weight: 500;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0.9rem;
	}

	.primary {
		background: #3E4C6D;
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
			font-size: 6vw;
		}

		p {
			font-size: 1rem;
		}

		.cta-buttons {
			flex-direction: column;
			align-items: center;
		}

	}
</style>