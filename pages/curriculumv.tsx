import React from "react";
import Image from "next/image";
import { HeadComponent, Layout } from "../components/Layout/layout";
import Link from "next/link";

export default function CurriculumV() {
	return (
		<Layout>
			<HeadComponent title="CV" />
			<section className="my-8 mx-8 md:mx-10 xl:max-w-screen-xl xl:mx-auto md:flex ">
				<embed className="embed-pdf" src="pdf/philippejoubard.pdf" type="application/pdf"></embed>
			</section>
		</Layout>
	);
}
