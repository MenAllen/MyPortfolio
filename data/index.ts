export type skillType = [string, string]

/* ============================================================================ */
/*                                 SKILLS DATA                                  */
/* ============================================================================ */

export const skillsArray: skillType[] = [
	['HTML', '/logos/html5.svg'],
	['CSS3', '/logos/css3.svg'],
	['Javascript', '/logos/javascript.svg'],
	['Typescript', '/logos/typescript.svg'],
	['ReactJS', '/logos/react-2.svg'],
]

export interface SkillData {
	slug: string
	logo: string
	name: string
	version: string
	level: number
	type: string
}

export const Skills: SkillData[] = [
	{
		slug: '1',
		logo: '/logos/javascript.svg',
		name: 'Javascript',
		version: 'V13',
		level: 3,
		type: 'language'
	},
	{
		slug: '2',
		logo: '/logos/html5.svg',
		name: 'HTML',
		version: 'V5',
		level: 3,
		type: 'language'
	},
	{
		slug: '3',
		logo: '/logos/css3.svg',
		name: 'CSS3',
		version: 'V3',
		level: 3,
		type: 'language'
	},
	{
		slug: '4',
		logo: '/logos/typescript.svg',
		name: 'Typescript',
		version: 'V5',
		level: 3,
		type: 'language'
	},
	{
		slug: '5',
		logo: '/logos/bootstrap-fill.svg',
		name: 'Bootstrap',
		version: 'V5',
		level: 3,
		type: 'framework'
	},
	{
		slug: '6',
		logo: '/logos/sass.svg',
		name: 'Sass',
		version: 'V1',
		level: 3,
		type: 'preproc'
	},
	{
		slug: '7',
		logo: '/logos/react.svg',
		name: 'React',
		version: 'V18',
		level: 3,
		type: 'framework'
	},
	{
		slug: '8',
		logo: '/logos/next-js.svg',
		name: 'NextJS',
		version: 'V13',
		level: 3,
		type: 'framework'
	},
	{
		slug: '9',
		logo: '/logos/nodejs.svg',
		name: 'NodeJS',
		version: 'V18',
		level: 3,
		type: 'outil'
	},
	{
		slug: '10',
		logo: '/logos/figma.svg',
		name: 'Figma',
		version: 'V2',
		level: 3,
		type: 'outil'
	},
	{
		slug: '11',
		logo: '/logos/jira.svg',
		name: 'Jira',
		version: 'V8',
		level: 3,
		type: 'outil'
	},
	{
		slug: '12',
		logo: '/logos/windows.svg',
		name: 'Windows',
		version: 'V10',
		level: 3,
		type: 'système'
	},
	{
		slug: '13',
		logo: '/logos/linux.svg',
		name: 'Linux',
		version: 'V22',
		level: 3,
		type: 'système'
	},
	{
		slug: '14',
		logo: '/logos/c.svg',
		name: 'C',
		version: 'V2',
		level: 3,
		type: 'language'
	},
	{
		slug: '15',
		logo: '/logos/cypress.svg',
		name: 'Cypress',
		version: 'V12',
		level: 3,
		type: 'outil'
	},
	{
		slug: '16',
		logo: '/logos/vue.svg',
		name: 'Vue',
		version: 'V3',
		level: 3,
		type: 'framework'
	},
	{
		slug: '17',
		logo: '/logos/redux.svg',
		name: 'Redux',
		version: 'V4',
		level: 3,
		type: 'outil'
	},
	{
		slug: '18',
		logo: '/logos/express.svg',
		name: 'Express',
		version: 'V4',
		level: 3,
		type: 'framework'
	},
	{
		slug: '19',
		logo: '/logos/git.svg',
		name: 'Git',
		version: 'V2',
		level: 3,
		type: 'outil'
	},
	{
		slug: '20',
		logo: '/logos/jest.svg',
		name: 'Jest',
		version: 'V29',
		level: 3,
		type: 'outil'
	},
	{
		slug: '21',
		logo: '/logos/postman.svg',
		name: 'Postman',
		version: 'V10',
		level: 3,
		type: 'outil'
	},
	{
		slug: '22',
		logo: '/logos/mysql.svg',
		name: 'MySQL',
		version: 'V7',
		level: 3,
		type: 'language'
	},
	{
		slug: '23',
		logo: '/logos/rest-api.svg',
		name: 'REST',
		version: '-',
		level: 3,
		type: 'protocole'
	},
	{
		slug: '24',
		logo: '/logos/http.svg',
		name: 'HTTP',
		version: 'V3',
		level: 3,
		type: 'protocole'
	},
	{
		slug: '25',
		logo: '/logos/scrum.svg',
		name: 'Scrum',
		version: '-',
		level: 3,
		type: 'framework'
	},
	{
		slug: '26',
		logo: '/logos/sequelizejs.svg',
		name: 'Sequelize',
		version: 'V6',
		level: 3,
		type: 'outil'
	},
]

