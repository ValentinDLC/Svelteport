export const profile = {
	name: 'Valentin Dardenne',
	brand: 'Darvora',
	role: 'Développeur de tests automatisés',
	location: "L'Isle-Adam, Val-d'Oise · Île-de-France",
	email: 'valentin.dardenne9@gmail.com',
	phone: '06 08 76 65 94',
	github: 'https://github.com/ValentinDLC',
	linkedin: 'https://www.linkedin.com/in/valentin-dardenne-70800a76/',
	introduction:
		"Développeur Full-Stack diplômé (RNCP niveau 6), je conçois des applications et des outils d'automatisation. Je me spécialise dans les tests automatisés, avec une attention particulière à la qualité, à la reproductibilité et aux détails.",
	cv: '/Documents/CV_Darvora_Valentin_Dardenne.pdf'
};

export const skills = [
	{
		category: 'Tests et qualité',
		items: ['Playwright', 'pytest', 'Plans de tests', 'Tests d’intégration', 'OPQUAST · Qualité Web']
	},
	{
		category: 'En apprentissage',
		items: ['Robot Framework', 'Squash TM', 'JMeter', 'OWASP ZAP', 'SonarQube', 'Postman', 'ISTQB Foundation']
	},
	{
		category: 'CI/CD et outils',
		items: ['GitLab CI', 'GitHub Actions', 'Git', 'Docker', 'flake8', 'black']
	},
	{
		category: 'Développement',
		items: ['Python', 'JavaScript', 'TypeScript', 'SQL']
	},
	{
		category: 'Données et systèmes',
		items: ['PostgreSQL', 'DuckDB', 'ETL', 'Linux · Ubuntu/Debian', 'WSL2', 'Bash · grep · sed · awk', 'SSH', 'Kubernetes · bases', 'ELK · Kibana']
	},
	{
		category: 'Backend et API',
		items: ['Flask', 'API REST', 'JWT', 'SQLAlchemy', 'React', 'Firebase', 'Supabase']
	}
];

export const experience = [
	{
		role: 'Développeur freelance',
		company: 'Darvora · L’Isle-Adam',
		date: 'Janvier 2025 – aujourd’hui',
		description: 'Applications web et outils d’automatisation pour des TPE/PME, du cadrage à la recette. Déploiement Docker, documentation et guides d’utilisation.'
	},
	{
		role: 'Stagiaire développeur · Data & automatisation',
		company: '3 Forêts · Val-d’Oise',
		date: 'Septembre – octobre 2026',
		description: 'Exploration d’un logiciel métier sans API, automatisation Playwright et structuration des données avec DuckDB.'
	},
	{
		role: 'Apple Specialist',
		company: 'Apple · La Défense',
		date: 'Juillet 2025 – janvier 2026',
		description: 'Diagnostic logiciel et assistance sur les produits Apple. Accompagnement de 100 à 150 clients par jour, avec plus de 90 % de satisfaction.'
	},
	{
		role: 'Assistant administratif',
		company: "Cap’ devant ! · Tremblay-en-France",
		date: 'Avril 2026',
		description: 'Gestion administrative et organisation de dossiers.'
	},
	{
		role: 'Chef de rang',
		company: 'Buffalo Grill · Paris 19e',
		date: '2018 – 2023',
		description: 'Gestion d’un rang de tables, relation client en environnement soutenu et coordination d’équipe.'
	}
];

export const projects = [
	{
		title: 'Automatisation métier · 3 Forêts',
		kind: 'Stage · septembre – octobre 2026',
		description: 'Reverse engineering d’un logiciel métier sans API : parcours de connexion et de navigation automatisés avec Playwright, extraction puis analyse des données dans DuckDB.',
		stack: ['Playwright', 'DuckDB', 'Python'],
		highlight: 'Automatisation de bout en bout'
	},
	{
		title: 'OBO · moteur de prospection',
		kind: 'Application · avril – juillet 2025',
		description: 'Projet préparé avec 44 user stories, un plan de tests pytest et un plan de sprints. Collecte de données, filtrage et sécurisation des accès par JWT.',
		stack: ['Python', 'Flask', 'PostgreSQL', 'Supabase', 'Docker', 'Playwright', 'pytest'],
		highlight: '44 user stories · tests écrits avant le code'
	},
	{
		title: 'CNIG · RAG ontologique',
		kind: 'Projet data · mars 2026',
		description: 'Comparaison d’un RAG classique et d’un RAG enrichi par une ontologie OWL sur 30 273 friches. Évaluation RAGAS, notebooks reproductibles et limites documentées.',
		stack: ['Python', 'LlamaIndex', 'Gemini', 'rdflib', 'RAGAS'],
		highlight: '30 273 jeux de données analysés',
		repository: 'https://github.com/ValentinDLC/cnig-rag-ontologique'
	},
	{
		title: 'Extraction de plannings',
		kind: 'Automatisation · 2026',
		description: 'Automatisation Playwright d’un logiciel métier avec double authentification. Extraction de 112 événements sur un mois ; données conservées localement après vérification des CGU et du RGPD.',
		stack: ['Node.js', 'Playwright'],
		highlight: '112 événements extraits sans erreur'
	},
	{
		title: 'HBnB · API de réservation',
		kind: 'Projet de formation · décembre 2025',
		description: 'API REST documentée, organisée en trois couches, avec authentification JWT et contrôle d’accès par rôles.',
		stack: ['Python', 'Flask-RESTX', 'SQLAlchemy', 'MySQL'],
		highlight: 'Architecture en trois couches',
		repository: 'https://github.com/ValentinDLC/HolbertonSchool-Hbnb'
	},
	{
		title: 'IconoClass · suivi d’activité',
		kind: 'Application · février – mai 2026',
		description: 'Application mobile déployée pour environ 60 étudiants : suivi d’engagement en temps réel, sessions filtrées par ville et notifications ciblées.',
		stack: ['Flutter', 'Firebase', 'Google Sheets API'],
		highlight: 'Environ 60 étudiants utilisateurs'
	},
	{
		title: 'Scorpius · prospection freelance',
		kind: 'Agent d’automatisation',
		description: 'Agent Python conteneurisé avec Docker pour automatiser la prospection de missions freelance.',
		stack: ['Python', 'Docker', 'Automatisation'],
		highlight: 'Projet personnel · dépôt privé'
	}
];

