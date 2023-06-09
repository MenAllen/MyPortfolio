import React from 'react'

import { Carrousel } from '../../components/Carrousel/carrousel'
import { ProjectDetails } from '../../components/ProjectDetails/projectdetails'
import { ProjectContent } from '../../components/ProjectContent/projectcontent'
import { Navigation } from '../../components/Navigation/navigation'
import { HeadComponent, Layout } from '../../components/Layout/layout'

import { Projects } from '../../data'
import { InferGetStaticPropsType } from 'next'

export async function getStaticPaths() {
	const paths = Projects.map((project) => ({
		params: { slug: project.slug },
	}))

	return { paths, fallback: false }
}

export async function getStaticProps({ params }: any) {
  
	const data = Projects.find((project) => project.slug === params.slug)
	const index = Projects.findIndex((project) => project.slug === params.slug)
	const total = Projects.length - 1

	const previousIdx = index - 1 > -1 ? index - 1 : total
	const nextIdx = index + 1 > total ? 0 : index + 1

  return {
		props: {
			data: Projects[index] || null,
			previous: Projects[previousIdx] || null,
			next: Projects[nextIdx] || null,
		},
	}
}

export default function Project({
	data,
	previous,
	next,
}: InferGetStaticPropsType<typeof getStaticProps>) {

	return (
		<Layout>
			<HeadComponent title={data.title} />
			<Carrousel images={data.images}></Carrousel>
			<section className='mx-8 md:mx-10 xl:max-w-screen-xl xl:mx-auto xl:flex xl:items-start'>
				<ProjectDetails
					title={data.title}
					description={data.description}
					competences={data.competences}
					topics={data.development_topics}
					stack={data.stack}
					codeURL={data.code_url}
					demoURL={data.demo_url}
				></ProjectDetails>
{/*				<ProjectContent images={data.images} background={data.background}></ProjectContent> */}
			</section>
			<Navigation previous={previous} next={next}></Navigation>
		</Layout>
	)
}