/* ============================================================================ */
/*                        DIPLOMA & CERTIFICATIONS DATA                         */
/* ============================================================================ */
export interface CertificatesData {
	id: string
	logo: string
	url: string
	name: string
	date: string
	type: string
	level: string
	description: string
}

export const Certificates: CertificatesData[] = [
	{
		id: '1',
		logo: '/logos/openclassrooms.jpg',
		url: '/pdf/Diplome2-OC-min.pdf',
		name: 'Développeur concepteur logiciel',
		date: '06/03/2023',
		type: 'diplôme',
		level: 'Titre 6 RNCP',
		description: 'Le parcours développeur d\'applications Javascript-React (11mois) inclus la réalisation et la soutenance de 14 projets professionnalisants réalisés en autonomie et soutenus devant un jury. Parmi les projets:\r\n - Choisir une solution technique adaptée et travailler en mode Agile\r\n - Créer des applications web dynamiques avec Javascript et React\r\n - Communiquer avec le back-end de l’application grâce à une API\r\n - Mettre en œuvre des test unitaires et d\’intégration et débugger le code\r\n - Résoudre des problèmes techniques avec un langage de programmation et des algorithmes\r\nCompétences acquises: ReactJS, Redux/Toolkit, Design Patterns, SEO, Cypress, Jest, JSDoc, Agile (scrum)',
	},
	{
		id: '2',
		logo: '/logos/openclassrooms.jpg',
		url: '/pdf/Diplome1-OC-min.pdf',
		name: 'Développeur web',
		date: '03/12/2021',
		type: 'diplôme',
		level: 'Titre 5 RNCP',
		description: 'Le parcours développeur web (7mois) inclus la soutenance de 7 projets professionnalisants soutenus devant un jury.\r\n - Transformer une maquette en site web avec HTML et CSS\r\n - Utiliser des animations CSS pour dynamiser une page web\r\n - Optimiser un site web pour le SEO\r\n - Construire un site e-commerce en Javascript (Frontend)\r\n - Construire une API sécurisée (Backend)\r\n - Réaliser un réseau social d’entreprise (Backend & Frontend)\r\nCompétences : HTML5 · Git · MongoDB · API REST · Node.js · Site web réactif · Bootstrap · SQL',
	},
	{
		id: '3',
		logo: '/logos/cisco.png',
		url: '/logos/cisco.png',
		name: 'CCNA / CCNP Routing & Switching',
		date: '03/12/2021',
		type: 'diplôme',
		level: 'Titre 5 RNCP',
		description: 'La certification CCNA Routing and Switching atteste l\'acquisition des connaissances sur les technologies réseau de base. Le détenteur d\'une certification CCNA pourra occuper les postes suivants : Ingénieur d\'assistance téléphonique, Technicien sur site, Ingénieur système ou Intégrateur système de niveau 1\r\n\r\nLa certification Cisco CCNP Routing & Switching (R&S) atteste les connaissances requises pour les ingénieurs réseau amenés à planifier, implémenter, vérifier et dépanner les réseaux d’entreprise locaux et étendus. Le détenteur d\'une certification CCNP R&S pourra occuper les postes suivants : consultant réseau, ingénieur support, ingénieur réseau, intégrateur système.',
	},
	{
		id: '4',
		logo: '/logos/eseo.jpg',
		url: '/pdf/Inge-ESEO-min.pdf',
		name: 'Ingénieur ESEO',
		date: '22/06/1984',
		type: 'diplôme',
		level: 'BAC+5',
		description: 'Ingénieur Généraliste de l\'électronqiue, du numérique et des nouvelles technologies\r\n\r\nLe cycle ingénieur ESEO forme des ingénieurs généralistes des Nouvelles Technologies maîtrisant à la fois le numérique et l’électronique, offrant une grande polyvalence pour des carrières dans tous les secteurs. Durant ces 3 années de cycle ingénieur, les étudiants ESEO choisissent le parcours de formation qui leur correspond et construisent petit à petit le projet professionnel qui les anime.',
	},
	{
		id: '5',
		logo: '/logos/openclassrooms.jpg',
		url: '/pdf/Accessibilité-min.pdf',
		name: 'Concevez un contenu web accessible',
		date: '28/06/2021',
		type: 'certificat',
		level: '',
		description: '',
	},
	{
		id: '6',
		logo: '/logos/openclassrooms.jpg',
		url: '/pdf/Algorithmes-min.pdf',
		name: 'Découvrez le fonctionnement des algorithmes',
		date: '14/05/2022',
		type: 'certificat',
		level: '',
		description: '',
	},
	{
		id: '7',
		logo: '/logos/openclassrooms.jpg',
		url: '/pdf/AnimationsCSS-min.pdf',
		name: 'Créez des animations CSS modernes',
		date: '25/05/2021',
		type: 'certificat',
		level: '',
		description: '',
	},
	{
		id: '8',
		logo: '/logos/openclassrooms.jpg',
		url: '/pdf/APIRest-min.pdf',
		name: 'Adoptez des API Rest pour vos projets web',
		date: '31/08/2021',
		type: 'certificat',
		level: '',
		description: '',
	},
	{
		id: '9',
		logo: '/logos/openclassrooms.jpg',
		url: '/pdf/BDDSQL-min.pdf',
		name: 'Administrez vos bases de données avec mySQL',
		date: '24/09/2021',
		type: 'certificat',
		level: '',
		description: '',
	},
	{
		id: '10',
		logo: '/logos/openclassrooms.jpg',
		url: '/pdf/Bootstrap-min.pdf',
		name: 'Créez des sites web responsive avec Bootstrap',
		date: '24/09/2021',
		type: 'certificat',
		level: '',
		description: '',
	},
	{
		id: '11',
		logo: '/logos/openclassrooms.jpg',
		url: '/pdf/CCF-min.pdf',
		name: 'Réalisez un cahier des charges fonctionnel',
		date: '08/07/2022',
		type: 'certificat',
		level: '',
		description: '',
	},
	{
		id: '12',
		logo: '/logos/openclassrooms.jpg',
		url: '/pdf/Figma-min.pdf',
		name: 'Créez une maquette web avec Figma',
		date: '15/07/2022',
		type: 'certificat',
		level: '',
		description: '',
	},
	{
		id: '13',
		logo: '/logos/openclassrooms.jpg',
		url: '/pdf/CreerProjetInformatique-min.pdf',
		name: 'Gérez votre projet informatique facilement',
		date: '07/07/2022',
		type: 'certificat',
		level: '',
		description: '',
	},
	{
		id: '14',
		logo: '/logos/openclassrooms.jpg',
		url: '/pdf/SASS-min.pdf',
		name: 'Simplifiez vous le CSS avec SASS',
		date: '19/05/2021',
		type: 'certificat',
		level: '',
		description: '',
	},
	{
		id: '15',
		logo: '/logos/openclassrooms.jpg',
		url: '/pdf/DDD-min.pdf',
		name: 'Appliquez le principe du Domain-Driven Design à votre application',
		date: '15/07/2022',
		type: 'certificat',
		level: '',
		description: '',
	},
	{
		id: '16',
		logo: '/logos/openclassrooms.jpg',
		url: '/pdf/Debugger-min.pdf',
		name: 'Déboguez l’interface de votre site internet',
		date: '16/06/2022',
		type: 'certificat',
		level: '',
		description: '',
	},
	{
		id: '17',
		logo: '/logos/openclassrooms.jpg',
		url: '/pdf/DReact-min.pdf',
		name: 'Débutez avec React',
		date: '18/08/2022',
		type: 'certificat',
		level: '',
		description: '',
	},
	{
		id: '18',
		logo: '/logos/openclassrooms.jpg',
		url: '/pdf/Découvrez-TypeScript-min.pdf',
		name: 'Découvrez TypeScript',
		date: '22/03/2023',
		type: 'certificat',
		level: '',
		description: '',
	},
	{
		id: '19',
		logo: '/logos/openclassrooms.jpg',
		url: '/pdf/Debugger-min.pdf',
		name: 'Déboguez l’interface de votre site internet',
		date: '16/06/2022',
		type: 'certificat',
		level: '',
		description: '',
	},
	{
		id: '20',
		logo: '/logos/openclassrooms.jpg',
		url: '/pdf/DT-min.pdf',
		name: 'Ecrivez la documentation technique de votre projet',
		date: '09/10/2022',
		type: 'certificat',
		level: '',
		description: '',
	},
	{
		id: '21',
		logo: '/logos/openclassrooms.jpg',
		url: '/pdf/DReact-min.pdf',
		name: 'Débutez avec React',
		date: '18/08/2022',
		type: 'certificat',
		level: '',
		description: '',
	},
	{
		id: '22',
		logo: '/logos/openclassrooms.jpg',
		url: '/pdf/Fullstack-min.pdf',
		name: 'Passez au Full Stack avec NodeJS, Express et MongoDB',
		date: '27/08/2021',
		type: 'certificat',
		level: '',
		description: '',
	},
	{
		id: '23',
		logo: '/logos/openclassrooms.jpg',
		url: '/pdf/GPA-min.pdf',
		name: 'Initiez vous à la gestion de projet Agile',
		date: '07/07/2022',
		type: 'certificat',
		level: '',
		description: '',
	},
	{
		id: '24',
		logo: '/logos/openclassrooms.jpg',
		url: '/pdf/IntégrerMaquette-min.pdf',
		name: 'Découpez et Intégrez une maquette',
		date: '',
		type: 'certificat',
		level: '',
		description: '',
	},
	{
		id: '25',
		logo: '/logos/openclassrooms.jpg',
		url: '/pdf/Javascript-min.pdf',
		name: 'Apprenez à programmer avec Javascript',
		date: '16/07/2021',
		type: 'certificat',
		level: '',
		description: '',
	},
	{
		id: '26',
		logo: '/logos/openclassrooms.jpg',
		url: '/pdf/OWASP-min.pdf',
		name: 'Sécurisez vos applications avec l\'OWASP',
		date: '29/08/2021',
		type: 'certificat',
		level: '',
		description: '',
	},
	{
		id: '27',
		logo: '/logos/openclassrooms.jpg',
		url: '/pdf/PerformancesSites-min.pdf',
		name: 'Optimisez le référencement de votre site (SEO) par les	performances',
		date: '23/06/2021',
		type: 'certificat',
		level: '',
		description: '',
	},
	{
		id: '28',
		logo: '/logos/openclassrooms.jpg',
		url: '/pdf/Redux-min.pdf',
		name: 'Utilisez Redux pour gérer l\'état de vos apps',
		date: '07/11/2022',
		type: 'certificat',
		level: '',
		description: '',
	},
	{
		id: '29',
		logo: '/logos/openclassrooms.jpg',
		url: '/pdf/SiteWebAccessible-min.pdf',
		name: 'Codez un site web accessible avec HTML et CSS',
		date: '06/04/2023',
		type: 'certificat',
		level: '',
		description: '',
	},
	{
		id: '30',
		logo: '/logos/openclassrooms.jpg',
		url: '/pdf/SiteWebHTMLCSS-min.pdf',
		name: 'Créez votre site web avec HTML et CSS',
		date: '22/04/2021',
		type: 'certificat',
		level: '',
		description: '',
	},
	{
		id: '31',
		logo: '/logos/openclassrooms.jpg',
		url: '/pdf/StateManager-Redux-min.pdf',
		name: 'Utilisez le state manager Redux pour l\'état de vos applications',
		date: '07/11/2022',
		type: 'certificat',
		level: '',
		description: '',
	},
	{
		id: '32',
		logo: '/logos/openclassrooms.jpg',
		url: '/pdf/TesterAppFrontEndAvecJavascript-min.pdf',
		name: 'Testez vos applications Frontend avec Javascript',
		date: '20/06/2022',
		type: 'certificat',
		level: '',
		description: '',
	},
	{
		id: '33',
		logo: '/logos/openclassrooms.jpg',
		url: '/pdf/VeilleInformationnelle-min.pdf',
		name: 'Mettez en place une veille informationnelle',
		date: '02/04/2021',
		type: 'certificat',
		level: '',
		description: '',
	},
	{
		id: '34',
		logo: '/logos/openclassrooms.jpg',
		url: '/pdf/VueJS-min.pdf',
		name: 'Créez une application web avec VueJS',
		date: '05/10/2022',
		type: 'certificat',
		level: '',
		description: '',
	},
]

