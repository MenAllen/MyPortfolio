import React from "react";
import Image from "next/image";
import { HeadComponent, Layout } from "../components/Layout/layout";
import { openSidebar, SideBar } from "../components/SideBar/sidebar";

export default function Portfolio() {
	return (
		<Layout>
			<HeadComponent title="Portfolio" />
			<SideBar />
			<section className="mx-8 md:mx-10 xl:max-w-screen-xl xl:mx-auto mb-6 ">
				<div className="flex flex-col items-center justify-center  relative">
					<Image
						className="md:hidden w-fill"
						src="/images/portfolio/portfolio2.webp"
						width={450}
						height={350}
						alt=""
					/>
					<Image
						className="hidden md:block xl:hidden"
						src="/images/portfolio/portfolio.webp"
						width={688}
						height={600}
						alt=""
					/>
					<Image
						className="hidden xl:block"
						src="/images/portfolio/portfolio.webp"
						width={1110}
						height={600}
						alt=""
					/>

					{/* 			<div className="absolute top-0 left-12 md:top-24 md:left-28 pb-12 mt-4 lg:left-20 max-w-xs xl:max-w-sm xl:py-12 md:mt-0"> */}
					<div className="md:absolute top-8 right-1/2 w-4/5 md:w-2/5">
						<h2 className="text-md md:text-lg font-serif font-bold mb-2 md:mb-6">Portfolio</h2>
						<p className="text-xxs font-sans leading-4 mb-2 md:text-xs md:leading-7 md:mb-6">
							Que ce soit comme consultant web, en formation chez Openclassrooms, comme développeur
							logiciel embarqué ou comme chef de projet, découvrez mes réalisations
						</p>
						<button
							className="border-myGrey-900 px-6 py-2 md:px-10 md:py-4 border uppercase text-xxs tracking-wider hover:bg-myGrey-900 hover:text-white transition-all"
							onClick={openSidebar}>
							More
						</button>
					</div>
				</div>
			</section>
		</Layout>
	);
}
