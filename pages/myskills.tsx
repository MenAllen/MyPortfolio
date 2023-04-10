import React from "react";
import { SkillCard } from "../components/SkillCard/skillcard";
import { HeadComponent, Layout } from "../components/Layout/layout";
import { SideBar } from "../components/SideBar/sidebar";
import { InferGetStaticPropsType } from "next";
import { Skills } from "../data";

export async function getStaticProps() {
	return {
		props: {
			skills: Skills,
		},
	};
}

export default function Myskills({ skills }: InferGetStaticPropsType<typeof getStaticProps>) {
	/* Order elements by Type */
	const skillTypeTab = [
		"Langage",
		"Framework",
		"Outil",
		"CMS",
		"Bureautique",
		"Logiciel",
		"Système",
	];
	const len = skillTypeTab.length;

	return (
		<Layout>
			<HeadComponent title="Myskills" />

			<div className="h-1 h-20 mx-10 xl:max-w-screen-xl xl:mx-auto">
				<div className='bg-myBlue-400 rounded w-1/2'>
				<p className="text-sm sm:text-md text-center text-white font-bold">Technical skills</p>
				</div>
			</div>
			<SideBar />
			<section className="flex flex-wrap justify-around mx-8 md:mx-10 xl:max-w-screen-xl xl:mx-auto">

					{skills.map((skill, id) => (
						<SkillCard
							key={skill.slug}
							slug={skill.slug}
							logo={skill.logo}
							name={skill.name}
							level={skill.level}
							version={skill.version}
							type={skill.type}
						/>
					))}
			</section>

		</Layout>
	);
}
