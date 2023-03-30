import React from 'react'
import Image from 'next/image';
import { HeadComponent, Layout } from '../components/Layout/layout'
import { Interested } from '../components/Interested/interested'
import { DownArrowsSVG } from '../components/Icons/icons'
import Link from 'next/link'

export default function Home() {
	const scrollToAbout = () => {
		window.scrollTo(0, 800)
	}

	return (
		<Layout>
			<HeadComponent title='Home' />

			{/* Hero */}
			<section className='mx-8 md:mx-10 xl:max-w-screen-xl xl:mx-auto relative mb-24'>
				<div className='mb-6 mt-2 xl:mt-6 flex flex-col items-center justify-center'>
					<Image
						className='md:hidden w-fill'
						src='/images/homepage/mobile/image-homepage-hero.jpg'
						width={311}
						height={271}
						alt=''
					/>
					<Image
						className='hidden md:block xl:hidden'
						src='/images/homepage/tablet/image-homepage-hero.jpg'
						width={688}
						height={600}
						alt=''
					/>
					<Image
						className='hidden xl:block'
						src='/images/homepage/desktop/image-homepage-hero.jpg'
						width={1110}
						height={600}
						alt=''
					/>
				</div>

				<div className='block relative md:absolute md:bottom-0 md:left-0 md:w-9/12 md:bg-white lg:w-7/12 xl:w-4/12'>
					<h1 className='text-lg font-serif font-bold md:max-w-md md:py-12 leading-10 mb-8 '>
						Hey, I’m Alex Spencer and I love building cool websites.
					</h1>
					<button
						className='text-xxs border uppercase text-white py-4 px-10 border-myBlue-700 bg-myBlue-700 hover:bg-myCyan-500 hover:border-myCyan-500 disabled:bg-myGrey-300 disabled:border-myGrey-300 transition-all text-myCyan-500 hover:text-myGrey-100'
						onClick={scrollToAbout}
					>
						<div className='flex justify-between items-center w-full'>
							<div className='mr-10 '>
								<DownArrowsSVG></DownArrowsSVG>
							</div>
							<span className='text-myGrey-100'>About Me</span>
						</div>
					</button>
				</div>
			</section>

			{/* About me */}
			<section className='mx-8 md:mx-10 xl:max-w-screen-xl xl:mx-auto md:flex '>
				<div className='md:w-5/12 xl:w-1/2 flex-shrink-0 flex flex-col items-center justify-center  '>
					<Image
						className='md:hidden w-fill'
						src='/images/homepage/mobile/image-homepage-profile.jpg'
						width={311}
						height={346}
						alt=''
					/>
					<Image
						className='hidden md:block xl:hidden'
						src='/images/homepage/tablet/image-homepage-profile.jpg'
						width={281}
						height={600}
						alt=''
					/>
					<Image
						className='hidden xl:block'
						src='/images/homepage/desktop/image-homepage-profile.jpg'
						width={540}
						height={600}
						alt=''
					/>
				</div>
				<div className='border-t border-b border-myGrey-300 pt-8 pb-12 mt-8 md:w-7/12 xl:w-1/2 md:ml-16 xl:mx-auto xl:max-w-sm xl:py-12 md:mt-0'>
					<h2 className='text-lg font-serif font-bold mb-6'>About Me</h2>
					<p className='text-xs font-sans leading-7 mb-6'>
						I’m a junior front-end developer looking for a new role in an exciting company. I focus
						on writing accessible HTML, using modern CSS practices and writing clean JavaScript.
						When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are
						required. I’m based in London, UK, but I’m happy working remotely and have experience in
						remote teams. When I’m not coding, you’ll find me outdoors. I love being out in nature
						whether that’s going for a walk, run or cycling. I’d love you to check out my work.
					</p>
					<Link href='/portfolio'>
						<button className='border-myGrey-900 px-10 py-4 border uppercase text-xxs tracking-wider hover:bg-myGrey-900 hover:text-white transition-all'>Go To Portfolio</button>
					</Link>
				</div>
			</section>

			<Interested></Interested>
		</Layout>
	)
}
