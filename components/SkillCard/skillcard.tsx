import React from "react";
import Image from "next/image";

export const SkillCard = ({
	logo,
	name,
	level,
	version,
	type,
	slug,
}: {
	logo: string;
	name: string;
	level: number;
	version: string;
	type: string;
	slug: string;
}) => {
	/* rating tab initialisation */
	const ratingTab = [];
	for (let i = 0; i < 5; i++) {
		ratingTab.push(i < level ? "./logos/starfill.svg" : "./logos/star.svg");
	}


	return (
		<article className="w-32 m-2 rounded border-2 border-myGrey-700 bg-myGrey-300 overflow-hidden">
			<div className="flex flex-col justify-center items-center mx-12 my-5">
				<div className="h-12">
					<Image src={logo} alt="skill logo" height="96" width="96" />
				</div>
				<h2 className="text-sm text-black font-bold mb-0">{name}</h2>
				<h2 className="normal-text mb-1">{version}</h2>
			</div>
			<div className="flex flex-row justify-center mb-2">
				{ratingTab.map((elt, index) => (
					<Image key={index} src={elt} alt="skill level" height="16" width="16" />
				))}
			</div>
				<p className="absolute top-3 -left-1 py-0.5 px-8 bg-myGreen-300 -ml-10 w-36 transform -rotate-45 text-xxs text-white text-center xl:max-w-sm">{type}</p>
		</article>
	);
};
