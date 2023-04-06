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
		<section className="relative w-36 m-5 rounded border-2 border-myGrey-700 bg-myGrey-300">
			<div className="flex flex-col justify-center items-center mx-10 my-5">
				<div className="h-24">
					<Image src={logo} alt="skill logo" height="64" width="64" />
				</div>
				<h2 className="text-sm text-black font-bold mb-0">{name}</h2>
				<h2 className="normal-text mb-1">V {version}</h2>
			</div>
			<div className="flex flex-row justify-center mb-8">
					{ratingTab.map((elt, index) => (
						<Image key={index} src={elt} alt="skill level" height="16" width="16" />
					))}
				</div>
			<div className="absolute block w-full bg-myGreen-300 bottom-0">
				<p className="normal-text text-white text-center font-bold xl:max-w-sm">{type}</p>
			</div>
		</section>
	);
};
