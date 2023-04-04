import Link from "next/link";
import React from "react";
import Image from "next/image";
import {
	LinkedinSVG,
	GithubSVG,
	ChevronDownSVG,
	CloseXSVG,
	BriefCaseSVG,
	SliderSVG,
	TvSVG,
	GraduateSVG,
  FilterLeftSVG
} from "../Icons/icons";


export const SideBar = (): React.ReactElement => {
	function dropdown() {
		if (typeof document !== "undefined") {
			const eltsubmenu = document.querySelector("#submenu");
			const eltarrow = document.querySelector("#arrow");
			if (eltsubmenu !== null) {
				eltsubmenu.classList.toggle("hidden");
			}
			if (eltarrow !== null) {
				eltarrow.classList.toggle("rotate-0");
			}
		}
	}

	dropdown();

  function openSidebar() {
    if (typeof document !== "undefined") {
      const eltsidebar = document.querySelector(".sidebar");
      if (eltsidebar !== null) {
        eltsidebar.classList.toggle("hidden");
      }
    }
  }
  
	return (
		<>
			<span
				className="absolute top-4/12 text-white text-4xl top-5 left-4 cursor-pointer"
				onClick={openSidebar}>
        <FilterLeftSVG></FilterLeftSVG>
			</span>
			<div className="sidebar lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900">
				<div className="text-gray-100 text-xl">
					<div className="p-2.5 mt-1 flex items-center">
						{/*          <Image
						className="w-fill rounded"
						src="/public/images/PJ7.jpg"
						width={24}
						height={24}
						alt=""
					/>
						<i className="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600" /> */}
						<h1 className="text-gray-200 text-[15px] ml-3">Philippe Joubard Développeur Web</h1>
						<div className="cursor-pointer" onClick={openSidebar}>
							<CloseXSVG></CloseXSVG>
						</div>
					</div>
					<div className="my-2 bg-gray-600 h-[1px]"></div>
				</div>
				<div className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white">
					<i className="bi bi-search text-sm" />
					<input
						type="text"
						placeholder="Search"
						className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
					/>
				</div>
				<Link href="/curriculumv">
					<div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
						<BriefCaseSVG></BriefCaseSVG>
						<span className="text-[15px] ml-4 text-gray-200">Curriculum Vitae</span>
					</div>
				</Link>
				<div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
					<SliderSVG></SliderSVG>
					<span className="text-[15px] ml-4 text-gray-200">Technical Skills</span>
				</div>
				<div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
					<GraduateSVG></GraduateSVG>
					<span className="text-[15px] ml-4 text-gray-200">Certifications</span>
				</div>
				<div className="my-4 bg-gray-600 h-[1px]"></div>
				<div
					className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
					onClick={dropdown}>
					<i className="bi bi-chat-left-text-fill" />
					<div className="flex justify-between w-full items-center">
						<span className="text-[15px] ml-4 text-gray-200">Projects</span>
						<span className="text-sm rotate-180" id="arrow">
							<TvSVG></TvSVG>
						</span>
					</div>
				</div>
				<div className="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200" id="submenu">
					<h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">Social</h1>
					<h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">Personal</h1>
					<h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">Friends</h1>
				</div>
				<div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
					<TvSVG></TvSVG>
					<span className="text-[15px] ml-4 text-gray-200">Projects</span>
				</div>
				<div className="my-4 bg-gray-600 h-[1px]"></div>
				<div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
					<LinkedinSVG></LinkedinSVG>
					<span className="text-[15px] ml-4 text-gray-200">LinkedIn</span>
				</div>
				<div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
					<GithubSVG></GithubSVG>
					<span className="text-[15px] ml-4 text-gray-200">Github</span>
				</div>
			</div>

			{/*    <script type="text/javascript">
      function dropdown() {
        document.querySelector("#submenu").classNameList.toggle("hidden");
        document.querySelector("#arrow").classNameList.toggle("rotate-0");
      }
      dropdown();

      function openSidebar() {
        document.querySelector(".sidebar").classNameList.toggle("hidden");
      }
    </script>
    */}
		</>
	);
};
