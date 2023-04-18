import React from "react";
import Image from "next/image";
import Link from "next/link";

export const ProjectCard = ({
	direction,
	title,
	short,
	desc,
	imgURL,
	slug,
}: {
	direction: "right" | "left";
	title: string;
	short: string;
	desc: string;
	imgURL: string;
	slug: string;
}) => {
	return (
		<article className="overlay-image rounded border-2 border-myGrey-700 m-8">
			<Image className="" src={imgURL} alt="" height="300" width="450" />
			<div className="hover flex flex-col justify-center items-center absolute w-full h-full top-6 left-0 z-0 hover:-translate-y-6 transform-gpu ">
				<h2 className="text-md font-bold text-white mb-2 z-0 ">{title}</h2>
				<p className="text-xs text-center text-white mb-2 xl:max-w-sm z-0 ">{short}</p>
				<Link href={`/project/${slug}`}>
					<button className="border-myGrey-900 px-6 py-1 md:px-10  md:py-4 border uppercase text-xxs tracking-wider hover:bg-myGrey-900 text-white z-0">
						More
					</button>
				</Link>
			</div>
		</article>
	);
};
