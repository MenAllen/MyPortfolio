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
			<section className="mx-8 md:mx-10 xl:max-w-screen-xl xl:mx-auto mb-6 relative">
				<div className="flex flex-col items-center justify-center">
					<Image
						className="md:hidden w-fill"
						src="/images/homepage/mobile/image-homepage-hero.jpg"
						width={450}
						height={380}
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

				<div className="flex flex-wrap absolute bottom-0 left-1/2 bg-white bg-opacity-0">
				<Link href="/myprofile">
					<h1 className="cursor-pointer text-sm md:text-md xl:text-xl font-serif font-bold md:py-2 mb-2 self-end">
						Philippe, Développeur Web
					</h1>
					</Link>
				</div>
			</section>

			{/*<Interested></Interested> */}
		</Layout>
	);
}
