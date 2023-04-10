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
	images: string[]
	title: string
	short: string
	description: string
	development_topics: string[]
	stack: string[]
	code_url?: string
	demo_url?: string
	background: string[]
}

export const Projects: ProjectData[] = [
	{
		slug: 'manage',
		heroImage: '/images/portfolio/web-loceane.webp',
		previewImage: '/images/portfolio/web-loceane.webp',
		images: [
			'/images/detail/desktop/image-manage-preview-1@2x.jpg',
			'/images/detail/desktop/image-manage-preview-2@2x.jpg',
		],
		title: "L'Océane",
		short: 'Un site statique pour présenter un bien immobilier à la location saisonnière',
		description: "La demande était de créer rapidement une landing page présentant un extérieur du bien immobilier, de visualiser l'intérieur du bien dans un carrousel et enfin un menu 'à propos' décrivant l'environnement avec les possibilités d'activité. Pour cela, j'ai utilisé HTML5, CSS Flexbox, JavaScript & ReactJS",
		development_topics: ['Front End Development'],
		stack: ['HTML', 'CSS', 'JS', 'ReactJS'],
		code_url: '',
		demo_url: '',
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
		slug: 'toto',
		heroImage: '/images/portfolio/web-loceane.webp',
		previewImage: '/images/portfolio/web-loceane.webp',
		images: [
			'/images/detail/desktop/image-manage-preview-1@2x.jpg',
			'/images/detail/desktop/image-manage-preview-2@2x.jpg',
		],
		title: "L'Océane",
		short: 'Un site statique pour présenter un bien immobilier à la location saisonnière',
		description: "La demande était de créer rapidement une landing page présentant un extérieur du bien immobilier, de visualiser l'intérieur du bien dans un carrousel et enfin un menu 'à propos' décrivant l'environnement avec les possibilités d'activité. Pour cela, j'ai utilisé HTML5, CSS Flexbox, JavaScript & ReactJS",
		development_topics: ['Front End Development'],
		stack: ['HTML', 'CSS', 'JS', 'ReactJS'],
		code_url: '',
		demo_url: '',
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
		slug: 'ragou',
		heroImage: '/images/portfolio/web-loceane.webp',
		previewImage: '/images/portfolio/web-loceane.webp',
		images: [
			'/images/detail/desktop/image-manage-preview-1@2x.jpg',
			'/images/detail/desktop/image-manage-preview-2@2x.jpg',
		],
		title: "L'Océane",
		short: 'Un site statique pour présenter un bien immobilier à la location saisonnière',
		description: "La demande était de créer rapidement une landing page présentant un extérieur du bien immobilier, de visualiser l'intérieur du bien dans un carrousel et enfin un menu 'à propos' décrivant l'environnement avec les possibilités d'activité. Pour cela, j'ai utilisé HTML5, CSS Flexbox, JavaScript & ReactJS",
		development_topics: ['Front End Development'],
		stack: ['HTML', 'CSS', 'JS', 'ReactJS'],
		code_url: '',
		demo_url: '',
		background: [
			`This project was a front-end  challenge from Frontend Mentor. It’s a platform that 
      enables you to practice building websites to a design and project brief. Each challenge 
      includes mobile and desktop designs to show how the website should look at different 
      screen sizes. Creating these projects has helped me refine my workflow and solve 
      real-world coding problems. I’ve learned something new with each project, helping 
      me to improve and adapt my style.`,
		],
	}
]

