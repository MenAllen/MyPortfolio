export type skillType = [string, string];

/* ============================================================================ */
/*                                 SKILLS DATA                                  */
/* ============================================================================ */

export const skillsArray: skillType[] = [
	["HTML", "/logos/html5.svg"],
	["CSS", "/logos/css3.svg"],
	["Sass", "/logos/sass.svg"],
	["Javascript", "/logos/javascript.svg"],
	["Typescript", "/logos/typescript.svg"],
	["NodeJS", "/logos/nodejs.svg"],
	["React", "/logos/react.svg"],
	["Redux", "/logos/redux.svg"],
	["VueJS", "/logos/vue.svg"],
	["Axios", "/logos/axios-icon.svg"],
	["Express", "/logos/expressjs-icon.svg"],
	["MySQL", "/logos/mysql-icon.svg"],
	["MongoDB", "/logos/mongodb-icon.svg"],
	["Git", "/logos/git-icon.svg"],
	["Github", "/logos/github-icon.svg"]
];

export interface SkillData {
	slug: string;
	logo: string;
	name: string;
	version: string;
	level: number;
	type: string;
}

export const Skills: SkillData[] = [
	{
		slug: "1",
		logo: "/logos/javascript.svg",
		name: "Javascript",
		version: "V13",
		level: 3,
		type: "language",
	},
	{
		slug: "2",
		logo: "/logos/html5.svg",
		name: "HTML",
		version: "V5",
		level: 3,
		type: "language",
	},
	{
		slug: "3",
		logo: "/logos/css3.svg",
		name: "CSS3",
		version: "V3",
		level: 3,
		type: "language",
	},
	{
		slug: "4",
		logo: "/logos/typescript.svg",
		name: "Typescript",
		version: "V5",
		level: 3,
		type: "language",
	},
	{
		slug: "5",
		logo: "/logos/bootstrap-fill.svg",
		name: "Bootstrap",
		version: "V5",
		level: 3,
		type: "framework",
	},
	{
		slug: "6",
		logo: "/logos/sass.svg",
		name: "Sass",
		version: "V1",
		level: 3,
		type: "preproc",
	},
	{
		slug: "7",
		logo: "/logos/react.svg",
		name: "React",
		version: "V18",
		level: 3,
		type: "framework",
	},
	{
		slug: "8",
		logo: "/logos/next-js.svg",
		name: "NextJS",
		version: "V13",
		level: 3,
		type: "framework",
	},
	{
		slug: "9",
		logo: "/logos/nodejs.svg",
		name: "NodeJS",
		version: "V18",
		level: 3,
		type: "outil",
	},
	{
		slug: "10",
		logo: "/logos/figma.svg",
		name: "Figma",
		version: "V2",
		level: 3,
		type: "outil",
	},
	{
		slug: "11",
		logo: "/logos/jira.svg",
		name: "Jira",
		version: "V8",
		level: 3,
		type: "outil",
	},
	{
		slug: "12",
		logo: "/logos/windows.svg",
		name: "Windows",
		version: "V10",
		level: 3,
		type: "système",
	},
	{
		slug: "13",
		logo: "/logos/linux.svg",
		name: "Linux",
		version: "V22",
		level: 3,
		type: "système",
	},
	{
		slug: "14",
		logo: "/logos/c.svg",
		name: "C",
		version: "V2",
		level: 3,
		type: "language",
	},
	{
		slug: "15",
		logo: "/logos/cypress.svg",
		name: "Cypress",
		version: "V12",
		level: 3,
		type: "outil",
	},
	{
		slug: "16",
		logo: "/logos/vue.svg",
		name: "Vue",
		version: "V3",
		level: 3,
		type: "framework",
	},
	{
		slug: "17",
		logo: "/logos/redux.svg",
		name: "Redux",
		version: "V4",
		level: 3,
		type: "outil",
	},
	{
		slug: "18",
		logo: "/logos/express.svg",
		name: "Express",
		version: "V4",
		level: 3,
		type: "framework",
	},
	{
		slug: "19",
		logo: "/logos/git.svg",
		name: "Git",
		version: "V2",
		level: 3,
		type: "outil",
	},
	{
		slug: "20",
		logo: "/logos/jest.svg",
		name: "Jest",
		version: "V29",
		level: 3,
		type: "outil",
	},
	{
		slug: "21",
		logo: "/logos/postman.svg",
		name: "Postman",
		version: "V10",
		level: 3,
		type: "outil",
	},
	{
		slug: "22",
		logo: "/logos/mysql.svg",
		name: "MySQL",
		version: "V7",
		level: 3,
		type: "language",
	},
	{
		slug: "23",
		logo: "/logos/rest-api.svg",
		name: "REST",
		version: "-",
		level: 3,
		type: "protocole",
	},
	{
		slug: "24",
		logo: "/logos/http.svg",
		name: "HTTP",
		version: "V3",
		level: 3,
		type: "protocole",
	},
	{
		slug: "25",
		logo: "/logos/scrum.svg",
		name: "Scrum",
		version: "-",
		level: 3,
		type: "framework",
	},
	{
		slug: "26",
		logo: "/logos/sequelizejs.svg",
		name: "Sequelize",
		version: "V6",
		level: 3,
		type: "outil",
	},
];

/* ============================================================================ */
/*                        DIPLOMA & CERTIFICATIONS DATA                         */
/* ============================================================================ */
export interface CertificatesData {
	id: string;
	logo: string;
	url: string;
	name: string;
	date: string;
	type: string;
	level: string;
	description: string;
}

