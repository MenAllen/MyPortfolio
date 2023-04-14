import React, {useEffect} from "react";
import { ProjectCard } from "../components/ProjectCard/projetcard";
import { HeadComponent, Layout } from "../components/Layout/layout";
import { openSidebar, SideBar } from "../components/SideBar/sidebar";

import { InferGetStaticPropsType } from "next";
import { Projects } from "../data";

export async function getStaticProps() {
	return {
		props: {
			projects: Projects,
		},
	};
}

export default function Portfolio({ projects }: InferGetStaticPropsType<typeof getStaticProps>) {

	useEffect(() => {
    openSidebar('aboutme');
  }, []);

	return (
		<Layout>
			<HeadComponent title="Portfolio"></HeadComponent>
			<div className="h-1 h-20 mx-10 xl:max-w-screen-xl xl:mx-auto">
				<div className='bg-myBlue-400 rounded w-1/2'>
				<p className="text-sm sm:text-md text-center text-white font-bold">Mes projets</p>
				</div>
			</div>
      <SideBar/>
			<section className="flex flex-wrap justify-around mx-8 md:mx-10 xl:max-w-screen-xl xl:mx-auto">
				{projects.map((project, idx) => (
					<ProjectCard
						key={project.slug}
						direction={idx % 2 === 0 ? "left" : "right"}
						imgURL={project.previewImage}
						title={project.title}
						short={project.short}
						desc={project.description}
						slug={project.slug}></ProjectCard>
				))}
			</section>
		</Layout>
	);
}
