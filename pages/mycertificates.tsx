import React from "react";
import { CertifCard } from "../components/CertifCard/certifcard";
import { HeadComponent, Layout } from "../components/Layout/layout";
import { SideBar } from "../components/SideBar/sidebar";
import { InferGetStaticPropsType } from "next";
import { Certificates } from "../data";

export async function getStaticProps() {
	return {
		props: {
			certificates: Certificates,
		},
	};
}

export default function Mycertificates({ certificates }: InferGetStaticPropsType<typeof getStaticProps>) {
	/* Order elements by Type */
	const skillTypeTab = [
		"Langage",
		"Framework",
		"Outil",
		"CMS",
		"Bureautique",
		"Logiciel",
		"Système",
	];
	const len = skillTypeTab.length;

	return (
		<Layout>
			<HeadComponent title="myCertificates" />

			<div className="h-1 h-20 mx-10 xl:max-w-screen-xl xl:mx-auto">
				<div className='bg-myBlue-400 rounded w-4/5 lg:w-1/2'>
				<p className="text-sm sm:text-md text-center text-white font-bold">Diplômes / Certifications</p>
				</div>
			</div>
			<SideBar />
			<section className="flex flex-col flex-start pb-12 mx-8 md:mx-10 xl:max-w-screen-xl xl:mx-auto">

					{certificates.map((certificate, index) => (
						<CertifCard
							key={index}
              id={certificate.id}
              date={certificate.date}
							logo={certificate.logo}
							name={certificate.name}
							level={certificate.level}
							type={certificate.type}
						/>
					))}
			</section>
		</Layout>
	);
}
