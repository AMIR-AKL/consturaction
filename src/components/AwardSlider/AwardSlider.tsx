"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css"; // استایل پایه

// در صورت نیاز، ماژول‌های اضافی
import "swiper/css/navigation";
import "swiper/css/pagination";
export default function AwardSlider() {
	return (
		<div className="mt-10">
			<Swiper
				modules={[Navigation, Pagination, Autoplay]}
				navigation
				// pagination={{ clickable: true }}
				slidesPerView={1}
				loop={true}
				autoplay={{
					delay: 5000,
				}}
				className="mySwiper"
			>
				<SwiperSlide className="p-2">
					<div className="p-2 flex items-center justify-between bg-white border border-gray-300 rounded-lg">
						<div className="border-2 border-gray-300  overflow-hidden rounded-lg">
							<img
								className="size-full opacity-80"
								src="/image/Rectangle.png"
								alt=""
							/>
						</div>
						<div className="max-w-2xl space-y-4 px-4">
							<h3 className="text-gray-500 max-sm:text-sm">IMI AWARD | 1397</h3>
							<h2 className="font-dana-bold text-lg text-gray-700 max-sm:text-sm">
								شرکت برتر در حوزه ساختمان در سال97
							</h2>
							<p className="font-dana-regular tracking-tighter text-gray-400 max-sm:text-sm">
								ما در طول سال ها توانسته ایم با پروژه های متعدد و متنوع، اعتماد
								و رضایت مشتریان خود را بدست آوریم. از ساختمان های مسکونی تا
								پروژه های عمومی و صنعتی.
							</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="p-2">
					<div className="p-2 flex items-center justify-between bg-white border border-gray-300 rounded-lg">
						<div className="border-2 border-gray-300 overflow-hidden rounded-lg">
							<img
								className="size-full opacity-80"
								src="/image/Certificate1.webp"
								alt=""
							/>
						</div>
						<div className="max-w-2xl space-y-4 px-4">
							<h3 className="text-gray-500 max-sm:text-sm">IMI AWARD | 1397</h3>
							<h2 className="font-dana-bold text-lg text-gray-700 max-sm:text-sm">
								شرکت برتر در حوزه ساختمان در سال97
							</h2>
							<p className="font-dana-regular tracking-tighter text-gray-400 max-sm:text-sm">
								ما در طول سال ها توانسته ایم با پروژه های متعدد و متنوع، اعتماد
								و رضایت مشتریان خود را بدست آوریم. از ساختمان های مسکونی تا
								پروژه های عمومی و صنعتی.
							</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="p-2">
					<div className="p-2 flex items-center justify-between bg-white border border-gray-300 rounded-lg">
						<div className="border-2 border-gray-300 overflow-hidden rounded-lg">
							<img
								className="size-full opacity-80"
								src="/image/Certificate2.webp"
								alt=""
							/>
						</div>
						<div className="max-w-2xl space-y-4 px-4">
							<h3 className="text-gray-500 max-sm:text-sm">IMI AWARD | 1397</h3>
							<h2 className="font-dana-bold text-lg text-gray-700 max-sm:text-sm">
								شرکت برتر در حوزه ساختمان در سال97
							</h2>
							<p className="font-dana-regular tracking-tighter text-gray-400 max-sm:text-sm">
								ما در طول سال ها توانسته ایم با پروژه های متعدد و متنوع، اعتماد
								و رضایت مشتریان خود را بدست آوریم. از ساختمان های مسکونی تا
								پروژه های عمومی و صنعتی.
							</p>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
}
