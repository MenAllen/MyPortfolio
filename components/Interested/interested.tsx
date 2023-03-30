import Link from 'next/link'
import React from 'react'

export const Interested = () => {
	return (
		<div className='mx-8 md:mx-10 xl:max-w-screen-xl xl:mx-auto flex flex-col items-center justify-center md:flex-row mt-16 md:mt-20 mb-20 md:mb-24 xl:my-36'>
			<h2 className='text-lg font-serif font-bold md:w-1/2 xl:w-1/3 px-0 text-center xl:px-0  md:flex-shrink-0 mb-10 leading-tight '>
				Interested in doing a project together?
			</h2>
			{/* grey box divider */}
			<div className='bg-myGrey-300 w-full mx-6 hidden md:block' style={{ height: '1px' }}></div>
			<Link href='/contact'>
				<button className='border-myGrey-900 px-10 py-4 border uppercase text-xxs tracking-wider hover:bg-myGrey-900 hover:text-white transition-all flex-shrink-0'>Contact Me</button>
			</Link>
		</div>
	)
}
