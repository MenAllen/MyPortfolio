import React from 'react'
import SocialLinks from '../components/SocialLinks/sociallinks'
import ContactForm from '../components/ContactForm/contactform'
import { HeadComponent, Layout } from '../components/Layout/layout'

export default function Contact() {
	return (
		<Layout>
			<HeadComponent title='Contact Me'></HeadComponent>
			{/* Get in touch */}
			<section className='mx-8 md:mx-10 xl:max-w-screen-xl xl:mx-auto section-border-y-grey py-8 xl:py-10 mt-2 md:mt-12 mb-8 xl:flex'>
				<h2 className='text-lg font-serif font-bold mb-6 xl:w-5/12'>Get in Touch</h2>
				<div className='xl:w-7/12'>
					<p className='text-xs font-sans leading-7 mb-6'>
						I’d love to hear about what you’re working on and how I could help. I’m a hard-working and positive person who
						will always approach each task with a sense of purpose and attention to detail. Please
						do feel free to check out my online profiles below and get in touch using the form.
					</p>
					<SocialLinks fillColor='#33323D'></SocialLinks>
				</div>
			</section>

			<ContactForm></ContactForm>
		</Layout>
	)
}
