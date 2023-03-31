import Head from 'next/head'
import { Navbar } from '../../components/Navbar/navbar'
import { Footer } from '../../components/Footer/footer'
import { ReactElement, ReactNode } from 'react'

export const Layout = ({ children }: { children: ReactNode }): ReactElement => {
	return (
		<div className='relative'>
			<Navbar></Navbar>
			<main>{children}</main>
			<Footer></Footer>
		</div>
	)
}

export const HeadComponent = ({ title }: { title: string }) => {
	return (
		<Head>
			<title>{title}</title>
			<link rel='icon' href='/images/favicon-32x32.png' />
		</Head>
	)
}