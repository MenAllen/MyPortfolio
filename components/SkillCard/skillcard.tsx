import React from "react";
import Image from "next/image";

export const SkillCard = ({
	logo,
	name,
	level,
	version,
	slug,
}: {
	logo: string;
	name: string;
	level: number;
	version: string;
	slug: string;
}) => {
	return (
		<section className="w-36 m-5 rounded border-2 border-myGrey-700 bg-myGrey-300">
			<div className="flex flex-col justify-center items-center mx-10 my-5">
				<div className="h-24">
					<Image src={logo} alt="skill logo" height="64" width="64" />
				</div>
				<h2 className="text-sm text-black font-bold mb-0">{name}</h2>
				<h2 className="normal-text mb-1">V {version}</h2>
				{/*				<p className='normal-text mb-2 xl:max-w-sm'>Level: {level}</p> */}
			</div>
		</section>
	);
};
