import Link from 'next/link'
import React from 'react'
import { LogoSVG } from '../Icons/icons'
import SocialLinks from '../SocialLinks/sociallinks'

export const Footer = () => {
	return (
		<footer className='absolute -bottom-10 bg-myGrey-900 py-2 mt-4 w-full'>
			<div className='mx-4 md:mx-10 xl:max-w-screen-xl xl:mx-auto flex flex-row items-center justify-center md:flex-row md:justify-between'>
				<div className='flex md:flex-row w-full '>
					<div className='hidden sm:flex flex-col items-center justify-center mb-0 md:mr-8 '>
						<LogoSVG fillColor='#fff'></LogoSVG>
					</div>
				</div>
				<SocialLinks fillColor='#fff'></SocialLinks>
			</div>
		</footer>
	)
}
