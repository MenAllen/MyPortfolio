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
	name: string
	date: string
	type: string
	level: string
}

export const Certificates: CertificatesData[] = [
	{
		id: '1',
		logo: '/logos/openclassrooms.jpg',
		name: 'Développeur concepteur logiciel',
		date: '06/03/2023',
		type: 'diplôme',
		level: 'Titre 6 RNCP'
	},
	{
		id: '2',
		logo: '/logos/openclassrooms.jpg',
		name: 'Développeur web',
		date: '03/12/2021',
		type: 'diplôme',
		level: 'Titre 5 RNCP'
	},
	{
		id: '3',
		logo: '/logos/cisco.png',
		name: 'CCNA / CCNP Routing & Switching',
		date: '03/12/2021',
		type: 'diplôme',
		level: 'Titre 5 RNCP'
	},
	{
		id: '4',
		logo: '/logos/eseo.jpg',
		name: 'Ingénieur ESEO',
		date: '22/06/1984',
		type: 'diplôme',
		level: 'BAC+5'
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

