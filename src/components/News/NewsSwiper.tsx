"use client";
import React from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css"; // استایل پایه

// در صورت نیاز، ماژول‌های اضافی
import "swiper/css/navigation";
import "swiper/css/pagination";
import BoxNews from "../BoxNews/BoxNews";
export default function NewsSwiper() {
	return (
		<>
			<Swiper
				modules={[Pagination]}
				pagination={{ clickable: true }}
				breakpoints={{
					0: {
						slidesPerView: 1,
					},
					480: {
						slidesPerView: 2,
						spaceBetween: 10,
					},
					780: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
				}}
				loop={true}
				// autoplay={{
				// 	delay: 5000,
				// }}
				className="mySwiper"
			>
				<SwiperSlide className="p-2">
					<BoxNews
						src={"/image/Blog1.webp"}
						date={"۵ شهریور ۱۴۰۴"}
						title={"بتن اکسپوز چیست و مشخصات فنی آن کدامند؟"}
						text={`افراد به دلایل متعددی تصمیم به فروش ملک خود می‌گیرند. این دلایل هر چه که باشند، هنگامی که خانه را برای فروش...`}
					/>
				</SwiperSlide>
				<SwiperSlide className="p-2">
					<BoxNews
						src={"/image/Blog.webp"}
						date={"۱۸ تیر ۱۴۰۳"}
						title={"توجه به ایده تی وی وال در دکوراسیون خانه"}
						text={`افراد به دلایل متعددی تصمیم به فروش ملک خود می‌گیرند. این دلایل هر چه که
				باشند، هنگامی که خانه را برای فروش...`}
					/>
				</SwiperSlide>
				<SwiperSlide className="p-2">
					<BoxNews
						src={"/image/Blog2.webp"}
						date={"۸ دی ۱۴۰۴"}
						title={"دلایل و علت نم دیوار چیست؟"}
						text={`افراد به دلایل متعددی تصمیم به فروش ملک خود می‌گیرند. این دلایل هر چه که
				باشند، هنگامی که خانه را برای فروش...`}
					/>
				</SwiperSlide>
			</Swiper>
		</>
	);
}
