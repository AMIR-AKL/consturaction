import Image from "next/image";
import React from "react";

type TProjectBox = {
	title: string;
	text: string;
	city: string;
	year: string;
	src: string;
};

export default function Projectox({ title, text, city, year,src }: TProjectBox) {
	return (
		<div className="shadow rounded-lg overflow-hidden max-h-90">
			<div className="p-4 flex items-end justify-between border-b border-gray-300">
				<h3 className="font-dana-bold text-sm">{title}</h3>
				<p className="font-dana-medium text-sm">
					{city} | {year}
				</p>
			</div>
			<div className="p-4">
				<p className="text-sm font-dana-regular text-gray-400">{text}</p>
			</div>
			<div>
				<div>
					<a href="#" className="mask-t-from-24">
						<img
							src={src}
							alt="projects"
							className=" saturate-0 hover:saturate-150 transition-all"
						/>
					</a>
				</div>
			</div>
		</div>
	);
}
