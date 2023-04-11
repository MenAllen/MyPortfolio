import React from 'react'
import Image from 'next/image'


export const ProjectHero = ({ imgURL }: { imgURL: string }) => {
	return (
		<section className='mx-8 md:mx-10 xl:max-w-screen-xl xl:mx-auto pt-0 md:pt-16 pb-10 xl:pb-24 '>
			<Image src={imgURL} alt='' height='500' width='1110' />
		</section>
	)
}
