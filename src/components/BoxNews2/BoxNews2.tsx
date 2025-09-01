import React from "react";

type Props = {
	src: string;
	title: string;
	text: string;
};

export default function BoxNews2({ src, title, text }: Props) {
	return (
		<div className="flex items-center md:min-h-45 rounded-lg bg-white overflow-hidden border-t-2 border-amber-400 hover:-translate-y-1 transition-transform ease-linear">
			<div className="w-full h-full">
				<img src={src} className="h-full w-full object-cover" alt="" />
			</div>
			<div className="p-2">
				<h2 className="font-dana-bold max-sm:text-xs mb-4">{title}</h2>
				<p className="font-dana-regular max-sm:text-xs text-sm text-gray-400">{text}</p>
			</div>
		</div>
	);
}
