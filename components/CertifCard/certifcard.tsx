import React from "react";
import Image from "next/image";

export const CertifCard = ({
	id,
	logo,
	name,
	level,
	type,
	date,
}: {
	id: string;
	logo: string;
	name: string;
	level: string;
	type: string;
	date: string;
}) => {
	return (
		<div className="flex flex-row">
			<article id="visible" className="w-2/5 mb-10 mr-3 rounded-md border-2 border-myGrey-700 shadow-xl bg-myGrey-300 relative overflow-hidden">
				<div className="flex flex-col justify-center items-center mx-2 my-2">
					<div className="h-12">
						<Image src={logo} alt="certificate logo" height="64" width="96" />
					</div>
					<h2 className="text-xxxs md:text-sm text-black text-center font-bold mb-0">{name}</h2>
					<p className="text-xxxs md:text-sm text-center mb-1">
						{date} {level}
					</p>
				</div>
				<p className="absolute top-3 -left-1 py-0.5 px-8 bg-myGreen-300 -ml-10 w-36 transform -rotate-45 text-xxs text-white text-center xl:max-w-sm">
					{type}
				</p>
				{/*			<div id="additional" className="opacity-0 flex flex-col justify-center items-center w-full h-full transition transform ease-in-out delay-150 hover:scale-150 hover:opacity-100 transform-gpu ">Texte à compléter</div> */}
			</article>

			<article id="hidden" className="w-3/5 mb-10 rounded-md border-2 border-myGrey-700 shadow-xl bg-myGrey-300">
				<div className="w-full h-full text-white bg-myBlue-200">
					Texte à compléter
				</div>
			</article>
		</div>
	);
};
