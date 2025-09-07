"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css"; // استایل پایه

// در صورت نیاز، ماژول‌های اضافی
import "swiper/css/navigation";
import "swiper/css/pagination";
import Comments from "./Comments";

type PropCommentSlider = {
	data: {
		id: number;
		src: string;
		title: string;
		text: string;
		name: string;
		job: string;
	}[];
};

export default function CommentsSlider({ data }: PropCommentSlider) {
	return (
		<div className="mt-10">
			<Swiper
				modules={[Navigation, Pagination, Autoplay]}
				navigation
				// pagination={{ clickable: true }}
				breakpoints={{
					0: { slidesPerView: 1 },
					1040: { slidesPerView: 2 },
				}}
				// slidesPerView={2}
				autoplay={{
					delay: 5000,
				}}
				className="mySwiper"
			>
				{data.map((comment) => (
					<SwiperSlide key={comment.id} className="p-2">
						<Comments comment={comment} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