export const Certificates: CertificatesData[] = [
	{
		id: "1",
		logo: "/logos/openclassrooms.jpg",
		url: "/pdf/Diplome2-OC-min.pdf",
		name: "Développeur concepteur logiciel",
		date: "06/03/2023",
		type: "diplôme",
		level: "Titre 6 RNCP",
		description:
			"Le parcours développeur d'applications Javascript-React (11mois) inclus la réalisation et la soutenance de 14 projets professionnalisants réalisés en autonomie et soutenus devant un jury. Parmi les projets:\r\n - Choisir une solution technique adaptée et travailler en mode Agile\r\n - Créer des applications web dynamiques avec Javascript et React\r\n - Communiquer avec le back-end de l’application grâce à une API\r\n - Mettre en œuvre des test unitaires et d’intégration et débugger le code\r\n - Résoudre des problèmes techniques avec un langage de programmation et des algorithmes\r\nCompétences acquises: ReactJS, Redux/Toolkit, Design Patterns, SEO, Cypress, Jest, JSDoc, Agile (scrum)",
	},
	{
		id: "2",
		logo: "/logos/openclassrooms.jpg",
		url: "/pdf/Diplome1-OC-min.pdf",
		name: "Développeur web",
		date: "03/12/2021",
		type: "diplôme",
		level: "Titre 5 RNCP",
		description:
			"Le parcours développeur web (7mois) inclus la soutenance de 7 projets professionnalisants soutenus devant un jury.\r\n - Transformer une maquette en site web avec HTML et CSS\r\n - Utiliser des animations CSS pour dynamiser une page web\r\n - Optimiser un site web pour le SEO\r\n - Construire un site e-commerce en Javascript (Frontend)\r\n - Construire une API sécurisée (Backend)\r\n - Réaliser un réseau social d’entreprise (Backend & Frontend)\r\nCompétences : HTML5 · Git · MongoDB · API REST · Node.js · Site web réactif · Bootstrap · SQL",
	},
	{
		id: "3",
		logo: "/logos/cisco.png",
		url: "/logos/cisco.png",
		name: "CCNA / CCNP Routing & Switching",
		date: "03/12/2021",
		type: "diplôme",
		level: "Titre 5 RNCP",
		description:
			"La certification CCNA Routing and Switching atteste l'acquisition des connaissances sur les technologies réseau de base. Le détenteur d'une certification CCNA pourra occuper les postes suivants : Ingénieur d'assistance téléphonique, Technicien sur site, Ingénieur système ou Intégrateur système de niveau 1\r\n\r\nLa certification Cisco CCNP Routing & Switching (R&S) atteste les connaissances requises pour les ingénieurs réseau amenés à planifier, implémenter, vérifier et dépanner les réseaux d’entreprise locaux et étendus. Le détenteur d'une certification CCNP R&S pourra occuper les postes suivants : consultant réseau, ingénieur support, ingénieur réseau, intégrateur système.",
	},
	{
		id: "4",
		logo: "/logos/eseo.jpg",
		url: "/pdf/Inge-ESEO-min.pdf",
		name: "Ingénieur ESEO",
		date: "22/06/1984",
		type: "diplôme",
		level: "BAC+5",
		description:
			"Ingénieur Généraliste de l'électronqiue, du numérique et des nouvelles technologies\r\n\r\nLe cycle ingénieur ESEO forme des ingénieurs généralistes des Nouvelles Technologies maîtrisant à la fois le numérique et l’électronique, offrant une grande polyvalence pour des carrières dans tous les secteurs. Durant ces 3 années de cycle ingénieur, les étudiants ESEO choisissent le parcours de formation qui leur correspond et construisent petit à petit le projet professionnel qui les anime.",
	},
	{
		id: "5",
		logo: "/logos/openclassrooms.jpg",
		url: "/pdf/Accessibilité-min.pdf",
		name: "Concevez un contenu web accessible",
		date: "28/06/2021",
		type: "certificat",
		level: "",
		description: "",
	},
	{
		id: "6",
		logo: "/logos/openclassrooms.jpg",
		url: "/pdf/Algorithmes-min.pdf",
		name: "Découvrez le fonctionnement des algorithmes",
		date: "14/05/2022",
		type: "certificat",
		level: "",
		description: "",
	},
	{
		id: "7",
		logo: "/logos/openclassrooms.jpg",
		url: "/pdf/AnimationsCSS-min.pdf",
		name: "Créez des animations CSS modernes",
		date: "25/05/2021",
		type: "certificat",
		level: "",
		description: "",
	},
	{
		id: "8",
		logo: "/logos/openclassrooms.jpg",
		url: "/pdf/APIRest-min.pdf",
		name: "Adoptez des API Rest pour vos projets web",
		date: "31/08/2021",
		type: "certificat",
		level: "",
		description: "",
	},
	{
		id: "9",
		logo: "/logos/openclassrooms.jpg",
		url: "/pdf/BDDSQL-min.pdf",
		name: "Administrez vos bases de données avec mySQL",
		date: "24/09/2021",
		type: "certificat",
		level: "",
		description: "",
	},
	{
		id: "10",
		logo: "/logos/openclassrooms.jpg",
		url: "/pdf/Bootstrap-min.pdf",
		name: "Créez des sites web responsive avec Bootstrap",
		date: "24/09/2021",
		type: "certificat",
		level: "",
		description: "",
	},
	{
		id: "11",
		logo: "/logos/openclassrooms.jpg",
		url: "/pdf/CCF-min.pdf",
		name: "Réalisez un cahier des charges fonctionnel",
		date: "08/07/2022",
		type: "certificat",
		level: "",
		description: "",
	},
	{
		id: "12",
		logo: "/logos/openclassrooms.jpg",
		url: "/pdf/Figma-min.pdf",
		name: "Créez une maquette web avec Figma",
		date: "15/07/2022",
		type: "certificat",
		level: "",
		description: "",
	},
	{
		id: "13",
		logo: "/logos/openclassrooms.jpg",
		url: "/pdf/CreerProjetInformatique-min.pdf",
		name: "Gérez votre projet informatique facilement",
		date: "07/07/2022",
		type: "certificat",
		level: "",
		description: "",
	},
	{
		id: "14",
		logo: "/logos/openclassrooms.jpg",
		url: "/pdf/SASS-min.pdf",
		name: "Simplifiez vous le CSS avec SASS",
		date: "19/05/2021",
		type: "certificat",
		level: "",
		description: "",
	},
	{
		id: "15",
		logo: "/logos/openclassrooms.jpg",
		url: "/pdf/DDD-min.pdf",
		name: "Appliquez le principe du Domain-Driven Design à votre application",
		date: "15/07/2022",
		type: "certificat",
		level: "",
		description: "",
	},
	{
		id: "16",
		logo: "/logos/openclassrooms.jpg",
		url: "/pdf/Debugger-min.pdf",
		name: "Déboguez l’interface de votre site internet",
		date: "16/06/2022",
		type: "certificat",
		level: "",
		description: "",
	},
	{
		id: "17",
		logo: "/logos/openclassrooms.jpg",
		url: "/pdf/DReact-min.pdf",
		name: "Débutez avec React",
		date: "18/08/2022",
		type: "certificat",
		level: "",
		description: "",
	},
	{
		id: "18",
		logo: "/logos/openclassrooms.jpg",
		url: "/pdf/Découvrez-TypeScript-min.pdf",
		name: "Découvrez TypeScript",
		date: "22/03/2023",
		type: "certificat",
		level: "",
		description: "",
	},
	{
		id: "19",
		logo: "/logos/openclassrooms.jpg",
		url: "/pdf/Debugger-min.pdf",
		name: "Déboguez l’interface de votre site internet",
		date: "16/06/2022",
		type: "certificat",
		level: "",
		description: "",
	},
	{
		id: "20",
		logo: "/logos/openclassrooms.jpg",
		url: "/pdf/DT-min.pdf",
		name: "Ecrivez la documentation technique de votre projet",
		date: "09/10/2022",
		type: "certificat",
		level: "",
		description: "",
	},
	{
		id: "21",
		logo: "/logos/openclassrooms.jpg",
		url: "/pdf/DReact-min.pdf",
		name: "Débutez avec React",
		date: "18/08/2022",
		type: "certificat",
		level: "",
		description: "",
	},
	{
		id: "22",
		logo: "/logos/openclassrooms.jpg",
		url: "/pdf/Fullstack-min.pdf",
		name: "Passez au Full Stack avec NodeJS, Express et MongoDB",
		date: "27/08/2021",
		type: "certificat",
		level: "",
		description: "",
	},
	{
		id: "23",
		logo: "/logos/openclassrooms.jpg",
		url: "/pdf/GPA-min.pdf",
		name: "Initiez vous à la gestion de projet Agile",
		date: "07/07/2022",
		type: "certificat",
		level: "",
		description: "",
	},
	{
		id: "24",
		logo: "/logos/openclassrooms.jpg",
		url: "/pdf/IntégrerMaquette-min.pdf",
		name: "Découpez et Intégrez une maquette",
		date: "",
		type: "certificat",
		level: "",
		description: "",
	},
	{
		id: "25",
		logo: "/logos/openclassrooms.jpg",
		url: "/pdf/Javascript-min.pdf",
		name: "Apprenez à programmer avec Javascript",
		date: "16/07/2021",
		type: "certificat",
		level: "",
		description: "",
	},
	{
		id: "26",
		logo: "/logos/openclassrooms.jpg",
		url: "/pdf/OWASP-min.pdf",
		name: "Sécurisez vos applications avec l'OWASP",
		date: "29/08/2021",
		type: "certificat",
		level: "",
		description: "",
	},
	{
		id: "27",
		logo: "/logos/openclassrooms.jpg",
		url: "/pdf/PerformancesSites-min.pdf",
		name: "Optimisez le référencement de votre site (SEO) par les	performances",
		date: "23/06/2021",
		type: "certificat",
		level: "",
		description: "",
	},
	{
		id: "28",
		logo: "/logos/openclassrooms.jpg",
		url: "/pdf/Redux-min.pdf",
		name: "Utilisez Redux pour gérer l'état de vos apps",
		date: "07/11/2022",
		type: "certificat",
		level: "",
		description: "",
	},
	{
		id: "29",
		logo: "/logos/openclassrooms.jpg",
		url: "/pdf/SiteWebAccessible-min.pdf",
		name: "Codez un site web accessible avec HTML et CSS",
		date: "06/04/2023",
		type: "certificat",
		level: "",
		description: "",
	},
	{
		id: "30",
		logo: "/logos/openclassrooms.jpg",
		url: "/pdf/SiteWebHTMLCSS-min.pdf",
		name: "Créez votre site web avec HTML et CSS",
		date: "22/04/2021",
		type: "certificat",
		level: "",
		description: "",
	},
	{
		id: "31",
		logo: "/logos/openclassrooms.jpg",
		url: "/pdf/StateManager-Redux-min.pdf",
		name: "Utilisez le state manager Redux pour l'état de vos applications",
		date: "07/11/2022",
		type: "certificat",
		level: "",
		description: "",
	},
	{
		id: "32",
		logo: "/logos/openclassrooms.jpg",
		url: "/pdf/TesterAppFrontEndAvecJavascript-min.pdf",
		name: "Testez vos applications Frontend avec Javascript",
		date: "20/06/2022",
		type: "certificat",
		level: "",
		description: "",
	},
	{
		id: "33",
		logo: "/logos/openclassrooms.jpg",
		url: "/pdf/VeilleInformationnelle-min.pdf",
		name: "Mettez en place une veille informationnelle",
		date: "02/04/2021",
		type: "certificat",
		level: "",
		description: "",
	},
	{
		id: "34",
		logo: "/logos/openclassrooms.jpg",
		url: "/pdf/VueJS-min.pdf",
		name: "Créez une application web avec VueJS",
		date: "05/10/2022",
		type: "certificat",
		level: "",
		description: "",
	},
];

