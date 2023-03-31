import React from "react";
import Image from "next/image";
import { HeadComponent, Layout } from "../components/Layout/layout";
import Link from "next/link";
import { Interested } from "../components/Interested/interested";
import { DownArrowsSVG } from "../components/Icons/icons";

export default function Home() {
	const scrollToAbout = () => {
		window.scrollTo(0, 800);
	};

	return (
		<Layout>
			<HeadComponent title="Home" />

			{/* Hero */}
			<section className="mx-8 md:mx-10 xl:max-w-screen-xl xl:mx-auto mb-6">
				<div className="flex flex-col items-center justify-center">
					<Image
						className="md:hidden w-fill"
						src="/images/homepage/mobile/image-homepage-hero.jpg"
						width={311}
						height={271}
						alt=""
					/>
					<Image
						className="hidden md:block xl:hidden"
						src="/images/homepage/tablet/image-homepage-hero.jpg"
						width={688}
						height={600}
						alt=""
					/>
					<Image
						className="hidden xl:block"
						src="/images/homepage/desktop/image-homepage-hero.jpg"
						width={1110}
						height={600}
						alt=""
					/>
				</div>

				<div className="flex justify-between md:bottom-0 md:left-0 md:w-auto md:bg-white md:bg-opacity-50 ">
					<h1 className="text-lg font-serif font-bold md:py-2 leading-10 mb-2 ">
						Philippe, Développeur Web
					</h1>
					<Link href="/aboutme">
						<button
							className="text-xxs border uppercase text-white py-4 px-10 border-myBlue-700 bg-myBlue-700 hover:bg-myCyan-500 hover:border-myCyan-500 disabled:bg-myGrey-300 disabled:border-myGrey-300 transition-all text-myCyan-500 hover:text-myGrey-100"
							onClick={scrollToAbout}>
							<div className="flex justify-between items-center w-full">
								<div className="mr-10 ">
									<DownArrowsSVG></DownArrowsSVG>
								</div>
								<span className="text-myGrey-100">About Me</span>
							</div>
						</button>
					</Link>
				</div>
			</section>

			{/*<Interested></Interested> */}
		</Layout>
	);
}
