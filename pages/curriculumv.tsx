import React from "react";
import { HeadComponent, Layout } from "../components/Layout/layout";
import { SideBar } from "../components/SideBar/sidebar"


export default function CurriculumV() {

	return (
		<Layout>
			<HeadComponent title="CV" />
			<section className="pb-12 my-8 mx-8 md:mx-10 xl:max-w-screen-xl xl:mx-auto md:flex ">
			<SideBar />		
				<embed className="embed-pdf" src="pdf/philippejoubard.pdf" type="application/pdf"/>
			</section>
		</Layout>
	);
}
