import Link from "next/link";
import React from "react";
import { BsFacebook, BsWhatsapp, BsYoutube } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import { LuMapPin } from "react-icons/lu";
import {
	PiPhoneCall,
	PiWhatsappLogoLight,
	PiYoutubeLogoLight,
} from "react-icons/pi";
import { SlSocialFacebook } from "react-icons/sl";

export default function Footer() {
	const servicesMenu = [
		{ id: 1, title: "ساخت آپارتمان", href: "/" },
		{ id: 2, title: "ساخت ویلا", href: "/" },
		{ id: 3, title: "بازسازی منزل", href: "/" },
		{ id: 4, title: "طراحی دکوراسیون", href: "/" },
		{ id: 5, title: "ایمن سازی منزل", href: "/" },
	];
	return (
		<footer
			dir="rtl"
			className="bg-footer bg-zinc-950/90 bg-blend-darken text-white py-5 mt-5"
		>
			<div className="px-4">
				{/* top footer */}
				<div className="flex max-md:flex-col max-md:text-center items-center md:justify-between">
					{/* top right */}
					<div className="flex flex-col sm:flex-row items-center gap-4">
						<div className="flex *:-mx-1.5 *:hover:-translate-y-2 *:transition-transform *:duration-500 *:cursor-pointer *:ease-in-out *:z-0">
							<img src="/image/Male-2.png" alt="admin profile" />
							<img src="/image/Female-1.png" alt="admin profile" />
							<img src="/image/Male-1.png" alt="admin profile" />
						</div>
						<div className="max-sm:space-y-4">
							<h2 className="font-dana-bold max-sm:text-sm text-base">
								مشاورین ما آماده پاسخگویی به شما عزیزان هستند...
							</h2>
							<p className="font-dana-regular max-md:text-xs text-sm text-gray-400">
								شما میتوانید از طریق شماره تلفن روبرو با گروه ما تماس بگیرید و
								مشاوره رایگان دریافت کنید.
							</p>
						</div>
					</div>
					{/* top left */}
					<div className="mt-4">
						<h2 className="font-dana-bold max-lg:text-sm text-base">
							{" "}
							۱۲۳۴۵۶۷ - ۰۳۵{" "}
						</h2>
						<p className="font-dana-regular max-lg:text-xs text-sm text-gray-400">
							( هـمــه روزه ۸ تــا ۲۰ )
						</p>
					</div>
				</div>
				{/* main footer */}
				<div className="mt-5 flex max-md:flex-col items-start space-y-8 justify-between">
					{/* main right */}
					<div className="md:space-y-4 space-y-8 md:w-1/3">
						{/* title */}
						<div className="flex items-center gap-4 main-title-footer after:w-4/10 relative">
							<img src="/image/logo.png" alt="logo" className="size-15" />
							<div>
								<h2 className="font-dana-bold text-sm">گروه مهندسی ساختمان</h2>
								<p className="font-dana-regular text-sm text-gray-400">
									engineering group
								</p>
							</div>
						</div>
						{/* text */}
						<p className="font-dana-regular text-sm text-gray-400 tracking-wide mt-2">
							ما با استفاده از تکنولوژی های نوین و به روز، به طور مداوم در
							جستجوی روش های بهبود یافته برای ارائه بهترین کیفیت در پروژه های
							ساختمانی خود هستیم. هدف ما این است که و منحصر به فرد به مشتریان
							خود رضایت کامل بدهیم و با ارائه خدماتی بی نظیر و منحصر به فرد،
							برتری رقابتی خود را نشان دهیم.
						</p>
						<div className="mt-2">
							<h2 className="font-dana-bold">عضویت در خبرنامه</h2>
							<form className="flex gap-2 mt-2">
								<div className="bg-gray-50 w-2/3 py-1 rounded-lg text-gray-500 px-2 flex items-center">
									<input
										className="w-full h-full outline-0 border-0 font-dana-regular text-sm"
										type="email"
										placeholder="آدرس ایمیل"
										autoComplete="email"
									/>
								</div>
								<button
									className="py-1.5 px-4 bg-gray-700 rounded-lg text-sm font-dana-medium cursor-pointer hover:bg-gray-800 transition-colors"
									type="submit"
								>
									عضویت
								</button>
							</form>
						</div>
					</div>
					{/* main center */}
					<div className="md:w-1/3 flex flex-col items-center">
						<h2 className="font-dana-bold text-xl">
							<span className="text-amber-400">خدماتــــ</span>
							مجموعه
						</h2>
						<ul className="space-y-5 mt-5">
							{servicesMenu.map((link) => (
								<li
									key={link.id}
									className="list-disc text-sm font-dana-medium text-gray-400"
								>
									<Link className="hover:text-amber-300" href={link.href}>
										{link.title}
									</Link>
								</li>
							))}
						</ul>
					</div>
					{/* main left */}
					<div className="md:w-1/3">
						<h2 className="text-xl font-dana-bold">
							<span className="text-amber-400">راه هایـــ</span>ارتباطی
						</h2>
						<div className="mt-5 space-y-5">
							<div className="flex items-center gap-2">
								<IoMailOutline className="size-5" />
								<span className="font-light text-sm hover:text-amber-400 transition-colors">
									info@yoursite.com
								</span>
							</div>
							<div className="flex items-center gap-2">
								<PiPhoneCall className=" size-5" />
								<span className="font-dana-regular text-sm hover:text-amber-400 transition-colors">
									۰۳۱-۱۲۳۴۵۶۷ (همه روزه ۸ تا ۲۰)
								</span>
							</div>
							<div className="flex items-center gap-2">
								<LuMapPin className="size-5" />
								<span className="font-dana-regular text-sm hover:text-amber-400 transition-colors">
									شهر مهربانان (یزد) ، خیابان خوبان ، کوچه طراحان سایت
								</span>
							</div>
						</div>
					</div>
				</div>
				{/* copyright */}
				<div className="border-t border-gray-300 mt-5 pt-5 flex max-xs:flex-col justify-between items-center">
					<p className="text-xs sm:text-sm font-dana-medium">
						تمامی حقوق متعلق به سایت آماده شرکت ساختمانی می باشد.
					</p>
					<div className="flex gap-4 max-xs:mt-4">
						<Link href={"/"}>
							<PiWhatsappLogoLight className="sm:size-6" />
							{/* <BsYoutube className="sm:size-6" /> */}
						</Link>
						<Link href={"/"}>
							<PiYoutubeLogoLight className="sm:size-6" />
							{/* <BsWhatsapp className="sm:size-6" /> */}
						</Link>
						<Link href={"/"}>
							<SlSocialFacebook className="sm:size-6" />
							{/* <BsFacebook className="sm:size-6" /> */}
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
