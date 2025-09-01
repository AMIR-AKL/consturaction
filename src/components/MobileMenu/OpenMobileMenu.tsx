"use client";
import { useConstructionContext } from "@/context/constructionContext";
import React from "react";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";

export default function OpenMobileMenu() {
	const { openMenu, setOpenMenu } = useConstructionContext();
	return (
		<HiMiniBars3CenterLeft
			onClick={() => setOpenMenu(!openMenu)}
			className="text-white size-8 rotate-180 lg:hidden"
		/>
	);
}
