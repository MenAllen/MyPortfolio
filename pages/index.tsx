import Head from 'next/head'
import Home from './home'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

import React from 'react'

export default function Index() {
	return <Home></Home>
}