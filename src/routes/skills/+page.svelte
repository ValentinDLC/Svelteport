<script>
  import { fly } from 'svelte/transition';
  import { onMount } from 'svelte';
  import Icon from '@iconify/svelte';

  const skills = {
    frontend: [
      { name: 'HTML', level: 90, icon: 'logos:html-5' },
      { name: 'CSS', level: 85, icon: 'logos:css-3' },
      { name: 'JavaScript', level: 95, icon: 'logos:javascript' },
      { name: 'Svelte', level: 80, icon: 'logos:svelte-icon' },
      { name: 'React', level: 75, icon: 'logos:react' }
    ],
    backend: [
      { name: 'Node.js', level: 85, icon: 'logos:nodejs-icon' },
      { name: 'Express', level: 80, icon: 'logos:express' },
      { name: 'MongoDB', level: 75, icon: 'logos:mongodb-icon' }
    ],
    tools: [
      { name: 'Git', level: 90, icon: 'logos:git' },
      { name: 'VS Code', level: 85, icon: 'logos:visual-studio-code' },
      { name: 'Figma', level: 80, icon: 'logos:figma' }
    ]
  };

  const colorSchemes = {
    frontend: {
      'HTML': '#E44D26',
      'CSS': '#264DE4',
      'JavaScript': '#F7DF1E',
      'Svelte': '#FF3E00',
      'React': '#61DAFB'
    },
    backend: {
      'Node.js': '#339933',
      'Express': '#000000',
      'MongoDB': '#47A248'
    },
    tools: {
      'Git': '#F05032',
      'VS Code': '#007ACC',
      'Figma': '#F24E1E'
    }
  };

  let mountedSections = {
    frontend: false,
    backend: false,
    tools: false
  };

  let percentages = {
    frontend: skills.frontend.map(() => 0),
    backend: skills.backend.map(() => 0),
    tools: skills.tools.map(() => 0)
  };

  function getSkillColor(category, skillName) {
    return colorSchemes[category][skillName] || '#666666';
  }

  onMount(() => {
    const sections = document.querySelectorAll('.skills-section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionType = entry.target.getAttribute('data-section');
          mountedSections[sectionType] = true;

          // Animate percentages
          skills[sectionType].forEach((skill, index) => {
            animatePercentage(sectionType, index, skill.level);
          });

          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  });

  function animatePercentage(category, index, targetValue) {
    const duration = 1500;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      percentages[category][index] = Math.floor(progress * targetValue);

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }
</script>

<div class="skills-container" in:fly="{{ y: 50, duration: 500 }}">
  <h1>Compétences</h1>

  <div class="skills-sections">
    <section class="skills-section" data-section="frontend">
      <h2>Frontend</h2>
      <div class="skills-list">
        {#each skills.frontend as skill, index}
          <div class="skill-card">
            <div class="skill-bar-container">
              <div class="skill-bar">
                <div
                        class="skill-progress {mountedSections.frontend ? 'animate' : ''}"
                        style="--final-height: {skill.level}%; --final-color: {getSkillColor('frontend', skill.name)};"
                ></div>
              </div>
              <span class="skill-percentage {mountedSections.frontend ? 'animate' : ''}"
                    style="--final-color: {getSkillColor('frontend', skill.name)}"
                    data-value={skill.level}>
                  {percentages.frontend[index]}%
                </span>
            </div>
            <span class="skill-icon {mountedSections.frontend ? 'animate' : ''}">
                <Icon icon={skill.icon}/>
              </span>
          </div>
        {/each}
      </div>
    </section>

    <section class="skills-section" data-section="backend">
      <h2>Backend</h2>
      <div class="skills-list">
        {#each skills.backend as skill, index}
          <div class="skill-card">
            <div class="skill-bar-container">
              <div class="skill-bar">
                <div
                        class="skill-progress {mountedSections.backend ? 'animate' : ''}"
                        style="--final-height: {skill.level}%; --final-color: {getSkillColor('backend', skill.name)};"
                ></div>
              </div>
              <span class="skill-percentage {mountedSections.backend ? 'animate' : ''}"
                    style="--final-color: {getSkillColor('backend', skill.name)}"
                    data-value={skill.level}>
                  {percentages.backend[index]}%
                </span>
            </div>
            <span class="skill-icon {mountedSections.backend ? 'animate' : ''}">
                <Icon icon={skill.icon} />
              </span>
          </div>
        {/each}
      </div>
    </section>

    <section class="skills-section" data-section="tools">
      <h2>Outils</h2>
      <div class="skills-list">
        {#each skills.tools as skill, index}
          <div class="skill-card">
            <div class="skill-bar-container">
              <div class="skill-bar">
                <div
                        class="skill-progress {mountedSections.tools ? 'animate' : ''}"
                        style="--final-height: {skill.level}%; --final-color: {getSkillColor('tools', skill.name)};"
                ></div>
              </div>
              <span class="skill-percentage {mountedSections.tools ? 'animate' : ''}"
                    style="--final-color: {getSkillColor('tools', skill.name)}"
                    data-value={skill.level}>
                  {percentages.tools[index]}%
                </span>
            </div>
            <span class="skill-icon {mountedSections.tools ? 'animate' : ''}">
                <Icon icon={skill.icon}/>
              </span>
          </div>
        {/each}
      </div>
    </section>
  </div>
</div>

<style>
  /* Style reste identique à la version précédente */
  .skills-container {
    padding: clamp(1rem, 3vw, 2rem);
    max-width: 1200px;
    margin: 0 auto;
  }

  h1 {
    font-size: clamp(2rem, 5vw, 3rem);
    margin-bottom: clamp(2rem, 5vw, 3rem);
    text-align: center;
  }

  .skills-sections {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .skills-section {
    background: #f9f9f9;
    border-radius: 8px;
    padding: 2rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  h2 {
    font-size: clamp(1.5rem, 4vw, 2rem);
    margin-bottom: 2rem;
    text-align: center;
  }

  .skills-list {
    display: flex;
    gap: 2.5rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .skill-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 80px;
    transition: transform 0.2s;
  }

  .skill-card:hover {
    transform: translateY(-5px);
  }

  .skill-bar-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    height: 180px;
  }

  .skill-bar {
    border-radius: 5px;
    width: 20px;
    height: 150px;
    position: relative;
    overflow: hidden;
  }

  .skill-progress {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    border-radius: 5px;
    background-color: #ddd;
  }

  .skill-progress.animate {
    animation: growUpAndColor 1.5s cubic-bezier(0.23, 1, 0.32, 1) forwards;
  }

  @keyframes growUpAndColor {
    0% {
      height: 0;
      background-color: #ddd;
    }
    100% {
      height: var(--final-height);
      background-color: var(--final-color);
    }
  }

  .skill-percentage {
    font-size: 0.9rem;
    font-weight: 600;
    color: #666;
  }

  .skill-icon {
    font-size: 2rem; /* Ajustez la taille de l'icône */
  }

  @media (max-width: 768px) {
    .skills-list {
      gap: 1.5rem;
    }

    .skill-card {
      width: 70px;
    }

    .skill-bar {
      height: 120px;
    }

    .skill-bar-container {
      height: 150px;
    }
  }
</style>