import React from "react";
import Image from "next/image";
import { HeadComponent, Layout } from "../components/Layout/layout";
import { openSidebar, SideBar } from "../components/SideBar/sidebar";

export default function Portfolio() {
	return (
		<Layout>
			<HeadComponent title="Portfolio" />
			<SideBar></SideBar>

			<section className="mx-8 md:mx-10 xl:max-w-screen-xl xl:mx-auto mb-6 relative">
				<div className="flex flex-col items-center justify-center">
					<Image
						className="md:hidden w-fill"
						src="/images/portfolio/portfolio.webp"
						width={450}
						height={380}
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
				</div>
				<div className="absolute top-36 left-56 pt-8 pb-12 mt-8 md:w-7/12 xl:w-1/2 md:ml-16 xl:mx-auto xl:max-w-sm xl:py-12 md:mt-0">
					<h2 className="text-lg font-serif font-bold mb-6">Portfolio</h2>
					<p className="text-xs font-sans leading-7 mb-6">
						Que ce soit comme consultant web, en formation chez Openclassrooms, comme développeur
						logiciel embarqué ou comme chef de projet, découvrez mes réalisations
					</p>
					<button
						className="border-myGrey-900 px-10 py-4 border uppercase text-xxs tracking-wider hover:bg-myGrey-900 hover:text-white transition-all"
						onClick={openSidebar}>
						More
					</button>
				</div>
			</section>
		</Layout>
	);
}