/* ========================================================================================= */

export interface ProjectData {
	slug: string;
	heroImage: string;
	previewImage: string;
	images: { image: string; title: string; description: string }[];
	title: string;
	short: string;
	description: string;
	competences: string;
	development_topics: string[];
	stack: string[];
	code_url: string;
	demo_url: string;
	background: string[];
}

export const Projects: ProjectData[] = [
	{
		slug: "manage",
		heroImage: "/images/portfolio/web-loceane.webp",
		previewImage: "/images/portfolio/web-loceane.webp",
		images: [
			{
				image: "/images/portfolio/web-loceane.webp",
				title: "Landing page",
				description: "Le menu avec la vue principale du village et son port",
			},
			{
				image: "/images/portfolio/web-loceane1.jpg",
				title: "Le carrousel",
				description:
					"Un clic sur la landing page amène au carrousel qui permet de visiter l'intérieur",
			},
			{
				image: "/images/portfolio/web-loceane2.jpg",
				title: "Page A Propos",
				description: "la page qui renseigne sur les visites et activités possibles",
			},
		],
		title: "L'Océane",
		short: "Un site vitrine pour présenter un bien immobilier à la location saisonnière",
		description:
			'La demande était de créer rapidement une landing page présentant un extérieur du bien immobilier,	de visualiser l"intérieur dans un carrousel et enfin un menu "A propos" décrivant l"environnement avec les possibilités d"activité',
		competences:
			'Pour cela, j"ai utilisé HTML5, CSS Flexbox, JavaScript & ReactJS: Configuration des routes avec React Router, 8 Composants React: Header, Footer, Banner, Card, Carrousel, Dropdown, Error, Pitch, et Utilisation des hooks useState & useEffect',
		development_topics: ["Front End Development"],
		stack: ["HTML", "CSS", "Javascript", "ReactJS", "Git", "Github"],
		code_url: "https://github.com/MenAllen/loceane",
		demo_url: "https://scintillating-froyo-b45427.netlify.app/",
		background: [
			`This project was a front-end  challenge from Frontend Mentor. It’s a platform that 
      enables you to practice building websites to a design and project brief. Each challenge 
      includes mobile and desktop designs to show how the website should look at different 
      screen sizes. Creating these projects has helped me refine my workflow and solve 
      real-world coding problems. I’ve learned something new with each project, helping 
      me to improve and adapt my style.`,
		],
	},
	{
		slug: "toto",
		heroImage: "/images/portfolio/web-myshop.webp",
		previewImage: "/images/portfolio/web-myshop.webp",
		images: [
			{
				image: "/images/portfolio/web-myshop-first.webp",
				title: "Landing page",
				description: "Le menu avec la vue principale du village et son port",
			},
			{
				image: "/images/portfolio/web-myshop-second.webp",
				title: "Landing page",
				description: "Le menu avec la vue principale du village et son port",
			},
		],
		title: "Pilote de site e-commerce",
		short: "Un site SPA pour présenter un projet de site e-commerce",
		description:
			"Frontend de site e-commerce (SPA avec VueJS) pour objets (ici cartes postales anciennes) avec connexion authentifiée, panier d'achat avec total et bouton de soumission.",
		competences:
			"Développer un frontend SPA avec le framework Vue.js, Assurer la réactivité pour les données affichées, Mettre en oeuvre un store avec Vuex pour des données accessibles, Implanter un backend leger basé sur Node/Express pour valider le frontend, Utiliser l'ORM sequelize pour s'interfacer avec la BDD MySQL, Héberger le backend sous AWS (Elastic Beanstalk)",
		development_topics: ["Front End Development"],
		stack: ["HTML", "CSS", "Javascript", "VueJS", "Git", "Github"],
		code_url: "https://github.com/MenAllen/MyShop",
		demo_url: "",
		background: [
			``,
		],
	},
	{
		slug: "bagou",
		heroImage: "/images/portfolio/web-mysudoku.webp",
		previewImage: "/images/portfolio/web-mysudoku.webp",
		images: [
			{
				image: "/images/portfolio/web-mysudoku.webp",
				title: "Un menu et une grille",
				description: "Le menu permet de choisir une des grilles chargées, tester un chiffre rentré, importer une ou plusieurs grilles depuis un fichier et lancer ou arrêter une résolution automatique",
			},
			{
				image: "/images/portfolio/sudoku2.jpg",
				title: "Résoudre une grille",
				description: "Les chiffres rentrés manuellement ou testés par l'algorithme s'affichent de façon identifiable",
			},
			{
				image: "/images/portfolio/sudoku3.jpg",
				title: "Charger des grilles",
				description: "Importer un fichier JSON pour résoudre vos propres grilles",
			},
		],
		title: "Sudoku",
		short: "Une App pour résoudre mon Sudoku si je bloque",
		description:
			"Un menu et une grille pour importer une grille d'un fichier JSON, le charger dans le local storage, et soit le résoudre en local ou lancer la résolution automatique, ce qui peut prendre plusieurs heures...",
		competences:
			"Pour cela, j'ai utilisé l'algorithme backtracking, HTML, CSS, Bootstrap, Javascript et l'API File",
		development_topics: ["Front End Development"],
		stack: ["HTML", "CSS", "Javascript", "Bootstrap", "Git", "Github"],
		code_url: "https://github.com/MenAllen/MySudoku",
		demo_url: "https://menallen.github.io/MySudoku/",
		background: [
			`This project was a front-end  challenge from Frontend Mentor. It’s a platform that 
      enables you to practice building websites to a design and project brief. Each challenge 
      includes mobile and desktop designs to show how the website should look at different 
      screen sizes. Creating these projects has helped me refine my workflow and solve 
      real-world coding problems. I’ve learned something new with each project, helping 
      me to improve and adapt my style.`,
		],
	},
	{
		slug: "digo",
		heroImage: "/images/portfolio/web-mytodolist.webp",
		previewImage: "/images/portfolio/web-mytodolist.webp",
		images: [
			{
				image: "/images/portfolio/todolist1.jpg",
				title: "Menu List",
				description: "Ajouter ou supprimer une tâche, lister au choix, toutes les tâches, les tâches faites ou à faire",
			},
			{
				image: "/images/portfolio/todolist2.jpg",
				title: "Menu Import",
				description: "Importer une liste de tâches à partir d'un fichier JSON",
			},
			{
				image: "/images/portfolio/todolist3.jpg",
				title: "Menu Export",
				description: "Exporter la liste des tâches en enregistrant un fichier JSON",
			},
		],
		title: "Todolist",
		short: "La demande d'une asso pour une Todolist persistante, simple et accessible",
		description:
			"Un frontend HTLM/CSS/JAVASCRIPT présentant une liste de tâches. On peut ajouter une tâche, la cocher si terminée, la supprimer. On peut également filtrer les tâches terminées ou en cours. Enfin on peut exporter la liste des tâches pour en faire un fichier JSON que l'on peut importer ensuite, rendant inutile le besoin d'un backend",
		competences:
			"Pour cela, j'ai utilisé HTML, CSS, Bootstrap, Javascript et l'API File",
		development_topics: ["Front End Development"],
		stack: ["HTML", "CSS", "Javascript", "Bootstrap", "Git", "Github"],
		code_url: "https://github.com/MenAllen/MyTodoList",
		demo_url: "https://menallen.github.io/MyTodoList/",
		background: [
			`This project was a front-end  challenge from Frontend Mentor. It’s a platform that 
      enables you to practice building websites to a design and project brief. Each challenge 
      includes mobile and desktop designs to show how the website should look at different 
      screen sizes. Creating these projects has helped me refine my workflow and solve 
      real-world coding problems. I’ve learned something new with each project, helping 
      me to improve and adapt my style.`,
		],
	},
	{
		slug: "buri",
		heroImage: "/images/portfolio/web-portfolio-first.webp",
		previewImage: "/images/portfolio/web-portfolio-first.webp",
		images: [
			{
				image: "/images/portfolio/portfolio1.jpg",
				title: "Mon Profil",
				description: "Mes formations et expériences professionnelles",
			},
			{
				image: "/images/portfolio/portfolio2.jpg",
				title: "Mes Projets",
				description: "Les projets réalisés en développement web, embarqué et chef de projet",
			},
			{
				image: "/images/portfolio/portfolio3.jpg",
				title: "Les détails d'un projet",
				description: "Description et compétences nécessaires",
			},
		],
		title: "Mon Portfolio",
		short: "Site de présentation de mes réalisations",
		description:
			'Développer un site pour la présentation de mes réalisations en tant que développeur web, développeur soft embarqué et chef de projet',
		competences:
			'Pour cela, j"ai utilisé HTML, CSS, Javascript et React',
		development_topics: ["Front End Development"],
		stack: ["HTML", "CSS", "Javascript", "Bootstrap", "Git", "Github"],
		code_url: "https://github.com/MenAllen/MyPortfolio",
		demo_url: "https://www.pjoubard.com/",
		background: [
			`This project was a front-end  challenge from Frontend Mentor. It’s a platform that 
      enables you to practice building websites to a design and project brief. Each challenge 
      includes mobile and desktop designs to show how the website should look at different 
      screen sizes. Creating these projects has helped me refine my workflow and solve 
      real-world coding problems. I’ve learned something new with each project, helping 
      me to improve and adapt my style.`,
		],
	},
	{
		slug: "lora",
		heroImage: "/images/portfolio/web-react-p4.webp",
		previewImage: "/images/portfolio/web-react-p4.webp",
		images: [
			{
				image: "/images/portfolio/web-react-p4.webp",
				title: "Landing Page",
				description: "Page d'acceuil responsive avec menu et bouton pour inscription",
			},
			{
				image: "/images/portfolio/landingpage1.jpg",
				title: "Landing Page",
				description: "Le formulaire d'inscription",
			},
			{
				image: "/images/portfolio/landingpage2.jpg",
				title: "Landing Page",
				description: "la validation des inputs avec détection des erreurs",
			},
			{
				image: "/images/portfolio/landingpage3.jpg",
				title: "Landing Page",
				description: "La confirmation d'inscription",
			},
		],
		title: "Landing Page avec Javascript",
		short: "Projet du parcours de concepteur d'applications Javascript React Openclassrooms",
		description:
			"Developpement d'une Landing Page avec un formulaire d'inscription développé avec HTML, CSS et Javascript uniquement. Il existe des contrôles sur les input entrainant l'affichage de messages d'erreurs explicites s'il y a lieu, sinon le formulaire est soumis",
		competences:
			"Coder en Javascript, Travailler sur un repo GitHub forké, Utiliser des fichiers séparés pour le HTML, le CSS et le JavaScript, Commenter le code: décrire chaque fonction et chaque classe, ainsi que les parties du code qui nécessitent plus de détails, Tester manuellement les fonctionnalités, les entrées de formulaire et l'affichage responsive",
		development_topics: ["Front End Development"],
		stack: ["HTML", "CSS", "Javascript", "Bootstrap", "Git", "Github"],
		code_url: "https://github.com/MenAllen/PhilippeJoubard_P4_032022",
		demo_url: "https://frolicking-elf-06b819.netlify.app/",
		background: [
			`This project was a front-end  challenge from Frontend Mentor. It’s a platform that 
      enables you to practice building websites to a design and project brief. Each challenge 
      includes mobile and desktop designs to show how the website should look at different 
      screen sizes. Creating these projects has helped me refine my workflow and solve 
      real-world coding problems. I’ve learned something new with each project, helping 
      me to improve and adapt my style.`,
		],
	},
	{
		slug: "lome",
		heroImage: "/images/portfolio/web-react-p6.webp",
		previewImage: "/images/portfolio/web-react-p6.webp",
		images: [
			{
				image: "/images/portfolio/web-react-p6.webp",
				title: "Page d'accueil",
				description: "Liste des photographes exposés avec leur localisation, leur créneau et leur taux journalier",
			},
			{
				image: "/images/portfolio/photographes1.jpg",
				title: "Page photographe",
				description: "Les clichés d'un photographe avec ses likes",
			},
			{
				image: "/images/portfolio/photographes2.jpg",
				title: "Formulaire de contact",
				description: "Avec validation des champs",
			},
			{
				image: "/images/portfolio/photographes3.jpg",
				title: "Carrousel",
				description: "Lancement du carrousel (photos et videos) à partir d'un clic sur la page du photographe",
			},
		],
		title: "Site accessible pour plateforme de photographes",
		short: "Projet du parcours de concepteur d'applications Javascript React Openclassrooms",
		description: "FishEye est un site web qui permet aux photographes indépendants de présenter leurs meilleurs travaux. Ceux-ci, photos ou videos, sont visualisables dans un carroussel, 'likables' et 'triables' par titre, date ou popularité. Un formulaire de contact permet d'adresser un mail au photographe sélectionné. Un panneau de bas de page indique le nombre total de likes et le taux horaire du photographe. Les pages sont navigables au clavier comme à la souris.",
		competences: "HTML, CSS, Javascript, Assurer l'accessibilité d'un site web, Ecrire du code JavaScript maintenable, Développer une application web modulaire avec des design patterns",
		development_topics: ["Front End Development"],
		stack: ["HTML", "CSS", "Javascript", "Bootstrap", "Git", "Github"],
		code_url: "https://github.com/MenAllen/PhilippeJoubard_P6_032022",
		demo_url: "https://menallen.github.io/PhilippeJoubard_P6_032022",
		background: [
			`This project was a front-end challenge from Frontend Mentor. It’s a platform that 
      enables you to practice building websites to a design and project brief. Each challenge 
      includes mobile and desktop designs to show how the website should look at different 
      screen sizes. Creating these projects has helped me refine my workflow and solve 
      real-world coding problems. I’ve learned something new with each project, helping 
      me to improve and adapt my style.`,
		],
	},
	{
		slug: "malo",
		heroImage: "/images/portfolio/web-react-p7.webp",
		previewImage: "/images/portfolio/web-react-p7.webp",
		images: [
			{
				image: "/images/portfolio/web-react-p7.webp",
				title: "Page d'accueil",
				description: "Bouton de recherche avec items selectionnables et liste des recettes",
			},
			{
				image: "/images/portfolio/petitsplats1.jpg",
				title: "Recherche par sélection d'ingrédient",
				description: "Trois recettes sélectionnées contenant de l'ail",
			},
			{
				image: "/images/portfolio/petitsplats2.jpg",
				title: "Recherche par libellé 'ail'",
				description: "Même résultat",
			},
			{
				image: "/images/portfolio/petitsplats4.jpg",
				title: "Recherche mixte",
				description: "libellé 'ail' et ustensile 'cocotte minute' affiche un seul résultat",
			},
			{
				image: "/images/portfolio/petitsplats5.jpg",
				title: "Tests",
				description: "Comparaison des algorithmes par filtrage et par boucle avec JSBenchme et JSBen.ch: le filtrage est plus rapide",
			},
		],
		title: "algorithme de recherche en JavaScript",
		short: "Projet du parcours de concepteur d'applications Javascript React Openclassrooms",
		description: "Il s'agit, pour un site de recettes de cuisine, d'implémenter un algorithme de recherche qui apporte de la fluidité au moteur de recherche. Pour cela, deux algorithmes sont développés et comparés afin d'être sûr de valider le plus performant.",
		competences: "HTML / CSS / Javascript, Analyser un problème informatique, Développer un algorithme pour résoudre un problème, Utiliser la recherche fonctionnelle (par methodes array) et la recherche par balayage (par boucles),	Utiliser JSBench.me & JSben.ch pour mesurer les performances du code",
		development_topics: ["Front End Development"],
		stack: ["HTML", "CSS", "Javascript", "Bootstrap", "Git", "Github"],
		code_url: "https://github.com/MenAllen/PhilippeJoubard_P6_032022",
		demo_url: "https://menallen.github.io/PhilippeJoubard_P6_032022",
		background: [
			`This project was a front-end challenge from Frontend Mentor. It’s a platform that 
      enables you to practice building websites to a design and project brief. Each challenge 
      includes mobile and desktop designs to show how the website should look at different 
      screen sizes. Creating these projects has helped me refine my workflow and solve 
      real-world coding problems. I’ve learned something new with each project, helping 
      me to improve and adapt my style.`,
		],
	},
	{
		slug: "osi",
		heroImage: "/images/portfolio/web-react-p12.webp",
		previewImage: "/images/portfolio/web-react-p12.webp",
		images: [
			{
				image: "/images/portfolio/analytics1.jpg",
				title: "Connexion",
				description: "Choix user avec données mockées",
			},
			{
				image: "/images/portfolio/web-react-p12.webp",
				title: "Charts",
				description: "Affichage des Charts",
			},
		],
		title: "Tableau de bord d'analytics avec React",
		short: "Projet du parcours de concepteur d'applications Javascript React Openclassrooms",
		description: "SportSee est une startup dédiée au coaching sportif qui lance une nouvelle version de la page profil de l’utilisateur avec React pour permettre à l’utilisateur de suivre le nombre de sessions réalisées ainsi que le nombre de calories brûlées. A partir de la maquette FIGMA et du kanban avec les User Stories, et un backend NodeJS avec des data, il faut intégrer des graphiques sur l’activité sportive de l’utilisateur en utilisant soit D3, soit Recharts.",
		competences: "HTML / CSS / Javascript / React / React-router / styled-components / JSDoc / Recharts, Produire de la documentation technique pour une application, Interagir avec un service Web, Développer des éléments graphiques avancés à l'aide de bibliothèques JavaScript,	Assurer la qualité des données d'une application",
		development_topics: ["Front End Development"],
		stack: ["HTML", "CSS", "Javascript", "Bootstrap", "Git", "Github", "React", "Recharts", "JSDoc"],
		code_url: "https://github.com/MenAllen/PhilippeJoubard_P12_032022",
		demo_url: "https://soft-pika-6958bf.netlify.app/",
		background: [
			`This project was a front-end challenge from Frontend Mentor. It’s a platform that 
      enables you to practice building websites to a design and project brief. Each challenge 
      includes mobile and desktop designs to show how the website should look at different 
      screen sizes. Creating these projects has helped me refine my workflow and solve 
      real-world coding problems. I’ve learned something new with each project, helping 
      me to improve and adapt my style.`,
		],
	},
	{
		slug: "mura",
		heroImage: "/images/portfolio/web-react-p13.webp",
		previewImage: "/images/portfolio/web-react-p13.webp",
		images: [
			{
				image: "/images/portfolio/API1.jpg",
				title: "Connexion",
				description: "Nom utilisateur et mot de passe",
			},
			{
				image: "/images/portfolio/API2.jpg",
				title: "Utilisateur connecté",
				description: "Affichage de l'état de ses comptes",
			},
			{
				image: "/images/portfolio/API3.jpg",
				title: "Mise à jour du profil utilisateur",
				description: "Modification nom",
			},
			{
				image: "/images/portfolio/API4.jpg",
				title: "Phase 2",
				description: "définir les endpoints d’API nécessaires pour visualiser plus d'informations",
			},
		],
		title: "API pour compte bancaire avec React",
		short: "Projet du parcours de concepteur d'applications Javascript React Openclassrooms",
		description: "Le projet concerne une nouvelle banque qui démarre, Argent Bank, qui a besoin d'aide pour mettre en place son application. Nous avons deux phases :	une phase 1 pour la création d'une application web permettant aux clients de se connecter et de gérer leurs comptes et leur profil. L'utilisateur peut visiter la page d'accueil, se connecter au système, se déconnecter, et ne peut voir les informations relatives à son propre profil et les modifier qu'après connexion. La phase 2 a pour but de spécifier les endpoints d’API nécessaires pour une éventuelle deuxième mission une fois la première terminée: Visualiser toutes les transactions pour le mois en cours, visualiser les détails d'une transaction et ajouter, modifier ou supprimer des informations sur une transaction.",
		competences: "HTML / CSS / Javascript / React / React router / Redux, S'authentifier à une API, Modéliser une API, Interagir avec une API, Implémenter un gestionnaire d'état dans une application React",
		development_topics: ["Front End Development"],
		stack: ["HTML", "CSS", "Javascript", "React", "Redux", "Git", "Github"],
		code_url: "https://github.com/MenAllen/PhilippeJoubard_P13_032022",
		demo_url: "https://lambent-pika-65c376.netlify.app/",
		background: [
			`This project was a front-end challenge from Frontend Mentor. It’s a platform that 
      enables you to practice building websites to a design and project brief. Each challenge 
      includes mobile and desktop designs to show how the website should look at different 
      screen sizes. Creating these projects has helped me refine my workflow and solve 
      real-world coding problems. I’ve learned something new with each project, helping 
      me to improve and adapt my style.`,
		],
	},
	{
		slug: "ramo",
		heroImage: "/images/portfolio/web-react-p14.webp",
		previewImage: "/images/portfolio/web-react-p14.webp",
		images: [
			{
				image: "/images/portfolio/web-react-p14.webp",
				title: "Page création",
				description: "Création d'un employé",
			},
			{
				image: "/images/portfolio/librairy4.jpg",
				title: "Page liste",
				description: "Liste des employés",
			},
			{
				image: "/images/portfolio/librairy2.jpg",
				title: "Jest",
				description: "Tests unitaires",
			},
			{
				image: "/images/portfolio/librairy3.jpg",
				title: "Cypress",
				description: "Tests End-to-end",
			},
			{
				image: "/images/portfolio/librairy1.jpg",
				title: "Lighthouse",
				description: "Performances améliorées pour la librairie React",
			},
		],
		title: "Faire passer une librairie jQuery vers React",
		short: "Projet du parcours de concepteur d'applications Javascript React Openclassrooms",
		description: "WealthHealth, une société financière, utilise une application web, HRnet, pour gérer les dossiers des employés. L'application est ancienne et utilise jQuery côté front end, avec beaucoup de bugs. les plugins JQuery (sélecteurs de date, fenêtres modales, menus déroulants et tableaux) sont très lents. Le plan est de créer des composants React à la place de ces plugins jQuery tiers et vérifier l'amélioration des performances.",
		competences: "HTML / CSS / Bootstrap / Javascript / React / React router / Redux / Redux persist / Jest / Cypress / LightHouse, Refondre une application pour réduire la dette technique, Programmer en JavaScript avec la programmation fonctionnelle, Déployer une application front-end, Analyser la performance d'une application web",
		development_topics: ["Front End Development"],
		stack: ["HTML", "CSS", "Javascript", "React", "Redux", "Git", "Github"],
		code_url: "https://github.com/MenAllen/PhilippeJoubard_P14_032022",
		demo_url: "https://shiny-heliotrope-e6108b.netlify.app/list",
		background: [
			`This project was a front-end challenge from Frontend Mentor. It’s a platform that 
      enables you to practice building websites to a design and project brief. Each challenge 
      includes mobile and desktop designs to show how the website should look at different 
      screen sizes. Creating these projects has helped me refine my workflow and solve 
      real-world coding problems. I’ve learned something new with each project, helping 
      me to improve and adapt my style.`,
		],
	},
	{
		slug: "moni",
		heroImage: "/images/portfolio/web-p7-second.webp",
		previewImage: "/images/portfolio/web-p7-second.webp",
		images: [
			{
				image: "/images/portfolio/web-p7-first.webp",
				title: "Connexion",
				description: "Authentification de l'utilisateur",
			},
			{
				image: "/images/portfolio/web-p7-second.webp",
				title: "Messages",
				description: "Messages reçus, formulaire d'envoi de messages",
			},
		],
		title: "Réseau social d'entreprise",
		short: "Projet du parcours de développement web Openclassrooms",
		description: "Le projet consiste à construire un réseau social interne pour les employés de Groupomania afin de faciliter les interactions entre collègues. Il faut: (1) Mettre en place le backend, le frontend et la base de données (mongoDB ou MySQL par exemple), (2) Coder en JavaScript en respecter les standards WCAG, (3) Utiliser un framework front-end JavaScript (React, Vue, Angular…) (4) Fournir un README avec le code, expliquant comment installer le site sur un nouveau poste",
		competences: "HTML / CSS / BootStrap / Javascript / VueJS / Axios / Express / bcrypt / mySQL / Sequelize, Créer une application web avec Vue.js, Authentifier un utilisateur et maintenir sa session, Personnaliser le contenu envoyé à un client web, Gérer un stockage de données à l'aide de SQL, Implémenter un stockage de données sécurisé en utilisant SQL",
		development_topics: ["Front End Development", "Back End Development", "API Rest", "Database"],
		stack: ["HTML", "CSS", "BootStrap", "Javascript", "VueJS", "Axios", "Express", "bcrypt", "MySQL", "Git", "Github"],
		code_url: "https://github.com/MenAllen/PhilippeJoubard_7_30032021",
		demo_url: "",
		background: [
			`This project was a front-end challenge from Frontend Mentor. It’s a platform that 
      enables you to practice building websites to a design and project brief. Each challenge 
      includes mobile and desktop designs to show how the website should look at different 
      screen sizes. Creating these projects has helped me refine my workflow and solve 
      real-world coding problems. I’ve learned something new with each project, helping 
      me to improve and adapt my style.`,
		],
	},
	{
		slug: "tula",
		heroImage: "/images/portfolio/web-p6-first.webp",
		previewImage: "/images/portfolio/web-p6-first.webp",
		images: [
			{
				image: "/images/portfolio/web-p6-second.webp",
				title: "Présentation",
				description: "Liste des sauces présentées",
			},
			{
				image: "/images/portfolio/web-p6-first.webp",
				title: "Ma sauce",
				description: "Ma sauce créée peut être modifiée, supprimée, likée",
			},
		],
		title: "API sécurisée",
		short: "Projet du parcours de développement web Openclassrooms",
		description: "Les sauces piquantes sont de plus en plus populaires, en grande partie grâce à la série YouTube « Hot Ones » . C’est pourquoi la marque de condiments à base de piment Piiquante, veut développer une application web de critique des sauces piquantes appelée « Hot Takes ». La première version est une « galerie de sauces » permettant aux utilisateurs de télécharger leurs sauces piquantes préférées et de liker ou disliker les sauces que d'autres partagent. Le front-end a été développé à l'aide d'Angular, mais un développeur back-end doit construire l'API à partir des spécifications fournies.",
		competences: "HTML / CSS / NodeJS / Express / MongoDB / API Rest / Bcrypt / Dotenv / Helmet / Joi / Mongoose / Multer, Découvrir Node.js, Express & MongoDB et les API Rest, Implémenter un modèle logique de données conformément à la réglementation, Mettre en œuvre des opérations CRUD de manière sécurisée (OWASP), Stocker des données de manière sécurisée",
		development_topics: ["Back End Development", "API Rest", "Database"],
		stack: ["HTML", "CSS", "BootStrap", "Javascript", "NodeJS", "Express", "bcrypt", "MongoDB", "Git", "Github"],
		code_url: "https://github.com/MenAllen/PhilippeJoubard_6_30032021",
		demo_url: "",
		background: [
			`This project was a front-end challenge from Frontend Mentor. It’s a platform that 
      enables you to practice building websites to a design and project brief. Each challenge 
      includes mobile and desktop designs to show how the website should look at different 
      screen sizes. Creating these projects has helped me refine my workflow and solve 
      real-world coding problems. I’ve learned something new with each project, helping 
      me to improve and adapt my style.`,
		],
	},
	{
		slug: "bako",
		heroImage: "/images/portfolio/web-p5-first.webp",
		previewImage: "/images/portfolio/web-p5-first.webp",
		images: [
			{
				image: "/images/portfolio/web-p5-first.webp",
				title: "Présentation",
				description: "affichage des articles reçus du serveur",
			},
			{
				image: "/images/portfolio/web-p5-second.jpg",
				title: "Mon Panier",
				description: "Pour lancer une commande",
			},
			{
				image: "/images/portfolio/web-p5-third.jpg",
				title: "API: Les échanges",
				description: "",
			},
			{
				image: "/images/portfolio/web-p5-fourth.jpg",
				title: "Les Tests",
				description: "",
			},
		],
		title: "Site e-commerce en Javascript",
		short: "Projet du parcours de développement web Openclassrooms",
		description: "Orinoco, une entreprise de commere en ligne doit réaliser un MVP de site e-commerce à présenter à ses investisseurs. Le Backend est disponible, il s'agit de développer la partie front-end selon les fonctionnalités fournies.",
		competences: "HTML / CSS / BootStrap / Javascript, Créer un plan de test pour une application, Interagir avec un web service avec JavaScript, Valider des données issues de sources externes, Gérer des événements JavaScript",
		development_topics: ["Front End Development", "API Rest"],
		stack: ["HTML", "CSS", "BootStrap", "Javascript", "Git", "Github"],
		code_url: "https://github.com/MenAllen/PhilippeJoubard_5_30032021",
		demo_url: "",
		background: [
			`This project was a front-end challenge from Frontend Mentor. It’s a platform that 
      enables you to practice building websites to a design and project brief. Each challenge 
      includes mobile and desktop designs to show how the website should look at different 
      screen sizes. Creating these projects has helped me refine my workflow and solve 
      real-world coding problems. I’ve learned something new with each project, helping 
      me to improve and adapt my style.`,
		],
	},
	{
		slug: "palo",
		heroImage: "/images/portfolio/web-p4-first.webp",
		previewImage: "/images/portfolio/web-p4-first.webp",
		images: [
			{
				image: "/images/portfolio/web-p4-first.webp",
				title: "Nos services",
				description: "Web design, Stratégies, Illustrations",
			},
			{
				image: "/images/portfolio/ChouetteAgence2.jpg",
				title: "Nos réalisations",
				description: "Quelques exemples",
			},
			{
				image: "/images/portfolio/ChouetteAgence3.jpg",
				title: "Contact",
				description: "Remplir le formulaire",
			},
		],
		title: "SEO: Optimiser un site web",
		short: "Projet du parcours de développement web Openclassrooms",
		description: "Le site de La Chouette Agence, agence de web design à Lyon apparaît seulement en deuxième page des moteurs de recherche pour “Entreprise web design Lyon”. Il faut analyser l’état actuel de SEO du site fourni et identifier les points d'amélioration, traiter ces points et vérifier les résultats obtenus",
		competences: "HTML / CSS / Bootstrap / Javascript / SEO, Rechercher les bonnes pratiques en développement web, Optimiser la taille et la vitesse d'un site web, Assurer l'accessibilité d'un site web, Écrire un code HTML et CSS maintenable, Optimiser le référencement d'un site web",
		development_topics: ["Front End Development", "Accessibilité"],
		stack: ["HTML", "CSS", "BootStrap", "Javascript", "Git", "Github"],
		code_url: "https://github.com/MenAllen/PhilippeJoubard_4_30032021",
		demo_url: "https://menallen.github.io/PhilippeJoubard_4_30032021",
		background: [
			`This project was a front-end challenge from Frontend Mentor. It’s a platform that 
      enables you to practice building websites to a design and project brief. Each challenge 
      includes mobile and desktop designs to show how the website should look at different 
      screen sizes. Creating these projects has helped me refine my workflow and solve 
      real-world coding problems. I’ve learned something new with each project, helping 
      me to improve and adapt my style.`,
		],
	},
	{
		slug: "kopa",
		heroImage: "/images/portfolio/web-p3-first.webp",
		previewImage: "/images/portfolio/web-p3-first.webp",
		images: [
			{
				image: "/images/portfolio/web-p3-first.webp",
				title: "Nos menus",
				description: "Effet d'ascenseur à l'affichage des plats",
			},
			{
				image: "/images/portfolio/ohmyfood3.jpg",
				title: "Nos restaurants",
				description: "coloration du coeur au passage de la souris",
			},
			{
				image: "/images/portfolio/ohmyfood4.jpg",
				title: "Loader",
				description: "Au changement de page",
			},
		],
		title: "Intégrer des animations CSS",
		short: "Projet du parcours de développement web Openclassrooms",
		description: "Ohmyfood! est une jeune startup qui voudrait s'imposer sur le marché de la restauration. L'objectif est de développer un site 100% mobile qui répertorie les menus de restaurants gastronomiques. En plus des systèmes classiques de réservation, les clients pourront composer le menu de leur repas pour que les plats soient prêts à leur arrivée. Finis, les temps d'attente au restaurant !",
		competences: "Mettre en place une structure de navigation pour un site web, Mettre en place son environnement Front-end, Utiliser un système de gestion de versions pour le suivi du projet et son hébergement, Simplifier le CSS avec Sass, Mettre en oeuvre des effets CSS graphiques avancés, Assurer la cohérence graphique d'un site web",
		development_topics: ["Front End Development", "Animations CSS"],
		stack: ["HTML", "CSS", "Sass", "Git", "Github"],
		code_url: "https://github.com/MenAllen/PhilippeJoubard_3_30032021",
		demo_url: "https://menallen.github.io/PhilippeJoubard_3_30032021",
		background: [
			`This project was a front-end challenge from Frontend Mentor. It’s a platform that 
      enables you to practice building websites to a design and project brief. Each challenge 
      includes mobile and desktop designs to show how the website should look at different 
      screen sizes. Creating these projects has helped me refine my workflow and solve 
      real-world coding problems. I’ve learned something new with each project, helping 
      me to improve and adapt my style.`,
		],
	},
	{
		slug: "peki",
		heroImage: "/images/portfolio/web-p2-first.webp",
		previewImage: "/images/portfolio/web-p2-first.webp",
		images: [
			{
				image: "/images/portfolio/reservia1.jpg",
				title: "Hébergements",
				description: "",
			},
			{
				image: "/images/portfolio/reservia1bis.jpg",
				title: "Hébergements",
				description: "Responsive",
			},
			{
				image: "/images/portfolio/reservia2.jpg",
				title: "Activités",
				description: "",
			},
			{
				image: "/images/portfolio/reservia2bis.jpg",
				title: "Activités",
				description: "Responsive",
			},
		],
		title: "De maquette à site web",
		short: "Projet du parcours de développement web Openclassrooms",
		description: "Il s'agit de réaliser un prototype d'intégration d'une page de site de reservation de logements à partir de maquettes desktop et mobile",
		competences: "Mettre en place son environnement Front-End, Développer un site web avec HTML5 et CSS3 validé par W3C, Utiliser un système de gestion de versions pour le suivi du projet et son hébergement, Implémenter une interface responsive, Intégrer du contenu conformément à une maquette",
		development_topics: ["Front End Development"],
		stack: ["HTML", "CSS", "Sass", "Git", "Github"],
		code_url: "https://github.com/MenAllen/PhilippeJoubard_2_30032021",
		demo_url: "https://menallen.github.io/PhilippeJoubard_2_30032021",
		background: [
			`This project was a front-end challenge from Frontend Mentor. It’s a platform that 
      enables you to practice building websites to a design and project brief. Each challenge 
      includes mobile and desktop designs to show how the website should look at different 
      screen sizes. Creating these projects has helped me refine my workflow and solve 
      real-world coding problems. I’ve learned something new with each project, helping 
      me to improve and adapt my style.`,
		],
	},
	{
		slug: "toka",
		heroImage: "/images/portfolio/projet-p4-first.webp",
		previewImage: "/images/portfolio/projet-p4-first.webp",
		images: [
			{
				image: "/images/portfolio/projet-p4-second.webp",
				title: "Architecture",
				description: "",
			},
			{
				image: "/images/portfolio/projet-p4-1.webp",
				title: "Déploiement",
				description: "De 0 à 500 000 en quelques mois",
			},
		],
		title: "Smart Metering",
		short: "Chef de projet solution smart metering SAGEMCOM",
		description: "FLUVIUS a sélectionné SAGEMCOM pour déployer 2 Millions de compteurs électriques et gaz intelligents en Flandre. La solution est constituée de l'AMM (Advanced Meter Management), du MDM (Meter Data Management), et du SAP en charge des utility process. L'AMM est développé par Sagemcom (suite SICONIA), et opéré par le Meter Operator IBM, partenaire de Sagemcom. Il est constitué du Head End System communiquant vers les compteurs, des interfaces avec MDMS, de la Public Key Infrastructure (PKI), et des services d'opérations utilisées par le Meter Operator. L'objectif (réalisé) est de déployer plus de 1500 compteurs par jour.",
		competences: "Spécifications : Je suis en charge de m'assurer de la mise à jour de ces documents tout au long du déroulement du projet: ajout de contenus ou modifications suite aux évolutions. Planning : La mise à jour du planning AMM par rapport au planning projet global est critique pour synchroniser les actions en interne et les tests contractuels que sont les SIT, UAT et E2E, Validation de l'interface Nb-IoT : Les tests ont pour but de valider l'interface Nb-IoT sur le réseau Proximus et se déroulent dans les labos de l'opérateur. Les phases d'enregistrement au réseau et d'établissement du protocole tcp sont analysées de près en raison des temps de latence élevés possibles. Le LTE-M est aussi testé car il fait partie des solutions en cas de saturation de capacité en Nb-IoT. Tests : Les tests SIT, UAT & E2E sont des jalons critiques dans le déroulement du projet. Je participe à la rédaction et la mise à jour du Master Plan définissant par phase les types de tests prévus et leurs objectifs. Je synchronise les phases de validation avec ce planning et précise les contours des tests à l'équipe de validation. Je participe aux tests SIT et interviens en support sur les tests UAT & E2E avec le client. JIRAs : Les tickets JIRAs sont créés lors des tests SIT, UAT & E2E, ainsi qu'à tout moment en Production. Pour chacun, j'effectue la première analyse pour confirmer le problème, auquel cas je transfère à l'équipe validation. Eventuellement un bugzilla sera créé vers l'équipe R&D concernée. Cette activité est critique pour la tenue du planning des tests ou le déploiement des compteurs en Production. Un état des JIRAs AMM est tenu à jour et disponible à tout moment pour le management et IBM. KPIs : L'AMM mémorise les données relatives à toutes transaction vers les compteurs: création, activation, commandes, collectes, alarmes. Ces données sont accessibles à tout moment via Elasticsearch pour le calcul des KPIs contractuels.Elles permettent également de remonter des informations globales pour l'ensemble du parc afin de détecter des dysfonctionnements éventuels.",
		development_topics: ["Project Management", "AGILE"],
		stack: ["Specifications", "Planning", "Nb-IoT", "SIT", "UAT", "E2E", "JIRA", "KPI"],
		code_url: "",
		demo_url: "",
		background: [
			`This project was a front-end challenge from Frontend Mentor. It’s a platform that 
      enables you to practice building websites to a design and project brief. Each challenge 
      includes mobile and desktop designs to show how the website should look at different 
      screen sizes. Creating these projects has helped me refine my workflow and solve 
      real-world coding problems. I’ve learned something new with each project, helping 
      me to improve and adapt my style.`,
		],
	},
	{
		slug: "bika",
		heroImage: "/images/portfolio/projet-p3-1.webp",
		previewImage: "/images/portfolio/projet-p3-1.webp",
		images: [
			{
				image: "/images/portfolio/DPS48.jpg",
				title: "Description du besoin",
				description: "",
			},
			{
				image: "/images/portfolio/projet-p3-bis.webp",
				title: "Spécifications",
				description: "",
			},
		],
		title: "Module de Surveillance tension connecté",
		short: "Chef de projet DUONS",
		description: "Le client TELMEX cherche à monitorer la tension d'alimentation de ses stations pour mieux comprendre les raisons des pannes. Il sollicite Duons pour prototyper un module intelligent capable de détecter toute perte d'alimentation et le signaler par message réseau au NOC. A la demande du service commercial, un cahier des charges est rédigé et soumis à TELMEX pour accord.",
		competences: "Analyse de faisabilité, Rédaction du cahier des charges en synchronisation avec TELMEX, Pilotage du choix de la solution technique: System On Module FlyPortPRO Ethernet, Constitution de l'équipe projet HW & SW, Livraison de 5 prototypes pour test à TELMEX",
		development_topics: ["Project Management"],
		stack: ["Specifications", "Planning", "Faisabilité", 'Hardware', 'Software'],
		code_url: "",
		demo_url: "",
		background: [
			`This project was a front-end challenge from Frontend Mentor. It’s a platform that 
      enables you to practice building websites to a design and project brief. Each challenge 
      includes mobile and desktop designs to show how the website should look at different 
      screen sizes. Creating these projects has helped me refine my workflow and solve 
      real-world coding problems. I’ve learned something new with each project, helping 
      me to improve and adapt my style.`,
		],
	},
	{
		slug: "tofy",
		heroImage: "/images/portfolio/projet-p2-first.webp",
		previewImage: "/images/portfolio/projet-p2-first.webp",
		images: [
			{
				image: "/images/portfolio/HCSR500-3.jpg",
				title: "Description",
				description: "",
			},
			{
				image: "/images/portfolio/HCSR500-2.jpg",
				title: "Architecture",
				description: "",
			},
			{
				image: "/images/portfolio/HCSR500-1.jpg",
				title: "Prototype",
				description: "",
			},
		],
		title: "Radio Haute Capacité",
		short: "Chef de projet DUONS",
		description: "Projet de Radio Haute Capacité (4 ans) La demande commerciale est d’augmenter le débit du lien radio de nos systèmes d'accès. Un démonstrateur est mis en service chez Duons après deux années de validation, et visité par les clients, L'étape d'industrialisation de la solution n'est cependant pas décidée",
		competences: "Analyse de faisabilité, Choix de la solution: architecture basée sur une pile wimax 802.16e customisée (sous-traitance) sur plateforme COTS, Constitution de la plateforme COTS et de l'équipe de test en charge de la validation des livraisons du sous-traitant, Suivi de l'avancement du projet et planification des démos client",
		development_topics: ["Project Management", "Wimax", "Intégration", "Sous-traitance"],
		stack: ["Specifications", "Planning", "Faisabilité", 'Hardware', 'Software'],
		code_url: "",
		demo_url: "",
		background: [
			`This project was a front-end challenge from Frontend Mentor. It’s a platform that 
      enables you to practice building websites to a design and project brief. Each challenge 
      includes mobile and desktop designs to show how the website should look at different 
      screen sizes. Creating these projects has helped me refine my workflow and solve 
      real-world coding problems. I’ve learned something new with each project, helping 
      me to improve and adapt my style.`,
		],
	},
	{
		slug: "romi",
		heroImage: "/images/portfolio/projet-p1-bis.webp",
		previewImage: "/images/portfolio/projet-p1-bis.webp",
		images: [
			{
				image: "/images/portfolio/LeasedLine1.jpg",
				title: "Architecture",
				description: "30 TS pour la voix et les data",
			},
			{
				image: "/images/portfolio/projet-p1-bis.webp",
				title: "Déploiement",
				description: "Site pilote Nouvelle Calédonie",
			},
		],
		title: "Fonction 'ligne louée' pour réseau SWING",
		short: "Chef de projet DUONS",
		description: "Le SWING est un système d'accès radio utilisé par les opérateurs pour le raccordement d'abonnés dans des lieux difficiles d'accès. Pour utiliser le SWING pour le raccordement de micro-BTS, le client OPT Polynésie a commandé une évolution pour ajouter la fonction de transport de type 'ligne louée' Nx64kbps. Au bout de 18 mois, le client valide la fonction qui intègre le produit standard pour être distribué aux autres clients",
		competences: "Rédaction des spécifications fonctionnelles à partir du cahier des charges commercial, Définition de la liste des tâches: développement des logiciels embarqué et de supervision, développement hardware, plateforme, tests, Constitution des équipes: développement et validation, Suivi de l'avancement du projet: spécifications détaillées, développement, tests, production",
		development_topics: ["Project Management"],
		stack: ["Specifications", "Planning", "Faisabilité", 'Hardware', 'Software'],
		code_url: "",
		demo_url: "",
		background: [
			`This project was a front-end challenge from Frontend Mentor. It’s a platform that 
      enables you to practice building websites to a design and project brief. Each challenge 
      includes mobile and desktop designs to show how the website should look at different 
      screen sizes. Creating these projects has helped me refine my workflow and solve 
      real-world coding problems. I’ve learned something new with each project, helping 
      me to improve and adapt my style.`,
		],
	},
	{
		slug: "neve",
		heroImage: "/images/portfolio/FM1000-1.jpg",
		previewImage: "/images/portfolio/FM1000-1.jpg",
		images: [
			{
				image: "/images/portfolio/emb-p1-2.webp",
				title: "Architecture",
				description: "30 TS pour la voix et les data",
			},
			{
				image: "/images/portfolio/emb-p1-second.webp",
				title: "Déploiement",
				description: "Site pilote Nouvelle Calédonie",
			},
		],
		title: "Développement logiciel embarqué",
		short: "Système trunk PMR TN100 de PHILIPS Paris",
		description: "Un système TN100 est composé d'une station centrale et de plusieurs stations distantes, chacune équipée d'un ou plusieurs emetteurs/recepteurs à la norme MPT1327. C'est un système radio à ressources partagées, c'est-à-dire que les canaux radio sont disponibles sur toutes les stations. Il permet des communications radiotéléphoniques entre terminaux mobiles sur la totalité des stations du réseau. Chaque station est un CP90 (machine 68000 dérivée du SM90) sous le moniteur temps réel RMS68K. Le logiciel des stations est constitué d'une dizaine de tâches temps réel en charge des abonnés, des appels, de l'allocation des ressources, de l'exploitation, de la défense système et de la maintenance des équipements.",
		competences: "Langages Pascal, ASM 8051 & Z80, Moniteur Temps réel RMS68K Motorola, Rédaction de spécifications détaillées de la gestion de flotte d'abonnés, Développement de la gestion de flotte d'abonnés et des scénarii de tests associés, Evolutions des tâches Traitement d'appels et gestion des ressources radio avec tests associés, Maintenance et évolution des logiciels assembleur des cartes coupleur à base de mircoprocesseurs Z80",
		development_topics: ["Embedded Software Development"],
		stack: ["Pascal", "VAX-VMS", "RMS68K", 'ASM Z80', 'ASM 68000'],
		code_url: "",
		demo_url: "",
		background: [
			`This project was a front-end challenge from Frontend Mentor. It’s a platform that 
      enables you to practice building websites to a design and project brief. Each challenge 
      includes mobile and desktop designs to show how the website should look at different 
      screen sizes. Creating these projects has helped me refine my workflow and solve 
      real-world coding problems. I’ve learned something new with each project, helping 
      me to improve and adapt my style.`,
		],
	},
	{
		slug: "ravi",
		heroImage: "/images/portfolio/emb-p2.webp",
		previewImage: "/images/portfolio/emb-p2.webp",
		images: [
			{
				image: "/images/portfolio/emb-p2-second.webp",
				title: "Radio disptacher",
				description: "Audio channel between PC & FM1000",
			},
			{
				image: "/images/portfolio/emb-p2-1.webp",
				title: "MPT1327 radio spy",
				description: "To debug the channel inside or outside",
			},
		],
		title: "Développement logiciel embarqué",
		short: "Système trunk PMR TN10X de PHILIPS Cambridge",
		description: "Terminaux et dispatcher radio: dans le cadre d'un programme interne de PHILIPS d'échange entre centres, j'ai l'opportunité de passer deux ans à Cambridge où sont développés les terminaux et le dispatcher radio pour le système trunk PMR TN10X.",
		competences: "Langages C, ASM 8051, SCO UNIX, Rédaction de spécifications en anglais pour la tâche traitement d'appel du dispatcher radio du TN10X, Développement et tests du traitement d'appel sur dispatcher radio, Développement, tests et maintenance de la fonction espion radio MPT1327 du récepteur TN10X",
		development_topics: ["Embedded Software Development"],
		stack: ["C", "SCO-UNIX", 'ASM 8051'],
		code_url: "",
		demo_url: "",
		background: [
			`This project was a front-end challenge from Frontend Mentor. It’s a platform that 
      enables you to practice building websites to a design and project brief. Each challenge 
      includes mobile and desktop designs to show how the website should look at different 
      screen sizes. Creating these projects has helped me refine my workflow and solve 
      real-world coding problems. I’ve learned something new with each project, helping 
      me to improve and adapt my style.`,
		],
	},
];
