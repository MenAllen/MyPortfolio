import React from 'react'
import { SkillCard } from '../components/SkillCard/skillcard'
import { HeadComponent, Layout } from '../components/Layout/layout'
import { SideBar } from '../components/SideBar/sidebar'
import { InferGetStaticPropsType } from 'next'
import { Skills } from '../data'

export async function getStaticProps() {
	return {
		props: {
			skills: Skills,
		},
	}
}

export default function Myskills({skills}: InferGetStaticPropsType<typeof getStaticProps>) {
 
	/* Order elements by Type */
	const skillTypeTab = ['Langage', 'Framework', 'Outil', 'CMS', 'Bureautique', 'Logiciel', 'Système'];
	const len = skillTypeTab.length;

	return (
		<Layout>
			<HeadComponent title='Myskills' />
			{/* 8px spacer */}
			<div className='h-1 md:h-10'></div>
			<section className="flex flex-wrap justify-around mx-8 md:mx-10 xl:max-w-screen-xl xl:mx-auto">
				<SideBar/>
			{skills.map((skill, id) => (
				<SkillCard
					key={skill.slug}
					slug={skill.slug}
					logo={skill.logo}
					name={skill.name}
					level={skill.level}
					version={skill.version}
				/>
				)
			)}
			</section>
		</Layout>
	)
}
