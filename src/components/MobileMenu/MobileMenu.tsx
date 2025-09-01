"use client";
import { useConstructionContext } from "@/context/constructionContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { HiXMark } from "react-icons/hi2";
import { IoSearchSharp } from "react-icons/io5";

export default function MobileMenu() {
	const pathName = usePathname();
	const { links, openMenu, setOpenMenu } = useConstructionContext();

	return (
		<>
			<div
				dir="rtl"
				className={`w-3/4 py-5 px-2 bg-secondary fixed top-0 bottom-0 h-full z-80 transition-all duration-500 ease-linear ${
					openMenu ? "right-0" : "-right-full"
				}`}
			>
				<div className=" absolute -left-8 top-2">
					<HiXMark
						onClick={() => setOpenMenu(!openMenu)}
						className="size-6 text-amber-400"
					/>
				</div>
				{/* haed */}
				<div className="flex items-center gap-4 main-title-footer relative after:w-20">
					<img src="/image/logo.png" alt="logo" className="size-12" />
					<div>
						<h2 className="font-dana-bold text-sm text-white">
							گروه مهندسی ساختمان
						</h2>
						<p className="font-dana-regular text-sm text-gray-400">
							engineering group
						</p>
					</div>
				</div>
				{/* search */}
				<div className="flex items-center h-10 mt-5">
					<div className="bg-gray-100 px-2 py-1 h-full rounded-r-lg w-full">
						<input
							type="search"
							placeholder="جستجو..."
							className="outline-none border-none w-full h-full font-dana-regular text-sm"
						/>
					</div>
					<div className="bg-amber-400 py-1 px-4 h-full flex items-center justify-center rounded-l-lg">
						<IoSearchSharp className="size-5 text-white" />
					</div>
				</div>
				{/* links */}
				<ul className="space-y-5 mt-5 *:p-2 *:rounded-t-lg">
					{links.map((link) => (
						<li
							className={`${
								pathName == link.href ? "bg-amber-300 !text-black" : ""
							}  text-white`}
							key={link.id}
						>
							<Link className="inline-block w-full" href={link.href}>
								{link.title}
							</Link>
						</li>
					))}
				</ul>
			</div>
			<div
				className={`absolute left-0 top-0 h-full w-full bg-zinc-950/60 z-50 backdrop-blur-xs transition-all ${
					openMenu ? "block" : "hidden"
				}`}
			></div>
		</>
	);
}
