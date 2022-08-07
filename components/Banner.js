import Image from "next/image";

function Banner() {
	return (
		<div className="relative sm:h-[400px] lg:h-[500px] xl: h-[700px]">
			<Image className="brightness-50" src="/banner.jpg" layout="fill" objectFit="cover" />
			<div className="absolute top-1/2 w-full text-center">
				<p className="text-4xl text-white font-bold">어떤 노래를 검색해야할지 모르겠나요?</p>
				<button className="text-orange-400 bg-white px-10 py-4 shadow-md rounded-lg font-bold my-5 hover:scale-105 active:scale-90">
					우리가 추천해줄게요
				</button>
			</div>
		</div>
	);
}

export default Banner;
