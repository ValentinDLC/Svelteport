<script>
  import Icon from '@iconify/svelte';
  const projets = [
    {
      image: "/images/reservia.png",
      titre: "Maquette fonctionnelle",
      description: "Site web responsive développé en HTML et CSS. Intégration d'une maquette avec animations CSS.",
      lien: "https://valentindlc.github.io/Booki/",
      lien1: "https://github.com/ValentinDLC/Booki",
      vague: 1
    },
    {
      image: "/images/bluel.png",
      titre: "Page Web Dynamique",
      description: "Développement d'une interface interactive pour une architecte d'intérieur avec JavaScript et API.",
      lien: "https://projet-3-frontend.vercel.app/",
      lien1: "https://github.com/ValentinDLC/Projet-3---cr-ez-une-page-web-dynamique-avec-javascript",
      vague: 1
    },
    {
      image: "/images/Nina-carducci.png",
      titre: "SEO & Accessibilité",
      description: "Amélioration des performances et du référencement d'un site de photographe via Lighthouse et Wave.",
      lien: "https://valentindlc.github.io/P4-debuggez-et-optimisez-un-site/",
      lien1: "https://github.com/ValentinDLC/P4-debuggez-et-optimisez-un-site",
      vague: 1
    },
    {
      image: "/images/kasa.png",
      titre: "App. location immobilière",
      description: "Développement d'une app web avec React et React Router pour une navigation fluide et optimisée.",
      lien: "https://p5-sandy-pi.vercel.app",
      lien1: "https://github.com/ValentinDLC/P5",
      vague: 1
    },
    {
      image: "/images/grimoire.png",
      titre: "Back-end site de notation",
      description: "API sécurisée avec Node.js, Express et MongoDB pour gérer les avis et notations de livres.",
      lien: "https://github.com/ValentinDLC/P6_Grimoire",
      lien1: "https://github.com/ValentinDLC/P6_Grimoire",
      vague: 1
    },
    {
      image: "/images/landing-page.png",
      titre: "Landing page",
      description: "Landing page immersive pour BMW avec effets de parallaxe, animations fluides et design moderne.",
      lien: "https://valentindlc.github.io/Landing-PageBMW/",
      lien1: "https://github.com/ValentinDLC/Landing-PageBMW",
      vague: 1
    },
    {
      image: "/images/light-out.png",
      titre: "Jeu Light-out",
      description: "Jeu de réflexion interactif en JavaScript, mêlant logique, stratégie et défis évolutifs pour une expérience captivante.",
      lien: "https://valentindlc.github.io/Light_out/",
      lien1: "https://github.com/ValentinDLC/Light_out",
      vague: 1
    },
    {
      image: "/images/animation-veille.png",
      titre: "Animation de veille",
      description: "Animation de chargement originale avec effets fluides et transitions CSS avancées pour une expérience immersive.",
      lien: "https://valentindlc.github.io/Laoder/",
      lien1: "https://github.com/ValentinDLC/Laoder",
      vague: 2
    },
    {
      image: "/images/animation-curseur.png",
      titre: "Animation curseur",
      description: "Effet de curseur personnalisé avec animations dynamiques et interactions fluides pour une navigation plus immersive.",
      lien: "https://valentindlc.github.io/cursor-animat/",
      lien1: "https://github.com/ValentinDLC/cursor-animat",
      vague: 2
    },
    {
      image: "/images/portfolio.png",
      titre: "Création portfolio",
      description: "Portfolio interactif mettant en avant mes projets et compétences en développement web.",
      lien: "https://valentindlc.github.io/PortFolio2.0",
      lien1: "https://valentindlc.github.io/PortFolio2.0",
      vague: 2
    }
  ];

    let iconSize = '2rem'; // Valeur par défaut

    // Fonction pour mettre à jour la taille de l'icône
    function updateIconSize() {
    if (window.innerWidth < 481) {
    iconSize = '1.5rem'; // Taille pour petits écrans
  } else if (window.innerWidth >= 481 && window.innerWidth <= 768) {
    iconSize = '2rem';
  } else {
    iconSize = '2.5rem';
  }
  }

    updateIconSize();

    window.addEventListener('resize', updateIconSize);
</script>



<h2 class="titre-port">Création de projets</h2>
<div class="cont-portfolio">
  {#each projets as projet}
    <div class="item vague{projet.vague}">
      <div class="cont-img-port">
        <img src={projet.image} alt="img portfolio" />
      </div>
      <div class="overlay">
        <h3>{projet.titre}</h3>
        <p class="description">{projet.description}</p>
        <div class="link-container">
          <a href={projet.lien} target="_blank" class="btn-projects">
            <Icon icon="mdi:qrcode" width={iconSize} height={iconSize} />
          </a>
          <a href={projet.lien1} target="_blank" class="btn-projects">
            <Icon icon="mdi:github" width={iconSize} height={iconSize} />
          </a>
        </div>
      </div>
    </div>
  {/each}
</div>

<style>
  .titre-port {
    text-align: center;
    padding: 0 5em 0 0;
  }

  @media (min-width: 768px) {
    .titre-port {
      font-size: 3rem;
      padding: 0;
    }
  }

  .open {
    color: rgba(11, 1, 2, 0.9);
  }

  .cont-portfolio {
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
  }

  @keyframes floating {
    0% {
      transform: translateY(0);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
    50% {
      transform: translateY(-10px);
      box-shadow: 0 20px 30px rgba(0, 0, 0, 0.3);
    }
    100% {
      transform: translateY(0);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
  }

  .item {
    width: 20rem;
    height: 20rem;
    border-radius: 100%;
    background: #fff;
    color: #333;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    position: relative;
    animation: floating 3s infinite ease-in-out;
    transition: transform 0.3s ease-out;
  }

  .item:hover {
    transform: translateY(-5px);
  }

  .cont-img-port {
    width: 100%;
    height: 100%;
  }

  .cont-img-port img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.85);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: all 0.3s ease;
    padding: 2rem;
  }

  .item:hover .overlay {
    opacity: 1;
  }

  .description {
    color: #fff;
    text-align: center;

  }

  .link-container {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .item h3 {
    text-align: center;
    font-size: 1rem;
    position: relative;
    color: white;
    z-index: 3;
  }

  .btn-projects {
    display: inline-block;
    padding: 1rem 1.2rem;
    color: #fff;
    text-decoration: none;
    border: 2px solid #fff;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
    font-weight: bold;
    z-index: 2;
  }

  .btn-projects:hover {
    background-color: #fff;
    color: #333;
  }

  @media (max-width: 480px) {
    .item {
      width: 8rem;
      height: 8rem;
    }


    .cont-img-port,
    .overlay {
      border-radius: 20px;
    }

    .overlay {
      width: auto;
      height: auto;
    }

    .titre-port {
      padding: 1em 0 0 0;
      font-size: 2rem;
    }

    .description {
      font-size: 0.3rem;
    }

    .btn-projects {
      font-size: 0.9rem;
      padding: 0.1rem 0.2rem;
    }

    .item h3 {
      font-size: .5rem;
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    .item {
      width: 15rem;
      height: 15rem;
    }


    .titre-port {
      padding: 2em 0 0 0;
      font-size: 2rem;
    }

    .cont-img-port,
    .overlay {
      border-radius: 20px;
    }

    .btn-projects {
      padding: 0.5rem 0.7rem;
    }

    .description {
      font-size: 0.6rem;
    }
  }
</style>