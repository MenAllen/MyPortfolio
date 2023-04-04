import React from "react";
import Image from "next/image";
import { HeadComponent, Layout } from "../components/Layout/layout";
import { openSidebar, SideBar } from "../components/SideBar/sidebar"
import Link from 'next/link';

export default function Aboutme() {

	return (
		<Layout>
			<HeadComponent title="Aboutme" />	
			{/* About me */}
			<section className="mx-8 md:mx-10 xl:max-w-screen-xl xl:mx-auto md:flex ">
			<SideBar></SideBar>		
				<div className="md:w-5/12 xl:w-1/2 flex-shrink-0 flex flex-col items-center justify-center">			
					<Image
						className="md:hidden w-fill"
						src="/images/homepage/mobile/image-homepage-profile.jpg"
						width={311}
						height={346}
						alt=""
					/>
					<Image
						className="hidden md:block xl:hidden"
						src="/images/homepage/tablet/image-homepage-profile.jpg"
						width={281}
						height={600}
						alt=""
					/>
					<Image
						className="hidden xl:block"
						src="/images/homepage/desktop/image-homepage-profile.jpg"
						width={505}
						height={600}
						alt=""
					/>
				</div>
				<div className="border-t border-b border-myGrey-300 pt-8 pb-12 mt-8 md:w-7/12 xl:w-1/2 md:ml-16 xl:mx-auto xl:max-w-sm xl:py-12 md:mt-0">
					<h2 className="text-lg font-serif font-bold mb-6">About Me</h2>
					<p className="text-xs font-sans leading-7 mb-6">
						I’m a junior front-end developer looking for a new role in an exciting company. I focus
						on writing accessible HTML, using modern CSS practices and writing clean JavaScript.
						When writing JavaScript code, I mostly use React with Next, but I can adapt to whatever tools are
						required. I’m based in Paris, but I’m happy working remotely and have experience in
						remote teams. When I’m not coding, you’ll find me outdoors going for a walk, run or cycling 
            in my beautiful area.I’d love you to check out my work.
					</p>
					<Link href="/aboutme">
						<button className="border-myGrey-900 px-10 py-4 border uppercase text-xxs tracking-wider hover:bg-myGrey-900 hover:text-white transition-all" onClick={openSidebar}>
							More
						</button>
					</Link>
				</div>
			</section>
		</Layout>
	);
}