export const interests = ['Natation', 'Engagement citoyen à L’Isle-Adam', 'Veille sur l’IA et les outils open source'];

export const repositoryGroups = [
	{
		category: 'Produits, données et sécurité',
		repositories: [
			{ name: 'IconoClass', visibility: 'private' },
			{ name: 'Icono_Class_App', visibility: 'private' },
			{ name: 'Icocnoclass_app', visibility: 'private' },
			{ name: 'scorpius', visibility: 'private' },
			{ name: 'cnig-rag-ontologique' },
			{ name: 'network-scanner' },
			{ name: 'security-log-analyzer' },
			{ name: 'password-security-auditor' },
			{ name: 'mini-siem-platform' },
			{ name: 'E-commerce_php' },
			{ name: 'HolbertonSchool-Hbnb', branch: 'Tino' },
			{ name: 'holbertonschool-softy-pinko-docker' },
			{ name: 'Keeler-Theorem' }
		]
	},
	{
		category: 'Sites et portfolios',
		repositories: [
			{ name: 'Svelteport' },
			{ name: 'Portfolio' },
			{ name: 'Portfolio3' },
			{ name: 'Portfolio.' },
			{ name: 'My-portfolio', visibility: 'private' },
			{ name: 'Landing-PageBMW' },
			{ name: 'Booki' },
			{ name: 'back-' },
			{ name: 'R2' },
			{ name: 'sophie-bluel' },
			{ name: 'P3-sophie-bluel' },
			{ name: 'Projet-3---cr-ez-une-page-web-dynamique-avec-javascript' },
			{ name: 'P4-debuggez-et-optimisez-un-site' },
			{ name: 'P5' },
			{ name: 'P6_Grimoire' },
			{ name: 'project5-kasa' },
			{ name: 'formation-Developpeur-web' },
			{ name: 'dardenne_02_181220' },
			{ name: 'Light_out' },
			{ name: 'Laoder' },
			{ name: 'cursor-animat' }
		]
	},
	{
		category: 'Holberton School · développement',
		repositories: [
			{ name: 'holbertonschool-zero_day' },
			{ name: 'holbertonschool-shell' },
			{ name: 'holbertonschool-low_level_programming' },
			{ name: 'holbertonschool-printf' },
			{ name: 'holbertonschool-binary_trees' },
			{ name: 'holbertonschool-simple_shell' },
			{ name: 'Last-higher_level_programming', visibility: 'private' },
			{ name: 'holbertonschool-web_front_end' },
			{ name: 'holbertonschool-web_back_end' },
			{ name: 'holbertonschool-higher_level_programming' },
			{ name: 'holbertonschool-ai4devs' },
			{ name: 'holbertonschool-network' },
			{ name: 'holbertonschool-Fix_My_Code_Challenge' },
			{ name: 'holbertonschool-system_engineering-devops' },
			{ name: 'holbertonschool-chatgpt-introduction', visibility: 'private' },
			{ name: 'holbertonschool-france-certificates-ibm' }
		]
	},
	{
		category: 'Open source et divers',
		repositories: [
			{ name: 'gxuyw-Introduction-to-Open-Source', branch: 'master' },
			{ name: 'Create_an_open_source_project' },
			{ name: 'hello_world' },
			{ name: 'test', visibility: 'private' }
		]
	}
];

export const education = [
	{
		degree: 'Titre RNCP niveau 6 · Développeur Full-Stack',
		institution: 'Holberton School',
		date: 'Juin 2025 – juin 2026 · obtenu en juillet 2026'
	},
	{ degree: 'Certificat OPQUAST · Qualité Web', institution: 'OPQUAST', date: '2021' },
	{ degree: 'Baccalauréat scientifique', institution: 'Lycée François Truffaut', date: '2016' }
];
