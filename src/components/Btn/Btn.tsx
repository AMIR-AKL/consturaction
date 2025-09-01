import Link from "next/link";
import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";

type Props = {
	className: string;
	text: string;
	link: string;
};

export default function Btn({ className, text, link }: Props) {
	return (
		<Link
			href={link}
			className={`flex items-end ${className} hover:bg-amber-400 transition-colors p-2 rounded-lg text-sm font-dana-medium`}
		>
			<span>{text}</span>
			<IoIosArrowRoundBack className="size-5" />
		</Link>
	);
}
