import Link from "next/link";
import React from "react";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import BoxServices from "../BoxServices/BoxServices";
import TitleElementor from "../TitleElementor/TitleElementor";

type PropsServices = {
	linkItem: boolean;
	data: {
		id: number;
		title: string;
		text: string;
		src: string;
	}[];
};

export default function Services({ linkItem, data }: PropsServices) {
	return (
		<section dir="rtl" className="mt-20 py-5 container">
			<TitleElementor
				headtitle="services"
				maintitle="خدمات گروه مهندسی ما"
				bottomtitle="با هدف جلب رضایت مشتریان"
			/>
			<div className="grid md:grid-cols-3 mt-10">
				{data.map((box) => (
					<BoxServices
						key={box.id}
						title={box.title}
						text={box.text}
						src={box.src}
					/>
				))}
				{/* <BoxServices
					title="ساخت آپارتمان"
					text="ما با استفاده از تکنولوژی های نوین و به روز، به طور مداوم در جستجوی روش های بهبود یافته است."
					src="https://a.meharat.com/constructionco-ml/wp-content/uploads/2023/08/Vector-1.svg"
				/>
				<BoxServices
					title="ساخت آپارتمان"
					text="ما با استفاده از تکنولوژی های نوین و به روز، به طور مداوم در جستجوی روش های بهبود یافته است."
					src="https://a.meharat.com/constructionco-ml/wp-content/uploads/2023/08/iconscout-8804622.svg"
				/>
				<BoxServices
					title="ساخت آپارتمان"
					text="ما با استفاده از تکنولوژی های نوین و به روز، به طور مداوم در جستجوی روش های بهبود یافته است."
					src="https://a.meharat.com/constructionco-ml/wp-content/uploads/2023/08/iconscout-3418222.svg"
				/>
				<BoxServices
					title="ساخت آپارتمان"
					text="ما با استفاده از تکنولوژی های نوین و به روز، به طور مداوم در جستجوی روش های بهبود یافته است."
					src="https://a.meharat.com/constructionco-ml/wp-content/uploads/2023/08/iconscout-19.svg"
				/> */}
				{linkItem && (
					<div className="flex items-center justify-center font-dana-bold max-md:mt-5">
						<Link
							href={"/"}
							className="tracking-tighter flex items-center gap-x-2 group hover:gap-x-3 transition-all"
						>
							مشاهده همه خدمات
							<div className="size-6 bg-amber-400 flex items-center justify-center rounded-full group-hover:rotate-360 transition-all duration-1000">
								<MdKeyboardDoubleArrowLeft />
							</div>
						</Link>
					</div>
				)}
			</div>
		</section>
	);
}
