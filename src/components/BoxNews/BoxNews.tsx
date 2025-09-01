import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { LuMessagesSquare } from "react-icons/lu";
import { MdCalendarMonth } from "react-icons/md";
import Date from "../Date/Date";

export default function BoxNews(props: {
	src: string;
	date: string;
	title: string;
	text: string;
}) {
	return (
		<div className="border border-gray-300 p-5 rounded-lg group cursor-pointer h-90">
			<div className="rounded-lg overflow-hidden relative max-h-45">
				<img
					src={props.src}
					alt=""
					className="group-hover:scale-110 object-cover w-full transition-transform ease-in-out"
				/>
				<div className=" absolute top-0 left-0 right-0 bottom-0 w-full h-full mx-auto flex items-center justify-center flex-col bg-zinc-900/50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
					<GoArrowLeft className="size-10" />
				</div>
			</div>
			<div className="text-sm font-dana-regular flex items-center gap-5 p-2">
				<Date date={props.date} />
				<p className="flex gap-1">
					<LuMessagesSquare className="size-4" />
					بدون دیدگاه
				</p>
			</div>
			<h2 className="font-dana-bold text-sm line-clamp-1">{props.title}</h2>
			<p className="text-sm font-dana-regular text-gray-400">{props.text}</p>
		</div>
	);
}
