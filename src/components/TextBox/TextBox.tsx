import React from "react";
import Btn from "../Btn/Btn";

type Props = {
	title: string;
	text: string;
	link: string;
};

export default function TextBox({ title, text, link }: Props) {
	return (
		<div className="mt-10 flex max-md:flex-col shadow bg-white max-md:text-center gap-4 items-center justify-between border border-gray-300 py-5 px-4 rounded-lg">
			<div>
				<h2 className="font-dana-bold tracking-tight">{title}</h2>
				<p className="font-dana-regular text-sm text-gray-400 mt-2">{text}</p>
			</div>
			<Btn
				className={"bg-gray-800 text-white"}
				text={"مشاهده همه"}
				link={link}
			/>
		</div>
	);
}
