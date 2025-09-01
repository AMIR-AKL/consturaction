import React from "react";

type Props = {
	title: string;
	text: string;
	src: string;
};

export default function BoxServices({ title, text, src }: Props) {
	return (
		<div className="border border-gray-300 hover:bg-amber-300 transition-colors cursor-pointer px-4 flex flex-col justify-between">
			<div className="p-5">
				<h2 className="font-dana-bold text-xl select-none">{title}</h2>
				<p className="font-dana-regular text-gray-400 tracking-tight">{text}</p>
			</div>
			<div className="relative w-4/10 min-h-16.5 py-4 mt-5 flex items-center justify-center services-img">
				<img className="z-50" src={src} alt="" />
			</div>
		</div>
	);
}
