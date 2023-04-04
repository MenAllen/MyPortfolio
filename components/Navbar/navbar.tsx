import React, { useState } from 'react'
import { HamburgerSVG, LogoSVG } from '../Icons/icons'
import Link from 'next/link'

export const Navbar = () => {
	const [menu, toggleMenu] = useState(false)

	return (
		<header className='flex justify-between items-center py-8 mx-8 md:mx-10 xl:max-w-screen-xl xl:mx-auto'>
			<LogoSVG></LogoSVG>
			<div className='hidden md:flex justify-between w-5/12 xl:w-1/4 items-center uppercase text-xxs '>
				<Link href='/home'>
					<a className='hover:text-myCyan-500 hover:font-bold '>Home</a>
				</Link>
				<Link href='/aboutme'>
					<a className='hover:text-myCyan-500 hover:font-bold '>About me</a>
				</Link>
				<Link href='/portfolio'>
					<a className='hover:text-myCyan-500 hover:font-bold '>Portfolio</a>
				</Link>
				<Link href='/contact'>
					<a className='hover:text-myCyan-500 hover:font-bold '>Contact Me</a>
				</Link>
			</div>

			<div className='block md:hidden' onClick={() => toggleMenu(!menu)}>
				<HamburgerSVG></HamburgerSVG>
			</div>

			{menu && (
				<>
					<div className='absolute right-10 top-20 w-1/2 bg-myGrey-900 border-collapse z-50 md:hidden' onClick={() => toggleMenu(false)}>
						<Link href='/home'>
							<div className='py-6 border-b-4 border-myCyan-500 flex flex-col items-center justify-center cursor-pointer hover:bg-myGrey-700 hover:border-myGrey-700 uppercase text-white text-xxs font-sanslink-text'>Home</div>
						</Link>
						<Link href='/portfolio'>
							<div className='py-6 border-b-4 border-myCyan-500 flex flex-col items-center justify-center cursor-pointer hover:bg-myGrey-700 hover:border-myGrey-700 uppercase text-white text-xxs font-sans'>Portfolio</div>
						</Link>
						<Link href='/contact'>
							<div className='py-6 border-b-4 border-myCyan-500 flex flex-col items-center justify-center cursor-pointer hover:bg-myGrey-700 hover:border-myGrey-700 uppercase text-white text-xxs font-sans'>Contact Me</div>
						</Link>
					</div>
					{/* close overlay */}
					<div
						id='overlay'
						className='fixed w-screen h-screen top-0 left-0 bg-black bg-opacity-25 z-30'
						onClick={(e) => {
							toggleMenu(false)
						}}
					></div>
				</>
			)}
		</header>
	)
}