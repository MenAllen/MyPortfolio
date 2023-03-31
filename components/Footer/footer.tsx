import Link from 'next/link'
import React from 'react'
import { LogoSVG } from '../Icons/icons'
import SocialLinks from '../SocialLinks/sociallinks'

export const Footer = () => {
	return (
		<footer className='bg-myGrey-900 py-2 absolute bottom-0 w-full'>
			<div className='mx-4 md:mx-10 xl:max-w-screen-xl xl:mx-auto flex flex-row items-center justify-center md:flex-row md:justify-between'>
				<div className='flex md:flex-row w-full '>
					<div className='hidden sm:flex flex-col items-center justify-center mb-0 md:mr-8 '>
						<LogoSVG fillColor='#fff'></LogoSVG>
					</div>
					<div className='flex flex-row items-center justify-around md:flex-row justify-center text-white uppercase font-sans text-xxs '>
						<Link href='/home'>
							<a className='mb-0 mr-4 md:mr-8 xl:mr-10 hover:text-myCyan-500 hover:font-bold'>
								Home
							</a>
						</Link>
						<Link href='/portfolio'>
							<a className='mb-0 mr-4 md:mr-8 xl:mr-10 hover:text-myCyan-500 hover:font-bold'>
								Portfolio
							</a>
						</Link>
						<Link href='/contact'>
							<a className='hover:text-myCyan-500 hover:font-bold'>Contact Me</a>
						</Link>
					</div>
				</div>
				<SocialLinks fillColor='#fff'></SocialLinks>
			</div>
		</footer>
	)
}
