"use client";

import React, { createContext, useContext, useState } from "react";

const constructionContext = createContext({} as TConstructionContext);

export const useConstructionContext = () => {
	return useContext(constructionContext);
};

type OpenMenu = boolean;
type Links = {
	id: number;
	title: string;
	href: string;
};

type TConstructionContext = {
	openMenu: OpenMenu;
	setOpenMenu: React.Dispatch<React.SetStateAction<OpenMenu>>;
	links: Links[];
};

export default function ConstructionContextProvider({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	const links = [
		{ id: 1, title: "صفحه اصلی", href: "/" },
		{ id: 2, title: "خدمات ما", href: "/services" },
		{ id: 3, title: "پروژه ها", href: "/projects" },
		{ id: 4, title: "وبلاگ", href: "/blog" },
		{ id: 5, title: "گالری", href: "/gallery" },
		{ id: 6, title: "درباره ما", href: "/about-us" },
		{ id: 7, title: "تماس با ما", href: "/contact-us" },
	];
	const [openMenu, setOpenMenu] = useState<OpenMenu>(false);

	return (
		<constructionContext.Provider value={{ links, openMenu, setOpenMenu }}>
			{children}
		</constructionContext.Provider>
	);
}
