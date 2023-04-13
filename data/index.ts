export type skillType = [string, string]

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
		version: '2',
		level: 3,
		type: 'language'
	},
	{
		slug: '2',
		logo: '/logos/html5.svg',
		name: 'HTML',
		version: '5',
		level: 3,
		type: 'language'
	},
	{
		slug: '3',
		logo: '/logos/css3.svg',
		name: 'CSS3',
		version: '3',
		level: 3,
		type: 'language'
	},
	{
		slug: '4',
		logo: '/logos/typescript.svg',
		name: 'Typescript',
		version: '2',
		level: 3,
		type: 'language'
	}
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

