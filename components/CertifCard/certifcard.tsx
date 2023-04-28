import React, { useState } from "react";
import Image from "next/image";
import { Button, Modal } from "antd";

export const CertifCard = ({
	id,
	logo,
	url,
	name,
	level,
	type,
	date,
	description,
}: {
	id: string;
	logo: string;
	url: string;
	name: string;
	level: string;
	type: string;
	date: string;
	description: string;
}) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	/*  const showDescription = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

		console.log("showDescription", type, openModal, setOpenModal, description, url)

		return (
		type === "diplôme" && <Modal
		display={openModal}
		setDisplay={setOpenModal}
		message={description}
		url={url}
	/>)
  } */

	const showModal = () => {
		console.log("showModal");
		setIsModalOpen(true);
	};

	const handleOk = () => {
		console.log("handleOk");
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		console.log("handleCancel");
		setIsModalOpen(false);
	};

	const toggleModal = () => {
		setIsModalOpen(!isModalOpen);
	};

	const showCertificate = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		return <embed className="embed-pdf" src={url} type="application/pdf" />;
	};

	return (
		<>
			<article
				id="visible"
				className="cursor-pointer max-h-36 w-2/5 mb-10 mr-3 rounded-md border-2 border-myGrey-700 shadow-xl bg-myGrey-300 relative overflow-hidden"
				onClick={showModal}>
				<div className="flex flex-col justify-center items-center mx-2 my-2 ">
					<div className="h-12">
						<Image src={logo} alt="certificate logo" height="64" width="96" />
					</div>
					<h2 className="text-xxxs md:text-sm text-black text-center font-bold mb-0">{name}</h2>
					<p className="text-xxxs md:text-sm text-center mb-1">
						{date} {level}
					</p>
				</div>
				{/*			<a href={url} target='_blank' className="absolute top-3 -left-1 py-0.5 px-8 bg-myGreen-300 -ml-10 w-36 transform -rotate-45 text-xxs text-white text-center xl:max-w-sm">
				{type}
	</a> */}
			</article>
			<Modal title={name} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={1000} className="modalStyle">
				<div className="text-white text-xs">
					<p className="mb-2">{description}</p>
					<a className="font-bold" href={url} target="_blank">
						Voir le {type}
					</a>
				</div>
			</Modal>
		</>
	);
};
