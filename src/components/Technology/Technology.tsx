import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import TitleElementor from "../TitleElementor/TitleElementor";
import { IoPlayOutline } from "react-icons/io5";
import Image from "next/image";

export default function Technology() {
	const features = [
		{ id: 1, title: "خدماتی بی نظیر و منحصر" },
		{ id: 2, title: "برتری رقابتی نسبت به سایرین" },
		{ id: 3, title: "بهترین روش های بهبود یافته" },
		{ id: 4, title: "بهترین کیفیت در پروژه ها" },
		{ id: 5, title: "رضایت کامل مشتریان" },
		{ id: 6, title: "تکنولوژی های نوین و به روز" },
	];
	return (
		<section dir="rtl" className="mt-50">
			<div className="container">
				{/* head title */}
				<TitleElementor
					headtitle={"Secure"}
					maintitle={"استفاده از تکنولوژی های نوین"}
					bottomtitle={"ساخت و ساز مطمئن و ایمن"}
				/>
				{/* content */}
				<div className="flex max-md:flex-col justify-between max-md:mt-10">
					{/* right */}
					<div className="md:w-1/2 max-md:order-2 mt-10">
						<div>
							<h3 className="font-dana-bold tracking-tight text-xl">
								ارائه بهترین کیفیت
							</h3>
							<p className="font-dana-medium max-sm:text-xs text-sm text-gray-400 mt-5">
								ما با استفاده از تکنولوژی های نوین و به روز، به طور مداوم در
								جستجوی روش های بهبود یافته برای ارائه بهترین کیفیت در پروژه های
								ساختمانی خود هستیم. هدف ما این است که به مشتریان خود رضایت کامل
								بدهیم و با ارائه خدماتی بی نظیر و منحصر به فرد، برتری رقابتی خود
								را نشان دهیم.
							</p>
						</div>
						<div className="mt-5">
							<h3 className="font-dana-bold text-xl tracking-tight">
								ویژگی متخصصین ما
							</h3>
							<div className="grid grid-cols-2 space-y-2 *:flex *:items-end *:gap-1 mt-5 *:font-dana-medium *:tracking-tight">
								{features.map((feature) => (
									<div key={feature.id}>
										<IoMdCheckmark className="text-amber-400 size-5" />
										<p className="max-sm:text-xs">{feature.title}</p>
									</div>
								))}
							</div>
						</div>
					</div>
					{/* left */}
					<div className="relative video-container after:max-md:!h-12/10 after:max-lg:!h-9/10 flex flex-col items-center justify-center mt-10 max-md:order-1">
						<div className="relative">
							<div className=" absolute left-0 right-0 w-full h-full flex flex-col items-center justify-center gap-2">
								<div className="size-15 border-2 border-white rounded-full flex items-center justify-center">
									<IoPlayOutline className="size-6 text-white" />
								</div>
								<div className="text-white font-dana-medium">
									<span>معرفی مجموعه</span>
								</div>
							</div>
							<div>
								<Image
									src={"/image/t-video.webp"}
									width={500}
									height={500}
									alt="technology"
									className="rounded-lg"
								/>
								{/* <img className="" src="/image/t-video.webp" alt="" /> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
