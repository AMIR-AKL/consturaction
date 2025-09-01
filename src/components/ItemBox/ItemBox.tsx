import React from "react";
import { BsJournalCheck } from "react-icons/bs";
import { PiHourglassSimpleLight } from "react-icons/pi";
import { TbCalendarCheck } from "react-icons/tb";
import { HiMiniUsers } from "react-icons/hi2";
export default function ItemBox(props: {
	className: string;
	count: string;
	title: string;
	text: string;
	icon: string;
}) {
	return (
		<div
			className={`py-2 px-4  border-gray-300 md:w-1/2 flex flex-col justify-around group cursor-pointer ${props.className}`}
		>
			<div className="flex items-center justify-between">
				<div>
					<h3 className="font-dana-bold text-2xl">{props.count}</h3>
					<h4 className="font-dana-medium tracking-tight">{props.title}</h4>
				</div>
				{props.icon === "check" && (
					<BsJournalCheck className="size-8 text-gray-400 group-hover:text-amber-300 transition-colors" />
				)}
				{props.icon === "hourglass" && (
					<PiHourglassSimpleLight className="size-8 text-gray-400 group-hover:text-amber-300 transition-colors" />
				)}
				{props.icon === "calender" && (
					<TbCalendarCheck className="size-8 text-gray-400 group-hover:text-amber-300 transition-colors" />
				)}
				{props.icon === "users" && (
					<HiMiniUsers className="size-8 text-gray-400 group-hover:text-amber-300 transition-colors" />
				)}
			</div>
			<p className="font-dana-medium text-sm tracking-tight">
				شرکت ما به طور مداوم در جستجوی روش های بهبود یافته برای ارائه بهترین
				کیفیت پروژه ها هستیم.
			</p>
		</div>
	);
}
