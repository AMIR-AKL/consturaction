import React from "react";
import TitleElementor from "../TitleElementor/TitleElementor";
import CityMenu from "../CityMenu/CityMenu";

export default function Location() {
	return (
		<section
			dir="rtl"
			className="mt-20 bg-state py-10 text-white flex flex-col items-center"
		>
			<TitleElementor
				headtitle={"LOCATION"}
				maintitle={"پروژه های انجام شده گروه ما"}
			/>
			<CityMenu />
		</section>
	);
}
