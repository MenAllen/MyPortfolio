import Link from "next/link";
import React from "react";
import { skillType, skillsArray } from "../../data";
import Image from "next/image";

export const ProjectDetails = ({
	title,
	description,
	competences,
	topics,
	stack,
	codeURL,
	demoURL,
}: {
	title: string;
	description: string;
	competences: string;
	topics: string[];
	stack: string[];
	codeURL: string;
	demoURL: string;
}) => {

	// Build an array of logos 
	let stackArray: skillType[] = [];
	skillsArray.map((elt, id) => {
		for (const element of stack) {
			if (elt.includes(element)) {
				stackArray.push(elt);
			}
		}
	});

	return (
		<div className="border-t border-b border-myGrey-300 py-6 xl:py-12 xl:mr-auto">
			<h2 className="text-lg font-serif font-bold text-center inline-block md:mb-0 xl:mb-6 ">
				{title}
			</h2>
			<div className="flex flex-wrap" >
			<p className="text-xs font-sans leading-7 md:w-1/2 md:px-6 xl:float-none xl:pl-0 xl:w-full ">
				<strong>Description : </strong>
				{description}
			</p>
			<p className="text-xs font-sans leading-7 md:w-1/2 md:px-6 xl:float-none xl:pl-0 xl:w-full ">
				<strong>Compétences : </strong>
				{competences}
			</p>
			</div>
			<div className="flex flex-wrap justify-between my-4 rounded-xl bg-myGrey-700">
				{stackArray.map((elt, index) => (
					<div key={index}>
						<Image className="h-20 m-4" src={elt[1]} alt="skill level" height="64" width="64" />
						<p className="text-xs text-myGrey-900 text-center font-sans leading-8 xl:leading-10  font-bold">
							{elt[0]}
						</p>
					</div>
				))}
			</div>

			<Link href={demoURL} target="_blank">
				<button className="border-myGrey-900 px-10 py-4 border uppercase text-xxs tracking-wider hover:bg-myGrey-900 hover:text-white transition-all">
					View Demo
				</button>
			</Link>
			<Link href={codeURL} target="_blank">
				<button className="text-xxs border uppercase text-white py-4 px-10 border-myBlue-700 bg-myBlue-700 hover:bg-myCyan-500 hover:border-myCyan-500 disabled:bg-myGrey-300 disabled:border-myGrey-300 transition-all">
					View Code
				</button>
			</Link>
		</div>
	);
};
