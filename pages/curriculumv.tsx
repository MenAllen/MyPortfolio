import React, {useEffect} from "react";
import Image from "next/image";
import { HeadComponent, Layout } from "../components/Layout/layout";
import { openSidebar, SideBar } from "../components/SideBar/sidebar"
import Link from "next/link";

export default function CurriculumV() {

	useEffect(() => {
    openSidebar('aboutme');
  }, []);

	return (
		<Layout>
			<HeadComponent title="CV" />
			<section className="my-8 mx-8 md:mx-10 xl:max-w-screen-xl xl:mx-auto md:flex ">
			<SideBar />		
				<embed className="embed-pdf" src="pdf/philippejoubard.pdf" type="application/pdf"/>
			</section>
		</Layout>
	);
}
