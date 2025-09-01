import Link from "next/link";
import { LuPhoneCall } from "react-icons/lu";
import React from "react";
import Btn from "../Btn/Btn";
import Navlink from "../Navlink/Navlink";
import MobileMenu from "../MobileMenu/MobileMenu";
import OpenMobileMenu from "../MobileMenu/OpenMobileMenu";
export default function Header() {
	return (
		<>
			<header
				dir="rtl"
				className="w-9/10 bg-[#FFFFFF1A] backdrop-blur-lg py-1 px-4 mx-auto mt-5 rounded-lg absolute z-20 left-0 right-0"
			>
				<div className="flex items-center justify-between">
					{/* right header */}
					<div className="flex items-center gap-4">
						<OpenMobileMenu />
						<Link href="/">
							<img
								className="size-12 md:size-15"
								src="/image/logo.png"
								alt=""
							/>
						</Link>
						<Navlink />
					</div>

					{/* left header */}
					<div className="flex items-center gap-5">
						<div className="flex gap-2 text-white max-sm:text-sm">
							<span className="font-dana-medium"> 123456# - 035 </span>
							<LuPhoneCall />
						</div>
						<Btn
							text="درخواست مشاوه"
							className={"text-black bg-white max-lg:hidden"}
							link={"/contact-us"}
						/>
					</div>
				</div>
			</header>
			{/* mobile menu */}
			<MobileMenu />
		</>
	);
}