/* ========================================================================================= */

export interface ProjectData {
	slug: string
	heroImage: string
	previewImage: string
	images: {image:string, title: string, description: string}[]
	title: string
	short: string
	description: string
	competences: string
	development_topics: string[]
	stack: string[]
	code_url: string
	demo_url: string
	background: string[]
}

export const Projects: ProjectData[] = [
	{
		slug: 'manage',
		heroImage: '/images/portfolio/web-loceane.webp',
		previewImage: '/images/portfolio/web-loceane.webp',
		images: [ {
			image: '/images/portfolio/web-loceane.webp',
			title: 'Landing page',
			description: 'Le menu avec la vue principale du village et son port'},
			{
				image: '/images/portfolio/web-loceane1.jpg',
				title: 'Le carrousel',
				description: 'Un clic sur la landing page amène au carrousel qui permet de visiter l\'intérieur'},
				{
					image: '/images/portfolio/web-loceane2.jpg',
					title: 'Page A Propos',
					description: 'la page qui renseigne sur les visites et activités possibles'},
				],
		title: 'L\'Océane',
		short: 'Un site vitrine pour présenter un bien immobilier à la location saisonnière',
		description: 'La demande était de créer rapidement une landing page présentant un extérieur du bien immobilier,	de visualiser l"intérieur dans un carrousel et enfin un menu "A propos" décrivant l"environnement avec les possibilités d"activité',
		competences: 'Pour cela, j"ai utilisé HTML5, CSS Flexbox, JavaScript & ReactJS: Configuration des routes avec React Router, 8 Composants React: Header, Footer, Banner, Card, Carrousel, Dropdown, Error, Pitch, et Utilisation des hooks useState & useEffect',
		development_topics: ['Front End Development'],
		stack: ['HTML', 'CSS3', 'Javascript', 'ReactJS'],
		code_url: 'https://github.com/MenAllen/loceane',
		demo_url: 'https://scintillating-froyo-b45427.netlify.app/',
		background: [			`This project was a front-end  challenge from Frontend Mentor. It’s a platform that 
      enables you to practice building websites to a design and project brief. Each challenge 
      includes mobile and desktop designs to show how the website should look at different 
      screen sizes. Creating these projects has helped me refine my workflow and solve 
      real-world coding problems. I’ve learned something new with each project, helping 
      me to improve and adapt my style.`,
		],
	},
	{
		slug: 'toto',
		heroImage: '/images/portfolio/web-loceane.webp',
		previewImage: '/images/portfolio/web-loceane.webp',
		images: [ {
			image: '/images/portfolio/web-loceane.webp',
			title: 'Landing page',
			description: 'Le menu avec la vue principale du village et son port'},
			{
				image: '/images/portfolio/web-loceane1.jpg',
				title: 'Le carrousel',
				description: 'Un clic sur la landing page amène au carrousel qui permet de visiter l\'intérieur'},
				{
					image: '/images/portfolio/web-loceane2.jpg',
					title: 'Page A Propos',
					description: 'la page qui renseigne sur les visites et activités possibles'},
				],
		title: 'L\'Océane',
		short: 'Un site vitrine pour présenter un bien immobilier à la location saisonnière',
		description: 'La demande était de créer rapidement une landing page présentant un extérieur du bien immobilier,	de visualiser l"intérieur dans un carrousel et enfin un menu "A propos" décrivant l"environnement avec les possibilités d"activité',
		competences: 'Pour cela, j"ai utilisé HTML5, CSS Flexbox, JavaScript & ReactJS: Configuration des routes avec React Router, 8 Composants React: Header, Footer, Banner, Card, Carrousel, Dropdown, Error, Pitch, et Utilisation des hooks useState & useEffect',
		development_topics: ['Front End Development'],
		stack: ['HTML', 'CSS3', 'Javascript', 'ReactJS'],
		code_url: 'https://github.com/MenAllen/loceane',
		demo_url: 'https://scintillating-froyo-b45427.netlify.app/',
		background: [			`This project was a front-end  challenge from Frontend Mentor. It’s a platform that 
      enables you to practice building websites to a design and project brief. Each challenge 
      includes mobile and desktop designs to show how the website should look at different 
      screen sizes. Creating these projects has helped me refine my workflow and solve 
      real-world coding problems. I’ve learned something new with each project, helping 
      me to improve and adapt my style.`,
		],
	},
	{
		slug: 'bagou',
		heroImage: '/images/portfolio/web-loceane.webp',
		previewImage: '/images/portfolio/web-loceane.webp',
		images: [ {
			image: '/images/portfolio/web-loceane.webp',
			title: 'Landing page',
			description: 'Le menu avec la vue principale du village et son port'},
			{
				image: '/images/portfolio/web-loceane1.jpg',
				title: 'Le carrousel',
				description: 'Un clic sur la landing page amène au carrousel qui permet de visiter l\'intérieur'},
				{
					image: '/images/portfolio/web-loceane2.jpg',
					title: 'Page A Propos',
					description: 'la page qui renseigne sur les visites et activités possibles'},
				],
		title: 'L\'Océane',
		short: 'Un site vitrine pour présenter un bien immobilier à la location saisonnière',
		description: 'La demande était de créer rapidement une landing page présentant un extérieur du bien immobilier,	de visualiser l"intérieur dans un carrousel et enfin un menu "A propos" décrivant l"environnement avec les possibilités d"activité',
		competences: 'Pour cela, j"ai utilisé HTML5, CSS Flexbox, JavaScript & ReactJS: Configuration des routes avec React Router, 8 Composants React: Header, Footer, Banner, Card, Carrousel, Dropdown, Error, Pitch, et Utilisation des hooks useState & useEffect',
		development_topics: ['Front End Development'],
		stack: ['HTML', 'CSS3', 'Javascript', 'ReactJS'],
		code_url: 'https://github.com/MenAllen/loceane',
		demo_url: 'https://scintillating-froyo-b45427.netlify.app/',
		background: [			`This project was a front-end  challenge from Frontend Mentor. It’s a platform that 
      enables you to practice building websites to a design and project brief. Each challenge 
      includes mobile and desktop designs to show how the website should look at different 
      screen sizes. Creating these projects has helped me refine my workflow and solve 
      real-world coding problems. I’ve learned something new with each project, helping 
      me to improve and adapt my style.`,
		],
	},
]

