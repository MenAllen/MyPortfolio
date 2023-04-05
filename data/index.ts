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
