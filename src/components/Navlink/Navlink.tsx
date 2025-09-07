"use client";
import { useConstructionContext } from "@/context/constructionContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Navlink() {
	const pathName = usePathname();
	const {links} = useConstructionContext();
	return (
		<>
			<ul className="gap-4 hidden lg:flex">
				{links.map((link) => (
					<li
						key={link.id}
						className={`relative flex items-center text-base tracking-tight text-white font-dana-medium before:absolute before:-bottom-1 before:h-0.5 before:w-full before:bg-gray-500/60 before:scale-x-0 hover:before:scale-x-100 hover:before:bg-amber-300 before:ease-in-out before:duration-500 hover:before:origin-right before:origin-left before:transition-transform group pointer-events-auto ${
							pathName == link.href ? "before:scale-x-100" : ""
						}`}
					>
						<Link href={link.href}>{link.title}</Link>
						{link.title === "خدمات ما" && (
							<MdKeyboardArrowDown className="text-white size-5" />
						)}
						{link.title == "خدمات ما" && (
							<div className="absolute top-10 right-0 bg-white invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all ease-linear delay-300 text-black w-40 rounded-lg overflow-hidden text-center *:p-2 *:block *:hover:bg-amber-400 *:transition-colors">
								<Link href="/">ساخت آپارتمان</Link>
								<Link href="/">ساخت ویلا</Link>
								<Link href="/">دکوراسیون داخلی</Link>
								<Link href="/">بازسازی ساختمان</Link>
							</div>
						)}
					</li>
				))}
			</ul>
		</>
	);
}
