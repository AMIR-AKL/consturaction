import React from "react";
import Btn from "../Btn/Btn";
import BoxTeam from "../BoxTeam/BoxTeam";
import TitleElementor from "../TitleElementor/TitleElementor";
import TextBox from "../TextBox/TextBox";

export default function Team() {
	return (
		<section dir="rtl" className="mt-20 py-10 bg-team">
			<div className="container">
				<TitleElementor
					headtitle={"team"}
					maintitle={"تیم متخصص گروه مهندسی ما"}
				/>
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 p-5 mt-10">
					<BoxTeam
						src={"/image/team2.png"}
						name={"سبحان احمدی"}
						job={"مهندس ارشد معماری"}
					/>
					<BoxTeam
						src={"/image/team1.png"}
						name={"علیرضا بایرامی"}
						job={"مدیرعامل"}
					/>
					<BoxTeam
						src={"/image/team3.png"}
						name={"یاسین رضایی"}
						job={"مهندس ارشد نقشه کشی"}
					/>
					<BoxTeam
						src={"/image/team4.png"}
						name={"رضا احمدی"}
						job={"مهندس ارشد نقشه کشی"}
					/>
					<BoxTeam
						src={"/image/team5.png"}
						name={"بابک مطهری"}
						job={"مهندس ارشد معماری"}
					/>
				</div>
				<TextBox
					title={"مشاهده همه متخصصین گروه ما"}
					text={
						"شما میتوانید در صفحه درباره ما با گروه ما و متخصصین فعال ما بیشتر آشنا شوید."
					}
					link={"about-us"}
				/>
			</div>
		</section>
	);
}
